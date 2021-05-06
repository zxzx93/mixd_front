import Styled from "styled-components";
import { Swiper } from "swiper/react";
import dp from "./../../components/styled/Dp";

const CategorySwiperStyled = Styled(Swiper)`
    @media screen and (max-width: 768px) {
        width: 100%;
        height: ${dp(44)};
        box-sizing: border-box;
        overflow: hidden;
        border-bottom: ${dp(1)} solid #F5F5F5;

        .swiper-wrapper {
            display: flex;
        }
        span,
        a {
            margin: ${dp([6, 4])};
            display: inline-block;
            padding: ${dp([5, 14])};
            /* background-color: #F5F5F5; */
            border-radius: ${dp(16)};
            text-align: center;
        }
    }
`;

export default CategorySwiperStyled;
