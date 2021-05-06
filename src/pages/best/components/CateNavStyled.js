import styled from "styled-components";
import dp from "../../../components/styled/Dp";
import { Swiper } from "swiper/react";

const CateNavStyled = styled(Swiper)`
    @media screen and (max-width: 768px) {
        height: ${dp(40)};
        box-sizing: border-box;
        border-bottom: ${dp(1)} solid #f5f5f5;
        padding-top: ${dp(4)};
        background-color: ${(props) =>
            props.manm === 0 ? "#000000" : "#ffffff"};

        .swiper-wrapper {
            .swiper-slide {
                width: auto;
                display: inline-block;

                .swiper-slide-active {
                    background-color: ${(props) =>
                        props.manm === 0 ? "#000000" : "#ffffff"};
                }
            }
        }

        span {
            margin: ${dp(0)} ${dp(4)};
            display: inline-block;
            padding: ${dp(5)} ${dp(14)};
            border-radius: ${dp(16)};
            font-size: ${dp(13)};
            background-color: ${(props) =>
                props.manm === 0 ? "#434343" : "#f5f5f5"};
            color: ${(props) => (props.manm === 0 ? "#ffffff" : "#939393")};

            &:hover {
                background-color: ${(props) =>
                props.manm === 0 ? "#ffffff" : "#000000"};
                color: ${(props) => (props.manm === 0 ? "#000000" : "#ffffff")};
            }
        }
    }
`;

export default CateNavStyled;
