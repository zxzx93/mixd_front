import Styled from "styled-components";
import dp from './../../../components/styled/Dp';
import { Drawer } from 'antd';

const BankDrawerStyled = Styled(Drawer)`
    @media screen and (max-width: 768px) {
        z-index: 1400;
        
        .ant-drawer-content-wrapper {
            width: 100% !important;
        }
        .ant-drawer-body {
            padding: ${dp([50, 0, 0, 0])};
        }
        .ant-drawer-footer {
            padding: ${dp([4, 8, 5, 8])};

            .ant-btn {
                width: 100%;
                height: ${dp(48)};
                border-radius: ${dp(4)};
                background-color: #000000;

                > span {
                    color: #FFFFFF;
                    font-weight: bold;
                    font-size: ${dp(15)};
                }
            }
        }

        .bank_notice_wrap {
            margin: ${dp([20, 0, 17, 0])};
            
            p {
                font-size: ${dp(13)};
                line-height: ${dp(16)};
                margin: 0;
                text-align: center;
                color: #000000;
            }
        }

        .bank_info_wrap {
            box-sizing: border-box;
            padding: ${dp([0, 8])};

            .select_bank {
                margin-bottom: ${dp(8)};

                .true__placeholder {
                    font-size: ${dp(12)};
                }

                .true__control {
                    box-shadow: none;
                    height: ${dp(42)};
                    border: ${dp(1)} solid #E3E3E3;
                }

                .true__control--menu-is-open {
                    border-radius: 0;
                    border-top-left-radius: ${dp(4)};
                    border-top-right-radius: ${dp(4)};
                    border-bottom: 1px solid transparent;
                }

                .true__value-container {
                    padding: ${dp([0, 16])};
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
                    padding: ${dp([10, 16])};
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

            > input {
                margin-bottom: ${dp(8)};
                height: ${dp(42)};
                box-sizing: border-box;
                padding: ${dp([0, 16])};
            }
        }
    }
`;

export default BankDrawerStyled;
