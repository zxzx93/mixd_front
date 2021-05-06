import React from "react";
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";

import SubHeader from "../../components/header/SubHeader";
import RegisterFinishStyld from "./RegisterFinishStyled";

function RegisterFinish() {
  const { registerUser } = useSelector(state => state.auth);

  const { mem_email, mem_nickname } = registerUser;

  return (
    <RegisterFinishStyld>
      <SubHeader name={"회원가입"} />

      <div id="container">
        <div className="congrateImg">
          <img src="/images/img_congrate.png" alt="congrate" />
        </div>

        <div className="contents">
          <div>
            축하합니다! <strong>{mem_nickname}</strong>님
          </div>
          <div>
            회원가입이 정상적으로 완료 되었습니다.
            <br />
            믹스디 ID는 <strong>{mem_email}</strong> 입니다.
          </div>
          <div>
            정상적인 믹스디 이용을 위해 <span>로그인</span>해주세요.
          </div>
        </div>

        <div className="button">
          <Link to="/login">
            <button className="login">로그인</button>
          </Link>
          <br />

          <Link to="/">
            <button className="main">메인으로</button>
          </Link>
        </div>
      </div>
    </RegisterFinishStyld>
  );
}

export default RegisterFinish;
