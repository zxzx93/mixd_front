import React, { useState } from 'react';
import ReportDrawerStyled from './ReportDrawerStyled';
import { Button } from 'antd';
import ReportListDrawer from './ReportListDrawer';

const ReportDrawer = ({ visible, close }) => {
    const [listVisible, setListVisible] = useState(false);

    const commentReport = () => {
        setListVisible(true)
        close();
    }
    const commentReportCancel = () => {
        close();
    }

    const reportListCancel = () => {
        setListVisible(false)
    }
    

    return (
        <ReportDrawerStyled
            title="닉네임.."
            placement="bottom"
            closable={false}
            onClose={close}
            visible={visible}
        >
            <div>
                <Button 
                    type="text"
                    className="comment_delete_btn"
                    onClick={commentReport}
                >
                    이 댓글 신고
                </Button>
                <ReportListDrawer
                    placement="bottom"
                    closable={false}
                    close={reportListCancel}
                    visible={listVisible}
                />
            </div>
            <div>
                <Button
                    type="text"
                    className="comment_delete_cancel"
                    onClick={commentReportCancel}
                >
                    취소
                </Button>
            </div>
        </ReportDrawerStyled>
    )
}

export default ReportDrawer;
