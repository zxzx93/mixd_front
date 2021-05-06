import Styled from 'styled-components'
import dp from './../../components/styled/Dp';

const EventStyled = Styled.div`
    @media screen and (max-width: 768px) {
        padding-bottom: ${dp(25)};
        .event_wrap {
            position: relative;
            overflow: hidden;
            box-sizing: border-box;
            padding: 0 2vw;
            margin: ${dp(15)} auto 0;

            p {
                position: absolute;
                top: 0;
                left: 2vw;
                font-weight: bold;
                line-height: ${dp(28)};
                margin: 0;
                color: #000;
            }
        }

        .swiper-slide {
            margin: ${dp(12)} auto 0;

            img {
                width: 100%;
                border-radius: ${dp(4)};
            }
        }
        .ant-tabs-tabpane {
            padding-bottom: ${dp(10)};
        }
        .swiper-container {
            position: relative;
            overflow: unset;
            z-index: 0;
        }
        .swiper-pagination {
            height: ${dp(2)};
            bottom: ${dp(4)};
            line-height: 1;
        }
        .swiper-pagination-bullet {
            width: ${dp(3)};
            height: ${dp(3)};
            border-radius: unset;

            &.swiper-pagination-bullet-active {
                background-color: #000000;
            }
        }

        .plan_wrap {
            margin: ${dp(40)} auto 0;
            box-sizing: border-box;
            padding: 0 2vw;

            p {
                font-weight: bold;
                line-height: ${dp(28)};
                margin: 0;
                color: #000;
            }
        }
    }
`;

export default EventStyled;
