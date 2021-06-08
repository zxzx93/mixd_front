import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";

import PlanDetailStyled from "./PlanDetailStyled";
import SubHeader from "./../../../components/header/SubHeader";
import MasonryLayout from "./../../../components/masonry/Masonry";
import { planDetailListInfo } from "../../../store/modules/plan";
import PlanDetailList from "./PlanDetailList";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const PlanDetail = ({ match }) => {
  const dispatch = useDispatch();
  const { planDetailList, planDetailListDone } = useSelector(
    state => state.plan
  );

  let id = match.params.id;

  useEffect(() => {
    dispatch(planDetailListInfo(id));
  }, [dispatch, planDetailListInfo]);

  console.log("밖", planDetailList);
  //console.log("밖", planDetailListDone);

  return (
    <PlanDetailStyled>
      <SubHeader name={"기획전"} />
      {planDetailListDone && (
        <>
          <div className="plan_image_wrap">
            <img
              src={`${process.env.REACT_APP_API_URL}${planDetailList.planInfo.plan_img}`}
              alt=""
            />
          </div>
          <div className="filter_wrap">
            <p>전체 상품 {planDetailList.items.items.length}개</p>

            {/* 기획전 필터 없앰 */}
            {/* <Select defaultValue="인기순" onChange={handleChange}>
              <Option value="인기순">인기순</Option>
              <Option value="최신순">최신순</Option>
            </Select> */}
          </div>
          <div className="plan_wrap">
            <MasonryLayout className="masonry" />
            {planDetailListDone && (
              <PlanDetailList lists={planDetailList.items} />
            )}
          </div>
        </>
      )}
    </PlanDetailStyled>
  );
};

export default PlanDetail;
