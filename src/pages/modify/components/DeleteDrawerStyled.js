import styled from 'styled-components';
import dp from '../../../components/styled/Dp';
import { Drawer } from 'antd';

const DeleteDrawerStyled = styled(Drawer)`
    @media screen and (max-width: 768px) {
        box-sizing: border-box;

        .ant-drawer-content {
            border-top-left-radius: ${dp(16)};
            border-top-right-radius: ${dp(16)};
        }

        .ant-drawer-body {
            box-sizing: border-box;
            padding: ${dp([29, 16, 78, 16])};
        }

        .ant-drawer-body {
            > p {
                font-size: ${dp(14)};
                line-height: ${dp(17)};
                font-weight: bold;
                text-align: center;
                color: #000000;
                margin-bottom: ${dp(13)};
            }
            
            > span {
                display: block;
                text-align: center;
                color: #616161;
                font-size: ${dp(12)};
                line-height: ${dp(15)};
                margin-bottom: ${dp(23)};
            }

            > div {
                > button {
                    width: 100%;
                    height: ${dp(42)};
                    border-bottom: ${dp(1)} solid #F5F5F5;
                    background-color: #FFFFFF;

                    > span {
                        font-size: ${dp(14)};
                    }
                }

                .delete_cancel {
                    > span {
                        color: #FF3358;
                    }
                }

                .delete_btn {
                    > span {
                        color: #939393;
                    }
                }
            }
        }
    }
`;

export default DeleteDrawerStyled;
