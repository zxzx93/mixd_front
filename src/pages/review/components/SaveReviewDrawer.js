import React from 'react';
import { Button } from 'antd';
import SaveReviewDrawerStyled from './SaveReviewDrawerStyled';

const SaveReviewDrawer = ({ visible, close }) => {
    return (
        <SaveReviewDrawerStyled
            placement="bottom"
            visible={visible}
            close={close}
            closable={false}
            title={
                <p>리뷰가 저장되었습니다.</p>
            }
        >
            <Button
                type="link"
                href="/review"
            >
                확인
            </Button>
        </SaveReviewDrawerStyled>
    )
}

export default SaveReviewDrawer;
