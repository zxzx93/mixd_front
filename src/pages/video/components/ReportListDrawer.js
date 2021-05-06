import React, { useState } from 'react';
import ReportListDrawerStyled from './ReportListDrawerStyled';
import { Button } from 'antd';
import ReportFinishDrawer from './ReportFinishDrawer';

const ReportListDrawer = ({ visible, close }) => {
    const [visibleFinish, setVisibleFinish] = useState(false);

    const reportList = [
        '광고 댓글', '도배성 댓글', '혐오 발언 또는 상징', '음란성 댓글', '지적 재산권 침해', '괴롭힘 또는 비하발언', '폭력적이거나 위험한 댓글', '기타'
    ]

    const reportFinish = () => {
        close();
        setVisibleFinish(true)
        setTimeout(() => {
            setVisibleFinish(false)
        }, 1500);
    }

    const reportFinishCancel = () => {
        setVisibleFinish(false)
    }

    return (
        <ReportListDrawerStyled
            title={
                <>
                    <img src="/images/report_on.png" alt="" />
                    <p>해당 댓글을 <span>신고</span>하시겠습니까?</p>
                </>
            }
            placement="bottom"
            closable={false}
            onClose={close}
            visible={visible}
        >
            <ul>
            {
                reportList.map((value, index) =>
                    <li key={index}>
                        <Button 
                            type="text"
                            onClick={reportFinish}
                        >
                            {value}
                        </Button>                        
                    </li>   
                )
            }
                <li>
                    <Button
                        type="text"
                        className="report_cancel"
                        onClick={close}
                    >
                        취소
                    </Button>
                </li>
                <ReportFinishDrawer
                    placement="bottom"
                    closable={false}
                    close={reportFinishCancel}
                    visible={visibleFinish}
                />
            </ul>
        </ReportListDrawerStyled>
    )
}

export default ReportListDrawer;
