import React from "react";
import ZzimRecentlyStyled from "./ZzimRecentlyStyled";
import Masonry from "./../../../components/masonry/Masonry";

const ZzimRecently = () => {
    const RecentLists = JSON.parse(sessionStorage.getItem("RecentlyViewed"));

    

    return (
        <ZzimRecentlyStyled>
            <Masonry lists={RecentLists} />
        </ZzimRecentlyStyled>
    );
};

export default ZzimRecently;
