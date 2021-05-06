import Styled from "styled-components";
import dp from './../../../components/styled/Dp';
import { Drawer } from 'antd';

const SelectShippingStyled = Styled(Drawer)`
    @media screen and (max-width: 768px) {
        z-index: 1400;

        .ant-drawer-content-wrapper {
            width: 100% !important;
        }
        .ant-drawer-body {
            box-sizing: border-box;
            padding: ${dp([50, 0, 0, 0])};
        }

        .shipping_lists_wrap {
            box-sizing: border-box;
            padding: ${dp([24, 15])};

            .ant-radio-group {
                width: 100%;
            }

            .shipping_list {
                display: block;
                width: 100%;
                height: auto;
                border-radius: ${dp(4)};
                margin-bottom: ${dp(14)};
                box-sizing: border-box;
                padding: ${dp([16, 9, 11, 16])};
                border-left-width: ${dp(1)};

                &:last-child {
                    margin-bottom: 0;
                }

                &.ant-radio-button-wrapper-checked {
                    border-color: #000000;
                    &:before {
                        display: none;
                    }
                    > span {
                        &:nth-child(2) {
                            > div {
                                &:first-child {
                                    > p {
                                        color: #000000;
                                    }
                                    > span {
                                        display: block;
                                    }
                                }
                            }
                            > ul {
                                > li {
                                    color: #000000;
                                }
                            }
                        }
                    }
                }

                > span {
                    &:nth-child(2) {

                        > div {
                            &:first-child {
                                overflow: hidden;
                                margin-bottom: ${dp(4)};
            
                                > p {
                                    font-size: ${dp(13)};
                                    font-weight: bold;
                                    line-height: ${dp(24)};
                                    color: #616161;
                                    margin: ${dp([0, 10, 0, 0])};
                                    float: left;
                                }
            
                                > span {
                                    width: ${dp(82)};
                                    height: ${dp(24)};
                                    background-color: #000000;
                                    font-size: ${dp(13)};
                                    color: #FFFFFF;
                                    float: left;
                                    text-align: center;
                                    line-height: ${dp(24)};
                                    border-radius: ${dp(4)};
                                    display: none;
                                }
                            }
                        }

                        > ul {
                            margin: 0;

                            > li {
                                font-size: ${dp(13)};
                                line-height: ${dp(18)};
                            }
                        }
                    }
                }
            }

            .btns_wrap {
                box-sizing: border-box;
                padding-top: ${dp(4)};
                bottom: 0;
                right: 0;
                text-align: right;

                > button {
                    width: ${dp(54)};
                    height: ${dp(34)};
                    margin-left: ${dp(9)};
                    border-radius: ${dp(4)};
                    padding: 0;
                    border: ${dp(1)} solid #D1D1D1;
                    background-color: #FFFFFF;
                    font-size: ${dp(13)};
                    color: #616161;

                    > span {
                        font-size: ${dp(13)};
                        color: #616161;
                    }
                }
            }
        }

        .ant-drawer-footer {
            box-sizing: border-box;
            padding: ${dp([4.5, 8, 5, 8])};

            > .ant-btn {
                width: 100%;
                height: ${dp(48)};
                border-radius: ${dp(4)};
                background-color: #000000;

                > span {
                    color: #FFFFFF;
                    font-size: ${dp(15)};
                }
            }
        }
    }
`;

export default SelectShippingStyled;
