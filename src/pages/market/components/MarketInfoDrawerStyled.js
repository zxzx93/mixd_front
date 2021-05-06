import styled from 'styled-components';
import { Drawer } from 'antd';
import dp from '../../../components/styled/Dp';

const MarketInfoDrawerStyled = styled(Drawer)`
    @media screen and (max-width: 768px) {
        z-index: 1250;
        
        .ant-drawer-content-wrapper {
            width: 100% !important;
        }
        .ant-drawer-body {
            box-sizing: border-box;
            padding: ${dp([43, 0, 52, 0])};
        }

        .title_wrap {
            width: 100%;
            height: ${dp(160)};
            background-color: #FFCC74;
            border-bottom-left-radius: ${dp(14)};
            border-bottom-right-radius: ${dp(14)};
            text-align: center;

            > p {
                color: #FFFFFF;
                text-align: center;
                margin: 0;
                font-weight: bold;

                &:first-child {
                    font-size: ${dp(13)};
                    line-height: ${dp(16)};
                    padding-top: ${dp(32)};
                }

                &:nth-child(2) {
                    font-size: ${dp(16)};
                    line-height: ${dp(20)};
                }
            }

            > img {
                width: ${dp(127)};
            }
        }

        .market_info_wrap {
            box-sizing: border-box;
            padding: ${dp([0, 16])};

            .info_wrap_title {
                margin: ${dp([28, 0, 12, 0])};
                font-size: ${dp(15)};
                line-height: ${dp(22)};
                font-weight: bold;
                color: #000000;
            }

            > div {
                color: #000000;
                font-size: ${dp(13)};
                line-height: ${dp(18)};
                margin-bottom: ${dp(12)};

                &:before {
                    content: '';
                    display: block;
                    width: ${dp(4)};
                    height: ${dp(4)};
                    background-color: #000000;
                    border-radius: ${dp(2)};
                    float: left;
                    margin: ${dp([7, 5, 0, 0])};
                }

                > ul {
                    margin: ${dp([12, 0, 0, 0])};
                    box-sizing: border-box;
                    padding-left: ${dp(10)};

                    > li {
                        color: #000000;
                        font-size: ${dp(12)};
                        line-height: ${dp(18)};
                        margin-bottom: ${dp(9)};

                        &:before {
                            content: '';
                            display: block;
                            width: ${dp(6)};
                            height: ${dp(1)};
                            background-color: #000000;
                            float: left;
                            margin: ${dp([8.5, 5, 0, 0])};
                        }
                    }
                }
            }
        }
    }
`;

export default MarketInfoDrawerStyled;
