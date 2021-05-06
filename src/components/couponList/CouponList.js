import React from "react";
import CouponListStyled from "./CouponListStyled";
import Moment from "react-moment";
import moment from "moment";
import "moment/locale/ko";

const CouponList = ({ couponLists, couponListDone, keyValue }) => {
    const useCoupon = () => {
        console.log("useCoupon !!");
    };

    // const isAfter = (regDate, limit) => {
    //     const active_time = moment(regDate)
    //         .add(limit, "days")
    //         .format("YYYY.MM.DD");
    //     const now_time = moment().format("YYYY.MM.DD");
    //     return active_time >= now_time ? true : false;
    // };

    const limitDate = (regDate, limit) => {
        const date = moment(regDate).add(limit, "days");
        return moment(date).format("YYYY.MM.DD");
    };

    return (
        <CouponListStyled>
            {keyValue === "1" ? (
                couponListDone ? (
                    couponLists.list.usable.length  === 0 ? (
                        <div className="non_list">
                            보유 중인 쿠폰이 없습니다.
                        </div>
                    ) : (
                        couponLists.list.usable.map((value, index) => (
                            <div
                                key={index}
                                className="couoponList_wrap"
                                onClick={useCoupon}
                            >
                                <div className="coupon_info unUsed">
                                    <div>
                                        {value.coupon.coupon_price}
                                        <span>원</span>
                                    </div>
                                    <p>{value.coupon.coupon_name}</p>
                                    <ul>
                                        <li>
                                            총 {value.coupon.coupon_condition}
                                            {
                                                value.coupon.coupon_price_spec
                                            }{" "}
                                            이상 구매 시 사용 가능
                                        </li>
                                        {
                                            <li>
                                                <Moment format="YYYY.MM.DD">
                                                    {limitDate(value.regdate)}
                                                </Moment>
                                                까지
                                            </li>
                                        }
                                    </ul>
                                </div>
                                <div className="coupon_status unUsed">
                                    <div className="unUseCoupon">사용가능</div>
                                </div>
                            </div>
                        ))
                    )
                ) : (
                    <p>오류다</p>
                )
            ) : couponListDone ? (
                couponLists.list.used.length === 0 ? (
                    <div className="non_list">
                        사용 완료/만료 된 쿠폰이 없습니다.
                    </div>
                ) : (
                    couponLists.list.used.map((value, index) => (
                        <div
                            key={index}
                            className="couoponList_wrap"
                            onClick={useCoupon}
                        >
                            <div className="coupon_info unUsed">
                                <div>
                                    {value.coupon.coupon_price}
                                    <span>원</span>
                                </div>
                                <p>{value.coupon.coupon_name}</p>
                                <ul>
                                    <li>
                                        총 {value.coupon.coupon_condition}
                                        {value.coupon.coupon_price_spec} 이상
                                        구매 시 사용 가능
                                    </li>
                                    {
                                        <li>
                                            <Moment format="YYYY.MM.DD">
                                                {limitDate(value.regdate)}
                                            </Moment>
                                            까지
                                        </li>
                                    }
                                </ul>
                            </div>
                            <div className="coupon_status used">
                                {value.coupon_status === "1" ? (
                                    <div className="unUseCoupon">기한만료</div>
                                ) : (
                                    <div className="unUseCoupon">사용완료</div>
                                )}
                            </div>
                        </div>
                    ))
                )
            ) : (
                <p>오류1다</p>
            )}

            {/* {lists.map((value, index) => (
                <div
                    key={index}
                    className="couoponList_wrap"
                    onClick={useCoupon}
                >
                    {isAfter(
                        value.coupon.regdate,
                        value.coupon.coupon_limit
                    ) ? (
                        <>
                            <div className="coupon_info unUsed">
                                <div>
                                    {value.coupon.coupon_price}
                                    <span>원</span>
                                </div>
                                <p>{value.coupon.coupon_name}</p>
                                <ul>
                                    <li>
                                        총 {value.coupon.coupon_condition}원
                                        이상 구매 시 사용 가능
                                    </li>
                                    {
                                        <li>
                                            <Moment format="YYYY.MM.DD">
                                                {limitDate(
                                                    value.coupon.regdate,
                                                    value.coupon.coupon_limit
                                                )}
                                            </Moment>
                                            까지
                                        </li>
                                    }
                                </ul>
                            </div>
                            <div className="coupon_status unUsed">
                                <div className="unUseCoupon">사용가능</div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="coupon_info used">
                                <div>
                                    {value.coupon.coupon_price}
                                    <span>원</span>
                                </div>
                                <p>{value.coupon.coupon_name}</p>
                                <ul>
                                    <li>
                                        총 {value.coupon.coupon_condition}원
                                        이상 구매 시 사용 가능
                                    </li>
                                    {
                                        <li>
                                            <Moment format="YYYY.MM.DD">
                                                {limitDate(
                                                    value.coupon.regdate,
                                                    value.coupon.coupon_limit
                                                )}
                                            </Moment>
                                            까지
                                        </li>
                                    }
                                </ul>
                            </div>
                            <div className="coupon_status used">
                                {value.coupon_status === "1" ? (
                                    <div className="unUseCoupon">기한만료</div>
                                ) : (
                                    <div className="unUseCoupon">사용완료</div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            ))} */}
        </CouponListStyled>
    );
};

export default CouponList;
