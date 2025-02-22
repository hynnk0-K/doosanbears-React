import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import faqData from "../../data/faqData.json";

const Faq = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialPage = parseInt(queryParams.get("currentPage")) || 1;

  const [currentPage, setCurrentPage] = useState(initialPage);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(faqData.length / itemsPerPage);
  const currentFaq = faqData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  //로그인 검증
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken"); // 저장된 토큰 가져오기

    fetch("http://localhost:8080/auth/status", {
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

  return (
    <section className="faq">
      <div className="inner layout_fix">
        <section>
          <h3 className="hide">FAQ</h3>
          <div className="list_top">
            <p className="num">
              전체 <strong>{faqData.length}</strong>
            </p>
          </div>
          <ul className="list_box">
            {currentFaq.map(({ id, title, user }) => (
              <li key={id}>
                <Link
                  className="pop_open"
                  to={`/doorundoorun/faq/${id}?currentPage=${currentPage}`}
                >
                  <div className="txt_area">
                    <div className="tit">{title}</div>
                    <div className="txt">{user}</div>
                  </div>
                </Link>
              </li>
            ))}
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
