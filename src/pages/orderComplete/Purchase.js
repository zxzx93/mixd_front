import React from 'react';
import PurchaseStyled from './PurchaseStyled';

import SubHeader from './../../components/header/SubHeader';
import OrderCompleteList from './components/OrderCompleteLists';
import AddShipping from './components/AddShipping';
import { Collapse } from 'antd';
import AmountPayment from './components/AmountPayment';
import RefundNumber from './components/RefundNumber';
import PaymentMethod from './components/PaymentMethod';

const { Panel } = Collapse;

const Purchase = () => {
    const name = "상품 주문하기";

    return (
        <PurchaseStyled>
            <SubHeader name={name} unUseCart={true} />

            <div className="order_lists_wrap">
                <OrderCompleteList/>    
            </div>

            <div className="add_shipping_wrap">
                <AddShipping />
            </div>

            <div className="amount_wrap">
                <Collapse
                    expandIconPosition="right"
                >
                    <Panel 
                        header={
                            <div className="amount_title">
                                <p>결제금액</p>
                                <span>총 70,000원</span>
                            </div>
                        }
                        key="1"
                    >
                        <AmountPayment />
                    </Panel>
                </Collapse>
            </div>

            <div className="refund_number_wrap">
                <RefundNumber />
            </div>

            <div className="payment_method_wrap">
                <Collapse
                    expandIconPosition="right"
                >
                    <Panel 
                        header={
                            <p>결제방법</p>
                        }
                        key="1"
                    >
                        <PaymentMethod />
                    </Panel>
                </Collapse>
            </div>

        </PurchaseStyled>
    )
}

export default Purchase;
