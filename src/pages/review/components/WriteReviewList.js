import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";

import WriteReviewListStyled from "./WriteReviewListStyled";
import { reviewNoneListInfo, reviewOrderWriteListInfo, reviewWriteListInfo } from "../../../store/modules/review";
import { getUserToken } from "../../../util/decryptUser";


const WriteReviewList = ({ cre_id, value }) => {
  const dispatch = useDispatch();
  const { reviewOrderWriteLists } = useSelector(
    (state) => state.review
  );
  const { user, token } = getUserToken();

  useEffect(() => {
    dispatch(reviewOrderWriteListInfo(token, user.group.mem_id));
  }, [dispatch, reviewOrderWriteListInfo]);

  useEffect(() => {
    dispatch(reviewNoneListInfo(cre_id));
  }, [dispatch, reviewNoneListInfo]);

  const [review, setReview] = useState([]);
  useEffect(() => {
    const reviewNull = reviewOrderWriteLists.filter(
      (value) => value.review === null
    );
    setReview(reviewNull);
  }, [reviewOrderWriteLists]);


  return (
    <WriteReviewListStyled>
      {reviewOrderWriteLists.length > 0 ? (
        review.map((value, index) => (
          <div className="review_lists_wrap" key={value.cit_id}>
            <div className="review_write_list">
              <div className="img_wrap">
                <img
                  src={`${value.option.item.cit_file_2}`}
                  alt="상품 사진"
                />
              </div>
              <div className="review_info">
                <p>
                  <span>{value.option.item.market.market_name}</span>
                  <span>{value.option.item.cit_name} </span>
                </p>
                <div>
                  {value.option.main_title.cde_title_main}
                  <span />
                  {value.option.cde_title}
                </div>
              </div>
              <Button className="write_btn" type="link" href="/reviewWrite">
                <img src="/images/arrow_d.png" alt="" />
              </Button>
            </div>
          </div>
        ))
      ) : (
        <p className="review_non">작성할 리뷰가 없습니다.</p>
      )}
    </WriteReviewListStyled>
  );
};

export default WriteReviewList;
