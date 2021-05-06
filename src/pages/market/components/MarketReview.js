import React, { useEffect } from "react";
import MarketReviewStyled from "./MarketReviewStyled";
import Score from "./../../../components/score/Score";
import ReviewList from "./../../../components/reviewList/ReviewList";
import { useDispatch, useSelector } from "react-redux";
import { marketDetailReviewsLits } from "../../../store/modules/market";

const MarketReview = ({ id }) => {
  const dispatch = useDispatch();
  const {
    marketDetailReviewsLists,
    marketDetailReviewsDone,
    marketDetailLists,
  } = useSelector(state => state.market);
  useEffect(() => {
    dispatch(marketDetailReviewsLits(id));
  }, [dispatch]);

  // console.log(
  //   marketDetailReviewsDone ? marketDetailReviewsLists.review.review : ""
  // );
  // console.log(marketDetailLists.reviewScore);
  console.log(marketDetailReviewsLists);
  return (
    <>
      {marketDetailReviewsDone ? (
        <MarketReviewStyled>
          <div className="market_rate">
            <Score reviewScore={marketDetailLists.reviewScore} />
          </div>

          <div className="review_lists_wrap">
            <ReviewList
              lists={marketDetailReviewsLists.result}
              // marketDetailReviewsDone={marketDetailReviewsDone}
            />
          </div>
        </MarketReviewStyled>
      ) : (
        ""
      )}
    </>
  );
};

export default MarketReview;
