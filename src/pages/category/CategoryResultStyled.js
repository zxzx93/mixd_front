import Styled from "styled-components";
import dp from './../../components/styled/Dp';

const CategoryResultStyled = Styled.div`
    @media screen and (max-width: 768px) {
        padding: ${dp([0, 0, 52, 0])};

        .swiper-container {
            background-color: ${(props) => (props.gender ? "#000000" : "#ffffff")};
            top: 50px;
            .swiper-slide {
                span {
                    background-color: ${(props) => (props.gender ? "#434343" : "#f5f5f5")};
                    color: ${(props) => (props.gender ? "#ffffff" : "#939393")};
                }
            }
        }

        .filter_wrap {
            overflow: hidden;
            box-sizing: border-box;
            padding: 0 ${dp(8)};
            margin: ${dp([8, 0, 4, 0])};
        }

        .masonry_wrap {
            box-sizing: border-box;
            padding: 0 ${dp(8)};
            padding-top: ${dp(51)};;

            .image_wrap {
                padding-top: 100%;

                > img {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                    object-fit: cover;
                    min-height: 100%;
                }
            }
        }
    }
`;

export default CategoryResultStyled;
