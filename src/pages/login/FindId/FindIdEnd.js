import React from "react";
import { useSelector } from "react-redux";
import FindIdEndStlyed from "./FindIdEndStyle";
import { withRouter } from "react-router-dom";

const FindEmailEnd = ({ history }) => {
    const { findIdCertification_Email } = useSelector((state) => state.auth);

    // const sdfasdf = () => {
    //     history.push("/login");
    // };

    console.log(findIdCertification_Email);
    return (
        <FindIdEndStlyed className="success_id_search">
            <p>
                확인 된 고객님의 아이디 입니다.
                <br />
                개인 정보 보호를 위해 뒷자리는 ***으로 표시됩니다.
            </p>
            {findIdCertification_Email.map((value, key) => (
                <div className="find_id_wrap" key={key}>
                    <div className="find_id">{value}</div>
                </div>
            ))}
            <div className="login_return">
                <div
                    onClick={() => history.push("/login")}
                    className="find-btn"
                >
                    로그인
                </div>
            </div>
        </FindIdEndStlyed>
    );
};

export default withRouter(FindEmailEnd);
