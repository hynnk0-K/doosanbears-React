import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useAccessToken } from "../components/AccessTokenContext";
import axios from "axios";
import { API_URL } from "../config/constants.js";
import '../scss/Login.scss';

const Login = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  useEffect(() => {
    // Navbar의 높이를 동적으로 계산
    const navbar = document.querySelector("#container");
    setNavbarHeight(navbar ? navbar.offsetHeight : 0);
  }, []);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setAccessToken } = useAccessToken();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const result = await axios.post(`${API_URL}/users/login`, {
        user_id: values.user_id,
        pw: values.password,
      });

      if (result.data.user === values.user_id && result.data.accessToken) {
        alert("로그인이 성공했습니다.");
        // accessToken을 Context와 localStorage에 저장
        setAccessToken(result.data.accessToken);
        localStorage.setItem('accessToken', result.data.accessToken);

        navigate('/'); // 메인 화면으로 이동
      } else {
        alert("로그인 정보를 다시 확인해주세요");
      }
    } catch (error) {
      console.error("Login failed", error);
      alert("로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login" style={{ paddingTop: navbarHeight }}>
      <div className="layout_fix">
        <div className="signUp_layout">
          <div className="heading_up">
            <h2 className="title_up">로그인</h2>
            <p className="sub">Doosan Bears 로그인</p>
          </div>
           <div className="login_box">
            <form onSubmit={onFinish} onFinishFailed={onFinishFailed}>
              <div className="input-form">
                <div className="input-wrap">
                  <div className="input">
                    <input
                      id="id"
                      placeholder="아이디를 입력해 주세요."
                      type="text"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)} // 상태 변경
                    />
                    <label htmlFor="id">아이디</label>
                  </div>
                </div>
                <div className="input-wrap mt-14">
                  <div className="input">
                    <input
                      id="pw"
                      placeholder="비밀번호를 입력해 주세요."
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} // 상태 변경
                    />
                  </div>
                </div>
                <div className="btn-wrap mt-37">
                  <button
                    type="submit"
                    className="btn-bg bg-primary xlarge"
                    disabled={!userId || !password} // 아이디와 비밀번호 입력 필수
                  >
                    로그인
                  </button>
                </div>
                <ul className="divided-list mt-30">
                  <li><button type="button">회원가입</button></li>
                  <li><button type="button">아이디 찾기</button></li>
                  <li><button type="button">비밀번호 찾기</button></li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;