import Styled from "styled-components";
import dp from './../../../components/styled/Dp';

const PaymentMethodStyled = Styled.div`
    @media screen and (max-width: 768px) {
        .ant-tabs-tab {
            padding: 0;
            margin: 0;
        }

        .ant-tabs-nav-wrap {
            box-sizing: border-box;
            padding: ${dp([0, 16])};
        }

        .ant-tabs-nav-list {
            width: 100%;
        }

        .ant-tabs-tab {
            width: 23.2%;
            height: ${dp(48)};
            margin-right: 2.4%;
            border: ${dp(1)} solid #D1D1D1;
            border-radius: ${dp(4)};

            &.ant-tabs-tab-active {
                background-color: #FF3358;
                border: none;
                .ant-tabs-tab-btn {
                    > p {
                        color: #FFFFFF;
                    }
                }
            }

            &:nth-child(4) {
                margin-right: 0;
            }

            .ant-tabs-tab-btn {
                width: 100%;
                text-align: center;

                > p {
                    color: #D1D1D1;
                    font-size: ${dp(12)};
                    margin: 0;
                    line-height: ${dp(16)};
                }
            }
        }

        .ant-tabs-nav {
            margin: 0;

            &:before {
                border: none;
            }
        }
        .ant-tabs-ink-bar {
            display: none;
        }
    }
`;

export default PaymentMethodStyled;
