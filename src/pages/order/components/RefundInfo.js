import React, { useEffect, useState } from 'react';
import RefundInfoStyled from './RefundInfoStyled';
import OrderTitle from './OrderTitle';
import { useSelector } from "react-redux";
// import { CancelListsInfo } from "../../../store/modules/order";

const RefundInfo = ({ orderOrigin, order, orderDone }) => {
    const orderName = "취소/환불 정보"
    // const [sumTotal, setSumTotal] = useState();
    const [sumPrice, setSumPrice] = useState();
    const { orderCancelLists } = useSelector((state) => state.order);

    useEffect(() => {
        // let sumTotal = 0;
        let sumPrice = 0;
        if(orderDone) {
            for (let i = 0; i < order.length; i++) {
                if(order[i].detail.delivery_price === null) {
                    sumPrice += 0;
                } else {
                    sumPrice += (order[i].detail.delivery_price * order[i].detail.cod_count);
                }

                // if(order[i].detail.cod_total_price === null) {
                //     sumTotal += 0;
                // } else {
                //     sumTotal += order[i].detail.cod_total_price
                // }
            }
        }
        // setSumTotal(sumTotal)
        setSumPrice(sumPrice)
    }, [order])

    return (
        <RefundInfoStyled>
            {
                order.length != 0 ?
                <>
                    <OrderTitle orderName={orderName} />
                    <ul>
                        <li>
                            <p>결제방법</p>
                            <span className="bold">
                            {
                                // cor_pay_type
                                //  bank, card, hpPhone, realtime
                                orderOrigin.order.cor_pay_type === 'bank' ?
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
                                    orderCancelLists.sumPrice
                                    // sumTotal
                                    // order.order.cor_total_money ?
                                    // order.order.cor_total_money
                                    // :
                                    // 0
                                } 원
                            </span>
                        </li>
                        {/* <li>
                            <p>상품 할인</p>
                            <span className="bold">30,000 원</span>
                        </li> */}
                        {
                        <>
                        <li>
                            <p>쿠폰 할인</p>
                            <span className="bold">
                                {
                                    orderOrigin.order.cor_coupon_price ?
                                    orderOrigin.order.cor_coupon_price
                                    :
                                    0
                                } 원
                            </span>
                        </li>
                        <li>
                            <p>포인트 할인</p>
                            <span className="bold">
                                {
                                    orderOrigin.order.cor_deposit ?
                                    orderOrigin.order.cor_deposit
                                    :
                                    0
                                } 원
                            </span>
                        </li>
                        </>
                        }
                        <li>
                            {/* 총 상품금액 - 상품할인 - 쿠폰/포인트할인 - 배송비 */}
                            <p className="bold normal">총 결제금액</p>
                            <span className="point bold">
                                {
                                   orderCancelLists.sumPrice - (orderOrigin.order.cor_coupon_price - orderOrigin.order.cor_deposit + sumPrice)
                                } 원
                            </span>
                        </li>
                        <li>
                            <p className="bold">환불방법</p>
                            <span className="point bold">
                                {
                                    // 무통장입금 일 경우
                                    orderOrigin.order.cor_pay_type === 'bank' ?
                                    "계좌환불"
                                    :
                                    // 카드결제 일 경우
                                    orderOrigin.order.cor_pay_type === 'card' ?
                                    "카드결제 취소"
                                    :
                                    // 휴대폰결제 일 경우
                                    orderOrigin.order.cor_pay_type === 'hpPhone' ?
                                    "휴대폰결제 취소"
                                    :
                                    // 실시간계좌이체 일 경우
                                    "계좌환불"
                                }
                            </span>
                        </li>
                    </ul>
                    {
                        // 결제방식이 핸드폰결제 일 경우
                        // bank, card, hpPhone, realtime
                        orderOrigin.order.cor_pay_type === 'hpPhone' ?
                        <div className="phone_wrap">
                            <p>휴대폰 결제의 경우, 이동통신사의 익월 취소 불가 정책에 따라 당월 1일 ~ 31일 결제에 대해서만 취소 처리가 가능합니다.</p>
                            <p>익월 취소 시 계좌환불로 진행되니 꼭 환불계좌를 입력해주세요.</p>
                        </div>
                        :
                        // 결제방식이 휴대폰이 아닐 경우
                        null
                    }
                </>
                : 
                null
            }
        </RefundInfoStyled>
    )
}

export default RefundInfo;
