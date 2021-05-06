import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FooterCategoryStyled from "./FooterCategoryStyled";
import SubHeader from './../../header/SubHeader';
import {categoryInfo,addCheckItem} from "../../../store/modules/categories"

const FooterCategories = ({ toggle, hendleToggle }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(categoryInfo());
    },[dispatch])
    
    //성별 구분
    const {gender} = useSelector((state) => state.gender);
    //카테고리 정보 (성별에 따라)
    const {category,categoryDone} = useSelector((state) => state.categories);
    //카테고리 리스트 전체 보여줌
    // console.log("category", categoryDone ?category[gender ? 1 : 0].children : ""); 

    const [cateListBox, setCateListBox] = useState();
    useEffect(() => {
        const cateNum = categoryDone ? category[gender ? 1 : 0].children.length : "";

        setCateListBox(cateNum);

    },[category])
    const cateClose = (index) => {
        hendleToggle(false)
        dispatch(addCheckItem(category[gender ? 1 : 0].children[index]));
    } 

    // console.log(category);
    return (
        <>
            <FooterCategoryStyled
                className="category"
                placement="left"
                visible={toggle}
            >
                <SubHeader useToggle={hendleToggle} name="카테고리" />
                <ul>
                    {
                    categoryDone ?category[gender ? 1 : 0].children.map((value, index) => (
                        <li key={index} onClick={() => cateClose(index)}>
                            <Link to={`/categories/${value.cca_id}`}>
                                <div>
                                    <img src={`${process.env.REACT_APP_API_URL}${value.cca_image}`} alt="" />
                                </div>
                                <span>{value.cca_value}</span>
                                
                            </Link>
                            {/* {console.log(category[gender ? 1 : 0].children[index])} */}
                        </li>
                    )): ""}

                    {
                        Math.floor( cateListBox % 3) === 0  //카테고리 갯수가 3개일 때 
                        ?
                        "" 
                        :
                        Math.floor( cateListBox % 2) === 1 ? // 카테고리 갯수가 홀수 일 때
                        <>
                            <li />
                            
                            <li />
                        </>
                        :  //나머지 카테고리 갯수가 짝수일 때 
                        <li />
                        
                    }
                    
                </ul>
            </FooterCategoryStyled>
        </>
    );
};

export default FooterCategories;
