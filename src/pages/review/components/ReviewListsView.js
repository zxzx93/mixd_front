import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ReviewListsViewStyled from "./ReviewListsViewStyled";
import ReviewList from "./../../../components/reviewList/ReviewList";
import { reviewListInfo,reviewWriteListInfo } from "../../../store/modules/review";
import { getUserToken } from "../../../util/decryptUser";

const ReviewListsView = ({reviewData,createId}) => {
  const dispatch = useDispatch();
  const { reviewLists, reviewListDone, reviewRemoveListDone ,reviewWriteLists,reviewListWriteDone} = useSelector((state) => state.review);
  const { user, token } = getUserToken();

  console.log("리뷰리스트", reviewLists);
  console.log(user.group.mem_id);

  useEffect(() => {
    dispatch(reviewListInfo(token, user.group.mem_id));
  }, [dispatch, reviewListInfo, reviewRemoveListDone]);

console.log(reviewData);

  return (
    <ReviewListsViewStyled>
      <ReviewList useReview={true} 
      lists={reviewLists} 
      />
    </ReviewListsViewStyled>
  );
};

export default ReviewListsView;
