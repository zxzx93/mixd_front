import React, { useEffect } from "react";
import "swiper/swiper.scss";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import HomeStyled from "./HomeStyled";
import Banner from "./components/Banner";
import MasonryLayout from "./../../components/masonry/Masonry";
import Popular from "./components/Popular";
import { homeListInfo, bannerListInfo } from "../../store/modules/home";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserToken } from "../../util/decryptUser";

const Home = () => {
    const dispatch = useDispatch();
    const { homeLists, homeListDone , bannerLists, bannerListDone} = useSelector((state) => state.home);
    const { gender } = useSelector((state) => state.gender);

    console.log("홈 젠더", gender);

    const { token } = getUserToken();

    useEffect(() => {
        dispatch(homeListInfo(token, gender));
    }, [dispatch, gender]);

    // console.log("homeLists", user);

    const dummyLists = [
        {
            item_img: "/images/banner_1.png",
        },
        {
            item_img: "/images/banner_2.png",
        },
    ];
    useEffect(() => {
        dispatch(bannerListInfo());
    }, [dispatch]);
    console.log("banner",bannerListInfo);
    console.log("배너리스트",bannerLists);

    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 30,
                color: "#000",
                margin: "0 auto",
                position: "absolute",
                left: "46%",
                top: "45%",
            }}
            spin
        />
    );

    return (
        <HomeStyled>
            <div className="banner_wrap">
                <div>
                    <Banner lists={bannerLists} />
                </div>
            </div>

            {homeListDone ? (
                homeLists.data.map((value, index) =>
                    value.group_type === 1 ? (
                        <div key={index}>
                            <div className="middle_title">
                                {value.group_name}
                            </div>
                            <MasonryLayout
                                className="masonry"
                                lists={value.items}
                            />
                            <Link
                                to={`/indexDetail/${value.group_name}/${value.home_group_id}`}
                                className="more_add"
                            >
                                + 더보기
                            </Link>
                        </div>
                    ) : (
                        <div key={index}>
                            <div className="middle_title">
                                {value.group_name}
                                <Link
                                    to={`/indexDetail/${value.group_name}/${value.home_group_id}`}
                                    className="more_add_s"
                                >
                                    상품 보러가기
                                    <img src="/images/arrow.png" alt="" />
                                </Link>
                            </div>
                            <Popular lists={value.markets} />
                        </div>
                    )
                )
            ) : (
                <Spin indicator={antIcon} />
            )}
        </HomeStyled>
    );
};

export default Home;
