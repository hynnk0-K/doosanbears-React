import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CoachStaff from '../components/Member/CoachStaff';
import Pitchers from '../components/Member/Pitchers';
import Batters from '../components/Member/Batters';
import Linkmyplayers from '../components/Member/Linkmyplayers';
import Education from '../components/Member/Education';

import '../scss/Member.scss';

const Member = () => {
  const [on, setOn] = useState(false);

  const toggleOn = () =>{
    setOn(prevState => {
      const newState =!prevState;
      return newState;
    })
  }
  

  return (
    <div style={{paddingTop: "110px"}}>
      <section>
        <ul className="tab" style={{paddingTop: "20px"}}>
          <li className={`${on ? "on" : ""}`} onClick={toggleOn}><Link to="/member/coachStaff">코칭스태프</Link></li>
          <li className={`${on ? "on" : ""}`} onClick={toggleOn}><Link to="/member/pitchers">투수</Link></li>
          <li className={`${on ? "on" : ""}`} onClick={toggleOn}><Link to="/member/batters">타자</Link></li>
          <li className={`${on ? "on" : ""}`} onClick={toggleOn}><Link to="/member/Linkrmyplayers">군입대</Link></li>
          <li className={`${on ? "on" : ""}`} onClick={toggleOn}><Link to="/member/education">육성선수</Link></li>
        </ul>
      </section>
      <CoachStaff />
      <Pitchers />
      <Batters />
      <Linkmyplayers />
      <Education />
      
    </div>
  );
};

export default Member;