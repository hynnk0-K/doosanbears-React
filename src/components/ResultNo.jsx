import React from 'react';
import '../scss/ResultNo.scss';

const ResultNo = () => {
  return (
    <div className="result_no" >
      <img alt="" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" style={{color: "transparent"}} src={process.env.PUBLIC_URL + "/images/ico_info_gray40.svg"}/><p>준비중 입니다.</p>
    </div>
  );
};

export default ResultNo;