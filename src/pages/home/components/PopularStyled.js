import Styled from 'styled-components';
// import Slider from 'react-slick';
import { Swiper } from 'swiper/react';

const PopularStyled = Styled(Swiper)`
    margin-top: 24px;
    box-sizing: border-box;
    padding: 0 2vw;
    overflow: hidden;

    .swiper-slide {
        width: auto;
        display: inline-block;
    }

    .popular_list {
        overflow: hidden;

        .image_wrap {
            position: relative;
            width: 92px;
            margin: 0 auto;
            padding: 9px 18px 7px 18px;

            > div {
                width: 56px;
                height: 56px;
                overflow: hidden;
                border-radius: 50%;

                img {
                    width: 100%;
                }

                span {
                    position: absolute;
                    top: 4px;
                    right: 12px;
                    font-size: 13px;
                    background-color: #FF3358;
                    border-radius: 10px;
                    padding: 0 3px;
                    color: #FFFFFF;
                }
            }
        }

        .content_wrap {
            width: 92px;
            margin: 0 auto;
            
            p {
                text-align: center;
                font-size: 13px;
                font-weight: bold;
                margin: 0;
                
                > a {
                    color: #000000;
                }
            }

            ul {
                display: table;
                margin: 0 auto;

                li {
                    float: left;
                    margin-right: 3px;
                    font-size: 11px;
    
                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }
    }
`;

export default PopularStyled;
