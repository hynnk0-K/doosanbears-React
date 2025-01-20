import React from 'react';

const HomeEvents = () => {
    return (
        <div className="contents">
            <ul>
              <li className="events events1">
                <div className="banner_img">
                  <img src={process.env.PUBLIC_URL + "./images/events_banner_meeting.png"} alt="meeting" />
                </div>
                <div className="banner_text">
                  <div className="date">2024-11-19</div>
                  <div className="tit">2024 곰들의 모임 안내</div>
                  <button>READ MORE</button>
                </div>
              </li>
              <li className="events events2">
                <div className="banner_img">
                  <img src={process.env.PUBLIC_URL + "./images/events_banner_fanFirst.png"} alt="fanfirstDay" />
                </div>
                <div className="banner_text">
                  <div className="date">2024-09-12</div>
                  <div className="tit">홈 경기 최종전 감사 이벤트</div>
                  <button>READ MORE</button>
                </div>
              </li>
              <li className="events events3">
                <div className="banner_img">
                  <img src={process.env.PUBLIC_URL + "./images/events_banner_remember.png"} alt="remember" />
                </div>
                <div className="banner_text">
                  <div className="date">2024-09-06</div>
                  <div className="tit">니퍼트 은퇴식</div>
                  <button>READ MORE</button>
                </div>
              </li>
            </ul>
          </div>
    );
};

export default HomeEvents;