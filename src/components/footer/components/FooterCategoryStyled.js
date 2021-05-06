import Styled from 'styled-components'
import { Drawer } from "antd";
import dp from './../../styled/Dp';

// const FooterCategoryStyled = Styled.div`
const FooterCategoryStyled = Styled(Drawer)`
    @media screen and (max-width: 768px) {
        z-index: 1300;

        .ant-drawer-content-wrapper {
            width: 100% !important;
        }
        .ant-drawer-close {
            display: none;
        }

        .ant-drawer-body {
            margin-top: ${dp(43)};
            box-sizing: border-box;
            padding: ${dp([24, 8, 53, 8])};
        }

        .m_header {
            position: absolute;
        }

        ul {
            margin: 0;

            li {
                width: 32%;
                height: ${dp(88)};
                margin: 0 2% 2% 0;
                box-shadow: 0 ${dp(2)} ${dp(8)} rgba(26, 0, 0, 0.1);
                float: left;
                box-sizing: border-box;
                padding-top: ${dp(19)};
                text-align: center;

                &:nth-child(3n) {
                    margin: ${dp([0, 0, 7, 0])};
                }

                > a {
                    display: block;
                    width: 100%;
                    height: 100%;

                    > div {
                        width: ${dp(28)};
                        height: ${dp(28)};
                        margin: 0 auto;

                        > img {
                            width: 100%;
                        }
                    }                    

                    span {
                        display: block;
                        margin-top: ${dp(6)};
                        font-size: ${dp(13)};
                        color: #000000;
                    }
                }
            }
        }
    }
`;

export default FooterCategoryStyled;
