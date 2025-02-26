import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAccessToken } from "../components/AccessTokenContext";
import axios from "axios";
import { API_URL } from "../config/constants.js";
import "../scss/Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setAccessToken } = useAccessToken();
  const [userId, setUserId] = useState("");
  const [pw, setPw] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post(`${API_URL}/users/login`, {
        user_id: userId,
        pw: pw,
      });

      if (result.data.user === userId && result.data.accessToken) {
        alert("로그인이 성공했습니다.");
        // accessToken을 Context와 localStorage에 저장
        setAccessToken(result.data.accessToken);
        localStorage.setItem("accessToken", result.data.accessToken);

        navigate("/"); // 메인 화면으로 이동
      } else {
        alert("로그인 정보를 다시 확인해주세요");
      }
    } catch (err) {
      console.error("Login failed", err);
      alert("로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }

    fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId, pw }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken); // 토큰 저장
          window.location.reload(); // 새로고침하여 로그인 상태 반영
        } else {
          alert("로그인 실패: " + data.message);
        }
      })
      .catch((err) => console.error("로그인 중 오류 발생:", err));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login">
      <div className="layout_fix">
        <div className="signUp_layout">
          <div className="heading_up">
            <h2 className="title_up">로그인</h2>
          </div>
          <div className="login_box">
            <form onSubmit={onSubmit} onFinishFailed={onFinishFailed}>
              <div class="input_form">
                <div class="input_wrap ">
                  <div class="input">
                    {/* <label htmlFor="id" >아이디</label> */}
                    <input
                      id="user_id"
                      name="user_id"
                      placeholder="아이디를 입력해 주세요."
                      type="text"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div class="input_wrap mt_14 ">
                  <div class="input">
                    {/* <label htmlFor="pw">비밀번호</label> */}
                    <input
                      id="pw"
                      name="pw"
                      placeholder="비밀번호를 입력해 주세요."
                      type="password"
                      value={pw}
                      onChange={(e) => setPw(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div class="btn_wrap mt_37">
                  <button
                    type="submit"
                    class="btn_bg bg_primary xlarge btn_bg bg_primary"
                    disabled={!userId || !pw}
                  >
                    로그인
                  </button>
                </div>
                <ul class="divided_list mt_30">
                  <li>
                    <Link to="/signup">
                      <button type="button">회원가입</button>
                    </Link>
                  </li>
                  <li>
                    <button type="button">아이디 찾기</button>
                  </li>
                  <li>
                    <button type="button">비밀번호 찾기</button>
                  </li>
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
