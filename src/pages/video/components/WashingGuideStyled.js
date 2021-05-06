import Styled from 'styled-components';
import dp from './../../../components/styled/Dp';
import { Drawer } from 'antd';

const WashingGuideStyled = Styled(Drawer)`
    @media screen and (max-width: 768px) {
        
        .ant-drawer-content-wrapper {
            width: 100% !important;
            box-sizing: border-box;
            padding: ${dp([43, 0, 52, 0])};
        }
        .ant-drawer-content {
            width: 100%;
        }
        .ant-drawer-body {
            padding: 0;
        }

        .guide_title {
            text-align: center;
            box-sizing: border-box;
            padding: ${dp([27, 0, 16, 0])};

            > img {
                width: ${dp(18)};
            }

            > p {
                font-size: ${dp(18)};
                font-weight: bold;
                color: #000000;
                text-align: center;
                margin: ${dp([12, 0, 16, 0])};
            }
        }

        .wasing_lists {
            text-align: center;
            box-sizing: border-box;
            padding: ${dp([26, 27, 21, 27])};
            border-bottom: ${dp(5)} solid #F5F5F5;

            &:last-child {
                border-bottom: 0;
            }

            > div {
                > span {
                    display: inline-block;
                    text-align: center;
                    min-width: ${dp(60)};
                    border-bottom: ${dp(1)} solid #D1D1D1;
                    font-size: ${dp(16)};
                    font-weight: bold;
                    color: #000000;
                    line-height: ${dp(19)};
                    padding: ${dp([0, 7, 3, 7])};
                }

                > p {
                    padding-top: ${dp(5)};
                    font-size: ${dp(12)};
                    line-height: ${dp(15)};
                    color: #000000;
                }
            }
        }

        .management {
            overflow: hidden;
            margin: ${dp([26, 0, 19, 0])};

            > li {
                display: inline-block;
                text-align: center;
                margin-right: ${dp(11)};

                &:last-child {
                    margin-right: 0;
                }

                > img {
                    width: ${dp(34)};
                }

                > p {
                    font-size: ${dp(11)};
                    line-height: ${dp(13)};
                    margin: ${dp([8, 0, 0, 0])};
                    white-space: nowrap;
                    color: #939393;
                }
            }
        }

        .notice_wrap {
            p {
                color: #000000;
                font-size: ${dp(13)};
                margin: 0;
                line-height: ${dp(21)};
            }
        }
    }
`;

export default WashingGuideStyled;
