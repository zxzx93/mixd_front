import Styled from "styled-components";
import { Drawer } from 'antd';
import dp from './../../../components/styled/Dp';

const DeleteDrawerStyled = Styled(Drawer)`
    @media screen and (max-width: 768px) {
        z-index: 1400;
        
        .ant-drawer-content {
            border-top-left-radius: ${dp(16)};
            border-top-right-radius: ${dp(16)};
        }
        .ant-drawer-header {
            padding: ${dp([0, 16, 0, 16])};
            text-align: center;
            border: none;
        }
        .ant-drawer-title {
            padding: ${dp([29, 0, 16, 0])};
            border-bottom: ${dp(1)} solid #F5F5F5;

            p {
                font-size: ${dp(14)};
                font-weight: bold;
                color: #000000;
                margin: 0;
                
                &.non_list_header {
                    padding: ${dp([31, 0, 14, 0])};
                }
            }

        }
        .ant-drawer-body {
            padding: 0;
            padding: ${dp([0, 16, 0, 16])};
        }
        .delete_wrap {
            .ant-btn {
                width: 100%;
                height: ${dp(42)};
                background-color: transparent;
                border-bottom: ${dp(1)} solid #F5F5F5;
            }

            .delete_comp {
                span {
                    color: #FF3358;
                }
            }
        }
    }
`;

export default DeleteDrawerStyled;