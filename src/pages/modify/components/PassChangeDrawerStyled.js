import styled from 'styled-components';
import dp from '../../../components/styled/Dp';
import { Drawer } from 'antd';

const PassChangeDrawerStyled = styled(Drawer)`
    @media screen and (max-width: 768px) {
        z-index: 1400;

        .ant-drawer-content-wrapper {
            position: relative;
            width: 100% !important;
            box-sizing: border-box;
            padding: ${dp([43, 0, 0, 0])};
        }

        .ant-drawer-body {
            position: relative;
            padding: ${dp([38, 16, 0, 16])};
        }

        .modify_title {
            font-size: ${dp(16)};
            margin: ${dp([0, 0, 5, 0])};
            color: #000000;
            line-height: ${dp(24)};
        }

        input {
            border: ${dp(1)} solid #D1D1D1;
            border-radius: ${dp(4)};
            height: ${dp(43)};
            padding: ${dp(12)};
            font-size: ${dp(13)};

            &:focus {
                border: ${dp(1)} solid #000000;
            }

            &.err {
                border: ${dp(1)} solid #FF3358;
            }
        }

        .msg {
            display: block;
            color: #D1D1D1;
            font-size: ${dp(11)};
            height: ${dp(17)};
            line-height: ${dp(17)};

            &.err {
                color: #FF3358;
            }
        }

        .now_pass_wrap {
            > div {
                overflow: hidden;
                margin-bottom: ${dp(5)};
            }

            input {
                float: left;
                width: 67.5%;
            }

            button {
                background-color: #000000;
                float: right;
                padding: 0;
                width: 30.5%;
                height: ${dp(43)};
                border-radius: ${dp(4)};
                border: none;

                &:disabled {
                    background-color: #F5F5F5;
                    > span {
                        color: #D1D1D1;
                    }
                }
                
                > span {
                    color: #FFFFFF;
                    font-size: ${dp(12)};
                }
            }
        }

        .new_pass_wrap {
            margin-top: ${dp(5)};

            > div {
                margin-bottom: ${dp(5)};
            }
        }

        .ant-drawer-footer {
            padding: ${dp([5, 8])};
            border-top: ${dp(1)} solid #F5F5F5;

            button {
                width: 49%;
                height: ${dp(48)};
                border-radius: ${dp(4)};
                margin-right: 2%;

                &:disabled {
                    background-color: #F5F5F5;
                    border: ${dp(1)} solid #F5F5F5;
                }

                &:last-child {
                    margin-right: 0;
                }

                > span {
                    color: #939393;
                    font-size: ${dp(15)};
                    font-weight: bold;
                }
            }
        }
    }
`;

export default PassChangeDrawerStyled;
