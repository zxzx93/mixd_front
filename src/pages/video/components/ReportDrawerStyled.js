import Styled from 'styled-components';
import { Drawer } from 'antd';
import dp from './../../../components/styled/Dp';

const ReportDrawerStyled = Styled(Drawer)`
    @media screen and (max-width: 768px) {
        z-index: 1400;

        .ant-drawer-wrapper-body {
            box-sizing: border-box;
            padding: ${dp(16)};
        }

        .ant-drawer-content {
            border-top-left-radius: ${dp(16)};
            border-top-right-radius: ${dp(16)};
        }

        .ant-drawer-header {
            padding: ${dp([12, 0, 15, 0])};
            text-align: center;
            border-bottom: ${dp(1)} solid #F5F5F5;

            .ant-drawer-title {
                font-size: ${dp(14)};
                line-height: ${dp(17)};
                font-weight: bold;
            }
        }

        .ant-drawer-body {
            padding: 0;

            > div {
                padding: ${dp([3, 0])};
                border-bottom: ${dp(1)} solid #F5F5F5;
            }

            button {
                width: 100%;
                height: ${dp(42)};
                background-color: #FFFFFF;

                span {
                    font-size: ${dp(14)};
                }
            
                &.comment_delete_btn {
                    span {
                        color: #FF3358;
                    }
                }

                &.comment_delete_cancel {
                    span {
                        color: #939393;
                    }
                }
            }
        }
    }
`;

export default ReportDrawerStyled;