import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Intro from '../components/Bears/Intro';
import Story from '../components/Bears/Story';
import Brand from '../components/Bears/Brand';
import Stadium from '../components/Bears/Stadium';

const Bears = () => {const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // 현재 경로에 따라 activeTab 설정
    switch (location.pathname) {
      case '/bears/intro':
        setActiveTab(0);
        break;
      case '/bears/story':
        setActiveTab(1);
        break;
      case '/bears/brand':
        setActiveTab(2);
        break;
      case '/bears/stadium':
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
          <li className={`${activeTab === 0 ? "on" : ""}`}><Link to="/bears/intro">구단소개 </Link></li>
          <li className={`${activeTab === 1 ? "on" : ""}`}><Link to="/bears/story">베어스 스토리</Link></li>
          <li className={`${activeTab === 2 ? "on" : ""}`}><Link to="/bears/brand">베어스 브랜드</Link></li>
          <li className={`${activeTab === 3 ? "on" : ""}`}><Link to="/bears/stadium">베어스 홈구장</Link></li>
        </ul>
      </section>
      <div className="tab_content" style={{textAlign: "center"}}>
        {activeTab === 0 && <Intro />}
        {activeTab === 1 && <Story />}
        {activeTab === 2 && <Brand />}
        {activeTab === 3 && <Stadium />}
      </div>
    </div>
  );
};

export default Bears;