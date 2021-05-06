import React from "react";
import { withRouter } from "react-router";

import NoLoginPopUpStyle from "./NoLoginPopUpStyled";

const NoLoginPopUp = ({ modelCon, setNoLoginPop, history }) => {
  const goLogin = () => {
    setNoLoginPop(false);
    history.push("/login");
  };
  const goRegister = () => {
    setNoLoginPop(false);
    history.push("/register");
  };

  return (
    <NoLoginPopUpStyle
      visible={modelCon}
      closable={false}
      footer={null}
      zIndex={1400}
      className="no_login_wrap"
    >
      <div>
        <ul>
          <li>
            <p>
              앗!
              <br /> 로그인 후 이용 가능합니다.
            </p>
          </li>
          <li>
            <h1>아직 믹스디 회원이 아니신가요?</h1>
            <p>회원가입 후, 다양한 혜택을 누려보세요!</p>
          </li>
        </ul>

        <div className="login" onClick={goLogin}>
          로그인
        </div>
        <div className="sign" onClick={goRegister}>
          회원가입
        </div>
      </div>
    </NoLoginPopUpStyle>
  );
};

export default withRouter(NoLoginPopUp);
