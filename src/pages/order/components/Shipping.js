import React from 'react';
import ShippingStyled from './ShippingStyled';
import OrderTitle from './OrderTitle';

const Shipping = ({ status, order, orderDone }) => {
    const orderName = status === 2 ? "반품 배송지 정보" : "배송지 정보" 

    return (
        <ShippingStyled>
            {
                orderDone ?
                <>
                    <OrderTitle orderName={orderName} />
                    <ul>
                        <li>
                            <p>받는 분</p>
                            <span>{order.order.recieve_name}</span>
                        </li>
                        <li>
                            <p>주소</p>
                            <span>{order.order.address1} {order.order.address2}</span>
                        </li>
                        <li>
                            <p>연락처</p>
                            <span>{order.order.recieve_phone}</span>
                        </li>
                        {
                            status === 2 ?
                            null
                            :
                            <li>
                                <p>배송 메모</p>
                                <span>{order.order.cor_content}</span>
                            </li>
                        }
                    </ul>
                </>
                :
                null
            }
        </ShippingStyled>
    )
}

export default Shipping
