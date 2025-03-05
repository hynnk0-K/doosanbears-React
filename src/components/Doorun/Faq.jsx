import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config/constants";

const Faq = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialPage = parseInt(queryParams.get("currentPage")) || 1;

  const [posts, setPosts] = useState([]); // 게시글 목록 저장
  const [currentPage, setCurrentPage] = useState(initialPage);
  const itemsPerPage = 9;

  useEffect(() => {
    axios
      .get(`${API_URL}/posts`)
      .then((response) => {
        console.log("게시글 데이터:", response.data.posts);
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.error("FAQ 데이터를 가져오는 중 오류 발생:", error);
      });
  }, []);

  const totalPages = Math.ceil(posts.length / itemsPerPage);
  const currentFaq = posts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  //로그인 검증
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken"); // 저장된 토큰 가져오기

    fetch(`${API_URL}/auth/status`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // 헤더에 토큰 추가
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("로그인 상태 확인:", data);
        setIsAuthenticated(data.isAuthenticated);
      })
      .catch((err) => console.error("인증 확인 중 오류 발생:", err));
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("currentPage", currentPage);
    navigate(`?${searchParams.toString()}`, { replace: true });
  }, [currentPage, location.search, navigate]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          type="button"
          className={currentPage === i ? "on" : ""}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };
  console.log(posts);

  // 날짜 포맷팅 함수
  const formatDate = (dateString) => {
    const date = new Date(dateString); // Date 객체로 변환
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`; // 원하는 형식으로 리턴
  };

  return (
    <section className="faq">
      <div className="inner layout_fix">
        <section>
          <h3 className="hide">FAQ</h3>
          <div className="list_top">
            <p className="num">
              전체 <strong>{posts.length}</strong>
            </p>
          </div>
          <ul className="list_box">
            {currentFaq.length > 0 ? (
              currentFaq.map(({ id, title, user_id, createdAt }) => (
                <li key={id}>
                  <Link
                    className="pop_open"
                    to={`/doorundoorun/faq/${id}?currentPage=${currentPage}`}
                  >
                    <div className="txt_area">
                      <div className="tit">{title}</div>
                      <div className="txt">
                        {formatDate(createdAt)}
                        <div className="user">{user_id}</div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))
            ) : (
              <li style={{ padding: 20, fontSize: "0.9rem" }}>
                팬 소식이 없습니다.
              </li>
            )}
          </ul>
          {isAuthenticated && (
            <div className="write_btn_container">
              <button
                className="write_btn btn_bg bg_primary xlarge"
                onClick={() => navigate("/doorundoorun/faq/write")}
              >
                글쓰기
              </button>
            </div>
          )}

          <div className="pagination">
            <button
              className="first"
              title="처음"
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
            ></button>
            <button
              className="prev"
              title="이전"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            ></button>
            <div className="pages">{renderPaginationButtons()}</div>
            <button
              className="next"
              title="다음"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            ></button>
            <button
              className="last"
              title="마지막"
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
            ></button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Faq;
