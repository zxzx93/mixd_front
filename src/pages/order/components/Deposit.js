import React from 'react';
import DepositStyled from './DepositStyled';
import OrderTitle from './OrderTitle';
import Moment from 'react-moment';
import 'moment/locale/ko';

const Deposit = ({ order, comDeposit }) => {
    const orderName = "입금정보";

    return(
        <DepositStyled>
            <OrderTitle orderName={orderName} useShare={true} />
            <ul>
                <li>

                    <p>입금 금액</p>

                    <span className="bold">
                        {   
                            order.order.cor_total_pay_money?
                            order.order.cor_total_pay_money
                            :
                            0
                        } 원
                    </span>
                </li>
                <li>
                    <p>입금자명</p>
                    <span className="bold normal">
                        {/* 입금자 고정.. */}
                        예금주: 믹스디 주식회사
                    </span>
                </li>
                {
                    comDeposit ? 
                    <>
                        <li>
                            <p>입금 은행</p>
                            <span>신한은행</span>
                        </li>
                        <li>
                            <p>입금 계좌</p>
                            <span className="bold">140-013-257718</span>
                        </li>
                    </>
                    :
                    <li>
                        <p>입금은행</p>
                        <span className="bold">
                            {/* 은행 고정.. */}
                            신한은행 140-013-257718
                        </span>
                    </li>
                }
                
            </ul>
            <div className="deposit_info_wrap">
                <div>
                    <span>!</span>
                </div>
                <div>
                    <p>
                        <Moment 
                            add={{ hours: 24}} 
                            format="YYYY.MM.DD HH시 mm분"
                        >
                            {order.order.cor_datetime}
                        </Moment>
                         까지 입금해 주세요.
                    </p>
                    <p>입금 확인이 안될 시엔 주문이 취소됩니다.</p>
                </div>
            </div>
        </DepositStyled>
    )
}

export default Deposit;
