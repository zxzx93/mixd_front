import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OrderListStyled from './OrderListStyled';
import { Button } from 'antd';
import OrderStatus from './components/OrderStatus';
import Moment from 'react-moment';
import 'moment/locale/ko';
import { OrderConfirmation, OrderRefundCancel } from "../../store/modules/order";
import { useDispatch } from "react-redux";
import { getUserToken } from "../../util/decryptUser";

const OrderList = ({ lists, orderDone, OrderNumber, useBtn, useOrderStatus, orderStatus, endReviewlists }) => {
    const [confirmCorId, setConfirmCorId] = useState();
    const [confirmCodId, setConfirmCodId] = useState();
    const [refundCorId, setRefundCorId] = useState();
    const [refundCodId, setRefundCodId] = useState();

    const dispatch = useDispatch();
    const {token} = getUserToken();

    // 구매확정
    useEffect(() => {
        dispatch(OrderConfirmation(token, confirmCorId, confirmCodId));
    }, [confirmCorId, confirmCodId]);
       
    // 반품 철회
    useEffect(() => {
        dispatch(OrderRefundCancel(token, refundCorId, refundCodId));
    }, [refundCorId, refundCodId]);

    const returnDom = (el, i, cor_id) => {
        return (
            <div className="list_content"  key={i}>
                <div className="image_wrap">
                    <img 
                        src={
                            `${process.env.REACT_APP_API_URL}/` + el.itemInfo.cit_file_2
                        } 
                        alt="" 
                    />
                </div>
                <div className="content_wrap">
                    <div 
                        className={'status ' + OrderStatus(el.detail.cod_status).class}
                    >
                        {OrderStatus(el.detail.cod_status).name}
                    </div>
                    <p>{el.itemInfo.cit_price}원</p>
                    <span>{el.itemInfo.market.market_name} {el.itemInfo.cit_name}</span>
                    <div className="options">
                        {
                            el.optionInfo.cde_title_main ?
                            <>
                                {el.optionInfo.cde_title_main}
                                <span />
                            </>
                            :
                            null
                        }
                        {
                            el.optionInfo.cde_title ?
                            <>
                                {el.optionInfo.cde_title}
                                <span />
                            </>  
                            : null 
                        }
                        {el.detail.cod_count}
                    </div>
                </div>
                {
                    useBtn ?
                    <>
                        <div
                            className={
                                'btn_wrap btn_' + OrderStatus(el.detail.cod_status).btn.length
                            }
                        >
                            <div>
                            {
                                OrderStatus(
                                    el.detail.cod_status,
                                    el.detail.cor_id,
                                    el.detail.cde_id,
                                    endReviewlists).btn.map((ele, j) => 
                                ele.type === 'link' ?
                                <Link
                                    key={j}
                                    type={ele.type}
                                    className={ele.class}
                                    to={{
                                        pathname: ele.url + "/" + cor_id + "/" + el.detail.cod_id,
                                        state: ele.state,
                                        // resultDate: 
                                        //     el.detail.cancel_end_date !== null ?
                                        //     el.detail.cancel_end_date
                                        //     :
                                        //     el.detail.refund_date,
                                    }}
                                >
                                    {ele.btn_name}
                                </Link>
                                :
                                <button
                                    key={j}
                                    type={ele.type}
                                    className={ele.class}
                                    onClick={() => {
                                        return (
                                            ele.click === 'confirm' ? (
                                                // 구매확정일 경우
                                                // setConfirmCorId(value.cor_id),
                                                setConfirmCorId(el.cor_id),
                                                setConfirmCodId(el.detail.cod_id)
                                            ) : (
                                                // 구매확정이 아닐 경우에서

                                                // 취소철회일 경우(보류)
                                                // ele.clock === 'withdraw' ?
                                                // withdraw
                                                // :

                                                // 반품철회
                                                // refundCancel
                                                // setRefundCorId(value.cor_id),
                                                setRefundCorId(el.cor_id),
                                                setRefundCodId(el.detail.cod_id)
                                            )
                                        )
                                    }}
                                >
                                    {ele.btn_name}
                                </button>
                                )
                            }
                            </div>
                        </div>
                    </>
                    :
                    null
                }
            </div>
        )
    }

    return (
        <OrderListStyled>
            {
                orderDone ?
                lists.map((value, index) => 
                    <div className="order_list" key={index}>
                        {
                            !OrderNumber ? (
                                <div className="lists_title_btn">
                                    <Moment format="YYYY.MM.DD">
                                        {value.cor_datetime}
                                    </Moment>
                                   <Button
                                        type="link"
                                        href={"/orderDetail/" + value.cor_id}
                                    >
                                        <span>주문 상세보기</span>
                                        <img src="/images/arrow.png" alt="" />
                                    </Button>
                                </div>
                            ) : (
                                <div className="order_number_wrap">
                                    <p>주문번호 {value.cor_id}</p>
                                    <Moment format="YYYY.MM.DD">
                                        {value.cor_datetime}
                                    </Moment>
                                </div>
                            )
                        }
                        <div className="lists_wrap">
                            {
                                value.items.map((el, i) => 
                                    useOrderStatus ?
                                        orderStatus ?
                                            el.detail.cod_status === 'order' ||
                                            el.detail.cod_status === 'deposit' ||
                                            el.detail.cod_status === 'pre_express' ||
                                            el.detail.cod_status === 'express_ing' ||
                                            el.detail.cod_status === 'express_com' ||
                                            el.detail.cod_status === 'end' ?
                                            returnDom(el, i, value.cor_id)
                                            :
                                            null
                                        :
                                            el.detail.cod_status === 'cancel' ||
                                            el.detail.cod_status === 'cancel_ing' ||
                                            el.detail.cod_status === 'cancel_end' ||
                                            el.detail.cod_status === 'refund' ||
                                            el.detail.cod_status === 'refund_ing' ||
                                            el.detail.cod_status === 'refund_end' ?
                                            returnDom(el, i, value.cor_id)
                                            :
                                            null
                                    :
                                    returnDom(el, i, value.cor_id)
                                )
                            }
                        </div>
                    </div>
                ) : (
                    <div className="non_lists">
                        <p>주문내역이 없습니다.</p>
                        <div>
                            <Button
                                type="link"
                                href="/"
                            >
                                쇼핑하러 가기
                            </Button>
                        </div>
                    </div>
                )
            }
        </OrderListStyled>
    )
}

export default OrderList;
