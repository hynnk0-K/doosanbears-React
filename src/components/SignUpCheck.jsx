import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from "../config/constants.js";

import '../scss/Login.scss';

const SignUpCheck = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  useEffect(() => {
    // Navbar의 높이를 동적으로 계산
    const navbar = document.querySelector("#container");
    setNavbarHeight(navbar ? navbar.offsetHeight : 0);
  }, []);
  
  //signup 단계
  const [step, setStep] = useState(0);

  const navigate = useNavigate();

  //약관동의
  const [termsChecked, setTermsChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [allChecked, setAllChecked] = useState(false);

  //정보입력
  const idInputRef = useRef(null);
  const pwInputRef = useRef(null);
  const nameInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const [id, setId] = useState("");
  const [isIdChecked, setIsIdChecked] = useState(false); //아이디 중복 체크
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [sex, setSex] = useState("");

  //회원가입 제출 여부
  const [isSubmitted, setIsSubmitted] = useState(false);
  //회원가입완료
  const [isRegistered, setIsRegistered] = useState(false);

  const idRule = /^[a-z0-9]{6,16}$/;
  const pwRule = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$&^*])[a-zA-Z\d!@#$&^*]{8,16}$/;
  const nameRule = /^[a-zA-Z가-힣]{1,20}$/;
  const phoneRule = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
  const emailRule = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  const [messages, setMessages] = useState({
    id: { text: "", color: "" },
    pw: { text: "", color: "" },
    pw2: { text: "", color: "" },
    name: { text: "", color: "" },
    phone: { text: "", color: "" },
    email: { text: "", color: "" },
  })

  useEffect(()=>{
    if(isSubmitted){
      if(isRegistered){
        alert('회원가입이 완료되었습니다.')
      }else{
        alert('회원가입에 실패했습니다.')
      }
    }
  },[isSubmitted, isRegistered])

  const handleAllCheck = () => {
    const newAllChecked = !allChecked;
    setTermsChecked(newAllChecked);
    setPrivacyChecked(newAllChecked);
    setAllChecked(newAllChecked);
  };

  useEffect(() => {
    if (termsChecked && privacyChecked) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [termsChecked, privacyChecked]);

  const handleMessageChange = (key, text, color) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [key]: { text, color },
    }));
  };

  const handleId = (e) => {
    const newValue = e.target.value;
    setId(newValue);
    if (idRule.test(newValue)) {
      handleMessageChange("id", "사용 가능한 아이디 입니다.", "success_color");
    } else if (newValue === "") {
      handleMessageChange("id", "아이디를 입력해주세요.", "error_color");
    } else {
      handleMessageChange("id", "아이디는 영문소문자/숫자 4글자 이상 16글자 미만으로 사용 가능합니다.", "error_color");
      setId("")
    }
  };

  //중복확인
  const handleIdCheck = async () =>{
    if(!idRule.test(id)){
      alert("유효안 아이디를 입력하세요");
      return;
    }
    try{
      const response = await axios.get(`${API_URL}/users/check-id`, {
        params: {user_id: id},
      });
      if(response.data.success){
        handleMessageChange('id', '사용 가능한 아이디입니다.', 'success_color');
        setIsIdChecked(true); //중복확인완료
      } else{
        handleMessageChange('id', '이미 사용중인 아이디입니다.', 'error_color');
        setIsIdChecked(false);
      }
    }catch(err){
      console.error(err);
      alert('중복 확인에 실패했습니다. 잠시 후 다시 시도해주세요.')
    }
  }

  const handlePw = (e) => {
    const newPwValue = e.target.value;
    setPw(newPwValue);
    if (pwRule.test(newPwValue)) {
      handleMessageChange("pw", "사용 가능한 비밀번호입니다.", "success_color");
    } else if (newPwValue === "") {
      handleMessageChange("pw", "비밀번호를 입력해주세요.", "error_color")
    } else {
      handleMessageChange("pw", "비밀번호는 영문 대소문자/숫자/특수문자 조합, 8글자 이상 16글자 미만으로 사용 가능합니다.", "error_color");
    }
  }

  const handlePw2 = (e) => {
    const newPw2Value = e.target.value;
    setPw2(newPw2Value);
    if (pw === "") {
      handleMessageChange("pw", "비밀번호를 입력해주세요", "error_color");
    } else if (newPw2Value === pw) {
      handleMessageChange("pw2", "비밀번호가 일치합니다", "success_color");
    } else if (newPw2Value === "") {
      handleMessageChange("pw2", "비밀번호를 입력해주세요", "error_color");
    } else {
      handleMessageChange("pw2", "비밀번호가 일치하지 않습니다", "error_color");
    }
  };

  const handleName = (e) => {
    const newNameValue = e.target.value;
    setName(newNameValue);
    if (nameRule.test(newNameValue)) {
      handleMessageChange("name", "사용가능한 이름입니다.", "success_color");
    } else if (newNameValue === "") {
      handleMessageChange("name", "이름을 입력해주세요", "error_color");
    } else {
      handleMessageChange("name", "올바른 이름이 아닙니다", "error_color");
      setName("");
    }
  };

  const handlePhone = (e) => {
    const newPhoneValue = e.target.value;
    setPhone(newPhoneValue);
    if (phoneRule.test(newPhoneValue)) {
      handleMessageChange(
        "phone",
        "사용가능한 휴대전화 번호입니다.",
        "success_color"
      );
    } else if (newPhoneValue === "") {
      handleMessageChange(
        "phone",
        "휴대전화 번호를 입력해주세요",
        "error_color"
      );
    } else {
      handleMessageChange(
        "phone",
        "휴대전화 번호를 확인해주세요",
        "error_color"
      );
      setPhone("");
    }
  };

  const handleEmail = (e) => {
    const newEmailValue = e.target.value;
    setEmail(newEmailValue);
    if (emailRule.test(newEmailValue)) {
      handleMessageChange("email", "사용가능한 이메일입니다.", "success_color");
    } else if (newEmailValue === "") {
      handleMessageChange("email", "이메일을 입력해주세요", "error_color");
    } else {
      handleMessageChange("email", "이메일을 확인해주세요", "error_color");
      setEmail("");
    }
  };

  const handleYearChange = (e) => {
    const value = e.target.value;
    setYear(value);
    updateBirth(value, month, day);
  };

  const handleMonthChange = (e) => {
    const value = e.target.value;
    setMonth(value);
    updateBirth(year, value, day);
  };

  const handleDayChange = (e) => {
    const value = e.target.value;
    setDay(value);
    updateBirth(year, month, value);
  };

  const updateBirth = (year, month, day) => {
    // month와 day가 한 자리 숫자인 경우 두 자리로 맞춤
    const formattedMonth = month.padStart(2, '0');
    const formattedDay = day.padStart(2, '0');
    setBirth(`${year}-${formattedMonth}-${formattedDay}`);
  };

  const handleSex = (e) => {
    setSex(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (step === 0) {
      if (termsChecked && privacyChecked) {
        setStep(prevStep => Math.min(prevStep + 1, 2));
        navigate(`/signup/stepcheck?step=${step + 1}`);
      } else {
        console.log('약관 동의가 필요합니다');
      }
    } else if (step === 1) {
      if (!isIdChecked) {
        alert('아이디 중복확인을 진행해주세요.');
        return;
      }
  
      if (idRule.test(id) &&
          pwRule.test(pw) &&
          pw2 === pw &&
          nameRule.test(name) &&
          phoneRule.test(phone) &&
          emailRule.test(email)) {
        try {
          const result = await axios.post(`${API_URL}/users`, {
            user_id: id,
            pw: pw,
            name: name,
            phone: phone,
            email: email,
            birth: birth,
            sex: sex,
            marketingChecked: allChecked ? "True" : "False"
          });
          console.log(result);
          setIsSubmitted(true);
          setIsRegistered(true);
          setStep(prevStep => {
            const nextStep = Math.min(prevStep + 1, 2);
            navigate(`/signup/stepcheck?step=${nextStep}`);
            return nextStep;
          });
          console.log('회원가입을 축하합니다.');
          navigate("/", { replace: true }); //홈으로 이동
        } catch (err) {
          console.error(err);
          setIsSubmitted(true);
          setIsRegistered(false);
        }
      } else {
        console.log('회원정보를 모두 입력해주세요');
      }
    }
  };

  return (
    <div className="signup signup_check" style={{ paddingTop: navbarHeight }}>
      <div className="layout_fix">
        <div className="signUp_layout">
          <div className="heading_up">
            <h2 className="title_up">회원가입</h2>
          </div>
          <ul className="step_bar">
            <li className={`agreement step step0 ${step === 0 ? "on" : ""}`}><button type='button' className='btn'>약관동의</button></li>
            <li className={`information step step1 ${step === 1 ? "on" : ""}`}><button type='button' className='btn'>정보입력</button></li>
            <li className={`success step step2 ${step === 2 ? "on" : ""}`}><button type='button' className='btn'>회원가입 완료</button></li>
          </ul>
          {step === 0 && (
            <form id='input_form' style={{ textAlign: 'left' }} action="#" method="post" name="signup" onSubmit={handleSubmit}>
              <div className="input_form">
                <p className='title'>두산베어스 이용약관</p>
                <div className="scroll_box">
                  <div className="page_content_wrap">
                    <ul>
                      <li>
                        <strong> 제 1조 (목적) </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;이 약관은 ㈜두산베어스(이하 "구단")의 홈페이지(www.doosanbears.com), 애플리케이션(이하 "두산베어스닷컴")이 제공하는 모든 정보, 자료 및 서비스 이용과 관련하여 구단과 회원과의 권리, 의무 및 책임, 기타 필요한 사항을 규정함을 목적으로 합니다.
                      </li>
                      <li>
                        <strong> 제 2조 (회원의 정의) </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;“회원”이란 “두산베어스닷컴”에 접속하여 가입 절차 및 본 약관에 따라 “구단”과 이용계약을 체결하고 “구단”이 제공하는 서비스를 받는 자를 말합니다.
                      </li>
                      <li>
                        <strong> 제 3조 (효력과 변경) </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;(1) 본 약관은 “회원”이 회원가입을 완료한 동시에 효력을 발생합니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(2) “구단”은 약관의 규제에 관한 법률, 정보통신망 이용 촉진 및 정보 보호 등에 관한 법률(이하 “정보통신망법”) 등 관련법을 위배하지 않는 범위에서 개정할 수 있으며, 변경된 약관은 전항과 같은 방법으로 효력을 발생합니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(3) “구단”이 본 약관을 개정할 경우에는 서비스를 통하여 알리거나, 전자우편 등의 방법으로 회원에게 알림으로써 효력을 발생합니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(4) 새로운 서비스가 개설될 경우 별도의 명시된 설명이 없는 한 본 약관에 따라 제공합니다. <br />
                      </li>
                      <li>
                        <strong> 제 4조 (약관 이외의 준칙) </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;이 약관에 언급되지 않은 사항이 전기통신기본법, 전기통신사업법, 기타 관련법령에 규정되어 있는 경우 그 규정에 따라 적용할 수 있습니다.
                      </li>
                      <li>
                        <strong> 제 5조 (회원 가입의 성립) </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;(1) “두산베어스닷컴” 회원은 가입 신청자가 실명 확인 후 약관의 내용에 대하여 동의를 한 다음 “구단”이 정한 가입 양식에 회원정보를 기입하고 “구단”에서 정한 가격정책에 따라(어린이/성인, 유료회원) 결제를 완료해 회원 가입을 신청을 하고, “구단”이 이러한 신청에 대하여 승낙함으로써 성립됩니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(2) 회사는 다음 각 호에 해당하는 회원 가입 신청에 대하여는 이를 승낙을 하지 않거나 사후에 회원 가입 성립을 무효화할 수 있습니다.  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;가. 가입 신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우. 다만, 회원 자격 상실 후 1년이 경과한 자로서 “구단”의 회원 재가입 승낙을 얻은 경우는 예외 <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;나. 본인의 실명이 아니거나 타인의 명의로 신청하였을 경우 <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;다. 회원가입 신청시 이용자 정보를 허위로 기재하였거나 “구단”이 제시하는 내용을 기재하지 않은 경우 <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;라. 14세 미만 아동이 법정대리인(부모 등)의 동의를 얻지 아니한 경우 <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;마. 이용자의 귀책사유로 인하여 가입이 불가능하거나 기타 규정한 제반 사항을 위반하며 신청하는 경우 <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;바. 사회의 안녕과 질서 혹은 미풍양속을 저해할 목적으로 신청하였을 때 <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;사. 기타 회사가 정한 이용 신청 요건이 미비되었을 때 <br />
                      </li>
                      <li>
                        <strong> 제 6조 (회원 정보의 변경) </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;(1) “회원”은 개인 정보 관리 화면(정보수정)을 통하여 언제든지 본인의 개인 정보를 열람하고 수정할 수 있습니다. 다만 서비스 관리를 위해 필요한 실명, 아이디 등의 사항은 수정할 수 없습니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(2) “회원”은 회원가입 신청시 기재한 내용이 변경되었을 경우, 즉시 변경사항을 수정하여 기재하여야 합니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(3) 제 2항의 변경사항을 수정하지 않아 발생한 불이익에 대하여 “구단”은 책임을 지지 않습니다. <br />
                      </li>
                      <li>
                        <strong> 제 7조 (개인정보보호 의무) </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;(1) “구단”은 “정보통신망법” 등 관계 법령이 정하는 바에 따라 “회원”의 개인정보를 보호하기 위해 노력합니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(2) 개인 정보의 보호 및 사용에 대해서는 관련법 및 “구단”의 개인정보 취급 방침이 적용됩니다. <br />
                      </li>
                      <li>
                        <strong> 제 8조 (개인정보의 위탁) </strong>
                        “구단”은 수집된 개인정보의 취급 및 관리 등의 업무(이하 "업무")를 스스로 수행함을 원칙으로 하나, 필요한 경우 업무의 일부 또는 전부를 회사가 선정한 회사에 위탁할 수 있습니다.
                      </li>
                      <li>
                        <strong> 제 9조 (회원의 아이디 및 비밀번호의 관리에 대한 의무) </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;(1) “회원”의 아이디와 비밀번호에 관한 관리 책임은 “회원”에게 귀속되며, 이를 제 3자가 이용하도록 하여서는 안됩니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(2) “구단”은 회원의 아이디가 개인정보 유출 우려가 있거나 반사회적 또는 미풍양속에 어긋나거나 “구단” 및 “구단”의 운영자로 오해할 우려가 있는 경우 해당 아이디의 사용을 제한할 수 있습니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(3) “회원”은 아이디 및 비밀번호가 도용되거나 제 3자가 사용하고 있음을 인지한 경우에는 이를 즉시 “구단”에 통지하고 “구단”의 안내가 있는 경우에는 그에 따라야 합니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(4) 제 3항의 경우에 해당 회원이 “구단”에 그 사실을 통지하지 않거나, 통지한 경우에도 “구단”의 안내에 따르지 않아 발생한 불이익에 대하여 “구단”은 책임지지 않습니다. <br />
                      </li>
                      <li>
                        <strong> 제 10조 (회원에 대한 통지) </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;(1) “구단”이 회원에 대한 통지를 하는 경우 본 약관에 별도 규정이 없는 한 “두산베어스닷컴” 서비스 내 팝업, 게시판, 전자우편주소 등으로 할 수 있습니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(2) “구단”은 회원 전체에 대한 통지의 경우 1주일 이상 “구단”의 게시판에 공지함으로써 제 1항의 통지에 대신할 수 있습니다.  <br />
                      </li>
                      <li>
                        <strong> 제 11조 (구단의 의무) </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;(1) “구단”은 특별한 사정(업무상 또는 기술상 특별한 지장, 시스템 정기 점검 등 회사가 필요에 의하여 정한 날 또는 시간의 경우 회원에게 사전 공지한 후 제한 가능) 이 없는 한 회원이 항상 홈페이지를 이용할 수 있도록 개방합니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(2) “구단”은 관련법과 본 약관에서 정한 바에 따라 계속적이고 안정적으로 서비스를 제공하기 위하여 최선을 다하여 노력합니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(3) “구단”은 회원으로부터 서비스 이용과 관련하여 제기되는 의견에 대해서는 정당하다고 판단될 경우 적절한 절차를 거쳐 처리하며, 게시판 및 전자우편 등을 통해 처리 과정 및 결과를 전달합니다. 일정 기간 내에 처리가 불가한 경우에는 회원에게 그 사유와 처리 일정을 알려주어야 합니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(4) “구단”은 제공하고 있는 서비스가 기술적, 내용적 기타 “구단”측의 사정으로 인하여 그 제공의 중단 또는 변경이 불가피하다고 판단하는 경우 최소 1주일 전 게시판, 전자우편 등을 통해 이를 고지해야 하며 그에 상응하는 조치를 취할 수 있습니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(5) “회원”의 부주의나 실수 등 회원가입 시 결제나 인터넷에서의 구매활동이 끝난 이후에 발생하는 문제에 대해서는 “구단”이 책임을 지지 않습니다. <br />
                      </li>
                      <li>
                        <strong> 제 12조 (회원의 의무) </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;(1) “회원”은 다음 각 호의 행위를 하여서는 안되며, 사전 통지 없이 사용중지(회원자격 정지 또는 박탈) 할 수 있습니다.  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;가. “회원” 가입 신청 또는 변경 시 허위내용을 등록하는 행위 <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;나. 타인의 명의를 사용하거나 정보를 도용하는 행위 <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;다. “구단”과 기타 제 3자의 인격권 또는 저작권 등 지적재산권을 침해하거나 업무를 방해하는 행위 <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;라. “구단” 및 기타 제 3자의 명예를 손상시키는 행위 <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;마. 개인 이익을 위한 광고 내용, 욕설, 비방, 외설 또는 폭력적인 메시지가 담긴 글, 화상, 음성, 기타 공서양속에 반하는 정보를 공개 또는 게시하는 행위 <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;바. “구단”이 제공하는 서비스를 이용하여 영리 목적의 활동을 하는 행위 <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;사. 관련 법령에 의거 그 전송 또는 게시가 금지되는 정보(컴퓨터 프로그램 등)의 전송 또는 게시하는 행위 <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;아. “구단”의 직원이나 관리자를 가장하거나 사칭하여 또는 타인의 명의를 도용하여 글을 게시하거나 메일을 발송하는 행위 <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;자. 다른 회원에 대한 개인 정보를 그 동의 없이 수집, 저장, 공개하는 행위 <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;차. 서비스에 위해를 가하는 등 다른 회원의 건전한 서비스 이용을 저해하는 경우 <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;카. “구단”의 서비스 정보를 이용하여 얻은 정보를 “구단”의 사전 승낙없이 복제 또는 유통시키거나 상업적으로 이용하는 경우 <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;타. “구단”이 제공하는 서비스에 정한 약관 기타 서비스 이용에 관한 규정을 위반하거나 기타 불법적이고 부당한 행위 <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(2) “회원”은 본 약관의 규정, 관계법, 서비스 이용안내, 서비스와 관련하여 공지한 주의사항, “구단”이 통지하는 사항 등을 준수하여야 하며, 기타 “구단”의 업무에 방해되는 행위를 하여서는 안됩니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(3) “회원”은 “구단”이 서비스의 일환으로 필요하다고 인정되는 정보를 전자우편 등 광고의 형태로 제공받는 것에 동의합니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(4) “회원”이 구매활동 및 이벤트 서비스 등의 이용에 있어서 불성실한 행위를 할 경우 “구단”은 자체판단에 따라 일정 기간 그 회원의 해당 서비스 이용을 제한할 수 있습니다. <br />
                      </li>
                      <li>
                        <strong> 제 13조 (서비스의 제공) </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;(1) “구단”은 “회원”에게 아래와 같은 서비스를 제공합니다.  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;가. 티켓 구매 서비스 (할인, 선예매 등) <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;나. 멀티미디어 서비스 (BEARS TV, 갤러리 등) <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;다. 기록 확인 서비스 (팀, 선수) <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;라. 기타 “구단”이 추가 개발하거나 다른 회사와의 제휴 등을 통해 회원에게 제공하는 일체의 서비스 <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(2) “구단”은 “회원”에게 서비스 제공을 연중무휴, 1일 24시간을 원칙으로 합니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(3) “구단”은 컴퓨터 등 정보통신설비의 보수 점검, 교체 및 고장, 통신두절 또는 운영상 상당한 이유가 있는 경우 서비스의 제공을 일시적으로 중단할 수 있습니다.  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(4) 이 경우 “구단”은 제 10조에 정한 방법으로 회원에게 통합니다. 다만 “구단”이 사전에 통지할 수 없는 부득이한 사유가 있는 경우 사후에 통지할 수 있습니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(5) “구단”은 서비스 제공에 필요한 경우 정기점검을 실시할 수 있으며, 정기점검시간은 서비스제공화면에 공지한 바에 따릅니다. <br />
                      </li>
                      <li>
                        <strong> 제 14조 (서비스의 변경) </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;(1) “구단”은 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라 제공하고 있는 전부 또는 일부 서비스를 변경할 수 있습니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(2) 서비스의 내용, 이용방법, 이용시간에 대하여 변경이 있는 경우에는 변경사유, 변경될 서비스의 내용 및 제공일자 등은 그 변경전 7일 이상 해당 서비스 초기화면에 게시하여야 합니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(3) “구단”이 제공하는 서비스의 일부 또는 전부를 회사의 정책 및 운영의 필요상 수정, 중단, 변경할 수 있으며, 이에 대하여 관련법에 특별한 규정이 없는 한 회원에게 별도의 보상을 하지 않습니다. <br />
                      </li>
                      <li>
                        <strong> 제 15조 (손해배상) </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;“구단”은 서비스 요금이 무료인 동안의 서비스 이용과 관련하여 “회원”에게 발생한 어떠한 손해도 책임지지 않습니다.
                      </li>
                      <li>
                        <strong> 제 16조 (면책조항) </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;(1) “구단”은 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(2) “구단”은 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(3) “구단”은 회원이 서비스와 관련하여 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않습니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(4) “구단”은 회원 간 또는 회원과 제 3자 상호간에 서비스를 매개로 하여 거래 등을 한 경우에는 책임이 면제됩니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(5) “구단”은 고의에 의한 경우를 제외하고 회사가 제공하는 자료, 사실 기타 모든 정보의 신뢰도, 정확성에 대하여 책임을 지지 않습니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(6) “구단”이 무료로 제공하는 서비스 이용과 관련하여 관련법에 특별한 규정이 없는 한 책임을 지지 않습니다. <br />
                      </li>
                      <li>
                        <strong> 제 17조 (회원가입 또는 인터넷 통신판매에 대한 결제 및 대금 지불) </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;(1) “두산베어스닷컴”의 회원가입은 유료입니다. 가입 후 수신확인 통지를 하며 선택한 회원종류 따라 해당되는 상품을 배송합니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(2) 회원이 구매를 신청할 경우 “구단”은 구매 요청자에게 전자우편, 게시글, SMS 문자메시지 등의 방법으로 수신확인 통지를 합니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(3) 수신 확인 통지를 받은 사용자는 그 내용이 상이할 경우 배송 혹은 낙찰 확정 이전에 구매 신청 변경 및 취소 요청을 할 수 있으며 “구단”은 지체없이 그 요청에 따라 처리합니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(4) 구매를 원하는 회원은 무통장입금과 신용카드 등의 방법으로 대금 결제가 가능합니다.  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(5) 서비스 내에서 회원이 구매한 유료 서비스의 이용 기간은 구매 시 명시된 기간에 따릅니다.  <br />
                      </li>
                      <li>
                        <strong> 제 18조 (회원가입과 주문 취소와 교환, 환불) </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;(1) 회원 가입시 지불한 금액은 약관에 동의한 상태이기 때문에 취소나 반환이 안되며, 회원 고의로 탈퇴한 경우에도 취소나 반환은 안됩니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(2) 서비스를 통해 주문한 제품의 구매 취소는 “구단”에 전화를 통해서 연락을 해야 하며 이 경우 상품 취소를 위한 재발송 비용은 이용자가 부담합니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(3) “구단”의 서비스 외의 타 쇼핑몰(위팬, 인터파크 등)에서 구매한 제품에 대해서는 해당 쇼핑몰의 약관에 따르며, 이에 대해 “구단”에서 책임을 지지 않습니다. <br />
                      </li>
                      <li>
                        <strong> 제 19조 (양도금지) </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;(1) “회원”은 서비스의 이용권한, 기타 이용 계약상 지위를 타인에게 양도, 증여할 수 모든 권리 및 책임은 회원에게 있습니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(2) “구단”이 제3자에게 합병 또는 분할 합병되거나 서비스를 제3자에게 양도함으로써 서비스의 제공 주체가 변경되는 경우, 회사는 사전에 제9조의 통지방법으로 회원에게 통지합니다. 이 경우 합병, 분할합병, 서비스 양도에 반대하는 회원은 서비스 이용계약을 해지할 수 있습니다. <br />
                      </li>
                      <li>
                        <strong> 제 20조 (준거법 및 재판관할) </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;(1) “구단”과 “회원”간에 발생한 서비스 이용에 관한 분쟁에 대하여는 대한민국법을 준거법으로 합니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(2) “구단”과 “회원”간 발생한 분쟁에 관한 소송은 서울중앙지방법원을 관할 법원으로 합니다. <br />
                      </li>
                      <li>
                        <strong>부 칙</strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;1. 이 약관은 2024년 2월 1일부터 적용됩니다.<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;2. 이 약관은 2017년 7월 26일부터 시행되던 종전의 약관은 본 약관으로 대체합니다.<br />
                      </li>
                    </ul>
                  </div>
                </div>
                <ul className='check_box round small'>
                  <li role='presentation'>
                    <input type="checkbox" id="agree01" className="check_style" checked={termsChecked} onChange={() => setTermsChecked(!termsChecked)} />
                    <label htmlFor="agree01"><span>이용약관에 동의합니다.</span></label>
                  </li>
                </ul>
                <p className="title">개인정보 수집 및 이용에 대한 안내</p>
                <div className="scroll_box scroll">
                  <div class="page_content-wrap content-wrap">
                    <ul>
                      <li>
                        <strong>제1조. 개인정보의 수집 및 이용목적</strong>
                        회사는 다음과 같은 목적을 위하여 개인정보를 수집하고 있습니다.
                        <br />
                        가. 회원관리 : 회원제 서비스 이용 및 제한적 본인 확인제에 따른 본인확인,
                        개인식별, 가입의사 확인, 만14세 미만 아동 개인정보 수집 시 법정 대리인
                        동의여부 확인, 추후 법정 대리인 본인확인, 분쟁 조정을 위한 기록보존,
                        불만처리 등 민원처리, 고지사항 전달
                        <br />
                        나. 서비스 제공에 관한 계약 이행 : 컨텐츠 제공, 티켓 구매, 이벤트 신청
                        <br />
                        다. 마케팅•광고에의 활용 : 신규 서비스 개발 및 맞춤 서비스 제공, 통계학적
                        특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인, 이벤트 및 광고성
                        정보 제공 및 참여기회 제공, 접속빈도 파악, 회원의 서비스 이용에 대한 통계
                      </li>
                      <li>
                        <strong>제2조. 개인정보의 수집 및 이용항목</strong>
                        회사는 회원가입, 상담, 서비스 제공 등을 위해 아래와 같은 개인정보를 수집하고
                        있습니다.
                        <br />
                        <br />
                        <div class="table table-inborder scroll">
                          <table>
                            <tbody class="fw-400 line-h15">
                              <tr>
                                <th class="bg-gray-60 fixed">구분</th>
                                <td class="bg-gray-60" colspan="2">수집방법</td>
                                <td class="bg-gray-60">수집항목</td>
                              </tr>
                              <tr>
                                <th class="bg-gray-60" rowspan="3">회원가입</th>
                                <td>회원등록시</td>
                                <td>필수</td>
                                <td>
                                  &nbsp;ID, PW, 이름, 생년월일, 성별, 전화번호, 이메일, 본인인증정보
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  법정 대리인 <br />
                                  본인 인증시
                                </td>
                                <td>&nbsp;필수</td>
                                <td>
                                  (14세 미만 회원인 경우)
                                  <br />
                                  법정대리인 인증 정보 : 이름, 생년월일, 성별, 전화번호,
                                  중복가입확인정보
                                </td>
                              </tr>
                              <tr>
                                <td>본인인증시</td>
                                <td>&nbsp;필수</td>
                                <td>
                                  (14세 이상 회원인 경우)
                                  <br />
                                  법정대리인 인증 정보 : 이름, 생년월일, 성별, 전화번호,
                                  중복가입확인정보
                                </td>
                              </tr>
                              <tr>
                                <th class="bg-gray-60">홈페이지 이용</th>
                                <td>자동생성</td>
                                <td></td>
                                <td>쿠키정보</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </li>
                      <li>
                        <strong>제3조. 개인정보의 보유 및 이용기간</strong>
                        이용자의 개인정보는 수집 목적 달성 시 즉시 파기합니다. (단, 회사는 이용자의
                        탈퇴 요청 시 즉시 탈퇴 처리하며, 계정도용 방지를 위해 탈퇴 후 15일간
                        개인정보를 보유합니다.) 또한 관계 법령에 의해 일정 기간 동안 회원정보를
                        보유합니다. 법령상 의무이행을 위한 기간은 아래와 같습니다. <br />
                        가. 표시/광고에 관한 기록 : 6개월 (전자상거래 등에서의 소비자보호에 관한
                        법률) <br />
                        나. 계약 또는 청약철회 등에 관한 기록 : 5년 (전자상거래 등에서의
                        소비자보호에 관한 법률) <br />
                        다. 대금결제 및 재화 등의 공급에 관한 기록 : 5년 (전자상거래 등에서의
                        소비자보호에 관한 법률) <br />
                        라. 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래 등에서의
                        소비자보호에 관한 법률) <br />
                        마. 웹사이트 방문에 관한 기록 : 3개월 (통신비밀보호법)
                      </li>
                      <li>
                        <strong>제4조. 개인정보 파기절차 및 방법</strong>회사는 원칙적으로 개인정보
                        수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 파기절차
                        및 방법은 다음과 같습니다. <br />
                        가. 파기절차 <br />- 이용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된
                        후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련
                        법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후
                        파기됩니다. <br />
                        나. 파기방법 <br />- 전자적 파일형태로 저장된 개인정보는 정보를 재생할 수
                        없도록 기술적 방법을 사용하여 완전 삭제하여 파기합니다.
                      </li>
                      <li>
                        <strong>제5조. 개인정보의 제 3자 제공</strong>
                        가. 회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만,
                        아래의 경우에는 예외로 합니다. <br />
                        나. 이용자들이 사전에 동의한 경우 법령의 규정에 의거하거나, 수사 목적으로
                        법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
                      </li>
                      <li>
                        <strong>
                          제6조. 수집한 개인정보의 취급/처리의 위탁에 관한 사항
                        </strong>
                        회사는 아래와 같이 개인정보를 위탁하고 있으며, 관계 법령에 따라 위탁계약 시
                        개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고 있습니다. 회사의
                        개인정보 위탁처리 기관 및 위탁업무 내용은 아래와 같습니다.
                        <br />
                        <br />
                        업무위탁고지 <br />
                        <br />
                        회사는 개인정보 취급/처리업무 중 서비스 제공에 필요한 필수적 업무를 아래와
                        같이 외부 전문업체에 위탁하여 운영하고 있으며, 해당 업체는 서비스 이행을
                        위한 목적으로만 사용됩니다. 위탁 계약시 개인정보가 안전하게 관리될 수 있도록
                        필요한 사항을 규정해 관련 법규를 준수하고 있습니다.
                        <br />
                        <br />
                        <div class="table table-inborder scroll">
                          <table>
                            <tbody class="fw-400 line-h15">
                              <tr>
                                <td class="bg-gray-60">위탁받는자</td>
                                <td class="bg-gray-60">위탁업무 내용</td>
                              </tr>
                              <tr>
                                <td>인터파크</td>
                                <td>회원 티켓 예매, 유료회원 모집, 어린이회원 기념품 배송</td>
                              </tr>
                              <tr>
                                <td>위팬</td>
                                <td>성인회원 기념품 배송</td>
                              </tr>
                              <tr>
                                <td>데이타솔루션</td>
                                <td>홈페이지, APP 개발 및 유지보수</td>
                              </tr>
                              <tr>
                                <td>PND br /EATH</td>
                                <td>홈페이지, APP 콘텐츠 디자인 및 게시물 등록</td>
                              </tr>
                              <tr>
                                <td>SCI평가정보</td>
                                <td>홈페이지 회원가입 시 본인확인서비스 제공</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </li>
                      <li>
                        <strong>제7조. 이용자 및 법정대리인의 권리와 행사 방법</strong>
                        가. 이용자 및 법정대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세
                        미만 아동의 개인정보를 조회하거나 수정할 수 있으며 가입 해지를 요청할 수도
                        있습니다. <br />
                        나. 이용자 혹은 만 14세 미만 회원은 “내 정보” 메뉴에서 개인정보를 열람,
                        정정하거나 동의 철회할 수 있습니다. <br />
                        다. 혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체
                        없이 조치하겠습니다. <br />
                        라. 귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기
                        전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한, 잘못된 개인정보를
                        제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여
                        정정이 이루어지도록 하겠습니다. <br />
                        마. 회사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는
                        “3. 개인정보의 보유 및 이용기간”에 명시된 바에 따라 처리하고 그 외의 용도로
                        열람 또는 이용할 수 없도록 처리하고 있습니다.
                      </li>
                      <li>
                        <strong>제8조. 개인정보의 안전성 확보 조치에 관한 사항</strong>
                        가. 개인정보보호를 위한 기술적 대책 <br />
                        (1) 회사는 귀하의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조
                        또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적 대책을 강구하고
                        있습니다. <br />
                        (2) 귀하의 개인정보는 비밀번호에 의해 보호되고 있고 이용자 계정의 암호는
                        오직 본인만이 알 수 있으며, 개인정보 확인 및 변경도 비밀번호를 알고 있는
                        본인에 의해서만 가능합니다. <br />
                        (3) 회사는 해킹 등 외부침입에 대비하여 귀하의 개인정보가 유출되는 것을 막기
                        위해 현재 외부로부터 침입을 차단하는 장치를 이용하여 외부로부터의 공격, 해킹
                        등을 막고 있습니다. <br />
                        나. 개인정보보호를 위한 관리적 대책 <br />
                        (1) 회사는 귀하의 개인정보에 대한 접근권한을 최소한의 인원으로 제한하고
                        있습니다. 그 최소한의 인원에 해당하는 자는 다음과 같습니다. <br />- 이용자를
                        직접 상대로 하여 마케팅업무를 수행하는 자 <br />- 기타 업무상 개인정보의
                        취급이 불가피한 자
                        <br />
                        (2) 개인정보를 취급하는 직원을 대상으로 새로운 보안기술 습득 및
                        개인정보보호의무 등에 관해 정기적인 사내교육 및 외부위탁교육을 실시하고
                        있습니다. <br />
                        (3) 개인정보와 일반 데이터를 혼합하여 보관하지 않고 별도의 서버를 통해
                        분리하여 보관하고 있습니다. <br />
                        (4) 회사는 이용자 개인의 실수 혹은 인터넷의 본질적인 위험성으로 인하여
                        야기되는 개인정보유출에 대해 책임을 지지 않습니다. 이용자는 본인의
                        개인정보를 보호하기 위해서 자신의 계정과 비밀번호를 적절하게 관리하고, 그에
                        대한 책임을 져야 합니다.
                      </li>
                      <li>
                        <strong>
                          제9조. 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항
                        </strong>
                        회사는 이용자 맞춤 서비스를 제공하기 위해 이용자의 정보를 저장하고 수시로
                        찾아내는 '쿠키(cookie)' 등을 사용합니다. 쿠키는 회사의 웹사이트
                        접속 시 자동으로 이용자의 컴퓨터로 전송되는 아주 작은 텍스트 파일로 이용자
                        컴퓨터의 하드디스크에 저장되기도 합니다. <br />
                        <br />
                        가. 쿠키의 사용 목적 <br />- 이용자의 접속 빈도나 방문 시간 분석, 방문 회수
                        파악 등을 통한 이용자 맞춤형 서비스 제공 <br />
                        나. 쿠키의 설치/운영 및 거부 <br />
                        (1) 이용자는 쿠키에 대한 선택권을 가지고 있습니다. 이용자는 웹 브라우저의
                        설정을 변경하여 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을
                        거치거나, 아니면 쿠키의 저장을 거부할 수 있습니다.
                        <br />
                        (2) 단, 모든 쿠키의 저장을 거부하는 경우, 쿠키를 통해 회사에서 제공하는
                        서비스를 이용할 수 없습니다. <br />
                        (3) 웹 브라우저 상단의 "도구 &gt; 인터넷 옵션 &gt; 개인정보"에서
                        모든 쿠키를 다 받아들이거나, 쿠키가 설치될 때 통지를 보내도록 하거나, 아니면
                        모든 쿠키를 거부할 수 있는 선택권을 가질 수 있습니다.
                      </li>
                      <li>
                        <strong>제10조. 개인정보에 관한 민원서비스</strong>
                        회사는 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여
                        아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다. <br />
                        <br />
                        [개인정보 관리책임자] <br />- 성명 : 고영섭 대표이사 <br />- 이메일 :
                        bears.privacy@doosan.com <br /><br />
                        [개인정보 관리자] <br />- 성명 : 박진환 마케팅팀
                        팀장 <br />- 이메일 : bears.privacy@doosan.com
                        <br />
                        <br />
                        [개인정보 담당자] <br />- 성명 : 황인권 마케팅팀 수석 <br />- 이메일 :
                        bears.privacy@doosan.com <br />
                        귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을
                        개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 회사는 이용자들의
                        신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.
                        <br />
                        <br />
                        기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에
                        문의하시기 바랍니다. <br />- 개인정보침해신고센터 (privacy.kisa.or.kr /
                        국번없이 118) <br />- 대검찰청 사이버수사과 (spo.go.kr / 국번없이 1301)
                        <br />- 경찰청 사이버안전국 (cyberbureau.police.go.kr / 국번없이 182)
                        <br />- 개인정보분쟁조정위원회 (kopico.go.kr / 국번없이 1833-6972)
                      </li>
                      <li>
                        <strong>제11조. 개인정보의 열람청구</strong>
                        회사는 이용자의 개인정보를 보호하고 개인정보의 열람청구를 접수, 처리하기
                        위하여 다음과 같이 민원처리 콜센터를 운영하고 있습니다.
                        <br />
                        <br />
                        가. E-mail : bears.privacy@doosan.com <br />
                        나. 전화번호 : 02-2240-1777 <br />
                        다. FAX : 02-2240-1788 <br />
                        라. 등기우편 : 서울시 송파구 올림픽로 25 잠실야구장(잠실동 10) 두산베어스
                      </li>
                      <li>
                        <strong>제12조. 링크사이트</strong>
                        회사는 이용자께 다른 회사의 웹사이트 또는 자료에 대한 링크를 제공할 수
                        있습니다. 이 경우 회사는 외부사이트 및 자료에 대한 아무런 통제권이 없으므로
                        그로부터 제공받는 서비스나 자료의 유용성에 대해 책임질 수 없으며 보증할 수
                        없습니다. 회사가 포함하고 있는 링크를 클릭하여 타 사이트의 페이지로 옮겨갈
                        경우 해당 사이트의 개인정보보호정책은 회사와 무관하므로 새로 방문한 사이트의
                        정책을 검토해 보시기 바랍니다.
                      </li>
                      <li>
                        <strong>제13조. 개인정보 처리방침 변경</strong>
                        회사의 개인정보 처리방침은 정부의 정책 또는 보안기술의 변경에 따라 내용의
                        추가ㆍ삭제 및 수정이 있을 수 있으며 개정 전에 홈페이지를 통해 고지합니다.
                        <br />
                        - 공고일자 : 2024년 02월 01일 <br />
                        - 시행일자 : 2024년 02월 08일 <br />
                      </li>
                    </ul>
                  </div>
                </div>
                <ul className='check_box round small'>
                  <li role='presentation'>
                    <input type="checkbox" id="agree02" className="check_style" checked={privacyChecked} onChange={() => setPrivacyChecked(!privacyChecked)} />
                    <label htmlFor="agree02"><span>개인정보 수집 및 이용에 대한 약관에 동의합니다.</span></label>
                  </li>
                </ul>
                <div class="line_box p_14_24 mt_40">
                  <ul class="check_box round">
                    <li role="presentation">
                      <input type="checkbox" id="checkAll" className="check_style" checked={allChecked} onChange={handleAllCheck} />
                      <label htmlFor="checkAll"><span>전체 동의합니다.</span></label>
                    </li>
                  </ul>
                </div>
                <p style={{ fontSize: "0.75rem", fontWeight: "400", lineHeight: "1.3", letterSpacing: "0.02em", marginTop: "8px" }} class="sub-txt info-txt font-13">
                  가입하시기 전에 먼저 이용약관 및 개인정보처리방침을 확인해 주시기 바라며,회원님의 신상정보는 정보통신망 이용촉진 등에 관한 법률에 의거 보안이 유지됨을 약속 드립니다.
                </p>
              </div>
            </form>
          )}
          {step === 1 && (
            <div className="input_form">
              <ul id="info_section">
                <li className="id_section mb_40">
                  <div className="area_style">
                    <label htmlFor="idArea" className="label_style mb_10">아이디</label>
                    <input ref={idInputRef} type="text" required size={20} value={id}
                      className="line_box mb_10"
                      placeholder="아이디를 입력해주세요"
                      onChange={(e) => { setId(e.target.value); }}
                      onBlur={handleId} />
                      <button type="button" onClick={handleIdCheck} className='id_check_button mt_14' style={{display: "inline-block"}}>중복확인</button>
                    <span className={`mes_style ${messages.id.color} mb_10`} style={{display: "inline-block", marginLeft: "10px"}}>
                      {messages.id.text}
                    </span>
                  </div>
                </li>
                <hr className="mb_40" />
                <li className="pw_section mb_40">
                  <div className="area_style">
                    <label htmlFor="pwArea" className="label_style mb_10">비밀번호</label>
                    <input ref={pwInputRef} type="password" id="pwArea" required size={20} value={pw}
                      className="line_box mb_10"
                      placeholder="비밀번호를 입력해주세요"
                      onChange={(e) => { setPw(e.target.value); }}
                      onBlur={handlePw} />
                    <span className={`mes_style ${messages.pw.color} mb_10`}>
                      {messages.pw.text}
                    </span>
                    <p className="help_style">
                      영문 대소문자/숫자/특수문자 조합, 8자 ~ 16자
                    </p>
                  </div>
                </li>
                <li className="pw_section mb_40">
                  <div className="area_style">
                    <label htmlFor="pwArea" className="label_style mb_10">비밀번호 확인</label>
                    <input ref={pwInputRef} type="password" id="pwArea" required size={20} value={pw2}
                      className="line_box mb_10"
                      placeholder="비밀번호를 입력해주세요"
                      onChange={(e) => { setPw2(e.target.value); }}
                      onBlur={handlePw2} />
                    <span className={`mes_style ${messages.pw2.color} mb_10`}>
                      {messages.pw2.text}
                    </span>
                  </div>
                </li>
                <hr className="mb_40" />
                <li className="name_section mb_40">
                  <div className="area_style">
                    <label htmlFor="nameArea" className='label_style mb_10'>이름</label>
                    <input ref={nameInputRef} type="text" id="nameArea" required size={20} value={name}
                      className="line_box mb_10"
                      onChange={(e) => { setName(e.target.value); }}
                      onBlur={handleName} />
                    <span className={`mes_style ${messages.name.color} mb_10`}>
                      {messages.name.text}
                    </span>
                  </div>
                </li>
                <hr className="mb_40" />
                <li className="phone_section mb_40">
                  <div className="area_style">
                    <label htmlFor="phoneArea" className='label_style mb_10'>휴대전화</label>
                    <input ref={phoneInputRef} type="text" id="phoneArea" required size={6} value={phone}
                      className="line_box mb_10"
                      placeholder="010-1234-5678 형식으로 입력해주세요."
                      onChange={(e) => { setPhone(e.target.value); }}
                      onBlur={handlePhone}
                    />
                    <span className={`mes_style ${messages.phone.color} mb_10`}>
                      {messages.phone.text}
                    </span>
                  </div>
                </li>
                <hr className="mb_40" />
                <li className="email-section mb_40">
                  <div className="area_style">
                    <label htmlFor="emailArea" className="label_style mb_10">이메일</label>
                    <input ref={emailInputRef} type="text" id="emailArea" required size={20} value={email}
                      className="line_box mb_10"
                      onChange={(e) => { setEmail(e.target.value); }}
                      onBlur={handleEmail}
                    />
                    <span className={`mes_style ${messages.email.color} mb_10`}>
                      {messages.email.text}
                    </span>
                  </div>
                </li>
                <hr className="mb_40" />
                <li className="birth_section mb_40">
                  <div className="area_style">
                    <label htmlFor="birthArea" className="label_style mb_10">생년월일</label>
                    <input type="number" placeholder="년도(4자)" className="line_box select3" value={year} onChange={handleYearChange}/>
                    <input type="number" placeholder="월" className="line_box select3" value={month} onChange={handleMonthChange}/>
                    <input type="number" placeholder="일" className="line_box select3" value={day} onChange={handleDayChange} />
                  </div>
                </li>
                <hr className="mb_40" />
                <li className="sex_section mb_40">
                  <div className="area_style">
                    <label htmlFor="sexArea" className="label_style mb_10">성별</label>
                    <div className="select">
                      <label>
                        <input className="input_radio" id="male" type="radio" name="sex" value="male" checked onChange={handleSex} />
                        <span htmlFor="male" >남성</span>
                      </label>
                      <label>
                        <input className="input_radio" type="radio" name="sex" value="female" onChange={handleSex} />
                        <span htmlFor="female">여성</span>
                      </label>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}
          {step === 2 && (
            <div className="input_form">
              <p className="title">회원가입 완료</p>
              {/* 이곳에 step 2에 해당하는 내용 */}
              <p>회원가입이 완료되었습니다.</p>
            </div>
          )}
          <div className="mt_60">
            <div className="page_btn_wrap">
              {/* <Link to={`/signup/stepcheck?step=${step}`}> */}
              <button className="submit_style btn_join lightNavy" type="submit" disabled={step === 2 || !allChecked} onClick={handleSubmit}>다음</button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpCheck;