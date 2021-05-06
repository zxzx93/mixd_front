import React from "react";
import { Privacycontents} from "./PrivacyInfo";
import { Anticon } from './../faq/FaqStyled';
import SubHeader from './../../components/header/SubHeader';
import PrivacyStyled from './PrivacyStyled';

// console.log(codes);
const Privacy = () => {
  const name ="개인정보 취급방침";

  let codes = Privacycontents.content
  const createMarkup = () => {
    return { __html: codes };
  };
  return (
    <PrivacyStyled>
      <Anticon dangerouslySetInnerHTML={createMarkup()}></Anticon>
      <SubHeader name={name} unUseCart={true} />
      {/* {codes.map((value, index) => {
        return (
          <div angerouslySetInnerHTML={{ __html: codes }} className="lists" key={index}>
            <h1>{value.title}</h1>
            {value.lists.map((el, i) => (
              <p key={i}>
                {el}
              </p>
            ))}
          </div>
        );
      })} */}
    </PrivacyStyled>
  );
};

export default Privacy;
