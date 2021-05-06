import Styled from 'styled-components';
import { Swiper } from 'swiper/react';
import dp from './../../components/styled/Dp';

const FaqSwiperStyled = Styled(Swiper)`
    @media screen and (max-width: 768px) {
        width: 100%;
        height: ${dp(44)};
        box-sizing: border-box;
        overflow: hidden;

        .swiper-wrapper {
            display: flex;
        }

        // /* .swiper-slide {
        //     width: auto;
        //     display: inline-block;
        // } */

        a {
            margin: ${dp([6, 4])};
            display: inline-block;
            padding: ${dp([5, 14])};
            text-align: center;
            background-color: #ffffff;
            color: #939393;

            :hover {
                color: #000000;
            }
        }
    }
`;

export default FaqSwiperStyled;
