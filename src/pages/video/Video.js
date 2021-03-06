import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Avatar, Tabs, Collapse } from "antd";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import _ from "lodash";
import update from "immutability-helper";
import { message } from "antd";
import { useHistory } from "react-router-dom";
import { Player, ControlBar, PlayToggle, BigPlayButton } from "video-react";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import VideoStyled from "./VideoStyled";
import SubHeader from "./../../components/header/SubHeader";
import TextTruncate from "react-text-truncate";
import CommentDrawer from "./components/CommentDrawer";
import BuyNowDrawer from "./components/BuyNowDrawer";
import PurchaseListDrawer from "./components/PurchaseListDrawer";
import ProductInfo from "./ProductInfo";
import DetailReview from "./DetailReview";
import InquireInfo from "./InquireInfo";
import NoLoginPopUp from "../../components/noLoginPopUp/NoLoginPopUp";
import { getUserToken } from "../../util/decryptUser";
import { getItemsDetail, getItemDetailInfo } from "../../store/modules/items";
import CouponModalStyled from "./components/CouponModalStyled";
import { zzimeWishInfo, zzimeWishDeleteInfo } from "../../store/modules/zzim";
import {
  getRandomCoupon,
  RandomCouponIssued,
} from "../../store/modules/coupon";

SwiperCore.use([Pagination]);

