import React, { useState, useEffect } from 'react';
import BankModifyDrawerStyled from './BankModifyDrawerStyled';
import SubHeader from './../../../components/header/SubHeader';
import { Button, Input } from 'antd';
import Select from 'react-select';
import { bankName } from './../../../util/refundBankName';
import _ from 'lodash';
import { useDispatch } from "react-redux";
import { BankOptions } from "../../../store/modules/order";

const BankModifyDrawer = ({ order, visible, changeState, changeCheck, closeVisible, refundBankName, refundOwner, refundBankNumber }) => {
    const name = "환불계좌"
    const [refundBankList, setRefundBankList] = useState();
    const [defaultValue, setDefaultValue] = useState();
    const [refundBankNameChanged, setRefundBankNameChanged] = useState();
    const [refundOwnerChanged, setRefundOwnerChanged] = useState()
    const [refundBankNumberChanged, setRefundBankNumberChanged] = useState()
    const dispatch = useDispatch();

    useEffect(() => {
        let bankArray = [];
        for(let i = 0; i < bankName.length; i++) {
            if(bankName[i] === order.items[0].detail.refund_bank_name) {
                setDefaultValue({value: i, label: bankName[i]})
            }
            bankArray = _.concat(bankArray, {value: i, label: bankName[i]});
        }
        setRefundBankList(bankArray);
    }, [visible])

    const optionChange = (e) => {
        setRefundBankNameChanged({value: e.value, label: e.label})
    }
    const refundOwnerChange = (e) => {
        setRefundOwnerChanged(e.target.value)
    }
    const refundBankNumberChange = (e) => {
        setRefundBankNumberChanged(e.target.value)
    }

    const changeBankInfo = () => {
        closeVisible()
        changeCheck()
    }

    useEffect(() => {
        dispatch(BankOptions(
            refundBankNameChanged ? refundBankNameChanged : refundBankName, 
            refundOwnerChanged ? refundOwnerChanged : refundOwner,
            refundBankNumberChanged ? refundBankNumberChanged : refundBankNumber,
            changeState
        ))
    }, [changeState])

    return (
        <BankModifyDrawerStyled
            visible={visible}
            closable={false}
        >
            <SubHeader name={name} unUseCart={true} useToggle={closeVisible} />
            <div className="refund_bank_wrap">
                <p>
                    <span>환불 가능한 계좌를 정확히 입력해주세요.</span>
                    <span>승인취소가 불가능한 결제 건은 계좌환불이 진행됩니다.</span>
                </p>
                <div>
                    <Select
                        className="reason_select"
                        classNamePrefix
                        defaultValue={defaultValue}
                        onChange={optionChange}
                        placeholder={'환불받는 은행을 선택해 주세요.'}
                        options={refundBankList}
                    />

                    <Input 
                        className="refund_name"
                        defaultValue={refundOwner}
                        onChange={refundOwnerChange}
                        placeholder={'환불 예금주'}
                        
                    />

                    <Input 
                        className="refund_bank_name"
                        defaultValue={refundBankNumber}
                        onChange={refundBankNumberChange}
                        placeholder={'환불 계좌'}
                    />
                </div>
            </div>
            <div className="refundbank_wrap">
                <Button 
                    className="seve_refundbank_btn"
                    onClick={changeBankInfo}
                >
                    환불 계좌 저장
                </Button>
            </div>
        </BankModifyDrawerStyled>
    )
}

export default BankModifyDrawer;
