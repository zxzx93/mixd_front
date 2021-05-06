import React from 'react';
import RefundAddressInfoStyled from './RefundAddressInfoStyled';
import OrderTitle from './OrderTitle';

const RefundAddressInfo = () => {
    const orderName = "반품 배송지 정보"

    return (
        <RefundAddressInfoStyled>
            <OrderTitle orderName={orderName} />
        </RefundAddressInfoStyled>
    )
}

export default RefundAddressInfo;
