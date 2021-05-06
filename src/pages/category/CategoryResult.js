import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryResultStyled from "./CategoryResultStyled";
import SubHeader from "./../../components/header/SubHeader";
import CategorySwiper from "./../../components/category/CategorySwiper";
import Filter from "./../../components/filter/Filter";
import Masonry from "./../../components/masonry/Masonry";
import { categoriesItem } from "../../store/modules/items";
import Headroom from "react-headroom";

let cateList = [];
const CategoryResult = ({ match }) => {
    const genderSetting = JSON.parse(localStorage.getItem("gender"));
    const dispatch = useDispatch();

    const { cateItem, categoryDone } = useSelector((state) => state.categories);
    const { categoriesItemLists } = useSelector((state) => state.items);

    // const [categoriesLists, setCategoriesLists] = useState();
    useEffect(() => {
        for (let i = 0; i < cateItem.children.length; i++) {
            console.log(cateItem.children[i].cca_value);
            cateList.push(cateItem.children[i].cca_value);
        }
        // setCategoriesLists(cateList);
    }, [categoryDone]);

    useEffect(() => {
        dispatch(categoriesItem(parseInt(match.params.keyword)));
    }, [dispatch, match.params.keyword]);

    console.log("categoriesItemLists", categoriesItemLists);
    console.log(cateItem);
    console.log("match.params.keyword", match.params.keyword);

    return (
        <>
            {categoryDone ? (
                <CategoryResultStyled gender={genderSetting}>
                    <Headroom>
                        <SubHeader
                            name={categoryDone ? cateItem.cca_value : ""}
                        />
                        <CategorySwiper id={match.params.keyword} />
                    </Headroom>
                    <div className="filter_wrap">
                        {/* <Filter options={options} /> */}
                    </div>
                    <div className="masonry_wrap">
                        <Masonry lists={categoriesItemLists.items} />
                    </div>
                </CategoryResultStyled>
            ) : (
                ""
            )}
        </>
    );
};

export default CategoryResult;
