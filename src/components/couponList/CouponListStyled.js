import Styled from 'styled-components';
import dp from './../../components/styled/Dp';

const CouponListStyled = Styled.div`
    @media screen and (max-width: 768px) {
        padding: ${dp(16)};
        
        .couoponList_wrap {
            width: 100%;
            height: ${dp(120)};
            box-shadow: 0 ${dp(3)} ${dp(6)} rgba(0, 0, 0, 0.2);
            overflow: hidden;
            border-radius: ${dp(4)};
            margin-bottom: ${dp(12)};

            .coupon_info {
                position: relative;
                height: 100%;
                box-sizing: border-box;
                padding: ${dp([7, 0, 12, 24])};
                float: left;

                &.unUsed {
                    > div {
                        color: #FF3358;
                        > span {
                            color: #FF3358;
                        }
                    }
                    p {
                        color: #000000;
                    }
                }

                &.used {
                    > div {
                        color: #D1D1D1;
                        > span {
                            color: #D1D1D1;
                        }
                    }
                    p {
                        color: #939393;
                    }
                }

                div {
                    position: absolute;
                    top: ${dp(7)};
                    font-size: ${dp(28)};
                    line-height: ${dp(38)};
                    font-weight: bold;

                    > span {
                        font-size: ${dp(20)};
                    }
                }

                p {
                    font-size: ${dp(13)};
                    line-height: ${dp(19)};
                    margin: ${dp([37, 0, 16, 0])};
                }

                ul {
                    margin: 0;

                    li {
                        font-size: ${dp(12)};
                        line-height: ${dp(14)};
                        color: #D4D2D2;

                        time {
                            color: #D4D2D2;
                        }
                    }
                }
            }

            .coupon_status {
                display: table;
                width: ${dp(73)};
                height: 100%;
                float: right;
                position: relative;

                &.used {
                    background-color: #D1D1D1;
                }

                &.unUsed {
                    background-color: #FF3358;
                }

                > div {
                    color: #FFFFFF;
                    display: table-cell;
                    vertical-align: middle;
                    height: 100%;
                    text-align: center;
                }
            }
        }
    }
`;

export default CouponListStyled;
