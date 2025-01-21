import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CoachStaff from '../components/Member/CoachStaff';
import Pitchers from '../components/Member/Pitchers';
import Batters from '../components/Member/Batters';
import ArmyPlayers from '../components/Member/ArmyPlayers';
import Education from '../components/Member/Education';

import '../scss/Member.scss';

const Member = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0); // 현재 활성화된 탭의 인덱스

  useEffect(() => {
    // 현재 경로에 따라 activeTab 설정
    switch (location.pathname) {
      case '/member/coachStaff':
        setActiveTab(0);
        break;
      case '/member/pitchers':
        setActiveTab(1);
        break;
      case '/member/batters':
        setActiveTab(2);
        break;
      case '/member/armyplayers':
        setActiveTab(3);
        break;
      case '/member/education':
        setActiveTab(4);
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
          <li className={`${activeTab === 0 ? "on" : ""}`}><Link to="/member/coachStaff">코칭스태프</Link></li>
          <li className={`${activeTab === 1 ? "on" : ""}`}><Link to="/member/pitchers">투수</Link></li>
          <li className={`${activeTab === 2 ? "on" : ""}`}><Link to="/member/batters">타자</Link></li>
          <li className={`${activeTab === 3 ? "on" : ""}`}><Link to="/member/armyplayers">군입대</Link></li>
          <li className={`${activeTab === 4 ? "on" : ""}`}><Link to="/member/education">육성선수</Link></li>
        </ul>
      </section>
      <div className="tab_content" style={{textAlign: "center"}}>
        {activeTab === 0 && <CoachStaff />}
        {activeTab === 1 && <Pitchers />}
        {activeTab === 2 && <Batters />}
        {activeTab === 3 && <ArmyPlayers />}
        {activeTab === 4 && <Education />}
      </div>
    </div>
  );
};

export default Member;