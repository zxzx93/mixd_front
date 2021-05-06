import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Timer from "../../../components/Timer/Timer";

import {
  hpCertification,
  hpDuplicate,
  register,
} from "../../../store/modules/auth";

const HpCertification = ({ hpNumber, setHpNumber, hpCode, setHpCode }) => {
  const dispatch = useDispatch();
  const { hpCertificationData } = useSelector(state => state.auth);

  const [nTimeLimit, setNTimeLimit] = useState("");

  useEffect(() => {
    setNTimeLimit(hpCertificationData.nTimeLimit || "");
  }, [hpCertificationData]);

  const [hpDisabled, setHpDisabled] = useState(false); //휴대폰 인증 전송 클릭시 disabled
  //휴대폰 인증
  const hpCertificationHandler = useCallback(
    hpNumber => {
      let HpNumber = {
        hp: hpNumber,
      };
      dispatch(hpCertification(HpNumber, "register")); //type: register 같이 보내줌
      setHpDisabled(true);
    },
    [dispatch]
  );

  console.log(hpCertificationData.nTimeLimit);
  console.log(hpCertificationData.certificationCode);

  // console.log(hpCode);
  console.log("hpDisabled", hpDisabled);

  // let min = parseInt((seconds % 3600) / 60);
  // let sec = seconds % 60;

  //휴대폰 인증 확인
  const hpDuplicateHanler = useCallback(
    (hpNumber, hpCode) => {
      let variable = {
        hp: hpNumber,
        certification_code: hpCode,
      };
      dispatch(hpDuplicate(variable));
    },
    [dispatch]
  );

  const hpValidation = useCallback(e => {
    const regExp = /^[0-9\b -]{0,11}$/;
    const HpValidation = regExp.test(e.target.value);

    if (HpValidation) {
      setHpNumber(e);
    }
  }, []);

  // console.log("hpNumber:", hpNumber);
  return (
    <>
      <div className="phone">
        <div>
          <div>휴대폰 번호</div>
          <span className="phone_all_msg"></span>
        </div>
        <input
          id="phone"
          type="tel"
          placeholder="숫자만 입력"
          value={hpNumber}
          onChange={hpValidation}
        />
        <button
          style={
            hpDisabled
              ? { backgroundColor: "#d1d1d1" }
              : { backgroundColor: "#000" }
          }
          type="button"
          className="certiBtn"
          disabled={hpDisabled}
          onClick={() => {
            hpCertificationHandler(hpNumber);
          }}
        >
          인증번호 전송
        </button>
      </div>

      <div className="phone_check">
        <div>인증번호</div>
        <span style={{ position: "relative" }}>
          {nTimeLimit ? <Timer time={nTimeLimit} className="countDown" /> : ""}
          <input
            id="phone_check"
            type="text"
            name="certification"
            placeholder="인증번호"
            value={hpCode}
            onChange={setHpCode}
            // ref={register({ required: true })}
          />
        </span>
        <button
          type="button"
          className="checkBtn"
          onClick={() => {
            hpDuplicateHanler(hpNumber, hpCode);
          }}
        >
          확인
        </button>
        {hpCode === hpCertificationData.certificationCode ? (
          <span className="phone_msg">인증번호가 일치 합니다.</span>
        ) : !(hpCode.length >= 6) ? (
          <span className="phone_msg"></span>
        ) : (
          <span className="phone_msg">인증번호가 일치하지 않습니다.</span>
        )}

        {/* 인증번호가 전송되었습니다. , 인증번호가 일치하지 않습니다. , 인증시간이 만료되었습니다. , 인증번호가 재전송되었습니다., 인증이 완료되었습니다. */}
      </div>
    </>
  );
};
//|| hpCertificationData.nTimeLimit < 180
export default HpCertification;
