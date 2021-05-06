import Styled from 'styled-components';
import { Drawer } from 'antd';
import dp from '../../../components/styled/Dp';

const ReportFinishDrawerStyled = Styled(Drawer)`
    @media screen and (max-width: 768px) {
        z-index: 1600;

        .ant-drawer-content {
            border-top-left-radius: ${dp(16)};
            border-top-right-radius: ${dp(16)};
        }

        .ant-drawer-body {
            > div {
                &:first-child {
                    span {
                        position: relative;
                        display: block;
                        margin: 0 auto;
                        width: ${dp(22)};
                        height: ${dp(22)};
                        border: ${dp(2)} solid #007AFF;
                        border-radius: 50%;
                        margin-bottom: ${dp(8)};

                        img {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            width: ${dp(12)};
                        }
                    }

                    p {
                        margin: 0;
                        font-size: ${dp(14)};
                        font-weight: bold;
                        line-height: ${dp(17)};
                        color: #000000;
                        text-align: center;
                    }
                }

                &:nth-child(2) {
                    margin-top: ${dp(22)};

                    span {
                        font-size: ${dp(12)};
                        color: #000000;
                        display: block;
                        text-align: center;
                    }
                }
            }
        }
    }
`;

export default ReportFinishDrawerStyled;
