import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import noticeData from '../../data/noticeData.json';

const Notice = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialPage = parseInt(queryParams.get('currentPage')) || 1;

  const [currentPage, setCurrentPage] = useState(initialPage);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(noticeData.length / itemsPerPage);
  const currentNotices = noticeData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('currentPage', currentPage);
    navigate(`?${searchParams.toString()}`, { replace: true });
  }, [currentPage, location.search, navigate]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button key={i} type="button" className={currentPage === i ? "on" : ""} 
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <section className="notice">
      <div className="inner layout_fix">
        <section>
          <h3 className="hide">공지사항</h3>
          <div className="list_top">
            <p className="num">전체 <strong>{noticeData.length}</strong></p>
          </div>
          <ul className="list_box">
            {currentNotices.map(({ id, title, date }) => (
              <li key={id}>
                <Link target="_self" className="pop_open" to={`/doorundoorun/notice/${id}?currentPage=${currentPage}`}>
                  <div className="txt_area">
                    <p className="tit">{title}</p>
                    <p className="txt">{date}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="pagination">
            <button className="first" title="처음" onClick={() => handlePageChange(1)} disabled={currentPage === 1}></button>
            <button className="prev" title="이전" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}></button>
            <div className="pages">
              {renderPaginationButtons()}
            </div>
            <button className="next" title="다음" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}></button>
            <button className="last" title="마지막" onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}></button>
          </div>
          <br/>
        </section>
      </div>
    </section>
  );
};

export default Notice;