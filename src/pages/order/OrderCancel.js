import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import OrderCancelStyled from './OrderCancelStyled';
import SubHeader from './../../components/header/SubHeader';
import Reason from './components/Reason';
import RefundNumber from './components/RefundNumber';
import RefundInfo from './components/RefundInfo';
import Shipping from './components/Shipping';
import OrderItemList from './../../components/orderList/OrderItemList';
import { useDispatch, useSelector } from "react-redux";
import { getUserToken } from "../../util/decryptUser";
import { 
    OrderCancelInfo, 
    OrderCancelSubmit,
    OrderDepositSubmit,
    } from "../../store/modules/order";
import Moment from 'react-moment';
import 'moment/locale/ko';
import { Button } from 'antd';
import { useHistory } from "react-router-dom";
import _ from 'lodash';

const OrderCancel = ({ location, match }) => {
    // status === 1 이면 cancel (취소접수)
    // status === 2 이면 refund (반품접수)
    const status = location.state;

    const name = status === 1 ? "주문취소" : "반품접수"
    
    const dispatch = useDispatch();
    const {
        orderCancel,
        orderCancelDone,
        orderCancelLists,
        orderCancelReason,
        refundBankOption,
        orderCancelInfoDone,
        orderDepositInfoDone,
    } = useSelector((state) => state.order);
    const {token} = getUserToken();
    // 결제가 되었는지 확인(order일 경우 결제미진행 = 1, deposit일 경우 결제진행 = 2)
    const [paymentStatus, setPaymentStatus] = useState();
    const history = useHistory();
    const [resultOrderArr, setResultOrderArr] = useState();
    const [arrayNotNull, setArrayNotNull] = useState(false);

    useEffect(() => {
        if (orderCancelDone) {
            if (orderCancel.order.status === 'order') {
                setPaymentStatus(1)
            } else {
                setPaymentStatus(2)
            } 
        }
    }, [orderCancelDone])
    
    useEffect(() => {
        dispatch(OrderCancelInfo(token, match.params.id))
    }, [dispatch]);

    useEffect(() => {
        let resultArr = [];
        if (orderCancelDone) {
            // 결제가 된 상태라면?
            orderCancel.order.status === 'deposit' ?
            orderCancel.order.items.forEach(value => {
                return (
                    // 결제가 된 사항 중 주문 취소라면?
                    status === 1 ?
                        // 주문상태가 '상품준비중', '배송준비중' 인 사항만 보여주기
                        value.detail.cod_status === 'deposit' ||
                        value.detail.cod_status === 'pre_express' ?
                        resultArr = _.concat(resultArr, value)
                        :
                        // 주문상태가 '상품준비중', '배송준비중'이 아닌 사항은 보여주지 않음
                        null
                    :
                        // 결제가 된 사항 중 반품신청 이라면?
                        value.detail.cod_status === 'express_com' ?
                        resultArr = _.concat(resultArr, value)
                        :
                        null
                )
            })
            :
            // 결제가 되지 않은 상태라면?
            orderCancel.order.items.forEach(value => {
                resultArr = _.concat(resultArr, value)
            })
        }
        setResultOrderArr(resultArr)
        setArrayNotNull(true)
    }, [orderCancel])

    const OrderCancelSubmitBtn = () => {
        if(orderCancelLists.length === 0) {
            alert("1개 이상의 리스트를 선택..")
            return;
        }

        if(paymentStatus === 1) {
            if (orderCancel.order.items.length !== orderCancelLists.length) {
                alert("결제 전 주문취소는 일괄취소만 가능..")
                return;
            }
        }
        
        if(!orderCancelReason.reasonOption) {
            alert("취소 사유를 선택..")
            return;
        }
        
        if(orderCancelReason.reasonValue === null ||
           orderCancelReason.reasonValue === 'undefined') {
            alert("취소 사유를 적어주세요..")      
            return;
        }

        if(paymentStatus === 1) {
            dispatch(OrderCancelSubmit(
                token,             // 토큰
                orderCancelReason, // 취소사유 + 취소내용
                match.params.id,   // cor_id (주문번호)
            ))
        } else if (paymentStatus === 2) {
            dispatch(OrderDepositSubmit(
                token,             // 토큰
                orderCancelLists,  // 환불목록 리스트
                orderCancelReason, // 취소사유 + 취소내용
                refundBankOption,  // 환불계좌정보
                match.params.id,   // cor_id (주문번호)
                status,            // 1=주문취소, 2=반품신청
            ))
        }
    }

    useEffect(() => {
        if(orderCancelInfoDone) {
            history.push("/order");
        }
    }, [orderCancelInfoDone])
    
    useEffect(() => {
        if(orderDepositInfoDone) {
            history.push("/order");
        }
    }, [orderDepositInfoDone])

    return (
        <OrderCancelStyled>
            {
                orderCancelDone ?
                <>
                    <SubHeader name={name} />

                    <div className="order_number_wrap">

                        <p>주문번호 {orderCancel.order.cor_id}</p>
                        <Moment format="YYYY.MM.DD">
                            {orderCancel.order.cor_datetime}
                        </Moment>
                    </div>
                   
                    <div className="cancel_lists">
                        <OrderItemList 
                            // order={orderCancel}
                            order={resultOrderArr} 
                            orderDone={orderCancelDone}
                        />
                    </div>


                    {/* 취소사유 & 반품사유 */}
                    <div className="cancel_reason">
                        <Reason status={status} />
                    </div>

                    {/* 배송지정보 & 반품 배송지 정보 */}
                    {
                        status === 1 ?
                        null
                        :
                        <div className="refund_address">
                            <Shipping status={status} />
                        </div>
                    }

                    {/* 환불계좌 */}
                    {
                        // 결제가 진행 된 경우 = 2
                        paymentStatus !== 1 ?
                        <div className="refund_number">
                            <RefundNumber 
                                order={orderCancel.order}
                                orderDone={orderCancelDone}
                                useBank={true}
                            />
                        </div>
                        :
                        // 결제가 진행되지 않은 경우
                        null
                    }

                    {/* 취소/환불 정보 */}
                    {
                        arrayNotNull ?
                        <div className="refund_info">
                            <RefundInfo
                                orderOrigin={orderCancel}
                                order={resultOrderArr}
                                orderDone={orderCancelDone}
                                status={status}
                            />
                        </div>
                        :
                        null
                    }

                    <div className="refund_accept">
                        <Button
                            onClick={OrderCancelSubmitBtn}
                        >
                            {
                                status === 1 ? "취소 접수" : "반품 접수"
                            }
                        </Button>
                    </div>
                </>
                :
                null
            }
        </OrderCancelStyled>
    )
}

export default OrderCancel;
