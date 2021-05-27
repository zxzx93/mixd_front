import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventSliderStyled from "./EventSliderStyled";
import { Tabs } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";

const { TabPane } = Tabs;



const EventSlider = ({ events }) => {
    console.log(events);
    console.log(events.event);
    console.log(events.end_event);

    function callback(key) {
    // console.log(key);
}
    return (
        <EventSliderStyled className="eventWrap">
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="진행중" key="1">
                    <Swiper slidesPerView={1} pagination={{ clickable: true }}>
                        {events.event.map((value, index) => (
                            <SwiperSlide key={index}>
                                <Link to={`/eventDetail/${value.bit_id}`}>
                                    <img
                                        src={`${value.event_img}`}
                                        alt={value.ban_title}
                                    />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </TabPane>
                <TabPane tab="종료" key="2">
                    <Swiper slidesPerView={1} pagination={{ clickable: true }}>
                        {events.end_event.map((value, index) => (
                            <SwiperSlide key={index}>
                                <Link to={`/eventDetail/${value.bit_id}`}>
                                    <img
                                        src={`${value.event_img}`}
                                        alt={value.ban_title}
                                    />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </TabPane>
            </Tabs>
        </EventSliderStyled>
    );
};

export default EventSlider;
