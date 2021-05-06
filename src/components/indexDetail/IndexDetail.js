import React, { useEffect, useState } from "react";

import IndexDetailStyled from "./IndexDetailStyled";
import SubHeader from "./../header/SubHeader";
import MasonryLayout from "./../masonry/Masonry";
import { useDispatch, useSelector } from "react-redux";
import { getUserToken } from "../../util/decryptUser";
import {
    homeDetailListInfo,
    homeMoreDetailListInfo,
} from "../../store/modules/home";

const IndexDetail = ({ match }) => {
    const {
        homeDetailListDone,
        homeDetailLists,
        homeMoreDetailLists,
        homeDetailSubItemLists,
    } = useSelector((state) => state.home);

    const dispatch = useDispatch();

    const [name, setName] = useState();
    const [groupID, setGroupID] = useState();
    const [page, setPage] = useState(2);

    const { token } = getUserToken();

    console.log(token);

    useEffect(() => {
        window.addEventListener("scroll", moveScroll);
        return () => {
            window.removeEventListener("scroll", moveScroll);
        };
    });

    const moveScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight === true) {
            setPage(page + 1);
            // if(homeMoreDetailLists.length !== 0 || homeMoreDetailLists == undefined){
            token == undefined
                ? dispatch(homeMoreDetailListInfo(groupID, page))
                : dispatch(homeMoreDetailListInfo(groupID, page, token));
            // }
        }
    };
    // console.log(homeMoreDetailLists.length);

    useEffect(() => {
        const value = match.params.name;
        const id = match.params.id;
        setName(value);
        setGroupID(id);
    }, [match]);

    useEffect(() => {
        token == undefined
            ? dispatch(homeDetailListInfo(groupID, token))
            : dispatch(homeDetailListInfo(groupID, token));
    }, [groupID]);

    const scrollTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };
    useEffect(() => {
        scrollTop();
    }, []);

    console.log(homeDetailLists);
    // console.log("homeDetailLists", homeDetailLists.group_type);
    // console.log("homeMoreDetailLists", homeMoreDetailLists); // 추가되는 아이템? page = 2 0
    // console.log("homeDetailItemsLists", homeDetailItemsLists); // 6개
    // console.log("homeDetailSubItemLists", homeDetailSubItemLists); // 6개 + 100 page = 1

    // console.log(homeMoreDetailLists.length);
    return (
        <>
            {homeDetailListDone ? (
                <IndexDetailStyled>
                    <SubHeader name={name} />

                    <div className="detail_wrap">
                        {/* <MasonryLayout
                            lists={homeDetailSubItemLists.concat(
                                homeMoreDetailLists
                            )}
                            className="masonry"
                        />  */}
                        <MasonryLayout
                            lists={homeDetailLists.items}
                            className="masonry"
                        />
                    </div>
                </IndexDetailStyled>
            ) : (
                ""
            )}
        </>
    );
};

export default IndexDetail;
