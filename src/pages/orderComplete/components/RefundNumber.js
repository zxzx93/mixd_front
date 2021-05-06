import React, { useState } from 'react';
import RefundNumberStyled from './RefundNumberStyled';
import { Button } from 'antd';
import BankDrawer from './BankDrawer';

const RefundNumber = () => {
    const [visibleBank, setVisibleVank] = useState(false);

    const showBank = () => {
        setVisibleVank(true)
    }

    const closeBank = () => {
        setVisibleVank(false)
    }

    return (
        <RefundNumberStyled>
            <p>환불 계좌</p>
            <div>
                <span>KB 국민은행</span>
                <span>홍길동</span>
                <span>0000000000</span>
            </div>

            <Button
                type="text"
                onClick={showBank}
            >
                수정하기
            </Button>

            <BankDrawer visible={visibleBank} close={closeBank} />
        </RefundNumberStyled>
    )
}

export default RefundNumber;
