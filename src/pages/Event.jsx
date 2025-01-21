import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BearsTv from '../components/Event/BearsTv';
import Gallery from '../components/Event/Gallery';
import Events from '../components/Event/Events';

const Event = () => {
  const location = useLocation();
    const [activeTab, setActiveTab] = useState(0); // 현재 활성화된 탭의 인덱스
  
    useEffect(() => {
      // 현재 경로에 따라 activeTab 설정
      switch (location.pathname) {
        case '/event/bearstv':
          setActiveTab(0);
          break;
        case '/event/gallery':
          setActiveTab(1);
          break;
        case '/event/events':
          setActiveTab(2);
          break;
        default:
          setActiveTab(0);
          break;
      }
    }, [location.pathname]); // 경로가 변경될 때마다 실행
  return (
    <div style={{paddingTop: "110px"}}>
      <section>
        <ul className="tab" style={{paddingTop: "20px"}}>
          <li className={`${activeTab === 0 ? "on" : ""}`}><Link to="/event/bearstv">BEARS TV</Link></li>
          <li className={`${activeTab === 1 ? "on" : ""}`}><Link to="/event/gallery">갤러리</Link></li>
          <li className={`${activeTab === 2 ? "on" : ""}`}><Link to="/event/events">이벤트</Link></li>
        </ul>
      </section>
      <div className="tab_content" style={{textAlign: "center"}}>
        {activeTab === 0 && <BearsTv />}
        {activeTab === 1 && <Gallery />}
        {activeTab === 2 && <Events />}
      </div>
    </div>
  );
};

export default Event;