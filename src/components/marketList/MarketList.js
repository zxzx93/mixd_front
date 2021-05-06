import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MarketListStyled from "./MarketListStyled";
import { Avatar, Badge, Button, message } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { marketLikeInfo, marketDeleteinfo } from "../../store/modules/market";
import { useDispatch } from "react-redux";
import update from "immutability-helper";
import { getUserToken } from "../../util/decryptUser";

const MarketList = ({ lists, useRank }) => {
    const dispatch = useDispatch();
    const { token } = getUserToken();
    let [copyLists, setCopyLists] = useState();

    useEffect(() => {
        setCopyLists(lists);
    }, [lists]);

    const marketLike = (index) => {
        if (token) {
            setCopyLists(
                update(copyLists, {
                    [index]: {
                        isFavorite: { $set: true },
                        favorite_count: {
                            $set: copyLists[index].favorite_count + 1,
                        },
                    },
                })
            );

            dispatch(
                marketLikeInfo(copyLists[index].mem_id, token.accessToken)
            );
            message.info("마켓 즐겨찾기가 추가되었어요.", 1.5);
        } else {
            alert("로그인 필요");
        }
    };
    const marketLikeDelete = (index) => {
        if (token) {
            setCopyLists(
                copyLists[index].favorite_count
                    ? update(copyLists, {
                          [index]: {
                              isFavorite: { $set: false },
                              favorite_count: {
                                  $set: copyLists[index].favorite_count - 1,
                              },
                          },
                      })
                    : update(copyLists, {
                          [index]: {
                              isFavorite: { $set: false },
                          },
                      })
            );
            dispatch(
                marketDeleteinfo(copyLists[index].mem_id, token.accessToken)
            );
            message.info("마켓 즐겨찾기에서 삭제되었어요.", 1.5);
        } else {
            alert("로그인 필요");
        }
    };

    const addList = () => {
        console.log("axios more add");
    };
    // console.log(copyLists);
    const cheeckMarketId = (id) => {
        console.log(id);
    };
    return (
        <MarketListStyled>
            {copyLists
                ? copyLists.map((value, index) => (
                      <div key={index} className="market_inner">
                          {useRank ? (
                              <div className="rank_wrap">
                                  <p>{index + 1}</p>
                              </div>
                          ) : (
                              ""
                          )}
                          <div className="marketList_wrap">
                              <div className="market_list" key={index}>
                                  <div className="profile_wrap">
                                      <div>
                                          <Link to={`/market/${value.mem_id}`}>
                                              <Badge count={value.age1}>
                                                  <Avatar
                                                      size={56}
                                                      icon={
                                                          <img
                                                              src={`${process.env.REACT_APP_API_URL}${value.profile_img}`}
                                                              alt=""
                                                          />
                                                      }
                                                  />
                                              </Badge>
                                          </Link>
                                      </div>
                                      <div
                                          className="market_title"
                                          onClick={() =>
                                              cheeckMarketId(value.mem_id)
                                          }
                                      >
                                          <Link to={`/market/${value.mem_id}`}>
                                              {value.market_name}
                                          </Link>
                                          <ul>
                                              <Link
                                                  to={`/market/${value.mem_id}`}
                                              >
                                                  <li>#{value.age1}</li>
                                                  <li>#{value.style1}</li>
                                              </Link>
                                          </ul>
                                      </div>
                                      <Button
                                          type="text"
                                          className="market_info"
                                          onClick={
                                              value.isFavorite == true
                                                  ? () =>
                                                        marketLikeDelete(index)
                                                  : () => marketLike(index)
                                          }
                                      >
                                          {value.isFavorite == true ? (
                                              <img
                                                  src="/images/star_n.png"
                                                  alt=""
                                              />
                                          ) : (
                                              <img
                                                  src="/images/star_n_off.png"
                                                  alt=""
                                              />
                                          )}
                                          <span>{value.favorite_count}</span>
                                      </Button>
                                  </div>

                                  <div className="lists_wrap">
                                      <Swiper
                                          freeMode={true}
                                          slidesPerView={"auto"}
                                      >
                                          {value.recentItems
                                              ? value.recentItems.map(
                                                    (ele, index) => (
                                                        <SwiperSlide
                                                            key={index}
                                                        >
                                                            <Link
                                                                to={`video/${ele.cit_key}`}
                                                            >
                                                                <img
                                                                    src={`${process.env.REACT_APP_API_URL}${ele.cit_file_2}`}
                                                                    value={
                                                                        ele.cit_key
                                                                    }
                                                                    alt=""
                                                                />
                                                            </Link>
                                                        </SwiperSlide>
                                                    )
                                                )
                                              : ""}
                                          <SwiperSlide>
                                              <Link to="/market">
                                                  <Button onClick={addList}>
                                                      <span>상품</span>
                                                      <span>더보기</span>
                                                  </Button>
                                              </Link>
                                          </SwiperSlide>
                                      </Swiper>
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))
                : ""}
        </MarketListStyled>
    );
};

export default MarketList;
