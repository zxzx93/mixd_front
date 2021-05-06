import React, { useEffect } from 'react';
import ZzimFavoriteStyled from './ZzimFavoritesStyled';
import MarketList from './../../../components/marketList/MarketList';
import {marketLits} from "../../../store/modules/market";
import { useDispatch, useSelector } from 'react-redux';
import { getUserToken } from '../../../util/decryptUser';

const ZzimFavorite = () => {
    const dispatch = useDispatch();
    const {token} = getUserToken();
    const {marketListsLists,marketDeleteLists} = useSelector((state) => state.market)
    useEffect(() => {
        dispatch(marketLits(token))
    },[dispatch,marketDeleteLists])

    return (
        <ZzimFavoriteStyled>
            <MarketList lists={marketListsLists} useRank={false} />       
        </ZzimFavoriteStyled>
    )
}

export default ZzimFavorite;
