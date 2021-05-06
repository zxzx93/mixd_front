import Styled from 'styled-components';
import { Drawer } from 'antd';
import dp from './../../../components/styled/Dp';

const PurchaseListDrawerStyled = Styled(Drawer)`
    @media screen and (max-width: 768px) {
        z-index: 1600;

        .ant-drawer-header{
            padding: ${dp([16, 16, 0, 16])};
            border: none;
        }

        .ant-drawer-content-wrapper {
            height: 450px !important;
            max-height: 75vh;
            box-sizing: border-box;
        }

        .ant-drawer-content {
            border-top-left-radius: ${dp(8)};
            border-top-right-radius: ${dp(8)};
        }

        .ant-drawer-body {
            padding: ${dp([0, 16, 16, 16])};
        }

        .select_option {
            border-radius: ${dp(4)};
            width: 100%;
            height: ${dp(46)};
            text-align: right;
            box-sizing: border-box;
            padding: ${dp([0, 16, 0, 24])};
            margin-bottom: ${dp(4)};

            span {
                float: left;
            }
        }

        .select_wrap {
            .select_list {
                width: 100%;
                height: ${dp(88)};
                border: 1px solid #E3E3E3;
                border-radius: ${dp(4)};
                box-sizing: border-box;
                padding: ${dp([17, 16, 14, 25])};
                margin-bottom: ${dp(4)};

                &:last-child {
                    margin-bottom: ${dp(5)};
                }

                > div {
                    overflow: hidden;

                    &:first-child {
                        margin-bottom: ${dp(10)};
                    
                        .options {
                            float: left;
                            font-size: ${dp(14)};
                            line-height: ${dp(17)};
                        }

                        .delete_btn {
                            float: right;
                            border: none;
                            width: ${dp(17)};
                            height: ${dp(17)};
                            padding: 0;

                            > img {
                                display: block;
                                margin: 0 auto;
                            }
                        }
                    }

                    &:nth-child(2) {
                        overflow: hidden;
                        
                        > div {
                            overflow: hidden;
                            float: left;
                        }

                        button {
                            width: ${dp(30)};
                            height: ${dp(30)};
                            text-align: center;
                            padding: 0;
                            font-size: ${dp(24)};
                            line-height: ${dp(28)};
                            border-radius: ${dp(15)};
                            background-color: #F5F5F5;
                            border: none;
                            float: left;
                        }

                        .minus {
                            color: #D1D1D1;
                        }

                        .count {
                            width: ${dp(39)};
                            text-align: center;
                            line-height: ${dp(30)};
                            font-size: ${dp(14)};
                            color: #000000;
                            float: left;
                        }

                        .plus {
                            color: #000000;
                        }

                        .cnt_price {
                            float: right;
                            line-height: ${dp(30)};
                            font-size: ${dp(14)};
                            color: #000000;
                        }
                    }
                }
            }
        }

        .ant-drawer-footer {
            padding: ${dp([18.5, 8, 5, 8])};

            > div {

                &:first-child {
                    margin-bottom: ${dp(20)};
                    line-height: ${dp(21)};

                    > span {
                        &:first-child {
                            color: #939393;
                        }

                        &:last-child {
                            float: right;
                            color: #000000;
                            font-size: ${dp(18)};
                            font-weight: bold;
                        }
                    }
                }
            }

            .purchase_btns {
                overflow: hidden;

                button {
                    float: left;
                    width: 49%;
                    height: ${dp(48)};
                    box-sizing: border-box;
                    border-radius: ${dp(4)};
                }

                .in_cart {
                    margin-right: 1%;
                    border: 1px solid #000000;
                    font-weight: bold;
                    > span {
                        color: #000000;
                        font-size: ${dp(15)};
                    }
                }

                .buyNow {
                    margin-left: 1%;
                    background-color: #FF3358;
                    border: 1px solid #FF3358;
                    > span {
                        color: #FFFFFF;
                        font-size: ${dp(15)};
                    }
                }
            }
        }
    }
`;

export default PurchaseListDrawerStyled;
