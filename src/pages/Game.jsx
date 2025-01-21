import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import First from '../components/Game/First';
import Futures from '../components/Game/Futures';
import Cheering from '../components/Game/Cheering';

const Game = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0); // 현재 활성화된 탭의 인덱스

  useEffect(() => {
      // 현재 경로에 따라 activeTab 설정
      switch (location.pathname) {
        case '/game/first':
          setActiveTab(0);
          break;
        case '/game/futures':
          setActiveTab(1);
          break;
        case '/game/cheering':
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
          <li className={`${activeTab === 0 ? "on" : ""}`}><Link to="/game/first">1군 경기일정</Link></li>
          <li className={`${activeTab === 1 ? "on" : ""}`}><Link to="/game/futures">퓨처스 경기일정</Link></li>
          <li className={`${activeTab === 2 ? "on" : ""}`}><Link to="/game/cheering">응원단</Link></li>
        </ul>
      </section>
      <div className="tab_content" style={{textAlign: "center"}}>
        {activeTab === 0 && <First />}
        {activeTab === 1 && <Futures />}
        {activeTab === 2 && <Cheering />}
      </div>
    </div>
  );
};

export default Game;