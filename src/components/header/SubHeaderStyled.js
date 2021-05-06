import Styled from "styled-components";
import dp from './../styled/Dp';

const MobileHeaderStyled = Styled.div`
    @media screen and (max-width: 1024px) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        box-sizing: border-box;
        height: ${dp(50)};
        background-color: ${(props) => props.gender ? '#000000' : '#FFFFFF'};
        text-align: center;
        z-index: 1200;

        .title_back {
            position: absolute;
            top: 0;
            left: ${dp(7)};
            width: ${dp(32)};
            height: ${dp(50)};

            > img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: ${dp(8)};
            }
        }

        .gender {
            height: ${dp(50)};
        }

        .p_name {
            line-height: ${dp(50)};
            font-size: ${dp(13)};
            font-weight: bold;
            max-width: ${dp(190)};
            margin: 0 auto;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: ${(props) => props.gender ? '#FFFFFF' : '#000000'};
        }

        .cart {
            position: absolute;
            top: 0;
            right: ${dp(14)};
            width: ${dp(32)};
            height: ${dp(50)};

            > a {
                position: relative;
                display: block;
                width: 100%;
                height: 100%;
            
                > img {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: ${dp(18)};
                }
            }
        }

        .add_shipping {
            position: absolute;
            top: 0;
            right: ${dp(14)};
            width: ${dp(58)};
            height: ${dp(32)};
            margin-top: ${dp(9)};
            padding: 0;
            background-color: transparent;

            > span {
                color: #FF3358;
                font-size: ${dp(12)};
            }
        }
    }
`;

export default MobileHeaderStyled;
