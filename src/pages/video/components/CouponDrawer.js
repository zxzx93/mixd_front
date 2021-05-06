import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CouponDrawerStyled from "./CouponDrawerStyled";
import { Button } from "antd";

import { getRandomCoupon } from "../../../store/modules/coupon";
import { getUserToken } from "../../../util/decryptUser";

// import CouponList from "./../../../components/couponList/CouponList";

const CouponDrawer = ({ visible, close }) => {
  const dispatch = useDispatch();

  const { token } = getUserToken();

  //   useEffect(() => {}, [dispatch, token]);
  const downLoadCoupon = () => {
    console.log(" 쿠폰 전부 다운로드 !! ");
  };
  return (
    <CouponDrawerStyled
      title="쿠폰 다운로드"
      visible={visible}
      placement={"bottom"}
      height={600}
      drawerStyle={false}
      closable={true}
      closeIcon={<img src="/images/close.png" alt="" />}
      onClose={close}
    >
      <div>
        <span>사용할 수 있는 쿠폰</span>
        <Button onClick={downLoadCoupon} type="text">
          모두 다운받기
        </Button>
      </div>
      {/* <CouponList lists={lists} /> */}
    </CouponDrawerStyled>
  );
};

export default CouponDrawer;
