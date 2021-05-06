import Styled from "styled-components";
import dp from './../../../components/styled/Dp';
import { Drawer } from 'antd';

const AddSizeDrawerStyled = Styled(Drawer)`
    @media screen and (max-width: 768px) {
        z-index: 1400;

        .ant-drawer-content-wrapper {
            height: auto !important;
        }
        .ant-drawer-content {
            border-top-right-radius: ${dp(8)};
            border-top-left-radius: ${dp(8)};
        }

        .ant-drawer-body {
            padding: ${dp([16, 16, 26, 16])};
        }
        .ant-radio-wrapper {
            position: relative;
            width: 100%;
            height: ${dp(42)};
            line-height: ${dp(42)};
            border-bottom: ${dp(1)} solid #F5F5F5;

            &:first-child {
                margin: ${dp([0, 0, 3, 0])};
            }

            > span {
                &.ant-radio {
                    position: absolute;
                    top: 50%;
                    left: ${dp(16)};
                    transform: translateY(-50%);
                }

                &:nth-child(2) {
                    display: block;
                    text-align: center;
                }
            }
        }
    }
`;

export default AddSizeDrawerStyled;
