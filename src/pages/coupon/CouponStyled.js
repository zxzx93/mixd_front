import Styled from 'styled-components';
import dp from './../../components/styled/Dp';

const CouponStyled = Styled.div`
    @media screen and (max-width: 768px) {
        padding: ${dp([50, 0, 52, 0])};

        .newCoupon_wrap {
            box-sizing: border-box;
            padding: ${dp([12, 8, 14, 8])};
            border-bottom: ${dp(6)} solid #F5F5F5;
            
            button {
                width: 100%;
                height: ${dp(84)};
                background: #667AD9;
                border-radius: ${dp(8)};

                img {
                    width: ${dp(20)};
                }

                span {
                    position: relative;
                    top: ${dp(2)};
                    margin-left: ${dp(12)};
                    line-height: ${dp(20)};
                    color: #FFFFFF;
                    font-weight: bold;
                }
            }
        }

        .ant-tabs-nav {
            margin: 0;
            padding: 0 ${dp(8)};
        }
        .ant-tabs-nav-list {
            width: 100%;
        }
        .ant-tabs-tab {
            margin: 0;
            width: 50%;
        }

        .ant-tabs-tab-active {
            .ant-tabs-tab-btn {
                color: #000000;
            }
        }
        .ant-tabs-tab-btn {
            width: 100%;
            text-align: center;
            color: #939393;
        }
        .ant-tabs-nav {
            .ant-tabs-ink-bar {
                height: ${dp(3)};
                background: #000000;
            }
        }

        .ant-tabs-tabpane {
            box-sizing: border-box;
        }

        .non_list {
            padding: ${dp([156, 0, 156, 0])};
            text-align: center;
            color: #D1D1D1;
            font-size: ${dp(14)};
            line-height: ${dp(16)};
            background-color: #F5F5F5;
        }

        .coupon_alert {
            padding: ${dp([16, 16, 50, 16])};

            div {
                &:nth-child(1) {
                    color: #D1D1D1;
                    font-size: ${dp(13)};
                    line-height: ${dp(16)};
                    margin-bottom: ${dp(4)};
                }
                &:nth-child(2) {
                    box-sizing: border-box;
                    padding-left: ${dp(7)};
                }
            }

            p {
                position: relative;
                color: #D1D1D1;
                margin: 0;
                font-size: ${dp(11)};
                line-height: ${dp(18)};

                &:before {
                    position: absolute;
                    top: 0;
                    left: -${dp(7)};
                    display: inline-block;
                    content: '·';
                    width: ${dp(7)};
                }
            }

            span {
                display: block;
                color: #D1D1D1;
                margin: 0;
                font-size: ${dp(11)};
                line-height: ${dp(18)};
            }
        }
    }
`;

export default CouponStyled;
