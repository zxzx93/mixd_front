import React, { useEffect, useState } from "react";
import SearchModalStyled from "./SearchModalStyled";
import { Button, Tag } from "antd";
import { Link } from "react-router-dom";
import { searchResults } from "../../../store/modules/search";
import { useDispatch } from "react-redux";

const SearchModal = ({
    visible,
    searchPoularLists,
    setKeywords,
    setIsModalVisible,
    setSearchValue,
}) => {
    const dispatch = useDispatch();

    const [searchValueList, setSearchValueList] = useState([]);

    useEffect(() => {
        const sessRes = JSON.parse(localStorage.getItem("keywords"));
        setSearchValueList(sessRes);
    }, [searchPoularLists, setKeywords, visible]);

    const listDelete = () => {
        setKeywords([]);
        setSearchValueList([]);
    };

    const tagValueSearch = (value) => {
        dispatch(searchResults(value));
        setIsModalVisible(false);
        setSearchValue(value);
    };

    return (
        <SearchModalStyled
            visible={visible}
            maskStyle={{ top: 52 }}
            closable={false}
            footer={null}
            wrapClassName={"search_wrap"}
        >
            <div className="search_list">
                <div className="search_title">
                    내가 찾은 검색어
                    <Button onClick={listDelete}>전체삭제</Button>
                </div>
                <div className="search_word">
                    {searchValueList ? (
                        searchValueList.length !== 0 ? (
                            searchValueList.map((value, index) => (
                                <Tag
                                    key={index}
                                    onClick={() => tagValueSearch(value.text)}
                                >
                                    <Link to={`/search/${value.text}`}>
                                        #{value.text}
                                    </Link>
                                </Tag>
                            ))
                        ) : (
                            <div className="list_none">
                                검색내역이 없습니다.
                            </div>
                        )
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className="hash_list">
                <div className="search_title">현재 인기 키워드</div>
                <div className="search_word">
                    {searchPoularLists.map((value, index) => (
                        <Tag
                            key={index}
                            onClick={() => tagValueSearch(value.sek_keyword)}
                        >
                            <Link to={`/search/${value.sek_keyword}`}>
                                #{value.sek_keyword}
                            </Link>
                        </Tag>
                    ))}
                </div>
            </div>
        </SearchModalStyled>
    );
};

export default SearchModal;
