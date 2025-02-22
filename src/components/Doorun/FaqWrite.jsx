import React from "react";

const FaqWrite = () => {
  return (
    <section className="faq_write">
      <div className="layout_fix">
        <div className="heading">
          <h1 className="tit">게시글 작성</h1>
        </div>
        <div className="contents_container">
          <div className="tit">
            <p className="tit">제목</p>
            <input
              type="text"
              className="tit"
              placeholder="게시글 제목을 입력해주세요"
            />
          </div>
          <div className="content">
            <p className="tit">내용</p>
            <input
              type="text"
              className="content"
              placeholder="게시글 내용을 입력해주세요"
            />
          </div>
          <div className="img"></div>
        </div>
      </div>
    </section>
  );
};

export default FaqWrite;
