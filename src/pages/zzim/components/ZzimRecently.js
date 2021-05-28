import React from "react";
import ZzimRecentlyStyled from "./ZzimRecentlyStyled";
import Masonry from "./../../../components/masonry/Masonry";
import ZzimNoList from './ZzimNoList';

const ZzimRecently = ({ list, keyValue }) => {
    const RecentLists = JSON.parse(sessionStorage.getItem("RecentlyViewed"));



    return (
        <ZzimRecentlyStyled>
            {RecentLists ?
                <Masonry lists={RecentLists} /> :
                <ZzimNoList list={list} keyValue={keyValue} />

            }
        </ZzimRecentlyStyled>
    );
};

export default ZzimRecently;
