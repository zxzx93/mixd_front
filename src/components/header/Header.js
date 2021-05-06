import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";
import HeaderStyled from "./HeaderStyled";
import SearchModal from "./components/SearchModal";
import Gender from "../gender/Gender";
import { useDispatch, useSelector } from "react-redux";
import {
    searchResults,
    searchResultsLog,
    searchPoular,
} from "../../store/modules/search";
import { withRouter } from "react-router";

const { Search } = Input;

const Header = ({ history }) => {
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const searchbar = useRef(null);
    const [searchValue, setSearchValue] = useState("");
    const { searchPoularLists } = useSelector((state) => state.search);
    const { gender } = useSelector((state) => state.gender);
    const [keywords, setKeywords] = useState(
        JSON.parse(localStorage.getItem("keywords") || "[]")
    );

    // console.log(searchPoularLists);
    // console.log("gender", gender);

    const searValueFocus = (e) => {
        setSearchValue(e.target.value);
    };
    const searchFocus = () => {
        setIsModalVisible(true);
    };

    const offFocus = () => {
        setIsModalVisible(false);
        setSearchValue("");
    };

    const keyPress = (e, searchValue) => {
        if (e.key === "Enter") {
            searchBtn(searchValue);
        }
    };
    const searchBtn = (searchValue) => {
        if (searchValue.length > 0) {
            dispatch(searchResults(searchValue));
            dispatch(searchResultsLog(searchValue));
            setIsModalVisible(false);
            setSearchValue("");
            history.push(`/search/${searchValue}`);
            const newKeyword = {
                id: Date.now(),
                text: searchValue,
            };
            if (keywords.length > 5) {
                keywords.pop();
            }
            let serachArray = [newKeyword, ...keywords];
            setKeywords(serachArray);
            localStorage.setItem("keywords", JSON.stringify(serachArray));
        }
    };

    useEffect(() => {
        localStorage.setItem("keywords", JSON.stringify(keywords));
    }, [isModalVisible, keywords, searchValue]);

    useEffect(() => {
        if (isModalVisible) {
            setTimeout(() => {
                searchbar.current.focus();
            }, 500);
        }
    }, [isModalVisible]);

    useEffect(() => {
        dispatch(searchPoular());
    }, [dispatch]);

    return (
      <>
        <HeaderStyled gender={gender}>
          {isModalVisible ? (
            <div
              style={{ zIndex: "9999" }}
              className="search_close"
              onClick={offFocus}
            >
              {gender ? (
                <img src="/images/back_on.png" alt="" />
              ) : (
                <img src="/images/back.png" alt="" />
              )}
            </div>
          ) : (
            <Gender />
          )}
            <div
            className="title_back"
            onClick={() => history.goBack()}
            >
            {gender ? (
            <img src="/images/back_on.png" alt="" />
            ) : (
            <img src="/images/back.png" alt="" />
            )}
          </div>
          <div className="search">
            <Search
              className="nameF"
              placeholder="상품이나 마켓을 검색해보세요."
              allowClear
              enterButton={
                <img
                  src="/images/search.png"
                  alt=""
                  onClick={() => searchBtn(searchValue)}
                />
              }
              onChange={(e) => searValueFocus(e)}
              onClick={searchFocus}
              value={searchValue}
              ref={searchbar}
              onKeyPress={(e) => keyPress(e, searchValue)}
            />
            <SearchModal
              setSearchValue={setSearchValue}
              setIsModalVisible={setIsModalVisible}
              keywords={keywords}
              setKeywords={setKeywords}
              searchPoularLists={searchPoularLists}
              visible={isModalVisible}
            />
          </div>

          <div className="cart">
            <Link to="/cart">
              {gender === true ? (
                <img src="/images/cart_m.png" alt="cart" />
              ) : (
                <img src="/images/cart_w.png" alt="cart" />
              )}
              {/* <span>3</span> */}
            </Link>
          </div>
        </HeaderStyled>
      </>
    );
};

export default withRouter(Header);
