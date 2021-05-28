import React, { useCallback, useEffect } from 'react';
import ZzimFavoriteStyled from './ZzimFavoritesStyled';
import MarketList from './../../../components/marketList/MarketList';
import { marketLits } from "../../../store/modules/market";
import { useDispatch, useSelector } from 'react-redux';
import { getUserToken } from '../../../util/decryptUser';
import ZzimNoList from './ZzimNoList';


const ZzimFavorite = ({ list, keyValue }) => {
    const dispatch = useDispatch();
    const { token } = getUserToken();
    const { marketListsLists, marketDeleteLists } = useSelector((state) => state.market)
    useEffect(() => {
        dispatch(marketLits(token))
    }, [dispatch, marketDeleteLists])

    return (
        <ZzimFavoriteStyled>
            {
                marketListsLists ?
                 <MarketList
                    lists={marketListsLists}
                    useRank={false} /> :
                    <ZzimNoList list={list} keyValue={keyValue} />
            }

        </ZzimFavoriteStyled>
    )
}

export default ZzimFavorite;
