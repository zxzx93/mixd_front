import Styled from 'styled-components';
import { Drawer } from 'antd';
import dp from './../../../components/styled/Dp';

const BuyNowDrawerStyled = Styled(Drawer)`
    @media screen and (max-width: 768px) {
        z-index: 1700;

        .firstSelect,
        .secondSelect {
            margin-bottom: ${dp(4)};

            .true__placeholder {
                font-size: ${dp(12)};
            }

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
            max-height: 75vh;
            height: 450px !important;
            box-sizing: border-box;
        }

        .ant-drawer-content {
            border-top-left-radius: ${dp(8)};
            border-top-right-radius: ${dp(8)};
        }

        .ant-drawer-body {
            padding: ${dp(16)};
        }

        .ant-drawer-footer {
            border: none;
            padding: ${dp([5, 16])};

            .closeOption {
                width: 100%;
                height: ${dp(48)};
                font-weight: bold;
                bordeR: ${dp(1)} solid #E3E3E3;
            }
        }
    }
`;

export default BuyNowDrawerStyled;
