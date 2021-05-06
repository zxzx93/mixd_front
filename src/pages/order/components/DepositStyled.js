import styled from 'styled-components';
import dp from '../../../components/styled/Dp';

const DepositStyled = styled.div`
    @media screen and (max-width: 768px) {
        .order_title {
            box-sizing: border-box;
            padding: ${dp([33, 16, 0, 16])};
        }

        > ul {
            margin: 0;
            box-sizing: border-box;
            padding: ${dp([0, 16, 30, 16])};

            li {
                overflow: hidden;
                margin-bottom: ${dp(14)};

                &:last-child {
                    margin-bottom: 0;
                }

                p {
                    float: left;
                    width: ${dp(100)};
                    font-size: ${dp(13)};
                    line-height: ${dp(16)};
                    margin: 0;
                    color: #000000;
                }

                span {
                    float: right;
                    font-size: ${dp(13)};
                    line-height: ${dp(16)};
                    color: #000000;
                }

                .bold {
                    font-weight: bold;
                }

                .point {
                    color: #FF3358;
                }
            }
        }

        .deposit_info_wrap {
            background-color: #FFC85F;
            box-sizing: border-box;
            padding: ${dp([12, 0, 12, 40])};
            display: table;
            width: 100%;

            > div {
                display: table-cell;
                vertical-align: middle;

                &:first-child {
                    > span {
                        text-align: center;
                        display: block;
                        width: ${dp(37)};
                        height: ${dp(37)};
                        font-size: ${dp(25)};
                        font-weight: bold;
                        line-height: ${dp(31)};
                        border-radius: 50%;
                        border: ${dp(2)} solid #FFFFFF;
                        color: #FFFFFF;
                    }
                }

                &:last-child {
                    > p {
                        margin: 0;
                        font-size: ${dp(13)};
                        line-height: ${dp(16)};
                        color: #FFFFFF;

                        > time {
                            font-weight: bold;
                            color: #FFFFFF;
                        }
                    }
                }
            }
        }
    }
`;

export default DepositStyled;
