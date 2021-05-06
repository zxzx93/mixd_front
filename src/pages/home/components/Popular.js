import React from "react";
import { Link } from "react-router-dom";

import PopularStyled from "./PopularStyled";
import { SwiperSlide } from "swiper/react";

const Popular = ({ lists }) => {
    console.log("listsaaaa", lists);
    return (
        <PopularStyled
            // centeredSlider={true}
            freeMode={true}
            slidesPerView={"auto"}
        >
            {lists.map((value, index) => (
                <SwiperSlide key={index}>
                    <div className="popular_list">
                        <div className="image_wrap">
                            <div>
                                <img
                                    src={`${process.env.REACT_APP_API_URL}${value.market.profile_img}`}
                                    alt="#"
                                />
                                <span>{value.market.week_item_count}</span>
                            </div>
                        </div>
                        <div className="content_wrap">
                            <p>
                                <Link to="#">{value.market.market_name}</Link>
                            </p>
                            <ul>
                                {/* {
                                        value.hash.map((el, i) => 
                                            <li key={i}>{el}</li>
                                        )
                                    } */}
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </PopularStyled>
    );
};

export default Popular;
