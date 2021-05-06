import styled from 'styled-components';
import dp from '../../../components/styled/Dp';
import { Drawer } from 'antd';

const BankModifyDrawerStyled = styled(Drawer)`
    @media screen and (max-width: 768px) {
        z-index: 1500;

        .ant-drawer-content-wrapper {
            width: 100% !important;
        }

        .ant-drawer-body {
            position: relative;
            padding: 0;
        }

        .refund_bank_wrap {
            box-sizing: border-box;
            padding-top: ${dp(50)};

            > p {
                margin: ${dp([27, 0, 17, 0])};
    
                > span {
                    display: block;
                    text-align: center;
                    font-size: ${dp(13)};
                    line-height: ${dp(18)};
                    color: #000000;
                }
            }

            > div {
                box-sizing: border-box;
                padding: ${dp([0, 8])};

                > input {
                    width: 100%;
                    height: ${dp(42)};
                    border-radius: ${dp(4)};
                    box-sizing: border-box;
                    padding: ${dp([0, 16])};
                    font-size: ${dp(13)};
                    color: #000000;
                    margin-bottom: ${dp(8)};

                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }
        }

        .refundbank_wrap {
            position: absolute;
            lefT: 0;
            bottom: 0;
            width: 100%;
            box-sizing: border-box;
            padding: ${dp([5, 8])};
            border-top: ${dp(1)} solid #F5F5F5;

            .seve_refundbank_btn {
                width: 100%;
                height: ${dp(48)};
                border-radius: ${dp(4)};
                background-color: #000000;

                > span {
                    font-size: ${dp(15)};
                    font-weight: bold;
                    color: #FFFFFF;
                }
            }
        }

        .reason_select {
            margin-bottom: ${dp(8)};

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

            .true__placeholder {
                font-size: ${dp(13)};
                color: #000000;
                margin: 0;
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
                padding: ${dp([11, 16])};
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
    }
`;

export default BankModifyDrawerStyled;
