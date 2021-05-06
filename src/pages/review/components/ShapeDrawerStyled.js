import Styled from "styled-components";
import dp from './../../../components/styled/Dp';
import { Drawer } from 'antd';

const ShapeDrawerStyled = Styled(Drawer)`
    @media screen and (max-width: 768px) {
        z-index: 1300;
        transform: translateX(0) !important;

        .ant-drawer-content-wrapper {
            width: 100% !important;
        }

        .ant-drawer-body {
            box-sizing: border-box;
            padding: ${dp([43, 0, 52, 0])};
        }

        .shape_info_wrap {
            box-sizing: border-box;
            padding: ${dp([16, 16, 0, 16])};

            > div {
                padding: ${dp([0, 16, 24, 16])};
                border-bottom: ${dp(1)} solid #F5F5F5;
    
                > div {
                    overflow: hidden;
                    margin-bottom: ${dp(12)};

                    &:last-child {
                        margin-bottom: 0;
                    }
                
                    > p {
                        float: left;
                        line-height: ${dp(40)};
                        margin: 0;
                    }

                    .ant-input-affix-wrapper {
                        float: right;
                        width: ${dp(200)};
                        height: ${dp(40)};
                        border: 1px solid #D1D1D1;
                        border-radius: ${dp(20)};
                        padding-right: ${dp(24)};

                        > input {
                            text-align: center;
                            color: #000000;
                            font-size: ${dp(14)};
                            font-weight: bold;
                        }
                    }
                }
            }
        }

        .add_size {
            box-sizing: border-box;
            padding: ${dp([0, 16])};

            .add_size_btn {
                width: 100%;
                height: ${dp(46)};
                border-bottom: ${dp(1)} solid #F5F5F5;
                background-color: #FFFFFF;

                > span {
                    > img {
                        margin-left: ${dp(12)};
                    }
                }
            }
            .ant-radio-group {
                width: 100%;
            }
            .swiper-container {
                width: 100%;
                border-bottom: ${dp(1)} solid #F5F5F5;
            }
            .swiper-wrapper {
                display: flex;
                width: 100%;
                box-sizing: border-box;
                padding: ${dp([14, 0])};
            }

            .swiper-slide {
                /* height: ${dp(40)}; */
                margin-right: ${dp(4)}; 

                .ant-radio-button-wrapper-checked {
                    border: ${dp(1)} solid #FF3358;

                    > span {
                        &:last-child {
                            color: #FF3358;
                        }
                    }
                }

                /* > span {
                    display: block;
                    width: 100%;
                    height: 100%;
                    border: 1px solid #D1D1D1;
                    border-radius: ${dp(20)};
                    text-align: center;
                    line-height: ${dp(38)};
                } */

                &:last-child {
                    margin-right: 0;
                }

                .ant-radio-button {
                    /* border: 1px solid #D1D1D1; */
                    border-radius: ${dp(20)};
                    text-align: center;
                    line-height: ${dp(42)};
                    margin-right: ${dp(4)};
                }

                .ant-radio-button-wrapper {
                    width: 100%;
                    height: 100%;
                    border-radius: ${dp(20)};
                    padding: 0;

                    > span {
                        &:nth-child(2) {
                            display: block;
                            width: 100%;
                            height: 100%;
                            line-height: ${dp(42)};
                            text-align: center;
                        }
                    }
                }
            }
        }

        .ant-drawer-footer {
            padding: ${dp([4, 8, 5, 8])};

            .ant-btn {
                width: 100%;
                height: ${dp(48)};
                border: none;
                background-color: #000000;
                border-radius: ${dp(4)};
                
                > span {
                    color: #FFFFFF;
                    font-size: ${dp(15)};
                    font-weight: bold;
                }
            }
        }
    }
`;

export default ShapeDrawerStyled;
