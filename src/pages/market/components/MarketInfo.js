import React from 'react';
import MarketInfoStyled from './MarketInfoStyled';

const MarketInfo = ({marketInfo}) => {

    console.log("marketInfo",marketInfo);
    return (
        <MarketInfoStyled>
            <div className="service_info">
                상품 문의, 결제 외 주문 관련 문의 : 마켓명 고객센터
            </div>
            <div className="open_time">
                <p>운영시간</p>
                <div>
                    <p>1:0:: ~ 17:00 | 주말휴무</p>
                    <p>점심시간 12:00 ~ 13:00</p>
                </div>
            </div>
            <div className="open_time">
                <p>대표번호</p>
                <div>
                    <p>000-0000-0000</p>
                </div>
            </div>
            <div className="channel">
                카카오톡 채널 (플러스친구)<span>@{marketInfo.market_name}</span>
            </div>
        </MarketInfoStyled>
    )
}

export default MarketInfo;
