import React from "react";
import { Link } from "react-router-dom";
import "../scss/Navbar.scss";

const Navbar = () => {
  return (
    <div id="container">
      <div className="header">
        <div className="h_top">
          <div className="h_top_menu layout_fix">
            <Link to="/login">로그인</Link>
            <Link to="/signup">무료회원가입</Link>
            <Link to="https://www.doosanbearswefan.shop/" className="lightblue">
              SHOP
            </Link>
          </div>
        </div>
        <div className="h_bottom">
          <div className="h_bottom_menu layout_fix">
            <Link to="/bears">BEARS</Link>
            <Link to="/player">PLAYER</Link>
            <Link to="/game">GAME</Link>
            <Link to="/stats">STATS</Link>
            <Link to="/ticket">TICKET</Link>
            <Link to="/community">두런두런</Link>
          </div>
        </div>
        <div className="h_logo"></div>
      </div>
    </div>
  );
};

export default Navbar;
