import React from "react";
import { Link } from "react-router-dom";
import NoLoginStyled from "./MypageNoLoginStyled";

const MypageNologin = () => {
  return (
    <NoLoginStyled id="section">
      
      <div className="non_login_wrap">
        <div className="non_login_icon">
            <img src="/images/truck.png" alt="트럭아이콘" />
        </div>
          <div className="non_login_title">
            <div>
              <p>믹스디 회원은</p>
              <h1>무조건 무료배송!</h1>
            </div>
          </div>
      </div>

      <div className="non_user">
        <div className="non_login">
          <img src="/images/check_b.svg" alt="체크아이콘" />
          <p>이미 믹스디 회원이신가요?</p>
          <Link to="/login">로그인</Link>
        </div>

        <div className="non_signup">
          <img src="/images/check_b.svg"alt="체크아이콘" />
          <p>아직 믹스디 회원이 아니신가요?</p>
          <Link to="/register">회원가입</Link>
        </div>
      </div>

    </NoLoginStyled>
  );
};

export default MypageNologin;
