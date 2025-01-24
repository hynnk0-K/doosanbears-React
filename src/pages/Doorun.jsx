import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

import '../scss/Doorun.scss';

const Doorun = () => {
  const location = useLocation();
    const [activeTab, setActiveTab] = useState(0);
  
    useEffect(() => {
      switch (location.pathname) {  
        
        case '/doorundoorun/notice':
          setActiveTab(0);
          break;
        case '/doorundoorun/faq':
          setActiveTab(1);
          break;
        case '/doorundoorun/news':
          setActiveTab(2);
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
          <li className={`${activeTab === 0 ? "on" : ""}`}><Link to="/doorundoorun/notice">공지사항</Link></li>
          <li className={`${activeTab === 1 ? "on" : ""}`}><Link to="/doorundoorun/faq">FAQ</Link></li>
          <li className={`${activeTab === 2 ? "on" : ""}`}><Link to="/doorundoorun/news">구단소식</Link></li>
        </ul>
      </section>
      <div className="tab_content">
        <Outlet />
      </div>
    </div>
  );
};

export default Doorun;