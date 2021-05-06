import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchResultStyled from "./SearchResultStyled";
import Header from "./../../components/header/Header";
import { Tabs } from "antd";
// import Filter from './../../components/filter/Filter';
import { searchResultMarket, searchResults } from "../../store/modules/search";
import Masonry from "./../../components/masonry/Masonry";
import MarketList from "./../../components/marketList/MarketList";

const { TabPane } = Tabs;

const SearchResult = ({ match }) => {
  const genderSetting = JSON.parse(localStorage.getItem("gender"));
  const dispatch = useDispatch();
  const {
    searchResultLists,
    searchResultMarketLists,
    searchResultMarketDone,
    searchResultDone,
  } = useSelector((state) => state.search);

  // const options = ["인기순", "저가순", "고가순"];

  // console.log("이름아 나와랏!!",match.params.word);

  const callback = (key) => {
    // console.log(key);
    if (key === "1") {
      dispatch(searchResults(match.params.word));
    } else if (key === "2") {
      dispatch(searchResultMarket(match.params.word));
    }
  };

  return (
    <SearchResultStyled gender={genderSetting} className="search_result">
      <div class="header_fix">
      <Header />
      </div>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="상품" key="1">
          <div className="filter_wrap">
            <span className="search_cnt">
              검색 결과{" "}
              {searchResultDone
                ? searchResultLists.meta.totalItems === 0
                  ? "000"
                  : searchResultLists.meta.totalItems
                : "000"}
              건
            </span>
            {/* <Filter options={options} /> */}
          </div>
          <div className="masonry_wrap">
            {searchResultDone ? (
              searchResultLists.result.length !== 0 ? (
                <Masonry lists={searchResultLists.result} />
              ) : (
                <div className="list_none">검색결과가 없습니다.</div>
              )
            ) : (
              ""
            )}
          </div>
        </TabPane>

        <TabPane tab="마켓" key="2">
          <div className="filter_wrap">
            <span className="search_cnt">
              검색 결과{" "}
              {searchResultMarketDone
                ? searchResultMarketLists.meta.totalItems === 0
                  ? "000"
                  : searchResultMarketLists.meta.totalItems
                : "000"}
              건
            </span>
          </div>
          <div className="marektList_wrap">
            {searchResultMarketDone ? (
              searchResultMarketLists.result.length === 0 ? (
                <div className="list_none">검색결과가 없습니다.</div>
              ) : (
                <MarketList lists={searchResultMarketLists.result} />
              )
            ) : (
              ""
            )}
          </div>
        </TabPane>
      </Tabs>
    </SearchResultStyled>
  );
};

export default SearchResult;
