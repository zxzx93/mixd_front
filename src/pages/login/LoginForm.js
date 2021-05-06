import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import _ from "lodash/fp";
import SubHeader from "../../components/header/SubHeader";

import { logIn } from "../../store/modules/auth";

const LoginForm = ({ history }) => {
    const dispatch = useDispatch();
    const { logInError, logInDone } = useSelector((state) => state.auth);
    const { register, handleSubmit } = useForm();
    const [emailValues, setEmailValues] = useState(1);
    const [passWordValues, setPasswordValues] = useState(1);

    useEffect(() => {
        if (logInDone) {
            history.push("/mypage");
        }
    });

    const signInHandler = useCallback(
        (userInfo, e) => {
            e.preventDefault();
            dispatch(logIn(userInfo));
        },
        [dispatch]
    );

    const emailValue = (e) => {
        setEmailValues(e.target.value);
    };

    const passWordValue = (e) => {
        setPasswordValues(e.target.value);
    };
    console.log(emailValues);
    console.log(passWordValues);
    return (
        <>
            <SubHeader name={"로그인"} unUseCart={true} />
            <div id="login_form">
                <form id="login_form" onSubmit={handleSubmit(signInHandler)}>
                    <div>
                        <div>
                            {/* <!-- Script 참고 하시면 됩니다 -->
                    <!-- default / 영역 잡아두기 용 --> */}
                            <span className="login_alarm"></span>
                        </div>
                        <div className="input_box">
                            <input
                                type="text"
                                name="userId"
                                placeholder="이메일 입력"
                                onChange={emailValue}
                                ref={register}
                            />
                        </div>

                        <div className="input_box">
                            <input
                                type="password"
                                name="password"
                                placeholder="비밀번호 입력"
                                onChange={passWordValue}
                                // value={}
                                ref={register}
                            />
                        </div>

                        {logInError ? (
                            <div className="error_info">
                                <p>{logInError.data}</p>
                            </div>
                        ) : (
                            ""
                        )}

                        <div
                            className="login_btn"
                        >
                            <input 
                            style={
                                emailValues.length > 5 &&
                                passWordValues.length > 7
                                    ? {backgroundColor:"#000000"}
                                    : {backgroundColor: "#d1d1d1"}
                            } type="submit" value="로그인" />
                        </div>

                        <div className="email">
                            <div>
                                <Link to="/register">이메일로 회원가입</Link>
                            </div>
                        </div>
                        <div className="search_line">
                            <span
                                onClick={() =>
                                    history.push("/findIdPwform", { data: "1" })
                                }
                                className="search_id"
                            >
                                아이디 찾기
                            </span>
                            <span className="between_line"></span>
                            <span
                                className="search_pwd"
                                onClick={() =>
                                    history.push("/findIdPwform", { data: "2" })
                                }
                            >
                                비밀번호 찾기
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default withRouter(LoginForm);
