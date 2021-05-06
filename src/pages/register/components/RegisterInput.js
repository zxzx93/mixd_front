import React, { useState, useCallback, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { DelayInput } from "react-delay-input";
import { emailDuplicate, nicknameDuplicate } from "../../../store/modules/auth";

function RegisterInput({ value, setValue }) {
  const dispatch = useDispatch();
  const {
    emailDuplicateError,
    emailDuplicateMsg,
    nicknameDuplicateError,
    nicknameDuplicateMsg,
  } = useSelector((state) => state.auth);

  const [emailFocus, setEmailFocus] = useState(false);
  const [nickNameFocus, setNickNameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const emailInput = useRef();

  const {
    email, //전체 이메일 본인이 적은 것
    emailOptionValue, //이메일 추가 옵션 선택
    nickname,
    password,
    name,
    hpNumber,
    hpCode,
    passwordCheck,
    passwordError,
  } = value;
  const {
    onChangeEmail,
    onChangeEmailOptionValue,
    onChangeNickname,
    onChangePassword,
    setName,
    setPasswordCheck,
    setPasswordError,
    setAllEmail,
  } = setValue;

  useEffect(() => {
    // AllEmailOptionHandler(email, emailOptionValue); //이메일 옵션 선택이 있을 경우 사용함
    AllEmailOptionHandler(email, emailOptionValue);
  }, [email, emailOptionValue]);

  const AllEmailOptionHandler = (email, emailOptionValue) => {
    console.log("확인용", email, emailOptionValue);
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    let AllEmail = email + emailOptionValue;
    const emailSubString =
      email && emailOptionValue
        ? AllEmail.substring(0, AllEmail.lastIndexOf("@"))
        : AllEmail;
    const emailValidation = regExp.test(emailSubString);

    let Email = {
      email: emailSubString,
    };

    //이메일 옵션 선택이 있을 경우 사용함
    // let mail = {
    //   email: AllEmail,
    // };

    dispatch(emailDuplicate(Email));
    setAllEmail(emailSubString);

    //이메일 옵션 선택이 있을 경우 사용함
    // if (emailValidation) {
    //   setEmailFocus(false);
    //   dispatch(emailDuplicate(Email));
    //   setAllEmail(emailSubString);
    // } else {
    //   //주소 옵션 선택 했을때
    //   if (emailOptionValue) {
    //     setEmailFocus(false);
    //     dispatch(emailDuplicate(mail));
    //     setAllEmail(AllEmail);
    //   }
    // }
  };

  const nickNameDuplicateHandler = useCallback(
    (e) => {
      let nickName = {
        nickname: e.target.value,
      };

      onChangeNickname(e);
      setNickNameFocus(true);
      dispatch(nicknameDuplicate(nickName));
    },
    [dispatch]
  );

  const [regCheck, setRegCheck] = useState(); //비밀번호 8-16 자리 영문 ,숫자 유효성 검사
  const passwordValidation = useCallback(
    (e) => {
      const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
      const PassWordValidation = regExp.test(e.target.value);

      setRegCheck(PassWordValidation);
      onChangePassword(e);
      // setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const [nameRegCheck, setNameRegCheck] = useState(); //이름 유효성 검사
  const nameValidation = useCallback(
    (e) => {
      console.log(e.target.value);
      setName(e.target.value);
      const regExp = /^[가-힣]{2,}$/; // 숫자,특수문자,띄어쓰기 불가능, 2자이상 써야함
      const NameValidation = regExp.test(e.target.value);
      setNameRegCheck(NameValidation);
    },
    [name]
  );

  return (
    <>
      <div className="email">
        <div>
          <div>이메일</div>
        </div>
        <DelayInput
          id="email"
          type="email"
          value={email}
          minLength={2}
          delayTimeout={300}
          placeholder="이메일 입력"
          ref={emailInput}
          onChange={onChangeEmail}
          onFocus={() => setEmailFocus(true)}
        />
        {emailDuplicateMsg === null ? (
          <img
            className="complete"
            src="/images/complete.png"
            alt="이메일 complete"
          />
        ) : (
          ""
        )}

        {/* <select
          name="email"
          id="email_list"
          value={emailOptionValue}
          onChange={onChangeEmailOptionValue}
          // disabled={!emailFocus}
        >
          <option value="">주소 직접 입력</option>
          <option value="@naver.com">naver.com</option>
          <option value="@gmail.com">gmail.com</option>
          <option value="@daum.net">daum.net</option>
          <option value="@nate.com">nate.com</option>
          <option value="@hanmail.net">hanmail.net</option>
          <option value="@kakao.com">kakao.com</option>
        </select> */}
        <span className="email_msg" style={{ color: "#ff3358" }}>
          {emailFocus
            ? emailDuplicateError
            : emailFocus
            ? emailDuplicateMsg === null
            : ""}
        </span>
      </div>

      <div className="nickname">
        <div>
          <div>닉네임</div>
        </div>
        <DelayInput
          id="nickname"
          type="text"
          value={nickname}
          minLength={2}
          delayTimeout={300}
          placeholder="닉네임 입력"
          onChange={(e) => nickNameDuplicateHandler(e)}
          onFocus={() => setNickNameFocus(true)}
        />
        {nicknameDuplicateMsg === null ? (
          <img
            className="complete"
            src="/images/complete.png"
            alt="닉네임 complete"
          />
        ) : (
          ""
        )}

        {nickname ? (
          <span className="nick_msg" style={{ color: "#ff3358" }}>
            {nicknameDuplicateError}
          </span>
        ) : nickNameFocus ? (
          <span className="nick_msg" style={{ color: "#ff3358" }}>
            2~8자 한글,영문,숫자만 입력 가능합니다.
          </span>
        ) : nicknameDuplicateError ? (
          <span className="nick_msg" style={{ color: "#ff3358" }}>
            {nicknameDuplicateError}
          </span>
        ) : (
          <span className="nick_msg1">
            닉네임은 8자 이내로 설정 가능합니다.
          </span>
        )}
      </div>

      <div className="pass">
        <div>비밀번호</div>

        {regCheck ? (
          <img className="complete" src="/images/complete.png" alt="complete" />
        ) : (
          ""
        )}
        <input
          id="pass"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={passwordValidation}
          onFocus={() => setPasswordFocus(true)}
        />
      </div>

      <div className="pass_check">
        <div>
          <div>비밀번호 확인</div>
        </div>
        <input
          id="pass_check"
          type="password"
          placeholder="비밀번호 확인"
          value={passwordCheck}
          onChange={setPasswordCheck}
        />
      {password.length > 1 &&
      passwordCheck.length > 1 &&
      password === passwordCheck ? (
        <img className="password_complete" src="/images/complete.png" alt="complete" />
        ) : passwordCheck.length > 1 && password !== passwordCheck ? (
          <span className="passchk_msg" style={{ color: "#ff3358" }}>
          비밀번호가 다릅니다.
        </span>
      ) : (
        ""
        )}
        </div>

      <div className="pass_title">
        {passwordFocus === false ? (
          <span className="pass_msg">
            8-16자리의 영문,숫자만 입력 가능합니다.
          </span>
        ) : !regCheck ? (
          <span className="pass_all_msg" style={{ color: "#ff3358" }}>
            8-16자리의 영문,숫자만 입력 가능합니다.
          </span>
        ) : (
          ""
        )}
      </div>

      <div className="name">
        <div>
          <div>이름</div>
        </div>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="이름"
          value={name}
          onChange={(e) => nameValidation(e)}
          onFocus={() => setNameFocus(true)}
        />

        {nameFocus === false ? (
          <span className="name_msg"></span>
        ) : !nameRegCheck ? (
          <span className="name_msg" style={{ color: "#ff3358" }}>
            숫자, 특수문자 입력은 불가능합니다.
          </span>
        ) : (
          <img className="complete" src="/images/complete.png" alt="complete" />
        )}
      </div>
    </>
  );
}

export default RegisterInput;
