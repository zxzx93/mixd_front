import React, { useCallback, useEffect, useState } from "react";
import CouponStyled from "./CouponStyled";
import SubHeader from "./../../components/header/SubHeader";
import { Button, Tabs, message } from "antd";
import CouponList from "./../../components/couponList/CouponList";
import { CouponListInfo, NewCouponIssued } from "../../store/modules/coupon";
import { useDispatch, useSelector } from "react-redux";
import { getUserToken } from "../../util/decryptUser";

const { TabPane } = Tabs;

const Coupon = () => {
    const dispatch = useDispatch();
    const {
        couponLists,
        couponListDone,
        couponIssuedDone,
        couponIssuedError,
    } = useSelector((state) => state.coupon);
    const [keyValue, setKeyValue] = useState("1");
    const {token} = getUserToken();

    useEffect(() => {
        dispatch(CouponListInfo(token));
    }, [dispatch, couponIssuedDone]);

    const callback = (key) => {
        setKeyValue(key);
        console.log("key : ", key);
        console.log("keyValue", keyValue);
    };

    const couponIssued = useCallback(
        () => {
            dispatch(NewCouponIssued(token));
            setTimeout(() => {
                if (couponIssuedError) {
                    message.info(
                        couponIssuedError.data
                            ? "이미 쿠폰이 발급되었습니다"
                            :  "발급 완료",
                        1.5
                    );
                }
            }, 100);
        },
        [dispatch]
    );
    // console.log("couponIssuedError", couponIssuedError);


    // console.log(couponLists.total);
    return (
        <CouponStyled>
            <SubHeader name="쿠폰" />
            <div
                className="newCoupon_wrap"
                onClick={() => couponIssued()}
            >
                <Button>
                    <img src="/images/download.png" alt="" />
                    <span>신규회원 쿠폰팩 다운받기</span>
                </Button>
            </div>

            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="보유큐폰" key="1">
                    <CouponList
                        couponLists={couponLists}
                        couponListDone={couponListDone}
                        keyValue={keyValue}
                    />
                </TabPane>
                <TabPane tab="사용 완료 / 만료" key="2">
                    <CouponList
                        couponLists={couponLists}
                        couponListDone={couponListDone}
                        keyValue={keyValue}
                    />
                </TabPane>
            </Tabs>

            <div className="coupon_alert">
                <div>※ 유의사항</div>
                <div>
                    <p>
                        쿠폰은 믹스디 사이트 내 상품 및 서비스 구매시 사용
                        가능합니다.
                    </p>
                    <span>
                        단, 특정 프로모션이 적용 된 상품 및 서비스는 쿠폰사용이
                        불가 할 수 있습니다.
                    </span>
                    <p>
                        주문전체 취소 및 반품 완료 시, 사용한 쿠폰은 복구됩니다.
                    </p>
                    <span>
                        단, 사용 된 쿠폰의 유효기간이 만료 된 경우엔 복구가
                        불가능합니다.
                    </span>
                    <p>
                        부분 취소 및 반품 완료 시, 남아 있는 주문 상품에 적용 된
                        쿠폰 할인금액은 유지되며 취소 및 반품 상품에 적용 된
                        쿠폰 할인금액은 반환(복구) 되지 않습니다.
                    </p>
                    <p>
                        쿠폰을 사용한 주문건의 경우, 포인트 적립은 실 결제금액
                        기준으로 적립 됩니다. (포인트 적립 대상 상품 구매시)
                    </p>
                    <p>
                        쿠폰별 사용가능 기간 및 조건이 다르므로, 각 쿠폰에 명시
                        된 자세한 쿠폰 정보를 확인 후 사용해주시기 바랍니다.
                    </p>
                    <p>
                        유효기간이 지난 쿠폰은 사용하실 수 없으며, 재발급이
                        불가합니다.
                    </p>
                    <p>
                        발급 받은 쿠폰은 회원 본인의 서비스 이용 경우에만 사용할
                        수 있는 권한을 가지며, 어떠한 경우에도 이를 타인에게
                        매매 또는 양도할 수 없습니다.
                    </p>
                    <p>
                        최근 6개월 내 사용, 소멸된 쿠폰에 한하여 내역 확인이
                        가능합니다.
                    </p>
                </div>
            </div>
        </CouponStyled>
    );
};

export default Coupon;
