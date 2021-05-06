import React, { useEffect, useState } from 'react';
import PaymentStyled from './PaymentStyled';
import OrderTitle from './OrderTitle';
import _, { set } from 'lodash';


const Payment = ({comCoupon, comPay, order, orderDone}) => {
    const orderName = comPay ? "결제 금액" : "결제 정보"
    const [sumSale, setSumSale] = useState();

    useEffect(() => {
        let sumInit = 0;
        if(orderDone) {
            for(let i = 0; i < order.order.items.length; i++) {
                if(order.order.items[i].detail.delivery_price === null) {
                    sumInit += 0;
                } else {
                    sumInit += (order.order.items[i].detail.delivery_price * order.order.items[i].detail.cod_count);
                }
            }
        }
        setSumSale(sumInit);
    }, [])

    return (
        <PaymentStyled>
            {
                orderDone ?
                <>
                    <OrderTitle orderName={orderName} />
                    <ul>
                        <li>
                            <p>결제방법</p>
                            <span className="bold">
                                {
                                    // cor_pay_type
                                    //  bank, card, hpPhone, realtime
                                    order.order.cor_pay_type === 'bank' ?
                                    "무통장입금"
                                    :
                                    null
                                }
                            </span>
                        </li>
                        <li>
                            <p>총 상품금액</p>
                            <span className="bold">
                                {
                                    order.order.cor_total_money ?
                                    order.order.cor_total_money
                                    :
                                    0
                                } 원
                            </span>
                        </li>

                        <li>
                            <p>할인 금액</p>
                            <span className="bold normal">
                                {
                                    order.order.cor_total_money - (order.order.cor_coupon_price + order.order.cor_deposit + sumSale)
                                } 원
                            </span>
                        </li>

                        {
                            comCoupon ? 
                            (
                                <li>
                                    <p>사용 쿠폰 / 사용 적립금</p>
                                    <span>0 원</span>
                                </li>
                            ):(
                                <>
                                <li>
                                    <p>쿠폰 할인</p>
                                    <span className="bold">
                                        {
                                            order.order.cor_coupon_price ?
                                            order.order.cor_coupon_price
                                            :
                                            0
                                        } 원
                                    </span>
                                </li>
                                <li>
                                    <p>포인트 할인</p>
                                    <span className="bold">
                                        {
                                            order.order.cor_deposit ?
                                            order.order.cor_deposit
                                            :
                                            0
                                        } 원
                                    </span>
                                </li>
                                </>
                            )
                        }
                        
                        <li>
                            <p>배송비</p>
                            <span className="bold normal">0 원</span>
                        </li>
                        <li>
                            {/* 총 상품금액 - 상품할인 - 쿠폰/포인트할인 - 배송비 */}
                            <p className="bold normal">총 결제금액</p>
                            <span className="point bold">
                                {
                                   order.order.cor_total_pay_money ?
                                   order.order.cor_total_pay_money
                                   :
                                   order.order.cor_total_pay_money - order.order.cor_coupon_price - order.order.cor_deposit
                                } 원
                            </span>
                        </li>
                    </ul>
                </>
                :
                null
            }
        </PaymentStyled>
    )
}

export default Payment;
