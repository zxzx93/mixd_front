import Styled from "styled-components";
import dp from './../../../components/styled/Dp';

const AmountPaymentStyled = Styled.div`
    @media screen and (max-width: 768px) {
        .coupon_point_wrap {
            box-sizing: border-box;
            padding: ${dp([0, 16])};

            > div {
                overflow: hidden;
                margin-bottom: ${dp(8)};

                &:last-child {
                    margin-bottom: 0;
                }

                .ant-input-affix-wrapper {
                    float: left;
                    width: 70%;
                    border: none;
                    border-bottom: ${dp(1)} solid #D1D1D1;
                    height: ${dp(42)};

                    .ant-input-prefix {
                        font-size: ${dp(13)};
                        color: #000000;
                    }

                    .ant-input-suffix {
                        font-size: ${dp(13)};
                        color: #000000;
                        font-weight: bold;
                    }
                }

                button {
                    float: right;
                    width: 27%;
                    height: ${dp(42)};
                    border-radius: ${dp(4)};
                    border: ${dp(1)} solid #D1D1D1;

                    > span {
                        font-size: ${dp(13)};
                        color: #d1d1d1;
                    }
                }
            }

            .residual_point {
                padding-bottom: ${dp(14)};
                border-bottom: ${dp(1)} solid #F5F5F5;

                p {
                    font-size: ${dp(12)};
                    color: #939393;
                    line-height: ${dp(18)};
                    margin: 0;
                }

                span {
                    display: block;
                    font-size: ${dp(12)};
                    color: #D1D1D1;
                    line-height: ${dp(18)};
                }
            }
        }

        .amount_wrap {
            box-sizing: border-box;
            padding: ${dp([14, 16, 15, 16])};

            ul {
                margin: 0;

                li {
                    overflow: hidden;
                    margin-bottom: ${dp(12)};

                    &:last-child {
                        margin-bottom: 0;
                    }

                    p {
                        font-size: ${dp(13)};
                        color: #000000;
                        line-height: ${dp(19)};
                        margin: 0;
                        float: left;
                    }

                    span {
                        font-size: ${dp(13)};
                        color: #000000;
                        line-height: ${dp(19)};
                        float: right;
                    }

                    .bold {
                        font-weight: bold;
                    }

                    .color {
                        color: #FF3358;
                    }

                    .size {
                        font-size: ${dp(15)};
                    }
                }
            }

            > span {
                margin-top: ${dp(4)};
                color: #D1D1D1;
                font-size: ${dp(12)};
                line-height: ${dp(18)};
            }
        }
    }
`;

export default AmountPaymentStyled;
