import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Input, InputNumber, Upload } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import { API_URL } from "../../config/constants";
import { replace, useNavigate } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import { useAccessToken } from "../../components/AccessTokenContext"; // 토큰 관리 Context

import "../../scss/Doorun.scss";
import { message } from "antd";

const FaqWrite = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [userId, setUserId] = useState("");
  const navigate = useNavigate;
  const { accessToken, user_id } = useAccessToken();

  const onFinish = (val) => {
    axios
      .post(`${API_URL}/posts`, {
        title: val.title,
        user: user_id,
        contents: val.contents,
        img: imageUrl,
      })
      .then((result) => {
        navigate("/doorundoorun/faq", { replace: true });
      })
      .catch((err) => {
        console.error(err);
        message.error("에러가 발생했습니다.");
      });
  };

  const onChangeImage = (info) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      setImageUrl(imageUrl);
    }
  };
  return (
    <section className="faq_write">
      <div className="layout_fix">
        <div className="heading">
          <h1 className="tit">게시글 작성</h1>
        </div>
        <Form name="basic" onFinish={onFinish} className="contents_container">
          <Form.Item
            name="tit" className="conts_tit"
            label={<span className="tit" valuePropName="title">제목</span>}
            rules={[{required: true, message: "제목은 필수 입력사항입니다."}]}
          >
            <Input type="text" className="tit_cont" placeholder="게시글 제목을 입력해주세요" size="large"/>
          </Form.Item>
          <Divider />
          <Form.Item 
            name="content"
            className="content"
            label={<span className="tit">내용</span>}
            rules={[{required: true, message: "게시글 내용은 필수 입력사항입니다."}]}
          >
            <TextArea showCount maxLength={600} style={{ height: 350, resize: 'none' }} className="content_text" placeholder="게시글 내용을 입력해주세요"/>
          </Form.Item>
          <Divider />
          <Form.Item name="files" className="content_img" valuePropName="image" label={<span className="tit">이미지</span>}>
            <Upload name="image" action={`${API_URL}/image`}
              className="cont_img"
              listType="picture" showUploadList={false}
              onChange={onChangeImage}>
              <Button style={{color: "#000"}} icon={<UploadOutlined />}>이미지를 업로드해주세요</Button>
            </Upload>
          </Form.Item>
          <Form.Item label={null}>
            <Button htmlType="submit" id="submit_button" className="submit_btn write_btn btn_bg bg_primary xlarge">
              게시글 등록하기
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default FaqWrite;
