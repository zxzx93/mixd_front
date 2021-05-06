import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input } from "antd";

import PassChangeDrawerStyled from "./PassChangeDrawerStyled";
import SubHeader from "./../../../components/header/SubHeader";
import {
  passwordCertification,
  passwordChange,
} from "../../../store/modules/auth";
import { getUserToken } from "../../../util/decryptUser";
import useInputs from "../../../hooks/useInputs";

const PassChangeDrawer = ({ visible, close, value, setValue }) => {
  const { currentPassword } = value;
  const { setCurrentPassword } = setValue;

  const dispatch = useDispatch();
  const { passwordcertificationSuccess } = useSelector(state => state.auth);

  const { token } = getUserToken();

  const [passError, setPassError] = useState(
    "현재 비밀번호를 입력해 주세요."
    // '비밀번호가 일치하지 않습니다.'
    // ''
  );

  const [newPassError, setNewPassError] = useState(
    ""
    // '새로운 비밀번호를 입력해 주세요.'
    // '8~16자리의 영문, 숫자를 조합'
  );

  const [newPassCheckError, setNewPassCheckError] = useState(
    ""
    // '비밀번호가 비밀번호가 일치하지 않습니다.'
  );

  const [newPassword, setNewPassword] = useState(""); //새로운 비밀번호
  const [newPasswordCertification, setNewPasswordCertification] = useState(""); //새로운 비밀번호 확인
  const [regCheck, setRegCheck] = useState("");

  // console.log(newPassword);
  // console.log(newPasswordCertification);
  // console.log(currentPassword);

  const passwordCertificationHandler = password => {
    // console.log("currentPassword", password);
    let currentPassword = {
      nowPassword: password,
    };
    dispatch(passwordCertification(currentPassword, token));
  };

  const passwordChangeHandler = (currentPassword, newPassword) => {
    // console.log("currentPassword, newPassword", currentPassword, newPassword);
    let password = {
      nowPassword: currentPassword,
      newPassword: newPassword,
    };
    // console.log("regCheck: ", regCheck);
    if (regCheck) {
      dispatch(passwordChange(password, token));
    }
  };

  const passwordValidation = useCallback(
    e => {
      const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
      const PassWordValidation = regExp.test(e.target.value);
      // console.log(e.target.value);
      // console.log(PassWordValidation);

      setRegCheck(PassWordValidation);
      if (PassWordValidation) {
        setNewPassError("사용가능한 비밀번호 입니다.");
      } else {
        setNewPassError("8~16자리의 영문,숫자를 조합");
      }
      setNewPassword(e.target.value);
    },
    [newPassword]
  );

  const passwordCompare = e => {
    // console.log("새로운 비밀번호 확인", e.target.value);
    setNewPasswordCertification(e.target.value);
    if (newPassword === e.target.value) {
      setNewPassCheckError("비밀번호가 일치합니다.");
    } else {
      setNewPassCheckError("비밀번호가 일치하지 않습니다");
    }
  };

  const reFreshCancleBtn = () => {
    setNewPassword("");
    setNewPasswordCertification("");
    setNewPassError("");
    setNewPassCheckError("");
    close();
  };

  return (
    <PassChangeDrawerStyled
      visible={visible}
      closable={false}
      footer={
        <div className="pass_change_btns">
          <Button onClick={reFreshCancleBtn}>취소</Button>
          <Button
            disabled={newPassword === newPasswordCertification ? false : true}
            onClick={() => passwordChangeHandler(currentPassword, newPassword)}
          >
            저장
          </Button>
        </div>
      }
    >
      <SubHeader name={"비밀번호 변경"} useToggle={close} unUseCart={true} />

      <div className="pass_change_wrap">
        <div className="now_pass_wrap">
          <p className="modify_title">현재 비밀번호</p>
          <div>
            <Input
              type="password"
              // disabled={true}
              // className="err"
              value={currentPassword}
              onChange={setCurrentPassword}
            />
            <Button
              // disabled={true}
              onClick={() => passwordCertificationHandler(currentPassword)}
            >
              확인
            </Button>
          </div>
          <span
            className="msg"
            // className="msg err"
          >
            {passError}
          </span>
        </div>

        <div className="new_pass_wrap">
          <p className="modify_title">새로운 비밀번호</p>
          <div>
            <Input
              type="password"
              // className="err"
              disabled={!passwordcertificationSuccess}
              value={newPassword}
              onChange={e => passwordValidation(e)}
            />
          </div>
          <span
            // className="msg"
            className="msg err"
          >
            {newPassError}
          </span>
        </div>

        <div className="new_pass_check">
          <p className="modify_title">새로운 비밀번호 확인</p>
          <div>
            <Input
              type="password"
              // className="err"
              disabled={!passwordcertificationSuccess}
              value={newPasswordCertification}
              onChange={e => passwordCompare(e)}
            />
          </div>
          <span className="msg err">{newPassCheckError}</span>
        </div>
      </div>
    </PassChangeDrawerStyled>
  );
};

export default PassChangeDrawer;
