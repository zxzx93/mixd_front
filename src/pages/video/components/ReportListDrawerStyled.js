import Styled from 'styled-components';
import { Drawer } from 'antd';
import dp from './../../../components/styled/Dp';

const ReportListDrawerStyled = Styled(Drawer)`
    @media screen and (max-width: 768px) {
        z-index: 1500;

        .ant-drawer-content-wrapper {
            height: 100% !important;
            max-height: 75vh;
        }

        .ant-drawer-wrapper-body {
            box-sizing: border-box;
            padding: ${dp([16, 32])};
        }

        .ant-drawer-content {
            border-top-left-radius: ${dp(16)};
            border-top-right-radius: ${dp(16)};
        }

        .ant-drawer-header {
            padding: ${dp([12, 0, 15, 0])};
            border: none;

            .ant-drawer-title {
                display: inline-block;
            }

            img {
                float: left;
                width: ${dp(13)};
                margin-right: ${dp(14)};
                line-height: ${dp(22)};
            }

            p {
                float: left;
                margin: 0;
                font-size: ${dp(14)};
                line-height: ${dp(17)};
                font-weight: bold;
                color: #000000;

                span {
                    color: #FF3358;
                }
            }
        }

        .ant-drawer-body {
            padding: 0;

            button {
                width: 100%;
                text-align: left;
                height: ${dp(42)};
                padding: 0;
                background-color: #FFFFFF;
                
                span {
                    color: #000000;
                }

                &.report_cancel {
                    > span {
                        color: #FF3358;
                    }
                }
            }
        }
    }
`;

export default ReportListDrawerStyled;
