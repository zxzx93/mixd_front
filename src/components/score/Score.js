import React, { useState, useEffect } from "react";
import ScoreStyled from "./ScoreStyled";
import { Rate } from "antd";

const Score = ({ reviewScore }) => {
  console.log("리뷰평점", reviewScore);

  return (
    <ScoreStyled>
      <p>전체 상품 구매 만족도</p>
      <div>
        <span>{reviewScore}</span>
        <Rate
          allowHalf={true}
          autoFocus={false}
          defaultValue={reviewScore}
          disabled={true}
        />
      </div>
    </ScoreStyled>
  );
};

export default Score;
