import React from "react";
import MypageFooterStyled from './MypageFooterStyle';

const MypageFooter = () => {
  return (
    <div>
      <MypageFooterStyled className="mypage_footer">
        <div>
            <div>
              <p>고객센터</p>
              <span>1899-8201</span>
            </div>
            <div>
              <p>영업시간</p>
              <span>AM 10:00 ~ PM 05:00 (주말 및 공휴일 휴무)</span>
            </div>
            <div>
              <p>점심시간</p>
              <span>PM 12:00 ~ PM 13:00</span>
            </div>
        </div>
      </MypageFooterStyled>
    </div>
  );
};

export default MypageFooter;
