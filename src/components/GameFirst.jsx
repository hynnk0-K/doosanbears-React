import React from 'react';
import ResultNo from './ResultNo';

const GameFirst = () => {
  return (
    <>
      <section>
        <ul class="tab" style={{paddingTop: "20px"}}>
          <li class=""><a href="/game/first">1군 경기일정</a></li>
          <li class=""><a href="/game/futures">퓨처스 경기일정</a></li>
          <li class=""><a href="/game/cheering">응원단</a></li>
        </ul>
      </section>
      <ResultNo />
    </>
  );
};

export default GameFirst;