import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FindPwdChange from "./FindPwdChange";
import FindPwdStyled from "./FIndPwdStyle";

import {
    findPwCertification,
    FindPwDuplicate,
} from "../../../store/modules/auth";

const FindPwd = () => {
    const dispatch = useDispatch();
    const { findPwCertification_PassWord } = useSelector((state) => state.auth);

    const [CertificationNum, setCertificationNum] = useState(0);
    const [ChangeMove, setChangeMove] = useState(false);
    const [goToChangePw, setgoToChangePw] = useState(false);
    const [emailSerch, setEmailSerch] = useState(0);
    const [CheckEmailRe, setCheckEmailRe] = useState();
    const [tel, setTel] = useState(0);
    const [telRe, setTelRe] = useState();

    const emailSerchBtn = (e) => {
        setEmailSerch(e.target.value);
        let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        const checkEmail = regExp.test(e.target.value);
        setCheckEmailRe(checkEmail);
    };

    const phoneNum = (e) => {
        setTel(e.target.value);
        let regExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
        regExp.test(tel);
        setTelRe(regExp.test(tel));
    };

    const CertificationNumber = (e) => {
        setCertificationNum(e.target.value);
    };

    const checkCertificationCode =
        findPwCertification_PassWord.certificationCode;
    const hpCertificationHandler = useCallback(
        (tel) => {
            console.log(tel);
            let HpNumber = {
                hp: tel,
            };
            dispatch(findPwCertification(HpNumber));
        },
        [dispatch]
    );
    useEffect(() => {
        if (CertificationNum === checkCertificationCode) {
            setgoToChangePw(!goToChangePw);
        }
    }, [CertificationNum]);

    console.log("goToChangePw", goToChangePw);
    const hpDuplicateHanler = useCallback(
        (email, tel, CertificationNum, goToChangePw) => {
            let variable = {
                hp: tel,
                email: email,
                certification_code: CertificationNum,
            };
            console.log(goToChangePw);
            if (goToChangePw) {
                dispatch(FindPwDuplicate(variable));
                setTimeout(() => {
                    setChangeMove(!ChangeMove);
                }, 200);
            } else {
                console.log("진짜 이건 좀 되라");
            }
        },
        [dispatch]
    );

    console.log("내가 친 인증번호", CertificationNum);
    console.log("이메일", emailSerch);
    console.log("핸드폰 번호", tel);
    console.log(
        "인증번호 같은지 확인",
        CertificationNum === findPwCertification_PassWord.certificationCode
    );
    console.log("인증 번호", findPwCertification_PassWord.certificationCode);
    console.log("할당한", checkCertificationCode);

    return (
        <>
            {ChangeMove ? (
                <FindPwdChange CertificationNum={CertificationNum} />
            ) : (
                <FindPwdStyled
                    checkCertificationCode={checkCertificationCode}
                    className="pwd_search"
                >
                    <div className="pwd_search_con">
                        <div className="pwd_id_insert">
                            <input
                                type="text"
                                placeholder="이메일 입력"
                                onChange={emailSerchBtn}
                            />
                        </div>
                        <div className="pwd_phone">
                            <input
                                onChange={phoneNum}
                                type="text"
                                placeholder="휴대폰 번호(숫자만입력)"
                            />
                            <span
                                className="pwd_send_btn"
                                onClick={() => hpCertificationHandler(tel)}
                            >
                                {checkCertificationCode === undefined
                                    ? "인증번호 전송"
                                    : "인증번호 재전송"}
                            </span>
                        </div>
                        <div className="pwd_phone_insert">
                            <input
                                type="text"
                                placeholder="인증번호 입력"
                                onChange={CertificationNumber}
                            />
                            <span className="pw_num_check"></span>
                        </div>
                    </div>
                    <div className="explanation">
                        {CheckEmailRe ? (
                            ""
                        ) : emailSerch.length > 1 ? (
                            <p>이메일이 틀렸다</p>
                        ) : (
                            ""
                        )}

                        {telRe ? (
                            ""
                        ) : tel.length > 1 ? (
                            <p>전화번호 가 틀렸습니다</p>
                        ) : (
                            ""
                        )}
                        <p>
                            3분 이내로 인증번호(6자리)를 입력해 주세요.
                            <br /> 인증번호가 전송되지 않을 경우
                            <br /> "인증번호 재전송" 버튼을 눌러주세요.
                        </p>
                    </div>
                    <div className="pwd_search_confirm">
                        <div
                            className="pwd_search_btn"
                            onClick={() =>
                                hpDuplicateHanler(
                                    emailSerch,
                                    tel,
                                    CertificationNum,
                                    goToChangePw
                                )
                            }
                            style={
                                CertificationNum.length === 6
                                    ? {
                                          backgroundColor: "#000000",
                                          color: "#ffffff",
                                      }
                                    : { backgroundColor: "#f5f5f5" }
                            }
                        >
                            찾기
                        </div>
                    </div>
                </FindPwdStyled>
            )}
        </>
    );
};

export default FindPwd;
