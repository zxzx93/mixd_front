import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { mypageInfo } from "./../../../store/modules/users";
import LoginStyled from "./MypageLoginStyled";

const MypageLogin = (me) => {
    const dispatch = useDispatch();
    const { mypageInfoLists, mypageInfoDone } = useSelector(
        (state) => state.users
    );

    // useEffect(() => {
    //   me ? dispatch(mypageInfo(me.token)) : dispatch(mypageInfo());
    // }, [dispatch, mypageInfo]);

    const [memNickname, setMemNickname] = useState("");
    const [memEmail, setMemEmail] = useState("");
    const [memPhoto, setMemPhoto] = useState("");
    const [memBackgroundPhoto, setMemBackgroundPhoto] = useState("");
    const [couponCount, setCouponCount] = useState("");
    const [depositSum, setDepositSum] = useState("");

    useEffect(() => {
        dispatch(mypageInfo(me.token)).then((res) => {
            console.log("마이페이지", res);
            setMemPhoto(res.user_info.mem_photo);
            setMemBackgroundPhoto(res.user_info.mem_mypage_back);
            setMemNickname(res.user_info.mem_nickname);
            setMemEmail(res.user_info.mem_email);
            setCouponCount(res.coupon_count);
            setDepositSum(res.deposit_sum);
        });
    }, [dispatch, mypageInfo, me]);

    //초기값
    // useEffect(() => {
    //   console.log(mypageInfoDone, "mypageInfoDone");
    //   if (mypageInfoLists === undefined) return;
    //   setTimeout(() => {
    //   setMemPhoto(mypageInfoLists.user_info.mem_photo);
    //   setMemBackgroundPhoto(mypageInfoLists.user_info.mem_mypage_back);
    //   setMemNickname(mypageInfoLists.user_info.mem_nickname);
    //   setMemEmail(mypageInfoLists.user_info.mem_email);
    //   }, 100);
    // }, [mypageInfoLists, mypageInfoDone]);

    return (
        <LoginStyled>
            <div className="my_info_wrap">
                <div className="info_bg_wrap">
                    {memBackgroundPhoto ? (
                        <img
                            src={`${process.env.REACT_APP_API_URL}${memBackgroundPhoto}`}
                            alt="마이페이지 배경사진"
                        />
                    ) : (
                        <img
                            src="/images/mypage_bg.png"
                            alt="마이페이지 배경사진"
                        />
                    )}
                </div>
                <div className="info_cont_wrap">
                    <div>
                        <div className="info_profile">
                            {memPhoto ? (
                                <img
                                    src={`${process.env.REACT_APP_API_URL}${memPhoto}`}
                                    alt="마이페이지 프로필사진"
                                />
                            ) : (
                                <img
                                    src="/images/mypage_logo.svg"
                                    alt="마이페이지 프로필사진"
                                />
                            )}
                        </div>
                        <div className="info_cont">
                            <h1>{memNickname}</h1>
                            <span>{memEmail}</span>
                        </div>
                        <div className="modify_btn">
                            <Link to="/mypage/modify">
                                <img
                                    src="/images/modify_btn.png"
                                    alt="수정아이콘"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mypage_CandP">
                <div className="my_accum">
                    <div className="my_point">
                        <Link to="/point">
                            <img
                                src="/images/my_point_g.svg"
                                alt="포인트아이콘"
                            />
                            <div>
                                <p>포인트</p>
                            </div>
                            <h1>
                                {mypageInfoDone && depositSum}
                                <span>P</span>
                            </h1>
                        </Link>
                    </div>
                    <div className="my_coupon">
                        <Link to="/coupon">
                            <img
                                src="/images/my_coupon_g.svg"
                                alt="쿠폰 아이콘"
                            />
                            <div>
                                <p>쿠폰</p>
                            </div>
                            <h1>
                                {mypageInfoDone && couponCount}
                                <span>장</span>
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
            {/* mypageInfoDone */}
            <div className="mypage_main_btns">
                <div className="my_order">
                    <Link to={me ? "/order" : "/login"}>
                        <p>주문배송조회</p>
                        <img src="/images/arrow_r.svg" alt="화살표 모양" />
                    </Link>
                </div>
                <div className="my_review">
                    <Link to={me ? "/review" : "/login"}>
                        <p>내가 쓴 리뷰</p>
                        <img src="/images/arrow_r.svg" alt="화살표 모양" />
                    </Link>
                </div>
            </div>
        </LoginStyled>
    );
};

export default MypageLogin;
