import Styled from "styled-components";
import { Drawer } from "antd";
import dp from "./../../../components/styled/Dp";

const OptionChangeDrawerStyled = Styled(Drawer)`
    @media screen and (max-width: 768px) {
        z-index: 1300;

        .firstSelect,
        .secondSelect {
            box-shadow: none;
            width:100%;
            cursor : pointer;

            .true__control {
                box-shadow: none;
                height: ${dp(46)};
                border: ${dp(1)} solid #E3E3E3;
            }

            .true__control--menu-is-open {
                border-radius: 0;
                border-top-left-radius: ${dp(4)};
                border-top-right-radius: ${dp(4)};
                border-bottom: 1px solid transparent;
            }

            .true__value-container {
                padding: ${dp([0, 24])};
            }

            .true__menu {
                margin: 0;
                border-radius: 0;
                border: 1px solid #E3E3E3;
                border-top: transparent;
                border-bottom-right-radius: ${dp(4)};
                border-bottom-left-radius: ${dp(4)};
                box-shadow: none;
            }

            .true__option {
                padding: ${dp([11, 24])};
                font-size: ${dp(14)};
            }

            .true__option--is-focused {
                background-color: transparent;
            }
            
            .true__option--is-selected {
                color: #000000;
                font-weight: bold;
                background-color: transparent;
            }

            .true__indicator-separator {
                display: none;
            }
        }
        
        .ant-drawer-content-wrapper {
            height: 100% !important;
            max-height: 75vh;
        }
        .ant-drawer-content {
            border-top-left-radius: ${dp(8)};
            border-top-right-radius: ${dp(8)};
        }
        .ant-drawer-body {
            padding: ${dp(16)};
        }

        .cnt_change {
            width: 100%;
            height: ${dp(46)};
            border: ${dp(1)} solid #E3E3E3;
            border-radius: ${dp(4)};
            box-sizing: border-box;
            padding: ${dp([0, 24])};
            line-height: ${dp(44)};

            > span {
                float: left;
            }

            > div {
                float: right;
                margin: ${dp([7.5, 0])};

                > span {
                    float: left;
                    display: inline-block;
                    margin: ${dp([0, 15])};
                    line-height: ${dp(30)};
                }

                button {
                    width: ${dp(30)};
                    height: ${dp(30)};
                    border-radius: 50%;
                    background-color: #F5F5F5;
                    padding: 0;
                    float: left;

                    > span {
                        color: #000000;
                        font-size: ${dp(20)};
                        line-height: ${dp(30)};
                    }
                }
            }
        }

        .ant-drawer-footer {
            padding: ${dp([5, 8])};
            border: none;
        }
        .button_wrap {
            .change_option_cancel {
                width: 49%;
                height: ${dp(48)};
                float: left;
                border: 1px solid #E3E3E3;
                border-radius: ${dp(4)};
                background-color: #FFFFFF;
                margin-right: 1%;

                span {
                    color: #939393;
                    font-weight: bold;
                    color: ${dp(15)};
                }
            }
            .change_option_btn {
                width: 49%;
                height: ${dp(48)};
                float: left;
                border: 1px solid #000000;
                border-radius: ${dp(4)};
                background-color: #000000;
                margin-left: 1%;

                span {
                    color: #FFFFFF;
                    font-weight: bold;
                    color: ${dp(15)};
                }
            }
        }
    }
`;

export default OptionChangeDrawerStyled;
