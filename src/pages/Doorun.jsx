import React, { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

import "../scss/Doorun.scss";

const Doorun = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (location.pathname.startsWith("/doorundoorun/notice")) {
      setActiveTab(0);
    } else if (location.pathname.startsWith("/doorundoorun/faq")) {
      setActiveTab(1);
    } else if (location.pathname.startsWith("/doorundoorun/news")) {
      setActiveTab(2);
    } else {
      setActiveTab(0);
    }
  }, [location.pathname]);

  return (
    <div style={{ paddingTop: "110px" }}>
      <section>
        <ul className="tab" style={{ paddingTop: "20px" }}>
          <li className={`${activeTab === 0 ? "on" : ""}`}>
            <Link to="/doorundoorun/notice">공지사항</Link>
          </li>
          <li className={`${activeTab === 1 ? "on" : ""}`}>
            <Link to="/doorundoorun/faq">팬 소식</Link>
          </li>
          <li className={`${activeTab === 2 ? "on" : ""}`}>
            <Link to="/doorundoorun/news">구단소식</Link>
          </li>
        </ul>
      </section>
      <div className="tab_content">
        <Outlet />
      </div>
    </div>
  );
};

export default Doorun;
