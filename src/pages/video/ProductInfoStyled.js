import Styled from "styled-components";
import dp from "./../../components/styled/Dp";

const ProductInfoStyled = Styled.div`
    @media screen and (max-width: 768px) {
            width:100%;

        .detail_content_wrap {
            text-align: center;

            img {
                width:100%; 
             }

             .edibot-product-detail {
                width:100% !important;
             }
        }




        .info_title {
            overflow: hidden;
            margin-bottom: ${dp(15)};

            > p {
                font-size: ${dp(14)};
                line-height: ${dp(17)};
                font-weight: bold;
                color: #000000;
                float: left;
                margin: 0;
            }

            > span {
                float: left;
                font-size: ${dp(12)};
                line-height: ${dp(17)};
                margin-left: ${dp(8)};
                color: #000000;
            }
        }

        .model_info_wrap {
            box-sizing: border-box;
            padding: ${dp([23, 12, 21, 12])};
            border-bottom: 1px solid #F5F5F5;
            
            > div {
                overflow: hidden;

                &:nth-child(2) {
                    > div {
                        width: ${dp(48)};
                        height: ${dp(48)};
                        border-radius: ${dp(4)};
                        overflow: hidden;
                        float: left;
                        background:#f5f5f5;

                        > img {
                            width: 100%;
                        }
                    }

                    > ul {
                        float: left;
                        width: calc(100% - 3rem);

                        > li {
                            float: left;
                            width: 20%;
                            text-align: center;
                            box-sizing: border-box;
                            padding-top: ${dp(6)};

                            > p {
                                font-size: ${dp(12)};
                                line-height: ${dp(15)};
                                margin-bottom: ${dp(3)};
                                color: #939393;
                            }

                            > span {
                                font-size: ${dp(12)};
                                line-height: ${dp(15)};
                                color: #000000;
                                font-weight: bold;
                            }
                        }
                    }
                }
            }
        }

        .goods_info_wrap {
            box-sizing: border-box;
            padding: ${dp([24, 12, 24, 12])};
            border-bottom: 1px solid #F5F5F5;

            > div {
                &:nth-child(2) {
                    > ul {
                        margin: 0;

                        > li {
                            overflow: hidden;
                            margin-bottom: ${dp(18)};
                            
                            &:last-child {
                                margin-bottom: 0;

                                > p {
                                    line-height: ${dp(17.5)};
                                }
                                > span {
                                    line-height: ${dp(17.5)};
                                }
                            }

                            > p {
                                width: ${dp(80)};
                                float: left;
                                font-size: ${dp(12)};
                                line-height: ${dp(15)};
                                margin: 0;
                                color: #939393;
                            }

                            > span {
                                width: calc(100% - 5rem);
                                float: left;
                                font-size: ${dp(12)};
                                line-height: ${dp(15)};
                                color: #000000;
                            }
                        }
                    }
                }
            }
        }

        .fabric_info_wrap {
            box-sizing: border-box;
            padding: ${dp([24, 12, 21, 12])};
            border-bottom: 1px solid #F5F5F5;

            > div {
                overflow: hidden;

                &:nth-child(2) {
                    > div {
                        overflow: hidden;

                        &:first-child {
                            > p {
                                border-top-right-radius: ${dp(4)};
                                border-top-left-radius: ${dp(4)};
                            }
                        }
                        
                        &:last-child {
                            > p {
                                border-bottom-right-radius: ${dp(4)};
                                border-bottom-left-radius: ${dp(4)};
                            }
                            
                            li {
                                border-bottom: 0;
                            }
                        }
                        
                        > p {
                            float: left;
                            width: ${dp(66)};
                            line-height: ${dp(37)};
                            background-color: #F5F5F5;
                            text-align: center;
                            color: #939393;
                            font-size: ${dp(12)};
                            margin: ${dp([0, 10, 0, 0])};
                            border-bottom: ${dp(1)} solid #F5F5F5;
                        }

                        > ul {
                            float: left;
                            width: calc(100% - 4.75rem);
                            margin: 0;

                            > li {
                                float: left;
                                width: 33.3%;
                                line-height: ${dp(37)};
                                text-align: center;
                                color: #D1D1D1;
                                font-size: ${dp(12)};
                                box-sizing: border-box;
                                border-bottom: ${dp(1)} solid #F5F5F5;
                                
                                &.on {
                                    font-weight: bold;
                                     color: #4E4E4E; 
                                }
                            }
                        }
                    }
                }
            }
        }

        .basic_info_wrap {
            box-sizing: border-box;
            padding: ${dp([24, 12, 21, 12])};
            border-bottom: 1px solid #F5F5F5;

            > div {
                &:nth-child(2) {
                    > ul {
                        margin: 0;

                        > li {
                            overflow: hidden;

                            > p {
                                width: ${dp(110)};
                                float: left;
                                color: #939393;
                                font-size: ${dp(12)};
                                line-height: ${dp(15)};
                            }

                            > span {
                                float: left;
                                color: #000000;
                                font-size: ${dp(12)};
                                line-height: ${dp(15)};
                            }
                        }
                    }
                }
            }
        }

        .washing_guide_btn {
            width: 100%;
            height: ${dp(66)};
            padding: 0;
            line-height: ${dp(60)};
            text-align: left;
            box-sizing: border-box;
            padding: ${dp([0, 12])};
            font-size: ${dp(14)};
            font-weight: bold;
            background-color: #FFFFFF;
            border-bottom: ${dp(6)} solid #F5F5F5;

            > img {
                margin-top: ${dp(25)};
                float: right;
                width: ${dp(5)};
            }
        }
    }
`;

export default ProductInfoStyled;
