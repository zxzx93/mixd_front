import React from "react";
import { ServiceContents } from "./ServiceInfo";
import ServiceStyled from './ServiceStyled';
import SubHeader from './../../components/header/SubHeader';

const Service = () => {
  const name ="서비스 이용약관";

  return (
    <ServiceStyled>
      <SubHeader name={name} unUseCart={true} />
      {ServiceContents.map((value, index) => {
        return (
          <div className="lists" key={index}>
            <h1>{value.title}</h1>
            {value.lists.map((el, i) => (
              <p key={i}>{el}</p>
            ))}
          </div>
        );
      })}
    </ServiceStyled>
  );
  {
    /* <div class="lists">
<h1>제23조(분쟁해결)</h1>
<p>① “몰”은 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치․운영합니다.</p>
<p>② “몰”은 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다.</p>
<P>③ “몰”과 이용자 간에 발생한 전자상거래 분쟁과 관련하여 이용자의 피해구제신청이 있는 경우에는 공정거래위원회 또는 시·도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.</P>
</div> */
  }
};

export default Service;
