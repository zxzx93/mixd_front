import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Collapse } from "antd";
import { DownOutlined } from "@ant-design/icons";
import PurchaseList from "../../../components/purchaseList/PurchaseList";
import { useSelector, useDispatch } from "react-redux";
import { purchaseListInfo } from "../../../store/modules/purchase";
import { getUserToken } from "../../../util/decryptUser";
import _ from "lodash";

const OrderCompleteLIst = () => {
  const { Panel } = Collapse;
  const dispatch = useDispatch();
  const { orderToPurchaseList } = useSelector(state => state.cartToPurchase);
  const { purchaseList, purchaseListDone } = useSelector(
    state => state.purchase
  );
  const { token } = getUserToken();
  const [resultArray, setResultArray] = useState();

  useEffect(() => {
    if (orderToPurchaseList.length !== 0) {
      dispatch(purchaseListInfo(orderToPurchaseList, token));
    }
  }, []);

  useEffect(() => {
    if (purchaseListDone) {
      setResultArray(
        _.chain(purchaseList.checkoutItems)
          .groupBy("cartInfo.cit_id")
          .map((k, v) => {
            return {
              cit_id: Number(v),
              market: k,
            };
          })
          .value()
      );
    }
  }, [purchaseList]);

  function callback(key) {
    console.log(key);
  }

  return (
    <Collapse
      onChange={callback}
      bordered={false}
      expandIcon={({ isActive }) => (
        <DownOutlined rotate={isActive ? 180 : 0} />
      )}
    >
      {
        <Panel
          header={
            <div className="orderList">
              주문상품 <span> 총 {orderToPurchaseList.length}개</span>{" "}
            </div>
          }
          key="1"
        >
          <>
            <div className="comProduct">
              <div>
                <p>전체 상품 {purchaseList.length}개</p>
                <span>2020.01.06</span>
              </div>
            </div>

            {purchaseListDone ? (
              <PurchaseList lists={resultArray} listsDone={purchaseListDone} />
            ) : null}
          </>
        </Panel>
      }
    </Collapse>
  );
};

export default OrderCompleteLIst;
