import React, { useState, useEffect } from "react";

import ReviewSytled from "./ReviewSytled";
import SubHeader from "./../../components/header/SubHeader";
import { Tabs } from "antd";
import WriteReviewList from "./components/WriteReviewList";
import ReviewListsView from "./components/ReviewListsView";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
console.log(React.version);

const Review = () => {
  return (
    <ReviewSytled>
      <SubHeader name={"리뷰"} />

      <div className="review_tabs_wrap">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="리뷰쓰기" key="1">
            <WriteReviewList />
          </TabPane>

          <TabPane tab="내가 쓴 리뷰" key="2">
            <ReviewListsView />
          </TabPane>
        </Tabs>
      </div>
    </ReviewSytled>
  );
};

export default Review;
