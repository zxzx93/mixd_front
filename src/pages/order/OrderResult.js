import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OrderResultStyled from './OrderResultStyled';
import SubHeader from './../../components/header/SubHeader';
import OrderItemList from './../../components/orderList/OrderItemList';
import CancelReason from './components/CancelReason';
import Shipping from './components/Shipping';
import RefundInfo from './components/RefundInfo';
import RefundNumber from './components/RefundNumber';
import { useDispatch, useSelector } from "react-redux";
import { getUserToken } from "../../util/decryptUser";
import { OrderDetailInfo } from "../../store/modules/order";
import Moment from 'react-moment';
import 'moment/locale/ko';
import _ from 'lodash';

const OrderResult = ({ location, match }) => {
    const name = "주문취소";
    const status = location.state;
    const matchItem = match.params.cod_id;
    const [matchTime, setMatchTime] = useState()
    const [resultOrderArr, setResultOrderArr] = useState();
    const [arrayNotNull, setArrayNotNull] = useState(false);

    const dispatch = useDispatch();
    const {
        orderDetail,
        orderDetailDone
    } = useSelector((state) => state.order);
    const {token} = getUserToken();

    useEffect(() => {
        dispatch(OrderDetailInfo(token, match.params.id));
    }, [ , dispatch]);
    
    useEffect(() => {
        if(orderDetailDone) {
            orderDetail.order.items.forEach(value => {
                return (
                    matchItem == value.detail.cod_id ?
                        status === 1 ?
                            setMatchTime(value.detail.cancel_end_date)
                        :
                            setMatchTime(value.detail.refund_date)
                    :
                    null
                )
            })
        }
    }, [orderDetail])

    useEffect(() => {
        if(orderDetailDone) {
            let resultArr = [];
            orderDetail.order.items.forEach(value => {
                return (
                    status === 1 ?
                        matchTime === value.detail.cancel_end_date ?
                        resultArr = _.concat(resultArr, value)
                        :
                        null
                        :
                        matchTime === value.detail.refund_date ?
                        resultArr = _.concat(resultArr, value)
                        :
                        null
                )
            })
            setResultOrderArr(resultArr)
            setArrayNotNull(true)
        }
    }, [matchTime, orderDetail])

    return (
        <OrderResultStyled>
            <SubHeader name={name} />

            <div className="result_title">
                {
                    status === 1 ?
                    <p>상품의 취소가 완료되었습니다.</p>
                    :
                    <p>상품의 반품이 완료되었습니다.</p>
                }
            </div>

            {
                orderDetailDone ?
                <div className="order_number_wrap">
                    <p>주문번호 {orderDetail.order.cor_id}</p>
                    <Moment format="YYYY.MM.DD">
                        {orderDetail.order.cor_datetime}
                    </Moment>
                </div>
                :
                null
            }

            {
                arrayNotNull ?
                <div className="cancel_lists">
                    <OrderItemList 
                        order={resultOrderArr}
                        orderDone={orderDetailDone}
                        unUseCheck={true}
                    />
                </div>
                :
                null
            }

            {
                arrayNotNull ?
                <div className="cancel_reason">
                    <CancelReason
                        order={resultOrderArr}
                        orderDone={orderDetailDone}
                        status={status}
                    />
                </div>
                :
                null
            }

            {
                status === 1 ?
                null
                :
                <div className="refund_address">
                    <Shipping 
                        order={orderDetail}
                        orderDone={orderDetailDone}
                        status={status} 
                    />
                </div>
            }
            
            {
                arrayNotNull ?
                <div className="refund_number">
                    <RefundNumber
                        order={resultOrderArr}
                        orderDone={orderDetailDone}
                        unUseBank={true} 
                    />
                </div>
                :
                null
            }

            {
                arrayNotNull ?
                <div className="refund_info">
                    <RefundInfo 
                        orderOrigin={orderDetail}
                        order={resultOrderArr}
                        orderDone={orderDetailDone}
                        status={status} 
                    />
                </div>
                :
                null
            }

            <div className="refund_accept">
                <Link
                    type="link"
                    to='/order'
                >
                    확인
                </Link>
            </div>

        </OrderResultStyled>
    )
}

export default OrderResult;
