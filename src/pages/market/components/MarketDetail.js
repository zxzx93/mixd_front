import React from "react";
import MarketDetailStyled from "./MarketDetailStyled";
import { Button } from "antd";

const MarketDetail = ({ marketInfo }) => {
    console.log(marketInfo);

    const zzimClick = () => {
        console.log("마켓 찜 !!");
    };

    return (
        <MarketDetailStyled>
            <div className="img_wrap">
                <div
                    className="market_img"
                    style={{
                        backgroundImage: `${process.env.REACT_APP_API_URL}${marketInfo.marketInfo.back_img}`,
                    }}
                >
                    {/* <p>MiXD</p> */}
                    <img
                        src={`${process.env.REACT_APP_API_URL}${marketInfo.marketInfo.profile_img}`}
                        alt=""
                    />
                </div>
                <div className="market_info">
                    <p className="market_name">
                        {marketInfo.marketInfo.market_name}
                    </p>
                    <Button
                        type="text"
                        className="market_zzim"
                        onClick={zzimClick}
                        icon={<img src="/images/market_zzim.png" alt="" />}
                    />
                </div>
                <ul className="market_hash">
                    {marketInfo.marketInfo.style1 === "" ||
                    marketInfo.marketInfo.style1 === undefined ||
                    marketInfo.marketInfo.style1 === null ? (
                        ""
                    ) : (
                        <li>#{marketInfo.marketInfo.style1}</li>
                    )}
                    {marketInfo.marketInfo.style2 === "" ||
                    undefined ||
                    null ? (
                        ""
                    ) : (
                        <li>#{marketInfo.marketInfo.style2}</li>
                    )}
                    {marketInfo.marketInfo.age1 === ""||
                    marketInfo.marketInfo.age1 === 0 || 
                    marketInfo.marketInfo.age1 === undefined ||
                    marketInfo.marketInfo.age1 === null ? (
                        ""
                    ) : (
                        <li>#{marketInfo.marketInfo.age1}</li>
                    )}
                </ul>
            </div>
            <div className="count_wrap">
                <ul>
                    <li>
                        <p>{marketInfo.itemCnt}</p>
                        <span>상품수</span>
                    </li>
                    <li>
                        <p>{marketInfo.favorite.favCount}</p>
                        <span>즐겨찾기</span>
                    </li>
                    <li>
                        <p>{marketInfo.reviewCnt}</p>
                        <span>리뷰</span>
                    </li>
                </ul>
            </div>
        </MarketDetailStyled>
    );
};

export default MarketDetail;
