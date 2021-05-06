import React, { useEffect, useState } from 'react';
import ReasonStyled from './ReasonStyled';
import OrderTitle from './OrderTitle';
import Select from 'react-select';
import { Input } from 'antd';
import { useDispatch } from "react-redux";
import { CancelReason } from "../../../store/modules/order";

const { TextArea } = Input;

const Reason = ({ status }) => {
    const orderName = status === 1 ? "취소사유" : "반품사유";
    const [selectOption, setSelectOption] = useState();
    const [textValueChange, setTextValueChange] = useState(null);

    const dispatch = useDispatch();

    const optionChange = (e) => {
        setSelectOption(e.value);
    }

    const textAreaChange = (e) => {
        setTextValueChange(e.target.value)
    }

    useEffect(() => {
        dispatch(CancelReason(selectOption, textValueChange))
    }, [selectOption, textValueChange])

    const cancelOptions = [
        {value: '단순변심', label: '단순변심'},
        {value: '사이즈/색상 변경', label: '사이즈/색상 변경'},
        {value: '주문실수', label: '주문실수'},
        {value: '배송지연', label: '배송지연'},
        {value: '서비스 불만족', label: '서비스 불만족'},
        {value: '배송지 변경', label: '배송지 변경'},
        {value: '상품품절', label: '상품품절'},
        {value: '기타(판매자책임)', label: '기타(판매자책임)'},
    ]
    
    const refundOptions = [
        {value: '단순변심', label: '단순변심'},
        {value: '사이즈/색상/ 변경', label: '사이즈/색상/ 변경'},    
        {value: '주문실수', label: '주문실수'},    
        {value: '배송지연', label: '배송지연'},    
        {value: '서비스 불만족', label: '서비스 불만족'},    
        {value: '기타(판매자책임)', label: '기타(판매자책임)'},    
    ]

    return (
        <ReasonStyled>
            <OrderTitle orderName={orderName} />
            
            {
                status === 1 ?
                <Select
                    className="reason_select"
                    classNamePrefix
                    onChange={optionChange}
                    placeholder={'취소 사유를 선택해 주세요.'}
                    options={cancelOptions}
                />
                :
                <Select
                    className="reason_select"
                    classNamePrefix
                    onChange={optionChange}
                    placeholder={'반품 사유를 선택해 주세요.'}
                    options={refundOptions}
                />
            }

            <TextArea
                placeholder="상세 사유를 입력해 주세요."
                onChange={textAreaChange}
                autoSize={{ minRows: 6.5, maxRows: 6.5 }}
            />

        </ReasonStyled>
    )
}

export default Reason;
