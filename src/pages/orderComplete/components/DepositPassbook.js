import React, { useState } from 'react';
import DepositPassbookStyled from './DepositPassbookStyled';
import { Input, Radio, Checkbox } from 'antd';
import _ from 'lodash';

const DepositPassbook = () => {
    const [selectReceipts, setSelectReceipts] = useState();

    const checkedValue = (e) => {
        setSelectReceipts(e.target.value)
    }

    return (
        <DepositPassbookStyled>
            <div className="deposit_info_wrap">
                <p>입금정보</p>
                <Input 
                    value={"신한 (000-000-000000)"}
                    // placeholder={}
                />
                <Input 
                    value={""}
                    placeholder={"입금자명"}
                />
                <span>실제 입금자명과 다른 경우 <span>입금확인이 불가</span>하니 정확하게 입력해주세요.</span>
            </div>
            <div className="receipts_info_wrap">
                <p>현금영수증 신청</p>
                <div className="check_wrap">
                    <Radio.Group onChange={checkedValue}>
                        <Radio value={1}>개인 소득 공제</Radio>
                        <Radio value={2}>사업자 지출 증빙</Radio>
                        <Radio value={3}>미신청</Radio>
                    </Radio.Group>
                    <div>
                        {
                            selectReceipts === 1 ?
                            <Input
                                placeholder={"휴대폰 번호를 입력해 주세요."}
                            />
                            :
                            selectReceipts === 2 ?
                            <Input
                                placeholder={"사업자 번호를 입력해 주세요."}
                            />
                            :
                            selectReceipts === 3 ?
                            null
                            :
                            null
                        }
                    </div>
                </div>
            </div>

            <div className="next_check_wrap">
                <Checkbox>지금 선택한 결제 수단 다음에도 사용</Checkbox>
            </div>
        </DepositPassbookStyled>
    )
}

export default DepositPassbook;