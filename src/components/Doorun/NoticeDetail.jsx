import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import noticeData from '../../data/noticeData.json';

const NoticeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const notice = noticeData.find((notice) => notice.id === parseInt(id));

  if (!notice) {
    return <div>해당 공지사항을 찾을 수 없습니다.</div>;
  }

  // 이전 공지사항과 다음 공지사항 찾기
  const noticeIndex = noticeData.findIndex((noticeItem) => noticeItem.id === parseInt(id));
  const prevNotice = noticeIndex > 0 ? noticeData[noticeIndex - 1] : null;
  const nextNotice = noticeIndex < noticeData.length - 1 ? noticeData[noticeIndex + 1] : null;

  const handleBack = () => {
    navigate("/doorundoorun/notice");
  };

  return (
    <section class="notice_detail">
      <h2 class="hide">두런두런 공지사항 상세페이지</h2>
      <div className="list_view" key={notice.id}>
        <div className="top">
          <div className="inner layout_fix">
            <div className="txt_area">
              <p className="tit">{notice.title}</p>
              <p className="txt">{notice.date}</p>
            </div>
            <button type="button" className="btn_back" onClick={handleBack}>
              목록
            </button>
          </div>
        </div>
        <div className="bottom">
          <div className="inner layout_fix">
            <p>
              <img src={`${process.env.PUBLIC_URL}${notice.img}`} alt={notice.title} />
            </p>
          </div>
        </div>
      </div>
      <div className="post_nav">
        {prevNotice ? (
          <div className="prev">
            <button>prev</button>
            <span>이전글</span>
            <div className="prev_tit">
              <button onClick={() => navigate(`/doorundoorun/notice/${prevNotice.id}`)}>
                {prevNotice.title}
              </button>
            </div>
          </div>
        ) : (
          <div className="prev" style={{ display: "none" }}></div>
        )}

        {nextNotice ? (
          <div className="next">
            <button>next</button>
            <span>다음글</span>
            <div className="next_tit">
              <button onClick={() => navigate(`/doorundoorun/notice/${nextNotice.id}`)}>
                {nextNotice.title}
              </button>
            </div>
          </div>
        ) : (
          <div className="next" style={{ display: "none" }}></div>
        )}
      </div>
    </section>
  );
};

export default NoticeDetail;