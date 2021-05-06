import Styled from "styled-components";
import dp from "./../../components/styled/Dp";

const HomeStyled = Styled.div`
    @media screen and (max-width: 768px) {
        padding: 0 3vw ${dp(10)};
        
        .banner_wrap {
            box-sizing: border-box;
            > div {
                overflow: hidden;
                /* padding-bottom: ${dp(10)}; */
            }

            img {
                border-radius: ${dp(4)};
            }
        }
        .swiper-container {
            position: relative;
            overflow: hidden;
            z-index:0;
            padding-bottom: ${dp(12)};
        }
        .swiper-pagination {
            height: ${dp(4)};
            bottom: ${dp(10)};
            line-height: 1;
        }
        .swiper-pagination-bullet {
            width: ${dp(3)};
            height: ${dp(3)};
            border-radius: ${dp(2)};

            &.swiper-pagination-bullet-active {
                background-color: #000000;
            }
        }
        
        img {
            width: 100%;
        }

        .slick-slider {
            box-sizing: border-box;
            padding: 0 2vw;
            border-radius: ${dp(4)};

            img {
                border-radius: ${dp(4)};
            }
        }

        .border_wrap {
            display: block;
            width: 100%;
            height: ${dp(12)};
            margin: ${dp(35)} 0 0 0;
            background-color: #F5F5F5;
        }

        /* .masonry {
            box-sizing: border-box;
            //padding: 0 2vw ${dp(24)} 2vw; 

              >.item_list {
                width: 50%;
                box-sizing: border-box;
                padding: 0 2% ${dp(11)} 2%;
               
               > .image_wrap {
                    position: relative;
                    border-radius: ${dp(4)};
                    overflow: hidden; 
                    padding-top:100% ;
                    > img {
                        position: absolute;
                        width: 100%;
                        left: 0;
                        top: 50%;
                        transform: translateY(-50%);
                        object-fit: cover;
                        min-height: 100%;
                    }
                }
            }
        } */

        .more_add {
            display: block;
            width: 100%;
            height: ${dp(55)};
            line-height: ${dp(55)};
            box-sizing: border-box;
            border: ${dp(1)} solid #D1D1D1;
            border-radius: ${dp(4)};
            text-align: center;
            font-weight: bold;
            color: #000000;
            margin: 0 auto ${dp(70)};
            font-size: ${dp(14)};
        }

        .more_add_s {
            float: right;   
            font-size: ${dp(12)};
            padding: 0;
            
            img {
                width: ${dp(6)};
                margin-left: ${dp(5)};
            }
        }

        .middle_title {
            box-sizing: border-box;
            //padding: 0 2vw;
            margin-top: ${dp(32)};
            font-weight: bold;
            color: #000000;
            line-height: ${dp(28)};
        }
    }
`;

export default HomeStyled;
