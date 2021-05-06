import Styled from "styled-components";
import dp from './../../../components/styled/Dp';
import { Drawer } from 'antd';

const CouponListDrawerStyled = Styled(Drawer)`
    @media screen and (max-width: 768px) {
        z-index: 1400;

        .ant-drawer-content {
            border-top-left-radius: ${dp(4)};
            border-top-right-radius: ${dp(4)};
        }

        .ant-drawer-header {
            box-sizing: border-box;
            padding: ${dp([26, 16, 10, 16])};
            border: none;
        }

        .ant-drawer-title {
            overflow: hidden;

            > p {
                font-size: ${dp(15)};
                line-height: ${dp(18)};
                margin: 0;
                float: left;
            }

            .ant-btn {
                width: ${dp(18)};
                height: ${dp(18)};
                padding: 0;
                float: right;

                img {
                    display: block;
                    margin: 0 auto;
                    width: ${dp(12)};
                }
            }
        }

        .ant-drawer-footer {
            padding: ${dp([5, 8])};
            overflow: hidden;

            .ant-btn {
                height: ${dp(48)};

                &.non_select_coupon {
                    float: left;
                    width: 49%;
                    border: ${dp(1)} solid #D1D1D1;

                    > span {
                        color: #939393;
                        font-size: ${dp(15)};
                        font-weight: bold;
                    }
                }

                &.select_coupon_btn {
                    float: right;
                    width: 49%;
                    border: none;
                    background-color: #F5F5F5;

                    > span {
                        color: #D1D1D1;
                        font-size: ${dp(15)};
                        font-weight: bold;
                    }
                }
            }
        }
    }
`;

export default CouponListDrawerStyled;
