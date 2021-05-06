import React, { useState, useEffect } from 'react';
import RefundNumberStyled from './RefundNumberStyled';
import OrderTitle from './OrderTitle';
import BankModifyDrawer from './BankModifyDrawer';
import { useDispatch, useSelector } from "react-redux";

const RefundNumber = ({ order, orderDone, useBank, unUseBank }) => {
    const orderName = '환불 계좌';
    const [visibleDrawer, setVisibleDrawer] = useState(false);
    const [refundBankName, setRefundBankName] = useState(
        unUseBank ? null : order.items[0].detail.refund_bank_name
    )
    const [refundOwner, setRefundOwner] = useState(
        unUseBank ? null : order.items[0].detail.refund_name        
    )
    const [refundBankNumber, setRefundBankNumber] = useState(
        unUseBank ? null : order.items[0].detail.refund_bank_number
    )
    const [changeState, setChangeState] = useState(false)

    const showVisible = () => {
        setVisibleDrawer(true)
        setChangeState(false)
    }
    const closeVisible = () => {
        setVisibleDrawer(false)
    }

    const changeCheck = () => {
        setChangeState(true)
    }
    
    const dispatch = useDispatch();
    const {
        refundBankOption
    } = useSelector((state) => state.order);

    
    useEffect(() => {
        if (changeState) {
            setRefundBankName(refundBankOption.bankName.label ? refundBankOption.bankName.label : refundBankOption.bankName)
            setRefundOwner(refundBankOption.bankOwner)
            setRefundBankNumber(refundBankOption.bankNumber)
        }
    }, [dispatch, refundBankOption])

    return (
        <RefundNumberStyled>
            {
                orderDone ?
                <>
                {
                    unUseBank ?
                    <OrderTitle orderName={orderName} />
                    :
                    <OrderTitle orderName={orderName} useBank={showVisible}/>
                }
                {
                    useBank ?
                    <ul>
                        <li>{refundBankName}</li>
                        <li>{refundOwner}</li>
                        <li>{refundBankNumber}</li>
                    </ul>
                    :
                    <ul>
                        <li>111</li>
                        <li>222</li>
                        <li>333</li>
                    </ul>
                }
                
                {
                    unUseBank ?
                    null
                    :
                    <BankModifyDrawer
                        visible={visibleDrawer}
                        closeVisible={closeVisible}
                        getContainer={false}
                        changeCheck={changeCheck}
                        order={order}
                        changeState={changeState}
                        refundBankName={refundBankName}
                        refundOwner={refundOwner}
                        refundBankNumber={refundBankNumber}
                    />
                }
                </>
                :
                null
            }
        </RefundNumberStyled>
    )
}

export default RefundNumber;
