import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox, Button, message } from "antd";
import ItemListStyled from "./PurchaseListStyled";
import OptionChangeDrawer from "../../pages/cart/components/OptionChangeDrawer";
import { getAllCount, checkedItemListSum } from "../../store/modules/cart";
import DeleteDrawer from "../../pages/cart/components/DeleteDrawer";
import _ from 'lodash';
import { getUserToken } from "../../util/decryptUser";
import { orderListPass } from "../../store/modules/cartToPurchase";
import { useHistory } from "react-router-dom";

const ItemList = ({ lists, listsDone }) => {

    console.log("lists : ", lists)

    return (
        listsDone ?
        <ItemListStyled className="item_wrap">
            {
                lists.map((item, i) =>
                    <div className="cart_lists" key={i}>
                        <div className="cart_list">
                            <div>
                            {
                                item.market.map((value, index) =>
                                <div key={index}>
                                    <div className="list_wrap">
                                        <div>
                                            <div className="img_wrap">
                                                <span>
                                                <img
                                                    src={
                                                        `${process.env.REACT_APP_API_URL}/` +
                                                        value.itemInfo.cit_file_2
                                                    }
                                                    alt="이미지"
                                                />
                                                </span>
                                            </div>
                                            <div className="info_wrap">
                                                <span>{value.marketInfo.market_name}</span>
                                                <span>{value.itemInfo.cit_name}</span>
                                                <div>
                                                    <span className="final_price">
                                                        {value.itemInfo.cit_price}원
                                                    </span>
                                                    <span className="origin_cost">
                                                        {value.itemInfo.cit_real_price}원
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="option_wrap">
                                            <div>
                                                {
                                                    value.itemDetail.cde_title_main ?
                                                    <>
                                                        {value.itemDetail.cde_title_main}
                                                        <span />
                                                    </>
                                                    :
                                                    null
                                                }
                                                {
                                                    value.itemDetail.cde_title ?
                                                    <>
                                                        {value.itemDetail.cde_title}
                                                        <span />
                                                    </>
                                                    :
                                                    null
                                                }
                                                {value.cct_count}개
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            }
                            </div>
                        </div>
                    </div>
                )
            }
        </ItemListStyled>
        :
        null
    );
};

export default ItemList;
