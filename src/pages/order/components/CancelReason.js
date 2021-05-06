import React from 'react';
import CancelReasonStyled from './CancelReasonStyled';
import OrderTitle from './OrderTitle';

const CancelReason = ({ order, status }) => {
    const orderName = status === 1 ? "취소사유" : "반품사유";

    return (
        <CancelReasonStyled>
            <OrderTitle orderName={orderName} />
                {
                    order.length !== 0 ?
                        status === 1 ?
                        <div>
                            <p>{order[0].detail.cancel_etc}</p>
                            <span>
                                {order[0].detail.cancel_etc2}
                            </span>
                        </div>
                        :
                        <div>
                            <p>{order[0].detail.refund_etc}</p>
                            <span>
                                {order[0].detail.refund_etc2}
                            </span>
                        </div>
                    :
                    null
                }
        </CancelReasonStyled>
    )
}

export default CancelReason;
