import React, { useState, useEffect } from 'react';
import OrderStyled from './OrderStyled';
import SubHeader from './../../components/header/SubHeader';
import { Tabs } from 'antd';
import Orderlist from './../../components/orderList/OrderList';
import { OrderListsInfo } from "../../store/modules/order";
import { useDispatch, useSelector } from "react-redux";
import { getUserToken } from "../../util/decryptUser";
import _ from 'lodash';

const { TabPane } = Tabs;

const Order = () => {
    const name = "주문배송조회";
    
    const dispatch = useDispatch();
    const {
        orderLists,
        orderListDone,
    } = useSelector((state) => state.order);
    const {token} = getUserToken();
    const [returnLists, setReturnLists] = useState([]);
    const [returnCancelLists, setReturnCancelLists] = useState([]);

    // 주문배송조회 시 주문내역과 취소/반품 리스트를 나눠줌
    useEffect(() => {
        dispatch(OrderListsInfo(token));
    }, [dispatch]);

    useEffect(() => {
        return (
            orderLists.list !== undefined ? callback() : null
        )
    }, [orderLists])

    const callback = () => {
        let returnArr = [];
        let returncancelArr = [];     

        for (let i = 0; i < orderLists.list.length; i++) {
            for (let j = 0; j < orderLists.list[i].items.length; j++) {
                const status = orderLists.list[i].items[j].detail.cod_status;
                if(status === 'order' || status === 'deposit' || status === 'pre_express' ||
                   status === 'express_ing' || status === 'express_com' || status === 'end') {
                    returnArr = _.uniqWith(_.concat(returnArr, orderLists.list[i]))
                } else {
                    returncancelArr =  _.uniqWith(_.concat(returncancelArr, orderLists.list[i]))
                }
            }
        }
        setReturnLists(returnArr)
        setReturnCancelLists(returncancelArr)
    }

    return (
        <OrderStyled>
            <SubHeader name={name} />

            <Tabs 
                defaultActiveKey="1"
            >
                <TabPane 
                    tab={
                        <>
                            <span>주문내역</span>
                            <span>{returnLists.length}개</span>
                        </>
                    } 
                    forceRender={true}
                    key="1" 
                >
                    <div className="order_content">
                        <Orderlist
                            lists={returnLists} 
                            orderDone={orderListDone}
                            useOrderStatus={true}
                            orderStatus={true}
                        />
                    </div>
                </TabPane>
                <TabPane 
                    tab={
                        <>
                            <span>취소 / 반품</span>
                            <span>{returnCancelLists.length}개</span>
                        </>
                    } 
                    forceRender={true}
                    key="2"
                >
                    <div className="order_content">
                        <Orderlist
                            lists={returnCancelLists}
                            orderDone={orderListDone}
                            useOrderStatus={true}
                            orderStatus={false}
                        />
                    </div>
                </TabPane>
            </Tabs>
        </OrderStyled>
    )
}

export default Order;
