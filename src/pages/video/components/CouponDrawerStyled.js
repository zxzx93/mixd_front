import Styled from 'styled-components';
import { Drawer } from 'antd';
import dp from './../../../components/styled/Dp';

const CouponDrawerStyled = Styled(Drawer)`
    @media screen and (max-width: 768px) {
        .ant-drawer-content-wrapper {
            max-height: 75vh;
        }

        .ant-drawer-header {
            text-align: center;
            line-height: ${dp(24)};
            font-size: ${dp(16)};
            font-weight: bold;
            padding: ${dp(23)};
            box-shadow: 0 0 ${dp(5)} rgba(41, 0, 0, 0.2);
        }
        .ant-drawer-close {
            position: absolute;
            top: ${dp(13)};
            right: ${dp(8)};
            width: ${dp(40)};
            height: ${dp(40)};
            padding: 0;

            img {
                width: ${dp(18)};
            }
        }

        .ant-drawer-body {
            padding: ${dp([0, 0, 52, 0])};

            > div {
                overflow: hidden;
                padding: ${dp([18, 16, 0, 16])};
                margin-bottom: ${dp(12)};

                > span {
                    float: left;
                    display: block;
                    line-height: ${dp(40)};
                    font-size: ${dp(14)};
                    font-weight: bold;
                    color: #000000;
                }
            }
        
            .ant-btn {
                width: ${dp(137)};
                height: ${dp(40)};
                box-sizing: border-box;
                border: ${dp(1)} solid #FF3658;
                border-radius: ${dp(20)};
                background-color: #FFFFFF;
                float: right;

                span {
                    color: #FF3358;
                    font-weight: bold;
                }
            }
        }
    }
`;

export default CouponDrawerStyled;
