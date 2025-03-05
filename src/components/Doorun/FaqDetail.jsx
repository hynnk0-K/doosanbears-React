import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config/constants";

const FaqDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [faq, setFaq] = useState(null);
  const [faqData, setFaqDate] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/posts`).then((response) => {
      setFaqDate(response.data.posts);
      const currentFaq = response.data.posts.find(
        (item) => item.id === parseInt(id)
      );
      setFaq(currentFaq); // 현재 FAQ 데이터
    });
  }, [id]);

  if (!faq) {
    return <div>해당 게시글을 찾을 수 없습니다.</div>;
  }

  // 이전 FAQ와 다음 FAQ 찾기
  const faqIndex = faqData.findIndex((item) => item.id === parseInt(id));
  const prevFaq = faqIndex > 0 ? faqData[faqIndex - 1] : null;
  const nextFaq = faqIndex < faqData.length - 1 ? faqData[faqIndex + 1] : null;

  // 날짜 포맷팅 함수
  const formatDate = (dateString) => {
    const date = new Date(dateString); // Date 객체로 변환
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`; // 원하는 형식으로 리턴
  };

  const handleBack = () => {
    navigate("/doorundoorun/faq");
  };
  return (
    <section class="faq_detail">
      <h2 class="hide">두런두런 팬 소식 상세페이지</h2>
      <div className="list_view" key={faq.id}>
        <div className="top">
          <div className="inner layout_fix">
            <div className="txt_area">
              <p className="tit">{faq.title}</p>
              <div className="user_date">
                {faq.user_id}
                <div className="date" style={{ float: "right" }}>
                  {formatDate(faq.createdAt)}
                </div>
              </div>
            </div>
            <button type="button" className="btn_back" onClick={handleBack}>
              목록
            </button>
          </div>
        </div>
        <div className="bottom layout_fix">
          <div className="inner">
            {faq.img && (
              <p>
                <img
                  src={`${process.env.PUBLIC_URL}/${faq.img}`}
                  alt={faq.title}
                />
              </p>
            )}
          </div>
          <div className="inner_text">
            {faq.contents.split(/\n{2}/).map((content, pIndex) => (
              <p key={pIndex}>
                {content.split("\n").map((line, idx) => (
                  <p key={idx}>
                    {line}
                    <br />
                  </p>
                ))}
                <br />
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="post_nav">
        {prevFaq ? (
          <div className="prev">
            <button>prev</button>
            <span>이전글</span>
            <div className="prev_tit">
              <button
                onClick={() => navigate(`/doorundoorun/faq/${prevFaq.id}`)}
              >
                {prevFaq.title}
              </button>
            </div>
          </div>
        ) : (
          <div className="prev" style={{ display: "none" }}></div>
        )}

        {nextFaq ? (
          <div className="next">
            <button>next</button>
            <span>다음글</span>
            <div className="next_tit">
              <button
                onClick={() => navigate(`/doorundoorun/faq/${nextFaq.id}`)}
              >
                {nextFaq.title}
              </button>
            </div>
          </div>
        ) : (
          <div className="next" style={{ display: "none" }}></div>
        )}
      </div>
    </section>
  );
};

export default FaqDetail;
