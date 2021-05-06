import React from 'react';
import BankDrawerStyled from './BankDrawerStyled';
import { Button, Input } from 'antd';
import SubHeader from './../../../components/header/SubHeader';
import Select from 'react-select';

const BankDrawer = ({ visible, close }) => {
    const name = "환불계좌"

    const options = [
        {value: '1', label: 'KB 국민은행'},
    ]

    const selectBank = () => {
        console.log("은행 변경 !!")
    }

    return (
        <BankDrawerStyled
            visible={visible}
            closable={false}
            placement="right"
            footer={
                <Button
                    onClick={close}
                >
                    환불 계좌 저장
                </Button>
            }
        >
            <SubHeader name={name} useToggle={close} unUseCart={true} />

            <div className="bank_notice_wrap">
                <p>환불 가능한 계좌를 정확히 입력해주세요.</p>
                <p>승인취소가 불가능한 결제 건은 계좌환불이 진행됩니다.</p>
            </div>

            <div className="bank_info_wrap">
                <Select
                    className="select_bank"
                    classNamePrefix
                    onChange={selectBank}
                    options={options}
                />
                <Input 
                    value={"홍길동"}
                />
                <Input 
                    value={"00000000000"}
                />
            </div>

        </BankDrawerStyled>
    )
}

export default BankDrawer;
