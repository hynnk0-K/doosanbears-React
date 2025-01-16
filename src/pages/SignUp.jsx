import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";

import '../scss/Login.scss'


const SignUp = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  useEffect(() => {
    // Navbar의 높이를 동적으로 계산
    const navbar = document.querySelector("#container");
    setNavbarHeight(navbar ? navbar.offsetHeight : 0);
  }, []);

  return (
    <div className="signup" style={{ paddingTop: navbarHeight }}>
      <div className="layout_fix">
        <div className="signUp_layout">
          <div className="heading_up">
            <h2 className="title_up">회원가입</h2>
            <p className="sub">Doosan Bears 회원가입</p>
            <span className="mini">
              한국 최고의 프로야구단 베어스의 회원으로 가입하시면 재미있고 다양한 혜택을 누릴 수 있습니다.<br />
              지금 두산베어스의 최강 10번타자가 되어보세요!
            </span>
          </div>
          <div className="subscription">
            <p className="title">홈페이지 무료회원 가입안내</p>
            <div className="sub_section line_box">
              <ul>
                <li>
                  <strong>가입 시기</strong>
                  <span>온라인 연중 모집</span>
                </li>
                <li>
                  <strong>혜택</strong>
                  <span>홈페이지 이용(홈페이지 회원은 유료회원과 다르게 입장권 및 상품할인 혜택이 없습니다. 회원카드 발급 불가)</span>
                </li>
              </ul>
            </div>
            <p className="info_txt mt_16">
              <span>*홈페이지 무료회원도 유료회원으로 전환 가능</span>
              <span>*로그인을 1년동안 1회 이상 이용하지 않은 회원은 자동 삭제 처리</span>
            </p>
          </div>
          <div className="page_btn_wrap mt_80">
            <Link to="/signup/stepcheck?step=0">
              <button className="submit_style btn_join lightNavy" type="button">다음</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
