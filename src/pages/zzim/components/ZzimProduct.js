import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ZzimProductStyled from "./ZzimProductStyled";
import Masonry from "./../../../components/masonry/Masonry";
import { zzimeWishListInfo } from "../../../store/modules/zzim";
import { getUserToken } from "../../../util/decryptUser";
import NoLoginPopUp from "../../../components/noLoginPopUp/NoLoginPopUp";

const ZzimProduct = () => {
    const { token } = getUserToken();
    const dispatch = useDispatch();
    const [noLoginPop, setNoLoginPop] = useState(false);

    const { zzimListsInfo, zzimWishDeleteDone } = useSelector(
        (state) => state.zzim
    );

    console.log(zzimListsInfo);

    useEffect(() => {
        if (token) {
            dispatch(zzimeWishListInfo(token));
            setNoLoginPop(false);
        } else {
            setNoLoginPop(true);
        }
    }, [dispatch, zzimWishDeleteDone]);

    return (
        <ZzimProductStyled>
            <Masonry lists={zzimListsInfo} />
            <NoLoginPopUp setNoLoginPop={setNoLoginPop} modelCon={noLoginPop} />
        </ZzimProductStyled>
    );
};

export default ZzimProduct;
