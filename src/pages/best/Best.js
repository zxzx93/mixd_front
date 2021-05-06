import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import BestStyled from "./BestStyled";
import MasonryLayout from "./../../components/masonry/Masonry";
import { useDispatch, useSelector } from "react-redux";
import { bestListInfo, bestMoreListInfo } from "../../store/modules/home";
import { getUserToken } from "./../../util/decryptUser";
import { antIcon } from "../../components/antIcon/actIcon";

const Best = () => {
    const { gender } = useSelector((state) => state.gender);
    const dispatch = useDispatch();
    const [page, setPage] = useState(2);
    const {
        bestLists,
        bestListDone,
        bestMoreLists,
        bestMoreListDone,
        ccaId,
    } = useSelector((state) => state.home);

    const { token } = getUserToken();

    useEffect(() => {
        dispatch(bestListInfo(ccaId, token, gender));
    }, [dispatch, ccaId]);

    const moveScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight) {
            setPage(page + 1);
            dispatch(bestMoreListInfo(page, token, gender, ccaId));
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", moveScroll);
        return () => {
            window.removeEventListener("scroll", moveScroll);
        };
    });

    console.log("bestLists", bestLists);
    console.log("bestMoreLists", bestMoreLists);

    console.log(
        "bestLists.concat(bestMoreLists)",
        bestLists.concat(bestMoreLists)
    );

    return (
        <>
            {bestListDone ? (
                <BestStyled>
                    <MasonryLayout
                        className="masonry"
                        lists={bestLists.concat(bestMoreLists)}
                    />
                </BestStyled>
            ) : (
                <Spin indicator={antIcon} />
            )}
        </>
    );
};

export default Best;
