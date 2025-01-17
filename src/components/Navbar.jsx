import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { isActiveToken } from "./AccessTokenContext";
import "../scss/Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const [accessResult, setAccessResult]=useState(null);
  const [user_id, setUserId]= useState(null);

  function logout(){
    localStorage.removeItem('accessToken');
    setAccessResult(false);
    navigate("/")
  }

  const accessToken=localStorage.getItem('accessToken');

  useEffect(()=>{
    //accessToken사용할 코드
    const verifyToken= async () =>{
      const result = await isActiveToken(accessToken);
      setAccessResult(result.accessResult)
      setUserId(result.user_id)
    }
    verifyToken();
  },[accessToken, accessResult])

  return (
    <div id="container">
      <div className="header">
        <div className="h_top">
          <div className="h_top_menu layout_fix">
            {accessResult ? (
              <>
                <Link to="/">{user_id}님</Link>
                <Link to="/" onClick={logout}>로그아웃</Link>
              </>
            ) : (
              <>
                <Link to="/login">로그인</Link>
                <Link to="/signup">무료회원가입</Link>
              </>
            )}
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
        <div className="h_logo">
          <Link to="/"></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
