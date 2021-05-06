import React from 'react';
import PaymentMethodStyled from './PaymentMethodStyled';
import { Tabs } from 'antd';
import DepositPassbook from './DepositPassbook'

const { TabPane } = Tabs;

const PaymentMethod = () => {

    const callback = () => {
        console.log("Tab change !!")
    }

    return(
        <PaymentMethodStyled>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab={<p>무통장 입금</p>} key="1">
                    <DepositPassbook />
                </TabPane>
                <TabPane tab={<p>카드 결제</p>} key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab={<p>휴대폰 결제</p>} key="3">
                    Content of Tab Pane 3
                </TabPane>
                <TabPane tab={<><p>실시간</p><p>계좌이체</p></>} key="4">
                    Content of Tab Pane 4
                </TabPane>
            </Tabs>
        </PaymentMethodStyled>
    )
}

export default PaymentMethod;
