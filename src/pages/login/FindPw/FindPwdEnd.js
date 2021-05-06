import React from "react";
import { withRouter } from "react-router";
import SubHeader from "../../../components/header/SubHeader";
import FindPwdEndStyled from "./FindPwdEndStyle";

const FindPwdEnd = ({history}) => {
    const name ="계정찾기"
    return (
        <>
            <SubHeader name={name} />
            <FindPwdEndStyled className="change_success">
                <div className="change_result_info">
                    <p>비밀번호가 성공적으로 변경 되었습니다.</p>
                </div>
                <div className="pwd_return_btn" onClick={() => history.push("/login")}>
                    <div className="login_btn">로그인</div>
                </div>
            </FindPwdEndStyled>
        </>
    );
};

export default withRouter(FindPwdEnd);
