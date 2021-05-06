import React from "react";
import { Privacycontents } from "../privacy/PrivacyInfo";
import { Anticon } from "../faq/FaqStyled";
import SubHeader from "../../components/header/SubHeader";
import PrivacyStyled from "../privacy/PrivacyStyled";

function singUpPersonal_info() {
  const name = "(필수) 개인 정보 처리 방침";

  let codes = Privacycontents.content;
  const createMarkup = () => {
    return { __html: codes };
  };
  return (
    <PrivacyStyled>
      <Anticon dangerouslySetInnerHTML={createMarkup()}></Anticon>
      <span className="info_back"></span>
    </PrivacyStyled>
  );
}

export default singUpPersonal_info;
