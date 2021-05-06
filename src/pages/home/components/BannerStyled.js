import Styled from 'styled-components';
import { Swiper } from 'swiper/react';

const BannerStyled = Styled(Swiper)`
    margin: 12px auto 0;
    
    /* .slick-dots {
        bottom: -6px;

        li {
            width: 16px;
            height: 2px;

            button {
                width: 16px;
                height: 2px;
                padding: 0;

                &::before {
                    width: 16px;
                    height: 2px;
                    line-height: 1;
                    background-color: #F5F5F5;
                    opacity: 1;
                    content: '';
                }
            }

            &.slick-active {
                button {
                    &::before {
                        background-color: red;
                    }
                }
            }
        }
    } */
`;

export default BannerStyled;
