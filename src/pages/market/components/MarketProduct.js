import React from "react";
import MarketProductStyled from "./MarketProductStyled";
import CategorySwiper from "./../../../components/category/CategorySwiper";
import Filter from "./../../../components/filter/Filter";
import MasonryLayout from "./../../../components/masonry/Masonry";
import { useSelector } from "react-redux";

const MarketProduct = ({ categoriesLists, id }) => {
  const dummyCate = [
    "전체",
    "상의",
    "아우터",
    "원피스/세트",
    "바지",
    "가나다라마",
    "스커트",
    "신발",
    "패션소품",
    "트레이닝",
    "가방",
  ];
  // console.log(categoriesLists);
  const { marketCategoriesItemLists } = useSelector((state) => state.market);

  // console.log("marketCategoriesItemLists",marketCategoriesItemLists);

  return (
    <MarketProductStyled>
      <CategorySwiper lists={categoriesLists} id={id} />

      {/* <div className="filter_wrap" > */}
      {/* <Filter options={options} /> */}
      {/* </div> */}

      <MasonryLayout className="masonry" lists={marketCategoriesItemLists} />
    </MarketProductStyled>
  );
};

export default MarketProduct;
