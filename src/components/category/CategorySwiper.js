import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import CategorySwiperStyled from "./CategorySwiperStyled";
import { marketCategoriesITemLits } from "./../../store/modules/market";
import { categoriesItem } from "./../../store/modules/items";

const CategorySwiper = ({ lists, id }) => {
    const dispatch = useDispatch();
    const { gender } = useSelector((state) => state.gender);
    const { cateItem } = useSelector((state) => state.categories);
    const [selectId, setSelectId] = useState(Number(id));

    const widthCheck = (cnt) => {
        if (cnt === 1) {
            return 45;
        } else if (cnt === 2) {
            return 30.9;
        } else if (cnt === 3) {
            return 24.9;
        } else if (cnt === 4) {
            return 21.9;
        } else if (cnt === 5) {
            return 20.1;
        } else if (cnt === 6) {
            return 19.5;
        } else {
            return 17.7;
        }
    };

    const checkCaId = (value) => {
        // console.log("value", value);
        setSelectId(value.id);
        dispatch(marketCategoriesITemLits(id, value.id));
    };

    const categoriesItemsId = (value) => {
        // console.log("valaaaaaaaaaaaaaaaaaaaue", value);
        setSelectId(value);
        dispatch(categoriesItem(value));
    };

    // console.log("cateItem", cateItem.cca_id);
    // console.log("idid", Number(id));
    // console.log("selectId", selectId);
    // console.log(lists);
    return (
        <CategorySwiperStyled freeMode={true} slidesPerView={"auto"}>
            <SwiperSlide
                style={{
                    width: 2 * widthCheck(2),
                }}
            >
                <span
                    onClick={() => categoriesItemsId(cateItem.cca_id)}
                    style={
                        gender
                            ? {
                                  backgroundColor:
                                      Number(id) === selectId
                                          ? "#ffffff"
                                          : "#434343",
                                  color:
                                      Number(id) === selectId
                                          ? "#000000"
                                          : "#ffffff",
                              }
                            : {
                                  backgroundColor:
                                      Number(id) === selectId
                                          ? "black"
                                          : "#f5f5f5",

                                  color:
                                      Number(id) === selectId
                                          ? "#ffffff"
                                          : "#939393",
                              }
                    }
                >
                    전체
                </span>
            </SwiperSlide>

            {lists === undefined
                ? cateItem.children.map((value, index) => (
                      <SwiperSlide
                          key={index}
                          style={{
                              width:
                                  value.cca_value.length *
                                  widthCheck(value.cca_value.length),
                          }}
                      >
                          <span
                              onClick={() => categoriesItemsId(value.cca_id)}
                              style={
                                  gender
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
                                                    ? "black"
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
                  ))
                : lists.woman.length === 0
                ? ""
                : lists.woman.map((value, index) => (
                      <SwiperSlide
                          key={index}
                          style={{
                              width:
                                  value.name.length *
                                  widthCheck(value.name.length),
                          }}
                      >
                          <span onClick={() => checkCaId(value)}>
                              {value.name}
                          </span>
                      </SwiperSlide>
                  ))}

            {lists === undefined
                ? " "
                : lists.man.length === 0
                ? ""
                : lists.man.map((value, index) => (
                      <SwiperSlide
                          key={index}
                          style={{
                              width:
                                  value.name.length *
                                  widthCheck(value.name.length),
                          }}
                      >
                          <span onClick={() => checkCaId(value)}>
                              {value.name}
                          </span>
                      </SwiperSlide>
                  ))}
        </CategorySwiperStyled>
    );
};

export default CategorySwiper;
