import React, { useState, useEffect } from "react";
import MarketStyled from "./MarketStyled";
import SubHeader from "./../../components/header/SubHeader";
import MarketDetail from "./components/MarketDetail";
import { Tabs, Button } from "antd";
import MarketProduct from "./components/MarketProduct";
import MarketReview from "./components/MarketReview";
import MarketInfo from "./components/MarketInfo";
import MarketInfoDrawer from "./components/MarketInfoDrawer";
import {
  marketDetailLits,
  marketDetailCategoriesLits,
} from "./../../store/modules/market";
import { useDispatch, useSelector } from "react-redux";

const { TabPane } = Tabs;

const Market = ({ match }) => {
  const dispatch = useDispatch();

  const {
    marketDetailLists,
    marketDetailDone,
    marketDetailCategoriesLists,
  } = useSelector((state) => state.market);

  useEffect(() => {
    dispatch(marketDetailLits(match.params.value));
    dispatch(marketDetailCategoriesLits(match.params.value));
  }, [dispatch]);

  console.log(match.params.value);
  console.log(marketDetailLists.marketInfo);
  console.log(marketDetailCategoriesLists);

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const callback = () => {
    console.log("Tab change !!");
  };

  return (
    <MarketStyled>
      <SubHeader name="마켓" />

      {marketDetailDone ? (
        <>
          <div className="market_info">
            <MarketDetail marketInfo={marketDetailLists} />
          </div>

          <Tabs
            defaultActiveKey="1"
            onChange={callback}
            className="market_tabs"
          >
            <TabPane tab="상품" key="1">
              <MarketProduct
                categoriesLists={marketDetailCategoriesLists}
                id={match.params.value}
              />
            </TabPane>
            <TabPane tab="리뷰" key="2">
              <MarketReview id={match.params.value} />
            </TabPane>
            <TabPane tab="정보" key="3">
              <MarketInfo marketInfo={marketDetailLists.marketInfo} />
              <Button
                className="open_drawer_btn"
                type="text"
                onClick={showDrawer}
              >
                배송 / 결제 / 반품안내
                <img src="/images/arrow.png" alt="" />
              </Button>
              <MarketInfoDrawer visible={visible} close={onClose} />
            </TabPane>
          </Tabs>
        </>
      ) : (
        ""
      )}
    </MarketStyled>
  );
};

export default Market;
