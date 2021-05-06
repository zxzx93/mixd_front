import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CateNavStyled from "./CateNavStyled";
import { SwiperSlide } from "swiper/react";
import { bestCateId } from "../../../store/modules/home";

const CateNav = ({ lists, manm }) => {
    const dispatch = useDispatch();
    const [selectId, setSelectId] = useState(manm ? 49 : 7);
    const { gender } = useSelector((state) => state.gender);

    const ccaId = (id) => {
        dispatch(bestCateId(id));
        setSelectId(id);
    };

    useEffect(() => {
        dispatch(bestCateId(gender ? 49 : 7));
        dispatch(bestCateId(gender ? 49 : 7));
        setSelectId(gender ? 49 : 7);
    }, [gender]);

    return (
        <CateNavStyled
            freeMode={true}
            slidesPerView={"auto"}
            manm={manm ? 0 : 1}
        >
            <SwiperSlide>
                <span
                    value={gender ? 49 : 7}
                    onClick={() => ccaId(gender ? 49 : 7)}
                    style={
                        gender
                            ? {
                                  backgroundColor:
                                      49 === selectId ? "#ffffff" : "#434343",
                                  color:
                                      49 === selectId ? "#000000" : "#ffffff",
                              }
                            : {
                                  backgroundColor:
                                      7 === selectId ? "black" : "#f5f5f5",

                                  color: 7 === selectId ? "#ffffff" : "#939393",
                              }
                    }
                >
                    전체
                </span>
            </SwiperSlide>

            {lists.map((value, index) => (
                <SwiperSlide
                    key={index}
                    value={value.cca_id}
                    onClick={() => ccaId(value.cca_id)}
                >
                    <span
                        style={
                            manm
                                ? {
                                      backgroundColor:
                                          value.cca_id === selectId
                                              ? "#ffffff"
                                              : "#434343",
                                      color:
                                          value.cca_id === selectId
                                              ? "#000000"
                                              : "#ffffff",
                                  }
                                : {
                                      backgroundColor:
                                          value.cca_id === selectId
                                              ? "#000000"
                                              : "#f5f5f5",
                                      color:
                                          value.cca_id === selectId
                                              ? "#ffffff"
                                              : "#939393",
                                  }
                        }
                    >
                        {value.cca_value}
                    </span>
                </SwiperSlide>
            ))}
        </CateNavStyled>
    );
};

export default CateNav;
