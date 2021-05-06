import React, { useEffect, useState } from "react";
import PlanDetailStyled from "./PlanDetailStyled";
import { Link, useHistory } from "react-router-dom";
import update from "immutability-helper";
import { useDispatch } from "react-redux";
import { message } from "antd";

import MasonryStyled from "../../../components/masonry/MasonryStyled";
import { getUserToken } from "../../../util/decryptUser";
import {
  zzimeWishInfo,
  zzimeWishDeleteInfo,
} from "../../../store/modules/zzim";

const PlanDetailList = ({ lists }) => {
  console.log("아이템 리스트 : ", lists);

  const dispatch = useDispatch();
  const { token } = getUserToken();
  const history = useHistory();

  let [copyValue, setCopyValue] = useState();

  useEffect(() => {
    setCopyValue(lists.items);
  }, [lists]);

  const ZzimClick = index => {
    console.log("몇번째", index);
    if (token) {
      setCopyValue(
        copyValue[index] &&
          update(copyValue, {
            [index]: {
              itemInfo: { wish: { $set: true } },
            },
          })
      );
      dispatch(
        zzimeWishInfo(
          copyValue[index] && copyValue[index].cit_id,
          token.accessToken
        )
      );
      message.info("찜한 상품으로 추가되었어요.", 1.5);
    } else {
      alert("로그인 필요");
    }
  };

  const ZzimDeleteClick = index => {
    if (token) {
      setCopyValue(
        copyValue[index].item
          ? update(copyValue, {
              [index]: {
                item: { wish: { $set: false } },
              },
            })
          : update(copyValue, {
              [index]: {
                wish: { $set: false },
              },
            })
      );
      dispatch(
        zzimeWishDeleteInfo(
          copyValue[index].item
            ? copyValue[index].item.cit_id
            : copyValue[index].cit_id,
          token.accessToken
        )
      );
      message.info("찜한 상품에서 삭제되었어요.", 1.5);
    } else {
      alert("로그인 필요");
    }
  };

  console.log(copyValue);
  return (
    <>
      <MasonryStyled className="masonry">
        {copyValue
          ? copyValue.map((value, index) => (
              <div
                className="item_list"
                key={index}
                onClick={() =>
                  history.push(`/planDetail/${value.plan_id}/${value.cit_id}`)
                }
              >
                <div className="image_wrap">
                  <img
                    src={`${process.env.REACT_APP_API_URL}${value.itemInfo.cit_file_2}`}
                    alt=""
                  />
                  <span
                    className="like"
                    value={value.cit_id}
                    onClick={
                      value.itemInfo
                        ? value.itemInfo.wish === true
                          ? () => ZzimDeleteClick(index)
                          : () => ZzimClick(index)
                        : value.itemInfo.wish === true
                        ? () => ZzimDeleteClick(index)
                        : () => ZzimClick(index)
                    }
                  >
                    {value.itemInfo.wish ? (
                      value.itemInfo.wish === true ? (
                        <img src="/images/zzim_on.png" alt="" />
                      ) : (
                        <img src="/images/zzim_off.png" alt="" />
                      )
                    ) : value.itemInfo === true ? (
                      <img src="/images/zzim_on.png" alt="" />
                    ) : (
                      <img src="/images/zzim_off.png" alt="" />
                    )}
                  </span>
                </div>
                <div className="contents_wrap">
                  <h1>
                    {/* <Link to="#">
                                          {value.item
                                              ? value.item.market === null
                                                  ? ""
                                                  : value.item.market
                                                        .market_name
                                              : value.market === null
                                              ? ""
                                              : value.market.market_name}
                                      </Link> */}
                  </h1>
                  <p>{value.itemInfo.cit_name}</p>
                  {value.itemInfo ? (
                    value.itemInfo.computed_sale_type === "home" || "plan" ? (
                      value.itemInfo.computed_change_sale_per === 0 ? (
                        <ul>
                          <li className="total">
                            {value.itemInfo.cit_real_price}
                          </li>
                        </ul>
                      ) : (
                        <ul>
                          <li className="sale">
                            {value.itemInfo.computed_change_sale_per}%
                          </li>
                          <li className="total">
                            {value.itemInfo.computed_change_sale_price}
                          </li>
                          <li className="cost">
                            {value.itemInfo.cit_real_price}
                          </li>
                        </ul>
                      )
                    ) : value.itemInfo.computed_sale_type === "normal" ? (
                      value.itemInfo.cit_sale_per === 0 ? (
                        <ul>
                          <li className="total">
                            {value.itemInfo.cit_real_price}
                          </li>
                        </ul>
                      ) : (
                        <ul>
                          <li className="sale">
                            {value.itemInfo.cit_sale_per}%
                          </li>
                          <li className="total">{value.itemInfo.cit_price}</li>
                          <li className="cost">
                            {value.itemInfo.cit_real_price}
                          </li>
                        </ul>
                      )
                    ) : (
                      ""
                    )
                  ) : value.cit_sale_per === 0 ? (
                    <ul>
                      <li className="total">{value.cit_real_price}</li>
                    </ul>
                  ) : (
                    <ul>
                      <li className="sale">{value.cit_sale_per}%</li>
                      <li className="total">
                        {value.computed_change_sale_price}
                      </li>
                      <li className="cost">{value.cit_real_price}</li>
                    </ul>
                  )}
                </div>
              </div>
            ))
          : ""}
      </MasonryStyled>
    </>
  );
};
export default PlanDetailList;
