import React from 'react';
import { Link } from 'react-router-dom';
import BannerStyled from './BannerStyled';
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/components/pagination/pagination.scss';


const Banner = ({lists}) => {
    SwiperCore.use([Pagination]);
    //console.log("hhh",lists);
    return (
        <BannerStyled
            slidesPerView={1}
            pagination={{ clickable: true }}
            // autoHeight={true}
        >
            {
                lists.map((value, index) => 
                    <SwiperSlide key={index}>
                        <Link to="#"><img src={value.ban_image} alt="slider" /></Link>
                    </SwiperSlide>
                )
            }
        </BannerStyled>
    )
}

export default Banner;
