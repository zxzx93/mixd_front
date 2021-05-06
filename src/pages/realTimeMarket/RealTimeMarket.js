import React, { useEffect, useState } from "react";
import RealTimeMarketStyled from "./RealTimeMarketStyled";
import SubHeader from "./../../components/header/SubHeader";
import MarketList from "./../../components/marketList/MarketList";
import { realTimeMarket, realTimeMoreMarket } from "../../store/modules/market";
import { useDispatch, useSelector } from "react-redux";
import { getUserToken } from "../../util/decryptUser";
import { Spin } from "antd";
import { antIcon } from "../../components/antIcon/actIcon";

const RealTimeMarket = () => {
    const dispatch = useDispatch();

    const {
        realTimeMarketLists,
        realTimeMarketDone,
        realTimeMarketMoreLists,
    } = useSelector((state) => state.market);

    const { gender } = useSelector((state) => state.gender);

    const [page, setPage] = useState(1);

    const { token } = getUserToken();

    useEffect(() => {
        dispatch(realTimeMarket(token, gender));
    }, [dispatch, gender]);

    const moveScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight -500) {
            setPage(page + 1);

            dispatch(realTimeMoreMarket(token, gender, page));
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", moveScroll);
        return () => {
            window.removeEventListener("scroll", moveScroll);
        };
    });

    // console.log("realTimeMarketMoreLists", realTimeMarketMoreLists);
    // const [pag1e, setPa1ge] = useState(2);

    // useEffect(() => {
    //     if (realTimeMarketDone) {
    //         let arrey = realTimeMarketLists.concat(realTimeMarketMoreLists);
    //         setPa1ge(arrey);
    //     }
    // });

    return (
        <RealTimeMarketStyled>
            <SubHeader name="실시간 마켓 랭킹" genderUse={true} />
            {realTimeMarketDone ? (
                <div className="market_wrap">
                    <MarketList lists={realTimeMarketLists} useRank={true} />
                </div>
            ) : (
                <Spin indicator={antIcon} />
            )}
        </RealTimeMarketStyled>
    );
};

export default RealTimeMarket;
