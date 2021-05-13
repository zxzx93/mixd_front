import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import _ from "lodash";

import {
  removeChoiceItemList,
  increaseCount,
  decreaseCount,
} from "../../../store/modules/items";
import { addCartItem } from "../../../store/modules/cart";
import { getUserToken } from "../../../util/decryptUser";
import PurchaseListDrawerStyled from "./PurchaseListDrawerStyled";

const PurchaseListDrawer = ({ visible, close, buyOpen }) => {
  const dispatch = useDispatch("");
  const { choiceItemLists, choiceItemValue } = useSelector(
    (state) => state.items
  );
  const { token } = getUserToken();

  const [allPrice, setAllprice] = useState(0); // 총 가격
  useEffect(() => {
    let price = 0;
    choiceItemValue.forEach((element) => {
      price += element.cde_price * element.cct_count;
    });
    setAllprice(price);
  }, [choiceItemValue]);

  const openBuyDrawer = () => {
    buyOpen();
  };

  const deleteList = (cde_id) => {
    console.log("상품 삭제 !!", cde_id);
    dispatch(removeChoiceItemList(cde_id));
  };

  const inCart = () => {
    dispatch(addCartItem(choiceItemValue, token));
  };

  const buyNow = () => {
    console.log("구매하기 !!");
  };

  // const [optionCount, setOptionCount] = useState(1); //아이템 수량
  const [maxCount, setMaxCount] = useState(""); //아이템 주문 가능 수량

  useEffect(() => {
    // setOptionCount(choiceItemValue.cct_count);
    choiceItemLists.forEach((ele) => {
      setMaxCount(ele.cde_qty);
    });
  }, [choiceItemLists]);

  const decreaseNumber = (cde_id, index) => {
    if (choiceItemValue[index].cct_count > 1) {
      // setOptionCount(optionCount - 1);
      dispatch(decreaseCount(cde_id, index));
    }
  };

  const increaseNumber = (cde_id, index) => {
    if (choiceItemValue[index].cct_count < maxCount) {
      // setOptionCount(optionCount + 1);
      dispatch(increaseCount(cde_id, index));
    }
  };

  return (
    <PurchaseListDrawerStyled
      visible={visible}
      placement="bottom"
      closable={false}
      onClose={close}
      title={
        <Button
          className="select_option"
          onClick={openBuyDrawer}
          icon={<img src="/images/arrow_d.png" alt="옵션 선택" />}
        >
          옵션 선택
        </Button>
      }
      footer={
        <>
          <div>
            <span>{choiceItemLists.length}개 상품</span>
            <span>총 {allPrice.toLocaleString()}원</span>
          </div>
          <div className="purchase_btns">
            <Button className="in_cart" onClick={inCart}>
              장바구니 담기
            </Button>
            <Button className="buyNow" onClick={buyNow}>
              구매하기
            </Button>
          </div>
        </>
      }
    >
      {/* 선택한 옵션의 상품 리스트 */}
      {choiceItemLists
        ? choiceItemLists.map((list, index) => (
            <div className="select_wrap" key={list.cde_id}>
              <div className="select_list">
                <>
                  <div>
                    <div className="options">
                      {list.cde_title_main} / {list.cde_title}
                    </div>
                    <Button
                      className="delete_btn"
                      onClick={() => deleteList(list.cde_id)}
                    >
                      <img src="/images/x.png" alt="삭제" />
                    </Button>
                  </div>
                  <div>
                    <div>
                      <Button
                        className="minus"
                        onClick={() => decreaseNumber(list.cde_id, index)}
                      >
                        -
                      </Button>
                      <span className="count">
                        {choiceItemValue[index].cct_count}
                      </span>
                      <Button
                        className="plus"
                        onClick={() => increaseNumber(list.cde_id, index)}
                      >
                        +
                      </Button>
                    </div>
                    <div className="cnt_price">
                      {(
                        choiceItemValue[index].cde_price *
                        choiceItemValue[index].cct_count
                      ).toLocaleString()}
                      원
                    </div>
                  </div>
                </>
              </div>
            </div>
          ))
        : "아이템이 없음"}
    </PurchaseListDrawerStyled>
  );
};

export default PurchaseListDrawer;
