import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import DetailReviewStyled from "./DetailReviewStyled";
import Score from "../../components/score/Score";
import ReviewList from "../../components/reviewList/ReviewList";
import { getUserToken } from "../../util/decryptUser";
import { itemsReviewListInfo } from "../../store/modules/review";

const DetailReview = ({ itemDetailInfo }) => {
  const dispatch = useDispatch("");
  const { itemsReviewLists, itemsReviewListDone } = useSelector(
    state => state.review
  );

  const { token, user } = getUserToken();

  useEffect(() => {
    dispatch(itemsReviewListInfo(token, itemDetailInfo.cit_key));
  }, [dispatch, itemDetailInfo]);

  console.log(itemsReviewLists.score);
  return (
    <DetailReviewStyled>
      {itemsReviewListDone && (
        <>
          <div className="score_wrap">
            <Score reviewScore={itemsReviewLists.score} />
          </div>

          <div className="review_lists_wrap">
            <ReviewList useVideo={true} lists={itemsReviewLists.items} />
          </div>
        </>
      )}
    </DetailReviewStyled>
  );
};

export default DetailReview;
