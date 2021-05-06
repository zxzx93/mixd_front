import React from "react";
import { withRouter } from "react-router";
import FindIdNoneStyled from "./FindIdNoneStyle";

const FindIdNone = ({setPageMove,pageMove,history}) => {
    return (
        <FindIdNoneStyled className="none_id">
            <p>
                가입 정보가 없습니다. <br />
                입력하신 정보를 확인해 주시거나, <br />
                [회원가입]을 통해 믹스디 가입을 진행해 주세요.
            </p>
            <div
                className="login_return"
            >
                <div className="find-btn" onClick={() => setPageMove(!pageMove)}>아이디 찾기</div>
                <div className="register-btn" onClick={() => history.push("/register")}>회원가입</div>
            </div>
        </FindIdNoneStyled>
    );
};

export default withRouter(FindIdNone) ;
