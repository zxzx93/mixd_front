import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    findIdCertification,
    FindIdDuplicate,
} from "../../../store/modules/auth";

import FindEmailEnd from "./FindIdEnd";
import FindIdFromStlyed from "./FindidFormStyle";
import FindIdNone from "./FindIdNone";

const FindIdform = () => {
    const dispatch = useDispatch();

    const { findIdDuplicateError } = useSelector((state) => state.auth);

    const { findIdCertification_Email } = useSelector((state) => state.auth);

    const [pageMove, setPageMove] = useState(false);
    const [hpNumber, setHpNumber] = useState();
    const [CeNumber, setCeNumber] = useState(0);

    const checkCertificationCode = findIdCertification_Email.certificationCode;
    // console.log(findIdDuplicateError);
    console.log("findIdCertification_Email", findIdCertification_Email);

    const phoneTel = (e) => {
        setHpNumber(e.target.value);
    };

    // console.log(hpCertification.certificationCode);
    //휴대폰 인증

    const ChangePage = () => {
        if (CeNumber === checkCertificationCode) {
            CeNum();
            setTimeout(() => {
                setPageMove(!pageMove);
            }, 500);
        } else {
            alert("인증번호가 다릅니다")
        }
    };

    // console.log("인증번호", findIdCertification_Email.certificationCode);
    // console.log("내가 친", CeNumber);
    // console.log("할당한 인증번호", checkCertificationCode);
    // console.log("오류", findIdDuplicateError);
    // 휴대폰 인증 확인
    const hpDuplicateHanler = (e) => {
        setCeNumber(e.target.value);
    };

    const hpCertificationHandler = useCallback(
        (hpNumber) => {
            let HpNumber = {
                hp: hpNumber,
            };
            let regExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
            regExp.test(hpNumber)
                ? dispatch(findIdCertification(HpNumber))
                : console.log("안돼");
        },
        [dispatch]
    );
    const CeNum = useCallback(() => {
        let variable = {
            hp: hpNumber,
            certification_code: CeNumber,
        };

        dispatch(FindIdDuplicate(variable));
    }, [CeNumber]);

    let pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    return (
        <>
            {pageMove ? (
                !findIdDuplicateError ? (
                    <FindEmailEnd />
                ) : (
                    <FindIdNone setPageMove={setPageMove} pageMove={pageMove} />
                )
            ) : (
                <FindIdFromStlyed
                    checkCertificationCode={checkCertificationCode}
                    CeNumber={CeNumber}
                    className="id_search"
                >
                    <div className="id_search_tab">
                        <div className="id_phone">
                            <input
                                type="text"
                                onChange={phoneTel}
                                placeholder="휴대폰 번호(숫자만 입력)"
                            />
                            <span
                                className="send_btn"
                                onClick={() => hpCertificationHandler(hpNumber)}
                            >
                                {checkCertificationCode === undefined
                                    ? "인증번호 전송"
                                    : "인증번호 재전송"}
                            </span>
                        </div>
                        <div className="send_number">
                            <input
                                type="text"
                                placeholder="인증번호 입력"
                                disabled={false}
                                onChange={(e) => hpDuplicateHanler(e)}
                            />
                        </div>
                    </div>
                    <div className="explanation">
                        {checkCertificationCode === undefined ? (
                            ""
                        ) : (
                            <>
                                <p>
                                    {pattern_kor.test(findIdDuplicateError)
                                        ? findIdDuplicateError
                                        : "인증번호가 전송되었습니다."}
                                </p>
                            </>
                        )}

                        <p>
                            3분 이내로 인증번호(6자리)를 입력해 주세요.
                            <br /> 인증번호가 전송되지 않을 경우
                            <br /> "인증번호 재전송" 버튼을 눌러주세요.
                        </p>
                    </div>
                    <div className="find-wrap">
                        <div
                            className="find-btn"
                            onClick={ChangePage}
                            style={
                                CeNumber.length === 6
                                    ? { backgroundColor: "#000000" }
                                    : { backgroundColor: "#f5f5f5" }
                            }
                        >
                            찾기
                        </div>
                    </div>
                </FindIdFromStlyed>
            )}
        </>
    );
};

export default FindIdform;