const { TabPane } = Tabs;
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const Video = () => {
  const dispatch = useDispatch();
  const {
    itemsDetailInfoLists,
    itemsDetailInfoDone,
    itemDetailInfo,
  } = useSelector(state => state.items);
  const {
    randomCP,
    randomCpCode,
    randomCouponDone,
    randomCouponIssuedDone,
  } = useSelector(state => state.coupon);
  const { gender } = useSelector(state => state.gender);

  const [visibleCommentWrap, setVisibleCommentWrap] = useState(false);
  const [clamp, setClamp] = useState(2);
  const [visibleBuyNow, setVisibleBuyNow] = useState(false);
  const [visiblePurchase, setVisiblePurchase] = useState(false);

  const [noLoginPop, setNoLoginPop] = useState(false); //????????? ??????

  const { token } = getUserToken();
  let { cit_key } = useParams();
  let history = useHistory();

  //????????? ????????? ?????? ????????? ????????? ???
  useEffect(() => {
    token ? setNoLoginPop(false) : setNoLoginPop(true);
  }, [token]);

  let [copyValue, setCopyValue] = useState([]); // ????????? ?????? ????????????

  useEffect(() => {
    cit_key && dispatch(getItemsDetail(cit_key, Number(1), token, gender));
  }, [cit_key]);

  useEffect(() => {
    if (itemsDetailInfoDone) {
      setCopyValue(itemsDetailInfoLists.result);
    }
  }, [itemsDetailInfoLists, itemsDetailInfoDone]);

  const ZzimClick = useCallback(
    index => {
      console.log(index);
      if (token) {
        setCopyValue(
          update(copyValue, {
            [index]: {
              wish: { $set: true },
              cit_wish_count: { $set: copyValue[index].cit_wish_count + 1 },
            },
          })
        );
        dispatch(
          zzimeWishInfo(copyValue[index].cit_id, token.accessToken)
        ).then(() => {
          message.info("?????? ???????????? ??????????????????.", 1.5);
        });
      } else {
        alert("????????? ??????");
      }
    },
    [copyValue, dispatch, token]
  );

  const ZzimDeleteClick = useCallback(
    index => {
      if (token) {
        setCopyValue(
          update(copyValue, {
            [index]: {
              wish: { $set: false },
              cit_wish_count: { $set: copyValue[index].cit_wish_count - 1 },
            },
          })
        );
        dispatch(
          zzimeWishDeleteInfo(copyValue[index].cit_id, token.accessToken)
        ).then(() => {
          message.info("?????? ???????????? ??????????????????.", 1.5);
        });
      } else {
        alert("????????? ??????");
      }
    },
    [copyValue, dispatch, token]
  );

  const [selectId, setSelectId] = useState(""); //????????? ????????? ?????????
  const [selectCitKey, setSelectCitKey] = useState(""); //????????? ????????? cit_key
  const [compareList, setCompareList] = useState(""); //

  // console.log(compareList);
  useEffect(() => {
    //?????? ??????????????? ?????? ????????? ????????? ???????????? ????????? ????????????
    if (selectId) {
      setCompareList(
        // ...compareList,
        copyValue.filter(value => value.cit_id === selectId)
      );
    }
  }, [copyValue, selectId]);

  const showCommentWrap = useCallback(
    (id, key) => {
      setSelectCitKey(key);
      setSelectId(id);
      setVisibleCommentWrap(true);
    },
    [setSelectId, setVisibleCommentWrap]
  );

  const closeCommentWrap = () => {
    setVisibleCommentWrap(false);
  };

  const buyNowWrap = () => {
    setVisibleBuyNow(true);
  };
  const closeBuyNowWrap = () => {
    setVisibleBuyNow(false);
  };

  const closePurchase = () => {
    setVisiblePurchase(false);
  };

  const handleClamp = () => {
    setClamp(0);
  };

  const [visibleCoupon, setVisibleCoupon] = useState(false); //?????? ?????? ?????? ??????
  const handleOk = () => {
    setVisibleCoupon(false);
  };

  const handleCancel = () => {
    setVisibleCoupon(false);
  };

  useEffect(() => {
    dispatch(getRandomCoupon(token)); // ????????? ?????? ?????? ?????? ??????
  }, [dispatch, getRandomCoupon]);

  // const [randomCode, setRandomCode] = useState("");
  useEffect(() => {
    if (randomCpCode === 0 && visibleCoupon === true) {
      dispatch(RandomCouponIssued(token));
      // setRandomCode(randomCpCode);
    }
  }, [dispatch, RandomCouponIssued, randomCpCode, visibleCoupon]);

  //???????????? ?????? ??? ?????? ????????? ????????? ??????
  const showDetailInfo = cit_key => {
    setSelectCitKey(cit_key);
    dispatch(getItemDetailInfo(cit_key));
  };

  const [height, setHiehgt] = useState(0);
  useEffect(() => {
    const movie = [];
    for (let i = 0; i < copyValue.length; i++) {
      // console.log(copyValue);
      movie.push(copyValue.item_movie1);
    }
  }, [copyValue]);

  // console.log("====================================");
  // console.log(itemDetailInfo);
  // console.log("====================================");

  //????????????
  const openPurchaseHandler = cit_key => {
    setVisiblePurchase(true);
    setVisibleBuyNow(true);
    dispatch(getItemDetailInfo(cit_key));
  };

  return (
    <VideoStyled>
      <SubHeader />
      <NoLoginPopUp setNoLoginPop={setNoLoginPop} modelCon={noLoginPop} />
      {itemsDetailInfoDone
        ? copyValue.map((list, i) => (
            <div className="video_list" key={i}>
              <div className="video_images_wrap">
                <Swiper
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoHeight={true}
                  // onSwiper={swiper => console.log(swiper, swiper.height)}
                  onSwiperChange={swiper => setHiehgt(swiper, swiper.height)}
                >
                  {list.item_movie1 && (
                    <SwiperSlide key={i}>
                      <Player
                        autoPlay={true}
                        muted={true}
                        fluid={false}
                        width={"100%"}
                        height={height}
                        src={list.item_movie1}
                      >
                        <ControlBar disabled />
                        <PlayToggle />
                      </Player>
                    </SwiperSlide>
                  )}
                  {list.item_image.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={`${img}`}
                        alt="?????? ????????? ??????"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="video_info_wrap">
                <ul className="price_wrap">
                  <li className="sale">{list.cit_sale_per}%</li>
                  <li className="price">{list.cit_price}???</li>
                  {list.cit_price !== list.cit_real_price && (
                    <li className="real_price">{list.cit_real_price}???</li>
                  )}
                </ul>
                <div className="icons_wrap">
                  <div>
                    <Button
                      type="text"
                      icon={
                        <img
                          src={
                            list.wish
                              ? "/images/zzim_on.png"
                              : "/images/icons_heart.png"
                          }
                          alt="??? ??????"
                          onClick={
                            list.wish === true
                              ? () => ZzimDeleteClick(i)
                              : () => ZzimClick(i)
                          }
                        />
                      }
                    />
                    <Button
                      type="text"
                      icon={
                        <img
                          src="/images/icons_repl.png"
                          alt="?????? ???????????? ?????? ??????"
                        />
                      }
                      onClick={() => showCommentWrap(list.cit_id, list.cit_key)}
                    />
                    {/* <Button
                      className="share_btn"
                      type="text"
                      icon={
                        <img src="/images/icons_share.png" alt="????????????" />
                      }
                    ></Button> */}

                    {randomCpCode === 0 && (
                      <Button
                        type="text"
                        className={
                          randomCouponIssuedDone
                            ? "done_coupon_btn"
                            : "coupon_btn"
                        }
                        disabled={randomCouponIssuedDone ? true : false}
                        onClick={() => setVisibleCoupon(true)}
                      >
                        ?????? ?????? ??????
                      </Button>
                     )} 

                    {/* <CouponDrawer visible={visibleCoupon} close={closeCoupon} /> */}
                  </div>
                  <p>??? {list.cit_wish_count}???</p>
                </div>
                <div className="info_wrap">
                  <div className="market_name">{list.market.market_name}</div>
                  <div className="item_content">
                    <p>{list.cit_name}</p>
                    <TextTruncate
                      line={clamp}
                      element="div"
                      truncateText=" ..."
                      text={list.cit_summary}
                      textTruncateChild={
                        <Button type="text" onClick={handleClamp}>
                          ?????????
                        </Button>
                      }
                    />
                  </div>

                  <Button
                    type="text"
                    onClick={() => showCommentWrap(list.cit_id, list.cit_key)}
                  >
                    ?????? {list.commentCount}??? ?????? ??????
                  </Button>
                </div>
              </div>
              <div className="buttons_wrap">
                <Avatar
                  icon={
                    <img
                      src={`${process.env.REACT_APP_API_URL}${list.market.profile_img}`}
                      alt="?????? ????????? ??????"
                    />
                  }
                />
                <div>
                  <Button
                    type="text"
                    className="buyNow_btn"
                    onClick={() => openPurchaseHandler(list.cit_key)}
                  >
                    <span>????????????</span>
                    <span>{list.cit_sell_count}??? ?????????</span>
                  </Button>
                </div>
              </div>
              <Collapse collapsible="header" className="video_detail">
                <Panel
                  showArrow={false}
                  header={
                    <Button onClick={() => showDetailInfo(list.cit_key)}>
                      ????????????
                    </Button>
                  }
                  key="1"
                >
                  <div className="detail_info">
                    <ul>
                      <li>
                        <p>????????????</p>
                        <span>?????? 3???</span>
                      </li>
                      <li>
                        <p>????????????</p>
                        <span>????????? ??????</span>
                      </li>
                      <li>
                        <p>?????????</p>
                        <span>??? ?????? ????????????</span>
                      </li>
                      <li>
                        <p></p>
                        <span className="detail_alarm">
                          ???????????? ????????? ??????
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="comp_tabs_wrap">
                    <Tabs defaultActiveKey="1" onChange={callback}>
                      <TabPane tab="????????????" key="1">
                        <ProductInfo itemDetailInfo={itemDetailInfo} />
                      </TabPane>
                      <TabPane tab="??????" key="2">
                        <DetailReview itemDetailInfo={itemDetailInfo} />
                      </TabPane>
                      <TabPane tab="????????????" key="3">
                        <InquireInfo itemDetailInfo={itemDetailInfo} />
                      </TabPane>
                    </Tabs>
                  </div>
                </Panel>
              </Collapse>
            </div>
          ))
        : ""}

      {/* ?????????  */}
      {compareList && (
        <CommentDrawer
          list={compareList[0]}
          cit_key={selectCitKey}
          close={closeCommentWrap}
          visible={visibleCommentWrap}
        />
      )}

      {/* ?????? ??????  */}
      <CouponModalStyled
        centered
        closable={false}
        visible={visibleCoupon}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={{ width: "100%", padding: 0 }}
        footer={null}
        width={280}
      >
        {visibleCoupon === true &&
        randomCpCode === 0 &&
        randomCouponIssuedDone ? (
          <>
            <div className="con_random">
              <img
                src="/images/text_congratulate.png"
                alt="???????????????!"
                className="con_title"
              />
              <p>???????????? ??????????????? ?????????????????????!</p>

              <div className="price">
                {randomCP.coupon.coupon_price}
                {randomCP.coupon.coupon_price_spec}
              </div>
              <div className="limit">
                ???????????? ?????? {randomCP.coupon.coupon_limit}???
              </div>
              <div className="orderPrice">
                {randomCP.coupon.coupon_condition}
                {randomCP.coupon.coupon_price_spec} ?????? ?????? ???
              </div>
              <img
                src="/images/img_coupon.png"
                alt="??????"
                className="coupon_img"
              />

              <button onClick={() => history.push("/coupon")}>
                ????????? ????????????
              </button>
            </div>
            <div className="con_random_ok" onClick={handleCancel}>
              ??????
            </div>
          </>
        ) : (
          <>
            <div className="done_random">
              <img src="/images/text_oops.png" alt="???" />
              <p>
                ?????? ????????? ??????????????? ?????? ???????????????. <br />
                ?????? ?????? ??????????????????!
              </p>
            </div>
            <div className="random_ok" onClick={handleCancel}>
              ??????
            </div>
          </>
        )}
      </CouponModalStyled>

      {/* ???????????? ?????? */}
      <BuyNowDrawer
        visible={visibleBuyNow}
        close={closeBuyNowWrap}
        itemDetailInfo={itemDetailInfo}
      />
      <PurchaseListDrawer
        visible={visiblePurchase}
        close={closePurchase}
        buyOpen={buyNowWrap}
      />
    </VideoStyled>
  );
};

export default Video;
