import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FooterStyled from "./FooterStyled";
import FooterCategory from "./components/FooterCategory";
import { getUserToken } from "./../../util/decryptUser";
import _ from "lodash";

const Footer = () => {
    const { user } = getUserToken();
    const [selected, setSelected] = useState(2);
    const [toggle, setToggle] = useState(false);

    const handleColor = (row) => {
        setSelected(row.id);
        sessionStorage.setItem("id", row.id);
    };
    
    useEffect(() => {
        setSelected(Number(sessionStorage.getItem("id")));
    }, [sessionStorage.getItem("id")]);

    const hendleToggle = () => {
        setToggle(!toggle);
    };

    const lists = [
        { title: "카테고리" },
        {
            id: 1,
            title: "마켓",
            img: "/images/f_market.png",
            onImg: "/images/f_market_on.png",
            LinkTo: "/realTimeMarket",
        },
        {
            id: 2,
            title: "홈",
            img: "/images/f_home.png",
            onImg: "/images/f_home_on.png",
            LinkTo: "/",
        },
        {
            id: 3,
            title: "찜",
            img: "/images/f_heart.png",
            onImg: "/images/f_heart_on.png",
            LinkTo: "/zzim",
        },
        {
            id: 4,
            title: "마이페이지",
            img: "/images/f_mypage.png",
            onImg: "/images/f_mypage_on.png",
            LinkTo: "/mypage",
        },
    ];

    return (
        <FooterStyled>
            <ul>
                {lists.map((list, index) => {
                    return (
                        <li
                            key={index}
                            onClick={
                                list.id === undefined
                                    ? hendleToggle
                                    : () => handleColor(list, user)
                            }
                        >
                            <div>
                                {list.id ? (
                                    <>
                                        <Link to={list.LinkTo} alt="">
                                            {list.id === selected ? (
                                                <img src={list.onImg} alt="" />
                                            ) : (
                                                <img src={list.img} alt="" />
                                            )}
                                            <p
                                                style={{
                                                    color:
                                                        list.id === selected
                                                            ? "#FF3358"
                                                            : "#939393",
                                                }}
                                            >
                                                {list.title}
                                            </p>
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <img
                                            className="calist"
                                            src={
                                                toggle
                                                    ? "/images/f_menu_on.png"
                                                    : "/images/f_menu.png"
                                            }
                                            alt=""
                                        />
                                        <p
                                            style={{
                                                color: toggle
                                                    ? "#FF3358"
                                                    : "#939393",
                                            }}
                                        >
                                            카테고리
                                        </p>
                                    </>
                                )}
                            </div>
                        </li>
                    );
                })}
                <FooterCategory toggle={toggle} hendleToggle={hendleToggle} />
            </ul>
        </FooterStyled>
    );
};

export default Footer;
