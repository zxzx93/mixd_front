import Styled from "styled-components";
import dp from './../../../components/styled/Dp';
import { Drawer } from 'antd';

const SaveReviewDrawerStyled = Styled(Drawer)`
    @media screen and (max-width: 768px) {
        z-index: 1400;
        
        .ant-drawer-content {
            border-top-left-radius: ${dp(8)};
            border-top-right-radius: ${dp(8)};
        }

        .ant-drawer-header {
            box-sizing: border-box;
            padding: ${dp([16, 16, 3.2, 16])};
            border: none;
        }

        .ant-drawer-title {
            > p {
                margin: 0;
                height: ${dp(42)};
                line-height: ${dp(42)};
                font-size: ${dp(14)};
                font-weight: bold;
                color: #000000;
                text-align: center;
                border-bottom: ${dp(1)} solid #F5F5F5;
            }
        }

        .ant-drawer-body {
            padding: ${dp([0, 16, 72 ,16])};
            
            .ant-btn {
                width: 100%;
                height: ${dp(42)};
                padding: 0;
                border-bottom: ${dp(1)} solid #F5F5F5;

                > span {
                    line-height: ${dp(42)};
                    height: 100%;
                    font-size: ${dp(14)};
                    color: #616161;
                }
            }
        }
    }
`;

export default SaveReviewDrawerStyled;
