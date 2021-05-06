import React from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import FaqSwiperStyled from './FaqSwiperStyled'

const FaqSwiper = ({ lists }) => {

    const widthCheck = (cnt) => {
        if(cnt === 2) {
            return 28
        } else if (cnt === 3) {
            return 23
        } else if (cnt === 4) {
            return 20
        } else {
            return 17
        }
    }

    return (
        <FaqSwiperStyled
            freeMode={true}
            slidesPerView={'auto'}
        >
            {
                lists.map((value, index) => 
                    <SwiperSlide key={index} >
                        <Link to="#" style={{ width: value.length * widthCheck(value.length) }}>{value}</Link>
                    </SwiperSlide>
                )
            }
        </FaqSwiperStyled>
    )
}

export default FaqSwiper;
