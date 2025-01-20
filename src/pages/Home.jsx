import React from "react";
import "../scss/Home.scss";
import HomeVideo from "../components/HomeVideo.jsx";
import HomeSns from "../components/HomeSns.jsx";
import HomeBearsVideo from "../components/HomeBearsVideo.jsx";
import { Link } from "react-router-dom";
import HomeEvents from "../components/HomeEvents.jsx";
import HomeGallery from "../components/HomeGallery.jsx";

const Home = () => {

  return (
    <>
      <div className="homeContainer">
        <div className="homeVideoBackground"></div>
        <HomeSns />
        <HomeVideo />
      </div>
      <div className="home_score_schedule layout_fix">
        <div className="score inner_layout">
          <ul className="scoreList">
            <li className="red">
              <p>순위</p>
              <span>3</span>
            </li>
            <li className="lightNavy">
              <p>경기</p>
              <span>132</span>
            </li>
            <li className="lightNavy">
              <p>승</p>
              <span>65</span>
            </li>
            <li className="lightNavy">
              <p>패</p>
              <span>65</span>
            </li>
            <li className="lightNavy">
              <p>무</p>
              <span>2</span>
            </li>
          </ul>
        </div>
        <div className="schedule inner_layout">
          <h2 className="title">주간 경기 일정</h2>
          <div className="weekly_schedule">
            <p>UPCOMING!</p>
            <ul>
              <li className="weekly_schedule_content lightNavy">
                <div className="red active"></div>
                <div className="weekly_schedule_content_text">
                  <p className="place">인천</p>
                  <h4 className="font_red">2025.03.22(토) 14:00</h4>
                  <p className="ticket">경기전</p>
                </div>
                <div className="weekly_schedule_content_img">
                  <img
                    src={process.env.PUBLIC_URL + "./images/logo_Doosan.png"}
                    alt="doosanLogo"
                  />
                  <p>vs</p>
                  <img
                    src={process.env.PUBLIC_URL + "./images/logo_SSG.png"}
                    alt="ssgLogo"
                  />
                </div>
              </li>
              <li className="weekly_schedule_content lightNavy">
                <div className="red active"></div>
                <div className="weekly_schedule_content_text">
                  <p className="place">인천</p>
                  <h4 className="font_red">2025.03.23(일) 14:00</h4>
                  <p className="ticket">경기전</p>
                </div>
                <div className="weekly_schedule_content_img">
                  <img
                    src={process.env.PUBLIC_URL + "./images/logo_Doosan.png"}
                    alt="doosanLogo"
                  />
                  <p>vs</p>
                  <img
                    src={process.env.PUBLIC_URL + "./images/logo_SSG.png"}
                    alt="ssgLogo"
                  />
                </div>
              </li>
              <li className="weekly_schedule_content lightNavy">
                <div className="red active"></div>
                <div className="weekly_schedule_content_text">
                  <p className="place">수원</p>
                  <h4 className="font_red">2025.03.25(화) 18:30</h4>
                  <p className="ticket">경기전</p>
                </div>
                <div className="weekly_schedule_content_img">
                  <img
                    src={process.env.PUBLIC_URL + "./images/logo_Doosan.png"}
                    alt="doosanLogo"
                  />
                  <p>vs</p>
                  <img
                    src={process.env.PUBLIC_URL + "./images/logo_KT.png"}
                    alt="ktLogo"
                  />
                </div>
              </li>
              <li className="weekly_schedule_content lightNavy">
                <div className="red active"></div>
                <div className="weekly_schedule_content_text">
                  <p className="place">수원</p>
                  <h4 className="font_red">2025.03.26(수) 18:30</h4>
                  <p className="ticket">경기전</p>
                </div>
                <div className="weekly_schedule_content_img">
                  <img
                    src={process.env.PUBLIC_URL + "./images/logo_Doosan.png"}
                    alt="doosanLogo"
                  />
                  <p>vs</p>
                  <img
                    src={process.env.PUBLIC_URL + "./images/logo_KT.png"}
                    alt="ktLogo"
                  />
                </div>
              </li>
              <li className="weekly_schedule_content lightNavy">
                <div className="red active"></div>
                <div className="weekly_schedule_content_text">
                  <p className="place">수원</p>
                  <h4 className="font_red">2025.03.27(목) 18:30</h4>
                  <p className="ticket">경기전</p>
                </div>
                <div className="weekly_schedule_content_img">
                  <img
                    src={process.env.PUBLIC_URL + "./images/logo_Doosan.png"}
                    alt="doosanLogo"
                  />
                  <p>vs</p>
                  <img
                    src={process.env.PUBLIC_URL + "./images/logo_KT.png"}
                    alt="ktLogo"
                  />
                </div>
              </li>
              <li className="weekly_schedule_content lightNavy">
                <div className="red active"></div>
                <div className="weekly_schedule_content_text">
                  <p className="place">잠실</p>
                  <h4 className="font_red">2025.03.28(금) 18:30</h4>
                  <p className="ticket">경기전</p>
                </div>
                <div className="weekly_schedule_content_img">
                  <img
                    src={process.env.PUBLIC_URL + "./images/logo_Doosan.png"}
                    alt="doosanLogo"
                  />
                  <p>vs</p>
                  <img
                    src={process.env.PUBLIC_URL + "./images/logo_Samsung.png"}
                    alt="samsungLogo"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="home_BearsTV">
        <div className="layout_fix">
          <div className="heading">
            <h2 className="title">BEARS TV</h2>
            <Link to="https://www.youtube.com/@bearstv1982/videos">더보기</Link>
          </div>
        </div>
        <HomeBearsVideo />
      </div>
      <div className="home_Events">
        <div className="layout_fix">
          <div className="heading">
            <h2 className="title">이벤트</h2>
            <Link to="/events">더보기</Link>
          </div>
          <HomeEvents />
        </div>
      </div>
      <div className="home_Gallery">
        <div className="layout_fix">
          <div className="heading">
            <h2 className="title">갤러리</h2>
            <Link to="/gallery">더보기</Link>
          </div>
          <HomeGallery />
        </div>
      </div>
    </>
  );
};

export default Home;
