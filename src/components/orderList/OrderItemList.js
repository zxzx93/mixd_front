import React, { useEffect, useState } from 'react';
import OrderItemListStyled from './OrderItemListStyled';
import { Checkbox } from 'antd';
import _ from 'lodash';
import { useDispatch } from "react-redux";
import { CancelListsInfo } from "../../store/modules/order";

const OrderItemlist = ({ order, orderDone, unUseCheck }) => {
    const [checkItems, setCheckItems] = useState([]);
    const [sumTotal, setSumTotal] = useState(0);
    
    const handleSingleCheck = (checked, id, price, count) => {
        if (checked) {
            setSumTotal(sumTotal + (price * count))
            setCheckItems([...checkItems, id]);
        } else {
            setSumTotal(sumTotal - (price * count))
            setCheckItems(checkItems.filter((el) => el !== id));
        }
    };

    const handleAllCheck = checked => {
        if (checked) {
            let sum = 0;
            const idArray = [];
            order.forEach((el) => 
                idArray.push(el.detail.cod_id)
            );

            order.forEach((el) => 
                sum += (el.itemInfo.cit_price * el.detail.cod_count)
            );
            
            setCheckItems(idArray);
            setSumTotal(sum)
        } else {
            setCheckItems([]);
            setSumTotal(0)
        }
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CancelListsInfo(checkItems, sumTotal))
    }, [checkItems])

    return (
        <OrderItemListStyled unUseCheck={unUseCheck}>
            {
                orderDone ?
                <>
                <div className="all_select_wrap">
                    {
                        unUseCheck ?
                        <span>
                            전체 선택 
                            {/* ({order.length}/{originCnt}) */}
                        </span>
                        :
                        <Checkbox 
                            onChange={(e) => handleAllCheck(e.target.checked)}
                            checked={checkItems.length === order.length ? true : false}
                        >
                            전체 선택 ({checkItems.length}/{order.length})
                        </Checkbox>
                    }
                </div>

                <div className="orderitem_lists_wrap">
                    {
                        order.map((value, index) =>
                            <div 
                                className="orderitem_list" 
                                key={index}
                            >
                                {
                                    unUseCheck ?
                                    null
                                    :
                                    <Checkbox
                                        className="list_check"
                                        onChange={(e) => 
                                            handleSingleCheck(
                                                e.target.checked, 
                                                value.detail.cod_id, 
                                                value.itemInfo.cit_price,
                                                value.detail.cod_count,
                                            )
                                        }
                                        checked={checkItems.includes(value.detail.cod_id) ? true : false}
                                    />
                                }
                                <div className="list_wrap">
                                    <div>
                                        <div className="img_wrap">
                                            <span>
                                                <img
                                                    src={
                                                    `${process.env.REACT_APP_API_URL}/` + value.itemInfo.cit_file_2
                                                    }
                                                    alt="이미지"
                                                />
                                            </span>
                                        </div>
                                        <div className="info_wrap">
                                            <span>{value.itemInfo.market.market_name}</span>
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
                                                value.optionInfo.cde_title_main ?
                                                <>
                                                {value.optionInfo.cde_title_main}
                                                <span />
                                                </>
                                                :
                                                null
                                            }
                                            {
                                                value.optionInfo.cde_title ?
                                                <>
                                                {value.optionInfo.cde_title}
                                                <span />
                                                </>
                                                :
                                                null
                                            }
                                            {value.detail.cod_count}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                </>
                : 
                <div>null..</div>
            }
        </OrderItemListStyled>
    )
}

export default OrderItemlist;