import React from 'react';
import OrderCompleteStyled from './OrderCompleteStyled'
import OrderCompleteCheck from './components/OrderCompleteCheck'
import OrderCompleteLists from './components/OrderCompleteLists';
import Shipping from '../order/components/Shipping';
import Payment from '../order/components/Payment';
import Deposit from '../order/components/Deposit';
import CashReceipt from './components/CashReceipts';
import SubHeader from '../../components/header/SubHeader';

const OrderComplete = () => {
    const name = "주문완료"

    return (
        <OrderCompleteStyled>
            <SubHeader name={name} unUseCart={true} unHistory={true} /> 
      
            <div className="orderComplete">
    
                    <OrderCompleteCheck/>
                    <div className="comList">

                        <OrderCompleteLists/>   
                    </div>
                    <div className="comShipping">
                        <Shipping/>
                    </div>
                    <div className="comPayment">

                        <Payment 
                            // comCoupon={true} 
                            // comSale={true} 
                            comPay={true} 
                        />

                    </div>
                    <div className="comDeposit">
                        <Deposit comDeposit={true} />
                    </div>
                    <div className="comCashReceipts">
                        <CashReceipt/>
                    </div>
                    <div className="orderCompleteBtn">
                        <p>확인</p>
                    </div>

            </div>
        </OrderCompleteStyled>    
    )
}

export default OrderComplete;
