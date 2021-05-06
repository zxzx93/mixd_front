import Styled from "styled-components";
import dp from './../../../components/styled/Dp';

const DepositPassbookStyled = Styled.div`
    @media screen and (max-width: 768px) {
        .deposit_info_wrap {
            box-sizing: border-box;
            padding: ${dp([28, 16, 38, 16])};
            background-color: #F5F5F5;
            margin-top: ${dp(23)};

            > p {
                color: #000000;
                font-weight: bold;
                font-size: ${dp(14)};
                margin-bottom: ${dp(8)};
            }

            input {
                border-radius: ${dp(4)};
                height: ${dp(42)};
                border: ${dp(1)} solid #D1D1D1;
                font-size: ${dp(12)};
                color: #626262;
                margin-bottom: ${dp(8)};

                &:nth-child(3) {
                    margin-bottom: ${dp(11)};
                }
            }

            > span {
                display: block;
                font-size: ${dp(11)};
                color: #D1D1D1;

                > span {
                    color: #FF3358;
                }
            }
        }

        .receipts_info_wrap {
            box-sizing: border-box;
            padding: ${dp([0, 16, 28, 16])};
            background-color: #F5F5F5;

            > p {
                color: #000000;
                font-weight: bold;
                font-size: ${dp(14)};
                margin-bottom: ${dp(19)};
            }

            .check_wrap {
                .ant-radio-wrapper {
                    margin-left: ${dp(14)};

                    &:first-child {
                        margin-left: 0;
                    }

                    > span {
                        &:nth-child(2) {
                            display: inline-block;
                            font-size: ${dp(12)};
                            line-height: ${dp(16)};
                            color: #000000;
                            padding: ${dp([0, 0, 0, 6])};
                        }
                    }
                }

                .ant-radio-group {
                    margin-bottom: ${dp(8)};

                }
                
                input {
                    height: ${dp(42)};
                    border: ${dp(1)} solid #D1D1D1;
                    border-radius: ${dp(4)};
                    font-size: ${dp(12)};
                }
            }
        }

        .next_check_wrap {
            box-sizing: border-box;
            padding: ${dp([21, 16])};

            .ant-checkbox-wrapper {
                > span {
                    &:nth-child(2) {
                        font-size: ${dp(12)};
                        color: #D1D1D1;
                        padding: ${dp([0, 10])};
                    }
                }
            }
        }
    }
`;

export default DepositPassbookStyled;
