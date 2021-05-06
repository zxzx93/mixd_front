import React, { useEffect, useState } from "react";
import { LoginStyled } from "./LoginStyled";
// import Logo from "../../../public/images/logo.png";
import LoginForm from "./LoginForm";

const Login = () => {
  const [pageName, setPageName] = useState("로그인");
  const [status] = useState(1);

  useEffect(() => {
    status === 1 ? setPageName("로그인") : setPageName("계정찾기");
  });

  return (
    <LoginStyled>
      <div id="login" className="fix">
        <div>
          {/* <img src="/images/logo.png" alt="" /> */}
        </div>
        <div id="form_tab">{status === 1 ? <LoginForm /> : ""}</div>
      </div>
    </LoginStyled>
  );
};

export default Login;
