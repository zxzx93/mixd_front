import React, { useCallback, useEffect, useState } from "react";
import FindPwdEnd from "./FindPwdEnd";

import { ChangePw } from "../../../store/modules/auth";
import { useDispatch, useSelector } from "react-redux";
import FindPwdChangeStlyed from "./FindPwdChangeStlye";
import { withRouter } from "react-router";

const FindPwdChange = ({ CertificationNum, history }) => {
    const dispatch = useDispatch();
    const { ChangePassWordHashCode } = useSelector((state) => state.auth);

    const [ChangeMove, setChangeMove] = useState(false);
    const [message, setMessage] = useState(false);
    const [newPassWord, setNewPassWord] = useState(0);
    const [newPassWordConfirm, setNewPassWordConfirm] = useState(1);
    const [messageError, setMessageError] = useState("");

    const regRex = /^[a-zA-Z0-9]{8,16}$/;
    const newPassWordCheck = (e) => {
        setNewPassWord(e.target.value);
        console.log(regRex.test(e.target.value));
    };

    const newPassWordCheckConfirm = (e) => {
        setNewPassWordConfirm(e.target.value);
        console.log(regRex.test(e.target.value));
    };

    useEffect(() => {
        newPassWord === 0 || newPassWordConfirm === 0
            ? setMessageError("")
            : newPassWord === newPassWordConfirm
            ? setMessageError("")
            : setMessageError("비밀번호가 일치하지 않습니다");
    });

    console.log(newPassWord);
    console.log(newPassWordConfirm);
    console.log(ChangePassWordHashCode);

    const ChangePassWord = useCallback(
        (CertificationNum, newPassWord,newPassWordConfirm) => {
            console.log("ChangePassWordHashCode", ChangePassWordHashCode);
            let variable = {
                email: ChangePassWordHashCode.email,
                newPassword: newPassWord,
                certification_code: CertificationNum,
                hash: ChangePassWordHashCode.hash,
                hp: ChangePassWordHashCode.hp,
            };
            console.log("variable 변경 비번", variable);
            if(newPassWord === newPassWordConfirm){
                dispatch(ChangePw(variable));
                history.push("/findpwdend");
            }else{
                console.log("비말번호 다름");
            }
        },
        [dispatch]
    );

    return (
        <>
            <FindPwdChangeStlyed className="change_password">
                <div className="container">
                    <div className="change_info">
                        <p>
                            새 비밀번호는 8 - 16자리의
                            <br />
                            영문, 숫자를 조합해 만들어 주세요.
                        </p>
                    </div>
                    <form autoComplete="off">
                        <div className="change_input_box change_pwd">
                            <input
                                type="password"
                                placeholder="새 비밀번호 입력"
                                onChange={newPassWordCheck}
                            />
                        </div>
                        <div className="change_input_box change_pwd_check">
                            <input
                                type="password"
                                placeholder="새 비밀번호 입력 확인"
                                onChange={newPassWordCheckConfirm}
                            />
                            <span className="pwd_check"></span>
                        </div>
                        <p>{messageError}</p>
                    </form>
                </div>
                <div
                    onClick={() =>
                        ChangePassWord(CertificationNum, newPassWord,newPassWordConfirm)
                    }
                    className="change_wrap"
                >
                    <div
                        style={
                            newPassWord === newPassWordConfirm
                                ? newPassWord === 0 && newPassWordConfirm === 0
                                    ? { backgroundColor: "#f5f5f5" }
                                    : newPassWord === "" &&
                                      newPassWordConfirm === ""
                                    ? { backgroundColor: "#f5f5f5" }
                                    : {
                                          backgroundColor: "#000000",
                                          color: "#ffffff",
                                      }
                                : { backgroundColor: "#f5f5f5" }
                        }
                        className="change_btn"
                    >
                        변경
                    </div>
                </div>
            </FindPwdChangeStlyed>
        </>
    );
};

export default withRouter(FindPwdChange);
