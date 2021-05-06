import React from 'react';
import ReportFinishDrawerStyled from './ReportFinishDrawerStyled';

const ReportFinishDrawer = ({ visible, close }) => {
    return (
        <ReportFinishDrawerStyled
            placement="bottom"
            closable={false}
            onClose={close}
            visible={visible}
        >
            <div>
                <span><img src="/images/finish.png" alt="" /></span>
                <p>해당 댓글이 신고되었습니다.</p>
            </div>
            <div>
                <span>회원님의 소중한 의견은</span>
                <span>믹스디를 안전하게 유지하는데 도움이 됩니다.</span>
            </div>
        </ReportFinishDrawerStyled>
    )
}

export default ReportFinishDrawer;
