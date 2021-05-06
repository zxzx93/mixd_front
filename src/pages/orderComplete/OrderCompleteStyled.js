import styled from 'styled-components';
import dp from '../../components/styled/Dp';

const OrderCompleteStyled = styled.div`
    @media screen and (max-width: 768px) {
        .orderComplete {

            padding-bottom: ${dp(52)};
            padding-top: ${dp(51)};

            .normal {
                font-weight: normal;
            }

            .orderCompleteCheck {

                padding: ${dp([50, 0, 42])};
                border-bottom: 1px solid #F5F5F5;
                > div {
                    text-align: center;
    
                    &:first-child {
                        margin-bottom: ${dp(26)};
                    }
                    > p {
                        margin-bottom: 0;
                        font-size: ${dp(13)};
    
                        &:first-child {
                            font-size: ${dp(15)};
                            font-weight: bold;
    
                        }
                    }
                }
            }
            .comList {
                .ant-collapse-borderless {
                    background-color: #ffffff;

                    .ant-collapse-item {
                        border-bottom: 1px solid #F5F5F5;

                        > .ant-collapse-header {

                            padding: ${dp([27, 40, 27, 16])};
                            font-weight: bold;
                            font-size: ${dp(15)};


                            .ant-collapse-arrow {
                                left: auto;
                                right: ${dp(16)};

                                top: ${dp(21)};
                            }
                        }
                        .ant-collapse-content {
                            .item_wrap {

                                margin-bottom: ${dp(20)};
                                > div {
                                    margin-bottom: 0;
                                }
                            }
                            .ant-collapse-content-box {
                                padding: ${dp([0, 24, 25])};
                            }
                        }
                    }
                }
                .orderList {
                    > span {
                        float: right;
                    }
                }
                .comProduct {
                    > div {
                        display: flex;  
                        justify-content: space-between;   
                        
                        > p {
                            font-size: ${dp(15)};
                            font-weight: bold;
                            margin-bottom: ${dp(22)};

                        }
                        > span {
                            font-size: ${dp(13)};
                            font-weight: bold;
                        }
                    }


                } 
            }
            
            .comShipping {
                padding: ${dp([ 27, 16 ])};
    
                ul {
                    li {
                        > span {
                            line-height: 1.5;
                        }
                    }
                }
            }
            .comPayment {

                padding: ${dp([27, 16])};
                border-top: 1px solid #F5F5F5;
                border-bottom: 1px solid #F5F5F5;

                ul {
                    li{
                        p {
                            width: ${dp(126)};
                        }
                    }
                }
            }

            .comDeposit {
                .order_title {
                    padding-top: ${dp([27])};
                }
                ul {
                    padding-bottom: ${dp([27])};
                }
            }
            .comCashReceipts {
                padding: ${dp([27, 16, 0, 16])};

                .CashReceiptsInfo {
                    >li {
                        display: flex;
                        justify-content: space-between; 
                    }
                    
                }
            }
            .orderCompleteBtn {

                padding: ${dp([36, 16, 0, 16])};
                margin-bottom: ${dp(54)};
    
                > p {
                    width: 100%;
                    height: ${dp(48)};
                    line-height: ${dp(48)};
                    background: #000000;
                    color: #ffffff;
                    text-align: center;
                    border-radius: ${dp(4)};
                    font-size: ${dp(15)};
                    font-weight: bold;
                }
            }
        }
          
    }

    
`;
export default OrderCompleteStyled;