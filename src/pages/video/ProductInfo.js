import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import _ from "lodash";

import ProductInfoStyled from "./ProductInfoStyled";
import WashingGuide from "./components/WashingGuide";

const ProductInfo = () => {
  const { itemDetailInfo, itemDetailDone } = useSelector(state => state.items);

  console.log("itemDetailDone", itemDetailDone);
  console.log("itemDetailInfo", itemDetailInfo);
  const [visible, setVisible] = useState(false);

  const showWashingGuide = () => {
    setVisible(true);
  };

  const closeWashingGuide = () => {
    setVisible(false);
  };

  const info = () => {
    let cde_title = [];
    let cde_title_main = [];
    for (const key in itemDetailInfo.options) {
      if (Object.hasOwnProperty.call(itemDetailInfo.options, key)) {
        const element = itemDetailInfo.options[key];
        cde_title.push(element.cde_title);
        cde_title_main.push(element.cde_title_main);
      }
    }

    // 배열안에 중복 값 제거
    const uniqueCdeTitle = cde_title.filter((element, index) => {
      return cde_title.indexOf(element) === index;
    });
    const uniqueCdeTitleMain = _.compact(cde_title_main);

    //compact
    return (
      <>
        <li>
          <p>색상</p>
          <span>{uniqueCdeTitle.join(" / ")}</span>
        </li>
        <li>
          <p>사이즈</p>
          <span>{uniqueCdeTitleMain.join(" / ")}</span>
        </li>
      </>
    );
  };

  return (
    <ProductInfoStyled>
      {itemDetailDone && (
        <>
          {itemDetailInfo.market.market_notice !== null && (
            <div
              className="notice_wrap"
              dangerouslySetInnerHTML={{
                __html: `${itemDetailInfo.market.market_notice.content}`,
              }}
            ></div>
          )}
          <div
            className="detail_content_wrap"
            dangerouslySetInnerHTML={{
              __html: `${itemDetailInfo.cit_content}`,
            }}
          ></div>

          {itemDetailInfo.model_info && (
            <div className="model_info_wrap">
              <div className="info_title">
                <p>모델 정보</p>
                <span>{itemDetailInfo.model_info.name}</span>
              </div>
              <div>
                <div>
                  {itemDetailInfo.model_info.model_img ? (
                    <img
                      src={`${process.env.REACT_APP_API_URL}${itemDetailInfo.model_info.model_img}`}
                      alt="모델 사진"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <ul>
                  <li>
                    <p>키</p>
                    <span>{itemDetailInfo.model_info.tall}</span>
                  </li>
                  <li>
                    <p>체중</p>
                    <span>{itemDetailInfo.model_info.weight}</span>
                  </li>
                  <li>
                    <p>상의</p>
                    <span>{itemDetailInfo.model_info.top}</span>
                  </li>
                  <li>
                    <p>하의</p>
                    <span>{itemDetailInfo.model_info.bottom}</span>
                  </li>
                  <li>
                    <p>신발</p>
                    <span>{itemDetailInfo.model_info.foot}</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          <div className="goods_info_wrap">
            <div className="info_title">
              <p>상품 정보</p>
            </div>
            <div>
              <ul>
                <li>
                  <p>소재</p>
                  <span>db 아직 없음.</span>
                </li>
                <li>
                  <p>모델피팅</p>
                  <span>db 아직 없음.</span>
                </li>
                {info()}
                <li>
                  <p>MD 코멘트</p>
                  <span>{itemDetailInfo.cit_summary}</span>
                </li>
              </ul>
            </div>
          </div>

          {itemDetailInfo.cit_lining === "선택안함" &&
          itemDetailInfo.cit_flexibility === "선택안함" &&
          itemDetailInfo.cit_reflection === "선택안함" &&
          itemDetailInfo.cit_touch === "선택안함" &&
          itemDetailInfo.cit_fit === "선택안함" &&
          itemDetailInfo.cit_thickness === "선택안함" &&
          itemDetailInfo.cit_weather === "선택안함" ? (
            ""
          ) : (
            <div className="fabric_info_wrap">
              <div className="info_title">
                <p>소재 정보</p>
              </div>

              <div>
                {itemDetailInfo.cit_lining === "선택안함" ||
                  (itemDetailInfo.cit_lining === "" ? (
                    ""
                  ) : (
                    <div>
                      <p>안감</p>
                      <ul>
                        <li
                          className={
                            itemDetailInfo.cit_lining === "있음" ? "on" : ""
                          }
                        >
                          있음
                        </li>
                        <li
                          className={
                            itemDetailInfo.cit_lining === "없음" ? "on" : ""
                          }
                        >
                          없음
                        </li>
                        <li
                          className={
                            itemDetailInfo.cit_lining === "기본" ? "on" : ""
                          }
                        >
                          기본
                        </li>
                      </ul>
                    </div>
                  ))}

                {itemDetailInfo.cit_flexibility === "선택안함" ||
                  (itemDetailInfo.cit_flexibility === "선택안함" ? (
                    ""
                  ) : (
                    <div>
                      <p>신축성</p>
                      <ul>
                        <li
                          className={
                            itemDetailInfo.cit_flexibility === "좋음"
                              ? "on"
                              : ""
                          }
                        >
                          좋음
                        </li>
                        <li
                          className={
                            itemDetailInfo.cit_flexibility === "보통"
                              ? "on"
                              : ""
                          }
                        >
                          보통
                        </li>
                        <li
                          className={
                            itemDetailInfo.cit_flexibility === "없음"
                              ? "on"
                              : ""
                          }
                        >
                          없음
                        </li>
                      </ul>
                    </div>
                  ))}

                {itemDetailInfo.cit_reflection === "선택안함" ||
                itemDetailInfo.cit_reflection === "선택안함" ? (
                  ""
                ) : (
                  <div>
                    <p>비침</p>
                    <ul>
                      <li
                        className={
                          itemDetailInfo.cit_reflection === "있음" ? "on" : ""
                        }
                      >
                        있음
                      </li>
                      <li
                        className={
                          itemDetailInfo.cit_reflection === "약간" ? "on" : ""
                        }
                      >
                        약간
                      </li>
                      <li
                        className={
                          itemDetailInfo.cit_reflection === "없음" ? "on" : ""
                        }
                      >
                        없음
                      </li>
                    </ul>
                  </div>
                )}

                {itemDetailInfo.cit_touch === "선택안함" ||
                itemDetailInfo.cit_touch === "" ? (
                  ""
                ) : (
                  <div>
                    <p>촉감</p>
                    <ul>
                      <li
                        className={
                          itemDetailInfo.cit_touch === "부드러움" ? "on" : ""
                        }
                      >
                        부드러움
                      </li>
                      <li
                        className={
                          itemDetailInfo.cit_touch === "보통" ? "on" : ""
                        }
                      >
                        보통
                      </li>
                      <li
                        className={
                          itemDetailInfo.cit_touch === "까칠함" ? "on" : ""
                        }
                      >
                        까칠함
                      </li>
                    </ul>
                  </div>
                )}

                {itemDetailInfo.cit_fit === "선택안함" ||
                itemDetailInfo.cit_fit === "" ? (
                  ""
                ) : (
                  <div>
                    <p>핏감</p>
                    <ul>
                      <li
                        className={
                          itemDetailInfo.cit_fit === "타이트" ? "on" : ""
                        }
                      >
                        타이트
                      </li>
                      <li
                        className={
                          itemDetailInfo.cit_fit === "정사이즈" ? "on" : ""
                        }
                      >
                        정사이즈
                      </li>
                      <li
                        className={
                          itemDetailInfo.cit_fit === "루즈" ? "on" : ""
                        }
                      >
                        루즈
                      </li>
                    </ul>
                  </div>
                )}

                {itemDetailInfo.cit_thickness === "선택안함" ||
                itemDetailInfo.cit_thickness === "" ? (
                  ""
                ) : (
                  <div>
                    <p>두께감</p>
                    <ul>
                      <li
                        className={
                          itemDetailInfo.cit_thickness === "얇음" ? "on" : ""
                        }
                      >
                        얇음
                      </li>
                      <li
                        className={
                          itemDetailInfo.cit_thickness === "보통" ? "on" : ""
                        }
                      >
                        보통
                      </li>
                      <li
                        className={
                          itemDetailInfo.cit_thickness === "두꺼움" ? "on" : ""
                        }
                      >
                        두꺼움
                      </li>
                    </ul>
                  </div>
                )}

                {itemDetailInfo.cit_weather === "선택안함" ||
                itemDetailInfo.cit_weather === "" ? (
                  ""
                ) : (
                  <div>
                    <p>계절감</p>
                    <ul>
                      <li
                        className={
                          itemDetailInfo.cit_weather === "봄/가을" ? "on" : ""
                        }
                      >
                        봄/가을
                      </li>
                      <li
                        className={
                          itemDetailInfo.cit_weather === "여름" ? "on" : ""
                        }
                      >
                        여름
                      </li>
                      <li
                        className={
                          itemDetailInfo.cit_weather === "겨울" ? "on" : ""
                        }
                      >
                        겨울
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="basic_info_wrap">
            <div className="info_title">
              <p>상품 기본 정보</p>
            </div>
            <div>
              <ul>
                <li>
                  <p>소재</p>
                  <span>{itemDetailInfo.meta.info_content_1}</span>
                </li>
                <li>
                  <p>색상</p>
                  <span>{itemDetailInfo.meta.info_content_2}</span>
                </li>
                <li>
                  <p>치수</p>
                  <span> {itemDetailInfo.meta.info_content_3}</span>
                </li>
                <li>
                  <p>제조자</p>
                  <span>{itemDetailInfo.meta.info_content_4}</span>
                </li>
                <li>
                  <p>세탁방법</p>
                  <span>{itemDetailInfo.meta.info_content_5}</span>
                </li>
                <li>
                  <p>제조연월</p>
                  <span>{itemDetailInfo.meta.info_content_6}</span>
                </li>
                <li>
                  <p>제조국</p>
                  <span>{itemDetailInfo.meta.info_content_7}</span>
                </li>
                <li>
                  <p>품질 보증 기준</p>
                  <span>{itemDetailInfo.meta.info_content_8}</span>
                </li>
                <li>
                  <p>A/S 정보 및 담당자</p>
                  <span>{itemDetailInfo.meta.info_content_9}</span>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}

      <Button
        type="text"
        className="washing_guide_btn"
        onClick={showWashingGuide}
      >
        워싱가이드
        <img src="/images/arrow.png" alt="" />
      </Button>
      <WashingGuide visible={visible} close={closeWashingGuide} />
    </ProductInfoStyled>
  );
};

export default ProductInfo;
