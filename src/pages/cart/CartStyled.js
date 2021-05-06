import Styled from "styled-components";
import dp from './../../components/styled/Dp';

const CartStyled = Styled.div`
    @media screen and (max-width: 768px) {
        padding: ${dp([43, 0 , 52, 0])};

        .order_info_wrap {
            box-sizing: border-box;
            padding: ${dp([30, 8, 0, 8])};

            ul {
                margin: 0;
                padding-bottom: ${dp(12)};
                border-bottom: 1px solid #F5F5F5;

                li {
                    overflow: hidden;
                    line-height: ${dp(17)};
                    margin-bottom: ${dp(12)};

                    &:last-child {
                        margin-bottom: 0;
                    }

                    p {
                        float: left;
                        font-size: ${dp(14)};
                        color: #000000;
                        margin: 0;
                    }

                    span {
                        float: right;
                        font-size: ${dp(14)};
                        color: #000000;
                    }

                    &.total_price {
                        > span {
                            font-weight: bold;
                        }
                    }
                }
            }

            .count_price {
                margin: ${dp([17, 0, 70, 0])};
                overflow: hidden;

                p {
                    float: left;
                    font-size: ${dp(16)};
                    font-weight: bold;
                    color: #000000;
                }

                span {
                    float: right;
                    font-size: ${dp(16)};
                    font-weight: bold;
                    color: #FF3358;
                }
            }

            .order_btn_wrap {
                position: fixed;
                bottom: 0;
                left: 0;
                z-index: 1400;
                width: 100%;
                box-sizing: border-box;
                padding: ${dp([5, 8])};
                background-color: #FFFFFF;
                
                .order_btn {
                    width: 100%;
                    height: ${dp(56)};
                    background-color: #FF3358;
                    border-radius: ${dp(4)};
                
                    span {
                        color: #FFFFFF;
                        font-size: ${dp(16)};
                        line-height: ${dp(56)};
                        font-weight: bold;
                    }
                }
            }
        }
        
        .non_lists {
            padding-top: ${dp(270)};
            text-align: center;

            p {
                font-size: ${dp(14)};
                color: #D1D1D1;
                margin: 0;
            }

            .ant-btn-link {
                margin-top: ${dp(30)};
                width: ${dp(192)};
                height: ${dp(42)};
                background-color: #FF3358;
                line-height: ${dp(42)};
                border-radius: ${dp(4)};
                box-shadow: 0 ${dp(1)} ${dp(3)} rgba(0, 0, 0, 0.15);

                span {
                    color: #FFFFFF;
                    font-size: ${dp(14)};
                }
            }
        }
    }
`;

export default CartStyled;
