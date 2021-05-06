import React from "react";
import SubHeaderStyled from "./SubHeaderStyled";
import { Link, withRouter } from "react-router-dom";
import Gender from '../gender/Gender';
import { Button } from 'antd'
import { useSelector } from "react-redux";

const SubHeader = ({ name, history, genderUse, unUseCart, useToggle, unHistory, show }) => {
    // const gender = JSON.parse(localStorage.getItem("gender"));
    const { gender } = useSelector((state) => state.gender);

    return (
        <div id="signup_title">
            <SubHeaderStyled className="m_header" gender={gender}>
                <div>
                    {
                        genderUse ? (
                            <Gender />
                        ) : (
                            useToggle ? (
                                <span
                                    className="title_back"
                                    onClick={useToggle}
                                >
                                    {gender ? (
                                        <img src="/images/back_on.png" alt="" />
                                    ) : (
                                        <img src="/images/back.png" alt="" />
                                    )}
                                    {/* <img src="/images/back.png" alt="" /> */}
                                </span>
                            ) : unHistory ? (
                                null
                                ):(
                                <span
                                    className="title_back"
                                    onClick={() => history.goBack()}
                                >
                                    {gender ? (
                                        <img src="/images/back_on.png" alt="" />
                                    ) : (
                                        <img src="/images/back.png" alt="" />
                                    )}
                                </span>
                            )
                        )
                    }
                    <div className="p_name">{name}</div>
                    {
                        unUseCart ? (
                            null
                        ) : (
                            show ? 
                            <Button
                                className="add_shipping"
                                type="text"
                                onClick={show}
                            >
                                배송지 추가
                            </Button>
                            :
                            <div className="cart">
                                <Link to="/cart">
                                    {gender === true ? (
                                        <img src="/images/cart_m.png" alt="cart" />
                                    ) : (
                                        <img src="/images/cart_w.png" alt="cart" />
                                    )}
                                    {/* 추후에 장바구니 갯수 들어갈 예정 */}
                                    {/* <span>0</span> */}
                                </Link>
                            </div>
                        )
                    }
                </div>
            </SubHeaderStyled>
        </div>
    );
};

export default withRouter(SubHeader);
