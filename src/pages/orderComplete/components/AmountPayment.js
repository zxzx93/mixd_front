import React, { useState } from 'react';
import AmountPaymentStyled from './AmountPaymentStyled';
import { Input, Button } from 'antd';
import CouponListDrawer from './CouponListDrawer';

const AmountPayment = () => {
    const [visibleCoupon, setVisibleCoupon] = useState(false)

    const showCouponList = () => {
        setVisibleCoupon(true)
    }

    const closeCouponList = () => {
        setVisibleCoupon(false)
    }

    return (
        <AmountPaymentStyled>
            <div className="coupon_point_wrap">
                <div className="coupon_wrap">
                    <Input 
                        className="use_coupon"
                        prefix="쿠폰"
                        suffix="0개 보유"
                    />
                    <Button
                        onClick={showCouponList}
                    >
                       쿠폰 선택 
                    </Button>
                </div>
                <CouponListDrawer visible={visibleCoupon} close={closeCouponList} />
                <div className="point_wrap">
                    <Input 
                        className="use_point"
                        prefix="포인트"
                        suffix="0P"
                    />
                    <Button>
                       모두 사용
                    </Button>
                </div>
                <div className="residual_point">
                    <p>잔여 포인트 : 0P</p>
                    <span>포인트는 구매 금액의 최대 10%까지 사용 가능합니다.</span>
                </div>
            </div>
            <div className="amount_wrap">
                <ul>
                    <li>
                        <p>총 상품금액</p>
                        <span>140,000 원</span>
                    </li>
                    <li>
                        <p>할인금액</p>
                        <span>70,000 원</span>
                    </li>
                    <li>
                        <p>쿠폰/포인트 할인</p>
                        <span>0 원</span>
                    </li>
                    <li>
                        <p>배송비</p>
                        <span>0 원</span>
                    </li>
                    <li>
                        <p className="bold size">총 결제금액</p>
                        <span className="color bold size">70,000 원</span>
                    </li>
                </ul>
                <span>도서산간지역은 배송비가 추가됩니다.</span>
            </div>
        </AmountPaymentStyled>
    )
}

export default AmountPayment;
