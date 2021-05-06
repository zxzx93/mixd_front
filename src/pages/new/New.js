import React, { useEffect, useState } from "react";
import NewStyled from "./NewStyled";
import MasonryLayout from "./../../components/masonry/Masonry";
import { Select, Spin } from "antd";
import { Button } from "antd";
import { newListInfo, newMoreListInfo } from "../../store/modules/home";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { getUserToken } from "./../../util/decryptUser";
import { antIcon } from "../../components/antIcon/actIcon";

const { Option } = Select;

const New = () => {
    const dispatch = useDispatch();
    const {
        newLists,
        newListDone,
        newMoreLists,
        newMoreListDone,
    } = useSelector((state) => state.home);
    const { gender } = useSelector((state) => state.gender);
    const [page, setPage] = useState(2);
    const { token } = getUserToken();
    const [selectValue, setSelectValue] = useState(1);

    useEffect(() => {
        dispatch(newListInfo(token, gender, selectValue));
    }, [dispatch, gender, selectValue]);

    const handleChange = (value) => {
        setSelectValue(value);
        console.log(value);
    };

    const MoreBtn = () => {
        setPage(page + 1);
        dispatch(newMoreListInfo(page, token, selectValue));
    };

    console.log("그냥 리스트", newLists);
    console.log("더 보기 리스트", newMoreLists);
    return (
        <NewStyled>
            <div className="filter_wrap">
                <Select defaultValue="인기순" onChange={handleChange}>
                    <Option value="1">인기순</Option>
                    <Option value="2">최신순</Option>
                </Select>
            </div>
            {newListDone ? (
                <MasonryLayout
                    lists={newLists.concat(newMoreLists)}
                    className="masonry"
                />
            ) : (
                <Spin indicator={antIcon} />
            )}
            {newListDone ? (
                <Button className="more_add" onClick={MoreBtn}>
                    + 더보기
                </Button>
            ) : (
                ""
            )}
        </NewStyled>
    );
};

export default New;
