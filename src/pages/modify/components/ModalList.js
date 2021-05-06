import React, { useState } from "react";
import { Radio } from 'antd';
import ModalListStyled from './ModalListStyled';

function ModalList({setModalVisible, setRefundBankName,refundBankName}) {

    
    const options = [
        {
            label: "우리은행",
            value: "우리은행",
        },
        {
            label: "우체국",
            value: "우체국",
        },
        {
            label: "외환은행",
            value: "외환은행",
        },
        {
            label: "전북은행",
            value: "전북은행",
        },
        {
            label: "제주은행",
            value: "제주은행",
        },
        {
            label: "카카오뱅크",
            value: "카카오뱅크",
        },
        {
            label: "케이뱅크",
            value: "케이뱅크",
        },
        {
            label: "한국은행",
            value: "한국은행",
        },
        {
            label: "하나은행",
            value: "하나은행",
        },
        {
            label: "SC제일은행",
            value: "SC제일은행",
        },
        {
            label: "도이치은행",
            value: "도이치은행",
        },
        {
            label: "모건스탠리",
            value: "모건스탠리",
        },
        {
            label: "미쓰비시도쿄UFJ은행",
            value: "미쓰비시도쿄UFJ은행",
        },
        {
            label: "미즈호은행",
            value: "미즈호은행",
        },
        {
            label: "비엔피파리바은행",
            value: "비엔피파리바은행",
        },
        {
            label: "알비에스피엘씨은행",
            value: "알비에스피엘씨은행",
        },
        {
            label: "제이피모간체이스은행",
            value: "제이피모간체이스은행",
        },
        {
            label: "중국공상은행",
            value: "중국공상은행",
        },
        {
            label: "중국은행",
            value: "중국은행",
        },
        {
            label: "BOA은행",
            value: "BOA은행",
        },
        {
            label: "HSBC은행",
            value: "HSBC은행",
        },          
        
    ];


    function onChange(bankName) {
        setRefundBankName(bankName);
        setModalVisible(false);
    }


    return (
        <ModalListStyled>
            <Radio.Group 
                onChange={(e) => onChange(e.target.value)} 
                options={options} 
                optionType="button"
                buttonStyle="solid"
                value={refundBankName}
            />
        </ModalListStyled>
    )
}

export default ModalList 