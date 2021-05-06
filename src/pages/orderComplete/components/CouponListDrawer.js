import React, { useEffect } from 'react';
import CouponListDrawerStyled from './CouponListDrawerStyled'
import { Button } from 'antd';
import CouponList from './../../../components/couponList/CouponList';
// import { useDispatch, useSelector } from "react-redux";
// import { getUserToken } from "../../../util/decryptUser";
// import { CouponListInfo } from "../../../store/modules/coupon";

const CouponListDrawer = ({ visible, close }) => {
    // const dispatch = useDispatch();

    // const {
    //     couponLists,
    //     couponListDone,
    //     couponIssuedDone,
    //     couponIssuedError,
    // } = useSelector((state) => state.coupon);
    // const [keyValue, setKeyValue] = useState("1");
    // const {token} = getUserToken();

    // useEffect(() => {
    //     dispatch(CouponListInfo(token));
    // }, [dispatch, couponIssuedDone]);

    return (
        <CouponListDrawerStyled
            visible={visible}
            closable={false}
            placement="bottom"
            title={
                <>
                    <p>쿠폰 선택</p>
                    <Button
                        className="coupon_close_btn"
                        type="text"
                        onClick={close}
                    >
                        <img src="/images/close.png" alt="" />
                    </Button>
                </>
            }
            footer={
                <div>
                    <Button
                        className="non_select_coupon"
                    >
                        쿠폰 선택 안함
                    </Button>
                    <Button
                        className="select_coupon_btn"
                    >
                        쿠폰 선택
                    </Button>
                </div>
            }
        >   
            {/* 쿠폰부분은 추가 작업이 필요 */}
            {/* 쿠폰 리스트는 사용가능한 모든 쿠폰의 리스트를 뿌린다. */}
            {/* 단, 그 중에서 현재 주문 시 조건에 따라 사용이 불가능하다. */}
            {/* 조건 1. 결제 금액(총 금액 / 쿠폰&포인트를 사용하기 전 금액의 조건) */}
            <CouponList 
                // couponLists={
                //     couponListDone ? 
                //     couponLists.list.used
                //     : 
                //     null
                // } 
                // couponListDone={couponListDone}
                // keyValue={2} 
            />
        </CouponListDrawerStyled>
    )
}

export default CouponListDrawer;
