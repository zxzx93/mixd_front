import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import update from "immutability-helper";
import { Link } from "react-router-dom";

import MasonryStyled from "./MasonryStyled";
import { zzimeWishInfo, zzimeWishDeleteInfo } from "../../store/modules/zzim";
import { getUserToken } from "../../util/decryptUser";
import { message } from "antd";
import _, { add } from "lodash";
import { addComma } from "../addComma/AddComma";

let addLists = [];

const MasonryLayout = ({ lists }) => {
    // console.log("메이슨리 쪽", lists);
    const dispatch = useDispatch();
    const { token } = getUserToken();
    let [copyValue, setCopyValue] = useState();

    useEffect(() => {
        setCopyValue(lists);
    }, [lists]);

    const ZzimClick = (index) => {
        if (token) {
            setCopyValue(
                copyValue[index].item
                    ? update(copyValue, {
                          [index]: {
                              item: { wish: { $set: true } },
                          },
                      })
                    : update(copyValue, {
                          [index]: {
                              wish: { $set: true },
                          },
                      })
            );
            dispatch(
                zzimeWishInfo(
                    copyValue[index].item
                        ? copyValue[index].item.cit_id
                        : copyValue[index].cit_id,
                    token.accessToken
                )
            );
            message.info("찜한 상품으로 추가되었어요.", 1.5);
        } else {
            alert("로그인 필요");
        }
    };

    const ZzimDeleteClick = (index) => {
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

    const seeListsInfo = (index, addLists) => {
        addLists.push(copyValue[index]);
        setTimeout(() => {
            sessionStorage.setItem("RecentlyViewed", JSON.stringify(addLists));
        }, 1000);
    };

    return (
        <>
            <MasonryStyled className="masonry">
                {copyValue
                    ? copyValue.map((value, index) => (
                            <div
                                className="item_list"
                                key={index}
                                onClick={() => seeListsInfo(index, addLists)}
                            >
                                <div className="image_wrap">
                                    <img
                                        src={`${
                                            value.item
                                                ? value.item.cit_file_2
                                                : value.cit_file_2
                                        }`}
                                        alt=""
                                    />
                                    <span
                                        className="like"
                                        value={value.cit_id}
                                        onClick={
                                            value.item
                                                ? value.item.wish === true
                                                    ? () => ZzimDeleteClick(index)
                                                    : () => ZzimClick(index)
                                                : value.wish === true
                                                ? () => ZzimDeleteClick(index)
                                                : () => ZzimClick(index)
                                        }
                                    >
                                        {value.item ? (
                                            value.item.wish === true ? (
                                                <img
                                                    src="/images/zzim_on.png"
                                                    alt=""
                                                />
                                            ) : (
                                                <img
                                                    src="/images/zzim_off.png"
                                                    alt=""
                                                />
                                            )
                                        ) : value.wish === true ? (
                                            <img
                                                src="/images/zzim_on.png"
                                                alt=""
                                            />
                                        ) : (
                                            <img
                                                src="/images/zzim_off.png"
                                                alt=""
                                            />
                                        )}
                                    </span>
                                </div>
                                <div className="contents_wrap">
                                    {/* <h1>
                                        <Link to="#">
                                            {value.item
                                                ? value.item.market === null
                                                    ? ""
                                                    : value.item.market
                                                            .market_name
                                                : value.market === null

                                                ? ""
                                                : value.market.market_name}
                                        </Link>
                                    </h1> */}
                                    <p>
                                        {value.item
                                            ? value.item.cit_name
                                            : value.cit_name}
                                    </p>
                                    {value.item ? (
                                        value.item.computed_sale_type ===
                                            "home" || "plan" ? (
                                            value.item
                                                .computed_change_sale_per ===
                                            0 ? (
                                                <ul>
                                                    <li className="total">
                                                        {addComma(
                                                            value.item
                                                                .cit_real_price
                                                        )}
                                                    </li>
                                                </ul>
                                            ) : (
                                                <ul>
                                                    <li className="sale">
                                                        {
                                                            value.item
                                                                .computed_change_sale_per
                                                        }
                                                        %
                                                    </li>
                                                    <li className="total">
                                                        {addComma(
                                                            value.item
                                                                .computed_change_sale_price
                                                        )}
                                                    </li>
                                                    <li className="cost">
                                                        {addComma(
                                                            value.item
                                                                .cit_real_price
                                                        )}
                                                    </li>
                                                </ul>
                                            )
                                        ) : value.item.computed_sale_type ===
                                            "normal" ? (
                                            value.item.cit_sale_per === 0 ? (
                                                <ul>
                                                    <li className="total">
                                                        {addComma(
                                                            value.item
                                                                .cit_real_price
                                                        )}
                                                    </li>
                                                </ul>
                                            ) : (
                                                <ul>
                                                    <li className="sale">
                                                        {value.item.cit_sale_per}%
                                                    </li>
                                                    <li className="total">
                                                        {addComma(
                                                            value.item.cit_price
                                                        )}
                                                    </li>
                                                    <li className="cost">
                                                        {addComma(
                                                            value.item
                                                                .cit_real_price
                                                        )}
                                                    </li>
                                                </ul>
                                            )
                                        ) : (
                                            ""
                                        )
                                    ) : value.cit_sale_per === 0 ? (
                                        <ul>
                                            <li className="total">
                                                {addComma(value.cit_real_price)}
                                            </li>
                                        </ul>
                                    ) : (
                                        <ul>
                                            <li className="sale">
                                                {value.cit_sale_per}%
                                            </li>
                                            <li className="total">
                                                {addComma(
                                                    value.computed_change_sale_price
                                                )}
                                            </li>
                                            <li className="cost">
                                                {addComma(value.cit_real_price)}
                                            </li>
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

export default MasonryLayout;
