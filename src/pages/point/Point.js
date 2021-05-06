import React, { useEffect } from "react";
import Moment from "react-moment";
import moment from "moment";
import PointStyled from "./PointStyled";
import SubHeader from "./../../components/header/SubHeader";
import { pointListInfo } from "../../store/modules/point";
import { useDispatch, useSelector } from "react-redux";

const Point = () => {
    const { loginUser } = useSelector((state) => state.auth);
    const { pointLists, pointListDone } = useSelector((state) => state.point);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(pointListInfo(loginUser));
    }, [dispatch]);
    // console.log(pointLists);

    const limitDate = (regDate, limit) => {
        const date = moment(regDate).add(limit, "days");
        return moment(date).format("YYYY.MM.DD");
    };
    return (
        <PointStyled>
            <SubHeader name="포인트" />

            <div className="point_title">
                <div>
                    <img src="/images/point.png" alt="" />
                    <span>나의 포인트</span>
                </div>
                <div>{pointListDone ? pointLists.sum : ""} P</div>
            </div>

            <div className="point_lists">
                <div className="p_lists_wrap">
                    <p>포인트 사용 내역</p>
                </div>

                {pointListDone ? (
                    pointLists.list.length === 0 ? (
                        <div className="point_list non_list">
                            포인트 사용 내역이 없습니다.
                        </div>
                    ) : (
                        pointLists.list.map((value, index) => (
                            <div className="point_list" key={index}>
                                <div>
                                    {value.dep_from_type === "service" ? (
                                        <div className="point plus">
                                            + {value.dep_deposit} P
                                        </div>
                                    ) : (
                                        <div className="point minus">
                                            -{" "}
                                            {value.dep_deposit
                                                .toString()
                                                .split("-")}{" "}
                                            P
                                        </div>
                                    )}
                                    <div className="point_info">
                                        <p>{value.dep_content}</p>
                                        <span>
                                            <Moment format="YYYY.MM.DD">
                                                {limitDate(value.dep_datetime)}
                                            </Moment>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                ) : (
                    ""
                )}
            </div>

            <div className="point_alert">
                <div>※ 유의사항</div>
                <div>
                    <p>
                        포인트는 믹스디 사이트 내 상품 및 서비스 구매 시 사용 가능합니다. 
                    </p>
                    <span>
                        단, 특정 프로모션이 적용 된 상품 및 서비스는 포인트 사용이 불가 할 수 있습니다.
                    </span>
                    <p>
                        포인트 사용은 총 결제금액의 10%까지만 사용 가능합니다.
                    </p>
                    <p>
                        주문전체 취소 및 반품 완료 시, 사용한 포인트는 복구됩니다.
                    </p>
                    <p>
                        부분 취소 및 반품 완료 시, 남아 있는 주문 상품에 적용 된 포인트 할인금
                        액은 유지되며 취소 및 반품 상품에 적용 된 포인트 할인금액은 반환(복구)됩니다.
                    </p>
                    <p>
                        쿠폰을 사용한 주문건의 경우, 포인트 적립은 실 결제금액 기준으로 적립됩니다. 
                        (포인트 적립 대상 상품 구매 시)
                    </p>
                    <p>
                        적립 된 포인트는 회원 본인의 서비스 이용 경우에만 사용할 수 있는 권한을 가지며, 
                        어떠한 경우에도 이를 타인에게 매매 또는 양도할 수 없습니다.
                    </p>
                </div>
            </div>
        </PointStyled>
    );
};

export default Point;
