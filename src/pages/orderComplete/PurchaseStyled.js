import Styled from "styled-components";

import dp from './../../components/styled/Dp';

const PurchaseStyled = Styled.div`
    @media screen and (max-width: 768px) {
        box-sizing: border-box;
        padding: ${dp([50, 0, 52, 0])};
        
        .order_lists_wrap {
            .ant-collapse-item {
                border-bottom: ${dp(1)} solid #F5F5F5;
            }
            .ant-collapse-borderless {
                background-color: #FFFFFF;
            }

            .ant-collapse-header {
                padding: ${dp([29, 40, 29, 16])};
                font-weight: bold;
                font-size: ${dp(15)};

                .ant-collapse-arrow {
                    left: auto;
                    right: ${dp(16)};
                    top: ${dp(23)};
                }
            }
        }

        .add_shipping_wrap {
            box-sizing: border-box;
            padding: ${dp(16)};
            border-bottom: ${dp(1)} solid #F5F5F5;
        }

        .amount_wrap {
            border-bottom: ${dp(1)} solid #F5F5F5;

            .ant-collapse {
                border: none;
            }

            .ant-collapse-item {
                border: none;

                &.ant-collapse-item-active {
                    .ant-collapse-header {
                        padding: ${dp([28, 30, 18, 16])};
                    }

                    .amount_title {
                        > span {
                            display: none;
                        }
                    }
                }
            }

            .ant-collapse-header {
                box-sizing: border-box;
                padding: ${dp([28, 30, 30, 16])};
                background-color: #FFFFFF;
                
                .amount_title {
                    position: relative;
                    overflow: hidden;

                    > p {
                        float: left;
                        margin: 0;
                        font-size: ${dp(15)};
                        color: #000000;
                        font-weight: bold;
                        line-height: ${dp(22)};
                    }

                    > span {
                        float: right;
                        margin-right: ${dp(9.5)};
                        font-size: ${dp(15)};
                        font-weight: bold;
                        color: #FF3358;
                        line-height: ${dp(22)};
                    }
                }
         
                .ant-collapse-arrow {
                    padding: 0;
                    top: ${dp(33)};

                    > svg {
                        transform: rotate(-90deg);
                    }
                }

            }
            
            .ant-collapse-content {
                border: none;
                
                .ant-collapse-content-box {
                    padding: 0;
                }
            }
        }

        .refund_number_wrap {
            box-sizing: border-box;
            padding: ${dp([17, 16, 17, 16])};
            border-bottom: ${dp(1)} solid #F5F5F5;
        }

        .payment_method_wrap {
            .ant-collapse {
                border: none;
            }
            .ant-collapse-item {
                border: none;
            }
            .ant-collapse-header {
                position: relative;
                height: ${dp(80)};
                background-color: #FFFFFF;
                box-sizing: border-box;
                padding: ${dp([29, 40, 29, 16])};

                > p {
                    font-size: ${dp(15)};
                    color: #000000;
                    font-weight: bold;
                    margin: 0;
                    line-height: ${dp(22)};
                }

                .ant-collapse-arrow {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    padding: 0;
                }
            }

            .ant-collapse-content {
                border: none;
            }

            .ant-collapse-content-box {
                padding: 0;
            }
        }
    }
`;

export default PurchaseStyled;
