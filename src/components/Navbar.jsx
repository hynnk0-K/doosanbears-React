import React, {useEffect, useState, useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import { isActiveToken } from "./AccessTokenContext";
import "../scss/Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const [accessResult, setAccessResult]=useState(null);
  const [user_id, setUserId]= useState(null);

  const [isBottomActive, setIsBottomActive] = useState(false);
  const hBottomMenuRef = useRef(null);

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

  const toggleBottomActive = () => {
    setIsBottomActive(prevState => {
      const newState = !prevState; // 새로운 상태 계산
      if (hBottomMenuRef.current) {
        hBottomMenuRef.current.style.height = newState ? '374px' : '0px';
      }
      return newState;
    });
  };

  const handleDimdClick = () => {
    if (isBottomActive) { // isBottomActive가 true일 때만 닫기
      toggleBottomActive();
    }
  };

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
        <div className={`h_bottom ${isBottomActive ? "bottom_active" : ""}`}>
          <div ref={hBottomMenuRef} className={` ${isBottomActive ? "h_depth_2_background" : ""}`}>
            <div className="h_bottom_menu">
              <nav className="header_gnb layout_fix">
                <ul>
                  <li className=" ">
                    <button onClick={toggleBottomActive}>BEARS</button>
                    <ul className="header_depth_2">
                      <li><Link to="/bears/intro">구단소개 </Link></li>
                      <li><Link to="/bears/story">베어스 스토리</Link></li>
                      <li><Link to="/bears/brand">베어스 브랜드</Link></li>
                      <li><Link to="/bears/stadium">베어스 홈구장</Link></li>
                      <li><Link to="/bears/social">사회공헌</Link></li>
                      <li><Link to="/bears/partner">스폰/제휴사 소개</Link></li>
                      <li><Link to="/bears/announce">전자공고</Link></li>
                    </ul>
                  </li>
                  <li className=" ">
                    <button onClick={toggleBottomActive}>PLAYER</button>
                    <ul className="header_depth_2">
                      <li><a href="/member/coachStaff">코칭스태프</a></li>
                      <li><a href="/member/pitchers">투수</a></li>
                      <li><a href="/member/batters">타자</a></li>
                      <li><a href="/member/armyplayers">군입대</a></li>
                      <li><a href="/member/education">육성선수</a></li>
                    </ul>
                  </li>
                  <li className="mr_62">
                    <button onClick={toggleBottomActive}>GAME</button>
                    <ul className="header_depth_2">
                      <li><a href="/game/first">1군 경기일정</a></li>
                      <li><a href="/game/futures">퓨처스 경기일정</a></li>
                      <li><a href="/game/cheering">응원단</a></li>
                    </ul>
                  </li>
                  <li className=" ">
                    <button onClick={toggleBottomActive}>EVENT</button>
                    <ul className="header_depth_2">
                      <li><a href="/event/bearstv">BEARS TV</a></li>
                      <li><a href="/event/gallery">갤러리</a></li>
                      <li><a href="/event/event">이벤트</a></li>
                      {/* <li><a href="/stats/team">팀기록</a></li>
                      <li><a href="/stats/player">선수기록</a></li>
                      <li><a href="/stats/expect">예상달성기록</a></li>
                      <li><a href="/stats/history">역대구단성적</a></li> */}
                    </ul>
                  </li>
                  <li className=" ">
                    <button onClick={toggleBottomActive}>TICKET</button>
                    <ul className="header_depth_2">
                      <li><a href="/ticket/reserve">티켓예매</a></li>
                      <li><a href="/ticket/group">단체관람</a></li>
                      <li><a href="/ticket/lounge">베어스라운지</a></li>
                      <li><a href="/ticket/season">시즌권</a></li>
                    </ul>
                  </li>
                  <li className=" ">
                    <button onClick={toggleBottomActive}>두런두런</button>
                    <ul className="header_depth_2">
                      {/* <li><a href="/doorundoorun/blog">블로그</a></li>
                      <li><a href="/doorundoorun/bearstv">BEARS TV</a></li>
                      <li><a href="/doorundoorun/gallery">갤러리</a></li>
                      <li><a href="/doorundoorun/event">이벤트</a></li> */}
                      <li><a href="/doorundoorun/notice">공지사항</a></li>
                      <li><a href="/doorundoorun/faq">FAQ</a></li>
                      <li><a href="/doorundoorun/news">구단소식</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div role="presentation" className={`header_dimd`} onClick={handleDimdClick}></div>
        </div>
        <div className="h_logo">
          <Link to="/"></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
