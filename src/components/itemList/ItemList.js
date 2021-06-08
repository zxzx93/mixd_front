import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox, Button, message } from "antd";
import ItemListStyled from "./ItemListStyled";
import OptionChangeDrawer from "../../pages/cart/components/OptionChangeDrawer";
import { getAllCount, checkedItemListSum } from "../../store/modules/cart";
import DeleteDrawer from "./../../pages/cart/components/DeleteDrawer";
import _ from 'lodash';
import { getUserToken } from "../../util/decryptUser";
import { orderListPass } from "../../store/modules/cartToPurchase";
import { useHistory } from "react-router-dom";

const ItemList = ({ lists, listsDone, unChecked }) => {
    const [checkItems, setCheckItems] = useState([]);
    const [visibleDelete, setVisibleDelete] = useState();
    const [sumArray, setSumArray] = useState([]);
    const dispatch = useDispatch();
    const {
        selectDeleteItemDone,
        allCount,
    } = useSelector(state => state.cart);
    const { token } = getUserToken();
    const [visibleOption, setVisibleOption] = useState();
    const [valueOption, setValueOption] = useState();
    const history = useHistory();

    console.log("lists : ", lists)

    const handleSingleCheck = (checked, pkNum, groupNum, price, realPrice, cnt, cit_id, cde_id) => {
        if (checked) {
            setCheckItems(_.uniqWith([...checkItems, {
                "pkNum": pkNum,
                "groupNum": groupNum,
                "price": price,
                "realPrice": realPrice,
                "cnt": cnt,
                "cit_id": cit_id,
                "cde_id": cde_id,
            }], _.isEqual));
        } else {
            setCheckItems(checkItems.filter((el) => el.pkNum !== pkNum));
        }
    };

    const handleMarketAllCheck = (checked, mem_id) => {
        if (checked) {
            const idArray = [];
            lists.forEach((el) =>
                el.market.forEach((value) =>
                    mem_id === value.market_mem_id ?
                        idArray.push({
                            "pkNum": value.cct_id,
                            "groupNum": value.market_mem_id,
                            "price": value.itemInfo.computed_sale_type === 'normal' ?
                                value.itemInfo.cit_price : value.itemInfo.computed_change_sale_price,
                            "realPrice": value.itemInfo.cit_real_price,
                            "cnt": value.cct_count,
                            "cit_id": value.cit_id,
                            "cde_id": value.cde_id,
                        })
                        :
                        null
                )
            );
            setCheckItems(_.uniqWith(_.concat(checkItems, idArray), _.isEqual));
        } else {
            setCheckItems(checkItems.filter((el) => el.groupNum !== mem_id));
        }
    }

    const handleAllCheck = (checked) => {
        if (checked) {
            const idArray = [];
            lists.forEach((el) =>
                el.market.forEach((value) =>
                    idArray.push({
                        "pkNum": value.cct_id,
                        "groupNum": value.market_mem_id,
                        "price": value.itemInfo.computed_sale_type === 'normal' ?
                            value.itemInfo.cit_price : value.itemInfo.computed_change_sale_price,
                        "realPrice": value.itemInfo.cit_real_price,
                        "cnt": value.cct_count,
                        "cit_id": value.cit_id,
                        "cde_id": value.cde_id,
                    })
                )
            )
            setCheckItems(idArray);
        } else {
            setCheckItems([]);
        }
    }

    useEffect(() => {
        setCheckItems([])
        dispatch(getAllCount(token))
    }, [selectDeleteItemDone])

    useEffect(() => {
        dispatch(checkedItemListSum(checkItems))
    }, [checkItems])

    const returnCnt = (item) => {
        let cnt = 0;
        checkItems.forEach((value) =>
            value.groupNum === item ?
                cnt += 1
                :
                null
        )
        return cnt;
    }

    const totalSum = (marketId) => {
        let sum = 0;
        checkItems.forEach((value) =>
            value.groupNum === marketId ?
                sum += (value.price * value.cnt)
                :
                null
        )
        return sum;
    }

    const showDeleteDrawer = () => {
        return (
            checkItems.length !== 0 ?
                setVisibleDelete(true)
                :
                alert("1개 이상 선택 !!")
        )
    }
    const closeDeleteDrawer = () => {
        setVisibleDelete(false)
    }

    const ondDeleteBtn = (value) => {
        const idArray = [];
        idArray.push({
            "pkNum": value.cct_id,
            "groupNum": value.market_mem_id,
            "price": value.itemInfo.cit_price,
            "cnt": value.cct_count,
        })
        setSumArray(idArray)
        setVisibleDelete(true)
    }

    const showVisible = (value) => {
        setValueOption(value)
        setVisibleOption(true)
    }

    const closeOptionChange = () => {
        setVisibleOption(false)
    }

    const checkItem = (item) => {
        let orderList = [];
        checkItems.forEach((value) =>
            item.market.forEach((ele) =>
                ele.cct_id === value.pkNum ?
                    orderList.push({
                        "cit_id": value.cit_id,
                        "cde_id": value.cde_id,
                    })
                    :
                    null
            )
        )

        if (orderList.length !== 0) {
            dispatch(orderListPass(orderList))
            history.push("/orderPurchase")
        } else {
            message.info("주문할 상품을 선택해주세요.", 1.5);
        }
    }

    return (
        listsDone ?
            <ItemListStyled className="item_wrap">
                <div className="all_select_wrap">
                    <Checkbox
                        onChange={e => handleAllCheck(e.target.checked)}
                        checked={
                            checkItems.length === allCount ? true : false
                        }
                    />
                전체 선택 ({checkItems.length}/{allCount})
                <Button
                        type="text"
                        onClick={showDeleteDrawer}
                    >
                        선택삭제
                </Button>

                    <DeleteDrawer
                        visible={visibleDelete}
                        close={closeDeleteDrawer}
                        checkItems={checkItems}
                        sumArray={sumArray}
                    />
                </div>

                {
                    lists.map((item, i) =>
                        <div className="cart_lists" key={i}>
                            <div className="cart_list">
                                <div className="cart_marketName">
                                    <Checkbox
                                        onChange={e => handleMarketAllCheck(
                                            e.target.checked,
                                            item.market_mem_id,
                                        )}
                                        checked={
                                            item.market.length === returnCnt(item.market_mem_id) ?
                                                true : false
                                        }
                                    />
                                    {item.market[0].marketInfo.market_name}
                                </div>

                                <div>
                                    {
                                        item.market.map((value, index) =>
                                            <div key={index}>
                                                <Checkbox
                                                    type="checkbox"
                                                    className="list_check"
                                                    onChange={(e) =>
                                                        handleSingleCheck(
                                                            e.target.checked,
                                                            value.cct_id,
                                                            value.market_mem_id,
                                                            value.itemInfo.computed_sale_type === 'normal' ?
                                                                value.itemInfo.cit_price
                                                                :
                                                                value.itemInfo.computed_change_sale_price,
                                                            value.itemInfo.cit_real_price,
                                                            value.cct_count,
                                                            value.cit_id,
                                                            value.cde_id,
                                                        )
                                                    }
                                                    checked={
                                                        checkItems.some((ele) =>
                                                            ele.pkNum === value.cct_id
                                                        )
                                                    }
                                                />
                                                <div className="list_wrap">
                                                    <div>
                                                        <div className="img_wrap">
                                                            <span>
                                                                {/* {value.itemInfo.cit_status === 2 && <div>품절</div>} */}
                                                                <img
                                                                    src={
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
                                                        <Button
                                                            type="text"
                                                            disabled={value.itemInfo.cit_status === 2 ? true : false}
                                                            className={
                                                                value.itemInfo.cit_status === 2 ? "soldOut" : "option"
                                                            }
                                                            onClick={() => {
                                                                return (
                                                                    showVisible(value)
                                                                )
                                                            }}
                                                        >
                                                            옵션변경
                                            </Button>
                                                    </div>
                                                </div>
                                                <Button
                                                    className="delete_btn"
                                                    type="text"
                                                    onClick={() => ondDeleteBtn(value)}
                                                    icon={<img src="/images/close.png" alt="" />}
                                                />
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="order_wrap">

                                    <Button
                                        type="link"
                                        onClick={() => {
                                            checkItem(item)
                                        }}
                                    >
                                        총 {totalSum(item.market_mem_id)}원 주문하기
                                </Button>
                                </div>
                            </div>
                        </div>
                    )
                }

                {
                    valueOption ?
                        <OptionChangeDrawer
                            value={valueOption}
                            visible={visibleOption}
                            close={closeOptionChange}
                        />
                        :
                        null
                }
            </ItemListStyled>
            :
            null
    );
};

export default ItemList;
