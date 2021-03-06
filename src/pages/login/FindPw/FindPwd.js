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
                console.log("?????? ?????? ??? ??????");
            }
        },
        [dispatch]
    );

    console.log("?????? ??? ????????????", CertificationNum);
    console.log("?????????", emailSerch);
    console.log("????????? ??????", tel);
    console.log(
        "???????????? ????????? ??????",
        CertificationNum === findPwCertification_PassWord.certificationCode
    );
    console.log("?????? ??????", findPwCertification_PassWord.certificationCode);
    console.log("?????????", checkCertificationCode);

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
                                placeholder="????????? ??????"
                                onChange={emailSerchBtn}
                            />
                        </div>
                        <div className="pwd_phone">
                            <input
                                onChange={phoneNum}
                                type="text"
                                placeholder="????????? ??????(???????????????)"
                            />
                            <span
                                className="pwd_send_btn"
                                onClick={() => hpCertificationHandler(tel)}
                            >
                                {checkCertificationCode === undefined
                                    ? "???????????? ??????"
                                    : "???????????? ?????????"}
                            </span>
                        </div>
                        <div className="pwd_phone_insert">
                            <input
                                type="text"
                                placeholder="???????????? ??????"
                                onChange={CertificationNumber}
                            />
                            <span className="pw_num_check"></span>
                        </div>
                    </div>
                    <div className="explanation">
                        {CheckEmailRe ? (
                            ""
                        ) : emailSerch.length > 1 ? (
                            <p>???????????? ?????????</p>
                        ) : (
                            ""
                        )}

                        {telRe ? (
                            ""
                        ) : tel.length > 1 ? (
                            <p>???????????? ??? ???????????????</p>
                        ) : (
                            ""
                        )}
                        <p>
                            3??? ????????? ????????????(6??????)??? ????????? ?????????.
                            <br /> ??????????????? ???????????? ?????? ??????
                            <br /> "???????????? ?????????" ????????? ???????????????.
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
                            ??????
                        </div>
                    </div>
                </FindPwdStyled>
            )}
        </>
    );
};

export default FindPwd;
