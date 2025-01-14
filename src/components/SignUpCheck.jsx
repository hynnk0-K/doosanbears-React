import React, { useState } from 'react';

const SignUpCheck = () => {

  const [allChecked, setAllChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const handleAllCheck = () => { };
  const handleSubmit = () => { };
  return (
    <div>
      <ul className="progress_bar">
        <li className="agreement"></li>
        <li className="information"></li>
        <li className="success"></li>
      </ul>
      <form action="#" method="post" name="signup" onSubmit={handleSubmit}>
        <fieldset className="signUpArea">
          <ul>
            <li className="terms_section">
              <h3>두산베어스 이용약관</h3>
              <div className="termsBox">
                <p>
                  ■ 수집하는 개인정보 항목 <br />
                  회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
                </p>
                <p>
                  ο 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른
                  요금정산 콘텐츠 제공 , 구매 및 요금 결제 , 물품배송 또는
                  청구지 등 발송 <br />
                  ο 회원 관리
                  <br />
                  회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 연령확인 ,
                  만14세 미만 아동 개인정보 수집 시 법정 <br />
                  대리인 동의여부 확인 , 고지사항 전달 ο 마케팅 및 광고에 활용
                  <br />
                  접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계
                </p>
                <p>■ 개인정보의 보유 및 이용기간</p>

                <p>
                  회사는 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이
                  해당 정보를 지체 없이 파기합니다.
                </p>
              </div>
              <p>
                <input
                  type="checkbox"
                  id="terms-check1"
                  className="check-style"
                  checked={termsChecked}
                  onChange={() => setTermsChecked(!termsChecked)}
                />
                <label htmlFor="terms-check1"></label>
                <span>이용약관에 동의합니다.</span>
              </p>
            </li>
            <li className="terms_section">
              <h3>개인정보 수집 및 이용에 대한 안내</h3>
              <div className="termsBox">
                <p>
                  ■ 수집하는 개인정보 항목 <br />
                  회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
                </p>
                <p>
                  ο 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른
                  요금정산 콘텐츠 제공 , 구매 및 요금 결제 , 물품배송 또는
                  청구지 등 발송 <br />
                  ο 회원 관리
                  <br />
                  회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 연령확인 ,
                  만14세 미만 아동 개인정보 수집 시 법정 <br />
                  대리인 동의여부 확인 , 고지사항 전달 ο 마케팅 및 광고에 활용
                  <br />
                  접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계
                </p>
                <p>■ 개인정보의 보유 및 이용기간</p>

                <p>
                  회사는 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이
                  해당 정보를 지체 없이 파기합니다.
                </p>
              </div>
              <p>
                <input
                  type="checkbox"
                  id="terms-check1"
                  className="check-style"
                  checked={termsChecked}
                  onChange={() => setTermsChecked(!termsChecked)}
                />
                <label htmlFor="terms-check1"></label>
                <span>개인정보 수집 및 이용에 대한 약관에 동의합니다.</span>
              </p>
            </li>
            <li className="all_agree">
              <div className="allCheck">
                <input
                  type="checkbox"
                  id="allCheck"
                  className="chick-style"
                  checked={allChecked}
                  onChange={handleAllCheck}
                />
                <label htmlFor="allCheck">전체 동의합니다.</label>
              </div>
              <p>
                가입하시기 전에 먼저 이용약관 및 개인정보처리방침을 확인해
                주시기 바라며,회원님의 신상정보는 정보통신망 이용촉진 등에
                관한 법률에 의거 보안이 유지됨을 약속 드립니다.
              </p>
            </li>
          </ul>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpCheck;