import React from 'react';
import OrderTitleStyled from './OrderTitleStyled';
import { message, Button } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard'; 

const OrderTitle = ({orderName, useShare, useBank}) => {
    const shareHandle = () => {
        message.info('클립보드에 복사되었습니다.');
    }
    
    return (
        <OrderTitleStyled className="order_title">
            {orderName}
            {
                useShare ?
                <CopyToClipboard
                    text={"140013257718 신한은행 (예금주:믹스디주식회사)"}
                >
                    <Button
                        type="text"
                        className="url_share"
                        onClick={shareHandle}
                    >
                        복사하기
                    </Button>
                </CopyToClipboard>
                :
                null
            }
            {
                useBank ?
                <Button
                    className="modify_option"
                    onClick={useBank}
                >
                    수정하기
                </Button>
                :
                null
            }
            
        </OrderTitleStyled>
    )
}

export default OrderTitle;
