import React, { useState, useEffect } from 'react';
import OrderDetailStyled from './OrderDetailStyled';
import SubHeader from './../../components/header/SubHeader';
import OrderList from './../../components/orderList/OrderList';
import Shipping from './components/Shipping';
import Payment from './components/Payment';
import ShippingInfo from './components/ShippingInfo';
import Deposit from './components/Deposit';
import Delivery from './components/Delivery';
import { useDispatch, useSelector } from "react-redux";
import { getUserToken } from "../../util/decryptUser";
import { OrderDetailInfo, OrderEndReviewInfoList } from "../../store/modules/order";
import _ from 'lodash';

const OrderDetail = ({ match }) => {
    const name = "주문 상세";
    const dispatch = useDispatch();
    const {
        orderDetail,
        orderDetailDone,
        orderConfirmationDone,
        orderRefundCancelDone,
        orderEndReviewInfo,
        orderEndReviewInfoDone,
    } = useSelector((state) => state.order);
    const {user, token} = getUserToken();
    const [returnDetailLists, setReturnDetailLists] = useState([]);

    useEffect(() => {
        dispatch(OrderDetailInfo(token, match.params.id));
        dispatch(OrderEndReviewInfoList(token, user.group.mem_id));
    }, [dispatch, orderConfirmationDone, orderRefundCancelDone, orderEndReviewInfoDone]);

    useEffect(() => {
        return (
            orderDetail.order !== undefined ? addLists() : null
        )
    }, [orderDetail])

    const addLists = () => {
        let returnArr = [];
        returnArr = _.concat(returnArr, orderDetail.order)
        setReturnDetailLists(returnArr);
    }

    return (
        <OrderDetailStyled>
            <SubHeader name={name} />
            
            <div className="order_lists">
                {/* 아이템목록 현재 개발작업 된 상태로 오류.. */}
                {
                    orderDetailDone || orderConfirmationDone || orderRefundCancelDone ?
                    <OrderList 
                        lists={returnDetailLists} 
                        orderDone={orderDetailDone}
                        endReviewlists={orderEndReviewInfo}
                        OrderNumber={true} 
                        useBtn={true}
                    />
                    :
                    null
                }
            </div>

            {/* 배송지정보 */}
            <div className="shipping_info">
                <Shipping 
                    order={orderDetail} 
                    orderDone={orderDetailDone} 
                />
            </div>
            
            {/* 배송정보 - 배송중, 배송완료 일 때만 SHOW */}
            {
                orderDetailDone?
                    orderDetail.order.status === 'express_ing' ||
                    orderDetail.order.status === 'express_com' ?
                    <div className="delivery_info">
                        <Delivery 
                            order={orderDetail} 
                            orderDone={orderDetailDone} 
                        />
                    </div>
                    : 
                    null
                :
                null
            }

            {/* 결제정보 */}
            <div className="payment_info">
                <Payment
                    order={orderDetail}
                    orderDone={orderDetailDone}
                />
            </div>
            
            {/* 입금정보 - 입금 전 일때만 SHOW */}
            {
                orderDetailDone?
                    orderDetail.order.status === 'order' ?
                    <div className="deposit_info">
                        <Deposit 
                            order={orderDetail}
                        />
                    </div>
                    :
                    null
                :
                null
            }

            <div className="shipping_info_wrap">
                <ShippingInfo />
            </div>
        </OrderDetailStyled>
    )
}

export default OrderDetail;
