import Styled from 'styled-components'
import dp from './../styled/Dp';

const FooterStyled = Styled.div`
    @media screen and (max-width: 768px) {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: ${dp(52)};
        background-color: #FFFFFF;
        z-index: 1300;
        box-sizing: border-box;
        border-top: ${dp(1)} solid #F5F5F5;

        ul {
            overflow: hidden;
            height: 100%;
        }

        li {
            position: relative;
            width: 20%;
            height: 100%;
            text-align: center;
            float: left;

            > div {
                width: 100%;
                height: 100%;
            }

            
            img {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: ${dp(8)};
            }

            &:nth-child(1) {
                p {
                    display: block;
                    padding-top: ${dp(32)};
                    font-size: ${dp(8)};
                    margin: 0;
                    color: #939393;
                    line-height: 1;
                }
            }
            span, a {
                display: block;
                padding-top: ${dp(32)};
                font-size: ${dp(8)};
                margin: 0;
                color: #D1D1D1;
                line-height: 1;

                > p {
                    color: #939393;
                    margin: 0;
                    font-size: ${dp(8)};
                }
            }
        }
    }
`;

export default FooterStyled;
