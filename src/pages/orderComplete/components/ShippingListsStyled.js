import Styled from "styled-components";
import dp from './../../../components/styled/Dp';
import { Drawer } from 'antd';

const ShippingListsStyled = Styled(Drawer)`
    @media screen and (max-width: 768px) {
        z-index: 1400;
        
        .ant-drawer-content-wrapper {
            width: 100% !important;
        }
        
        .ant-drawer-content {
            box-sizing: border-box;
            padding: ${dp([50, 0, 0, 0])};
        }

        .ant-drawer-body {
            padding: ${dp([14, 8, 0, 8])};
        }

        .add_shipping_info {
            > div {
                overflow: hidden;
                margin-bottom: ${dp(8)};

                &:last-child {
                    margin-bottom: 0;
                }
                
                input {
                    border-radius: ${dp(4)};
                    font-size: ${dp(13)};
                    height: ${dp(42)};

                    &.middle {
                        width: 68.8%;
                        float: left;
                    }
                }

                .ant-btn {
                    float: right;
                    width: 29.5%;
                    height: ${dp(42)};
                    padding: 0;
                    border: ${dp(1)} solid #FF3358;
                    border-radius: ${dp(4)};

                    > span {
                        color: #FF3358;
                        font-size: ${dp(13)};
                    }
                }
            }
        }

        .ant-drawer-footer {
            padding: ${dp([4.5, 7, 5, 7])};

            .ant-btn {
                width: 100%;
                height: ${dp(48)};
                background-color: #D1D1D1;
                border-radius: ${dp(4)};

                > span {
                    font-size: ${dp(15)};
                    font-weight: bold;
                    color: #FFFFFF;
                }
            }
        }
    }
`;

export default ShippingListsStyled;
