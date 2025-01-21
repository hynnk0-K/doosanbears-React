import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Reserve from '../components/Ticket/Reserve';
import Group from '../components/Ticket/Group';
import Lounge from '../components/Ticket/Lounge';
import Season from '../components/Ticket/Season';

const Ticket = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0); // 현재 활성화된 탭의 인덱스

  useEffect(() => {
    // 현재 경로에 따라 activeTab 설정
    switch (location.pathname) {
      case '/ticket/reserve':
        setActiveTab(0);
        break;
      case '/ticket/group':
        setActiveTab(1);
        break;
      case '/ticket/lounge':
        setActiveTab(2);
        break;
      case '/ticket/season':
        setActiveTab(3);
        break;
      default:
        setActiveTab(0);
        break;
    }
  }, [location.pathname]);

  return (
    <div style={{paddingTop: "110px"}}>
      <section>
        <ul className="tab" style={{paddingTop: "20px"}}>
          <li className={`${activeTab === 0 ? "on" : ""}`}><Link to="/ticket/reserve">티켓예매</Link></li>
          <li className={`${activeTab === 1 ? "on" : ""}`}><Link to="/ticket/group">단체관람</Link></li>
          <li className={`${activeTab === 2 ? "on" : ""}`}><Link to="/ticket/lounge">베어스라운지</Link></li>
          <li className={`${activeTab === 3 ? "on" : ""}`}><Link to="/ticket/season">시즌권</Link></li>
        </ul>
      </section>
      <div className="tab_content" style={{textAlign: "center"}}>
        {activeTab === 0 && <Reserve />}
        {activeTab === 1 && <Group />}
        {activeTab === 2 && <Lounge />}
        {activeTab === 3 && <Season />}
      </div>
    </div>
  );
};

export default Ticket;