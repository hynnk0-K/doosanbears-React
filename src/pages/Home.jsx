import React from "react";
import "../scss/Home.scss";
import HomeVideo from "../components/HomeVideo.jsx";
import HomeSns from "../components/HomeSns.jsx";
import HomeBearsVideo from "../components/HomeBearsVideo.jsx";
import { Link } from "react-router-dom";

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
                  <p className="place">고척</p>
                  <h4 className="font_red">2024.09.10(화) 18:30</h4>
                  <p className="ticket">예매중</p>
                </div>
                <div className="weekly_schedule_content_img">
                  <img
                    src={process.env.PUBLIC_URL + "./images/logo_Doosan.png"}
                    alt="doosanLogo"
                  />
                  <p>vs</p>
                  <img
                    src={process.env.PUBLIC_URL + "./images/logo_NC.png"}
                    alt="ncLogo"
                  />
                </div>
              </li>
              <li className="weekly_schedule_content lightNavy">
                <div className="red active"></div>
                <div className="weekly_schedule_content_text">
                  <p className="place">고척</p>
                  <h4 className="font_red">2024.09.10(화) 18:30</h4>
                  <p className="ticket">예매중</p>
                </div>
                <div className="weekly_schedule_content_img">
                  <img
                    src={process.env.PUBLIC_URL + "./images/logo_Doosan.png"}
                    alt="doosanLogo"
                  />
                  <p>vs</p>
                  <img
                    src={process.env.PUBLIC_URL + "./images/logo_NC.png"}
                    alt="ncLogo"
                  />
                </div>
              </li>
              <li className="weekly_schedule_content lightNavy">
                <div className="red active"></div>
                <div className="weekly_schedule_content_text">
                  <p className="place">고척</p>
                  <h4 className="font_red">2024.09.10(화) 18:30</h4>
                  <p className="ticket">예매중</p>
                </div>
                <div className="weekly_schedule_content_img">
                  <img
                    src={process.env.PUBLIC_URL + "./images/logo_Doosan.png"}
                    alt="doosanLogo"
                  />
                  <p>vs</p>
                  <img
                    src={process.env.PUBLIC_URL + "./images/logo_NC.png"}
                    alt="ncLogo"
                  />
                </div>
              </li>
              <li className="weekly_schedule_content lightNavy">
                <div className="red active"></div>
                <div className="weekly_schedule_content_text">
                  <p className="place">고척</p>
                  <h4 className="font_red">2024.09.10(화) 18:30</h4>
                  <p className="ticket">예매중</p>
                </div>
                <div className="weekly_schedule_content_img">
                  <img
                    src={process.env.PUBLIC_URL + "./images/logo_Doosan.png"}
                    alt="doosanLogo"
                  />
                  <p>vs</p>
                  <img
                    src={process.env.PUBLIC_URL + "./images/logo_NC.png"}
                    alt="ncLogo"
                  />
                </div>
              </li>
              <li className="weekly_schedule_content lightNavy">
                <div className="red active"></div>
                <div className="weekly_schedule_content_text">
                  <p className="place">고척</p>
                  <h4 className="font_red">2024.09.10(화) 18:30</h4>
                  <p className="ticket">예매중</p>
                </div>
                <div className="weekly_schedule_content_img">
                  <img
                    src={process.env.PUBLIC_URL + "./images/logo_Doosan.png"}
                    alt="doosanLogo"
                  />
                  <p>vs</p>
                  <img
                    src={process.env.PUBLIC_URL + "./images/logo_NC.png"}
                    alt="ncLogo"
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
    </>
  );
};

export default Home;
