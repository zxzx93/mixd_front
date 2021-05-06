import React from 'react';
import ShippingInfoStyled from './ShippingInfoStyled';

const ShippingInfo = () => {
    return (
        <ShippingInfoStyled>
            <ul>
                <li>마켓 배송 상품은 마켓 별로 배송해 드립니다.</li>
                <li>마켓 배송 상품의 모든 문의는 판매자가 답변해 드립니다.</li>
                <li>마켓 배송 상품 교환/반품 시, 마켓 별 반품 주소로 반품해 주세요.</li>
                <li>잘못된 주소로 반품하시면 추가 배송비가 발생합니다.</li>
            </ul>
        </ShippingInfoStyled>
    )
}

export default ShippingInfo;
