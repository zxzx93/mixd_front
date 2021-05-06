import React, { Fragment } from 'react';
import OrderTitle from '../../order/components/OrderTitle'

const CashReceipts = () => {
    const orderName = "현금영수증 정보";
    return (
        <Fragment>
            <OrderTitle orderName={orderName} />
            <ul className="CashReceiptsInfo">
                <li>
                    <p>신청유형</p>
                    <span>미신청</span>
                </li>
            </ul>
        </Fragment>
    )
}

export default CashReceipts;
