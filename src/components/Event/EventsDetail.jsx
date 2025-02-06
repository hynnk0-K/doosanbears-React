import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import eventData from '../../data/eventData.json';

const EventsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = eventData.find((event) => event.id === parseInt(id));

  if (!event) {
    return <div>해당 게시글을 찾을 수 없습니다.</div>;
  }

  const eventIndex = eventData.findIndex((eventItem) => eventItem.id === parseInt(id));
  const prevEvent = eventIndex > 0 ? eventData[eventIndex - 1] : null;
  const nextEvent = eventIndex < eventData.length - 1 ? eventData[eventIndex + 1] : null;

  const handleBack = () => {
    navigate("event/events");
  };
  return (
    <section class="event_detail">
      <h2 class="hide">이벤트 소식 상세페이지</h2>
      <div className="list_view" key={event.id}>
        <div className="top">
          <div className="inner layout_fix">
            <div className="txt_area">
              <p className="tit">{event.title}</p>
              <p className="txt">{event.date}</p>
            </div>
            <button type="button" className="btn_back" onClick={handleBack}>
              목록
            </button>
          </div>
        </div>
        <div className="bottom layout_fix">
          <div className="inner">
            {event.img && (
            <p>
              <img src={`${process.env.PUBLIC_URL}/${event.img}`} alt={event.title} />
            </p>
            )}
          </div>
          <div className="inner_text">
          {event.contents.split(/\n{2}/).map((content, pIndex) => (
            <p key={pIndex}>
              {content.split("\n").map((line, idx) => (
                <p key={idx}>
                  {line}
                  <br />
                </p>
              ))}
              <br />
            </p>
          ))}
          </div>
        </div>
      </div>
      <div className="post_nav">
        {prevEvent ? (
          <div className="prev">
            <button>prev</button>
            <span>이전글</span>
            <div className="prev_tit">
              <button onClick={() => navigate(`/doorundoorun/events/${prevEvent.id}`)}>
                {prevEvent.title}
              </button>
            </div>
          </div>
        ) : (
          <div className="prev" style={{ display: "none" }}></div>
        )}

        {nextEvent ? (
          <div className="next">
            <button>next</button>
            <span>다음글</span>
            <div className="next_tit">
              <button onClick={() => navigate(`/doorundoorun/events/${nextEvent.id}`)}>
                {nextEvent.title}
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

export default EventsDetail;