import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs } from "antd";

import IndexStyled from "./IndexStyled";
import IndexTabStyled from "./components/IndexTabStyled";
import Header from "../../components/header/Header";
import Home from "./../../pages/home/Home";
import Best from "./../../pages/best/Best";
import New from "./../../pages/new/New";
import Event from "./../../pages/event/Event";
import Headroom from "react-headroom";
import CateNav from "./../../pages/best/components/CateNav";
import CateNavStyled from "./../best/components/CateNavStyled";
import { categoryInfo } from "./../../store/modules/categories";

const { TabPane } = Tabs;

const Index = () => {
    const genderSetting = JSON.parse(localStorage.getItem("gender"));

    console.log(genderSetting);
    const [callComponent, setCallComponent] = useState(<Home />);
    const [tabState, setTabState] = useState(false);
    const dispatch = useDispatch();
    const { category } = useSelector((stete) => stete.categories);
    const { gender } = useSelector((stete) => stete.gender);

    useEffect(() => {
        scrollTop();
    }, []);
    const scrollTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    useEffect(() => {
        dispatch(categoryInfo());
    }, []);

    const callback = (key) => {
        if (key === "1") {
            setCallComponent(<Home />);
            scrollTop();
            setTabState(false);
        } else if (key === "2") {
            setCallComponent(<Best />);
            scrollTop();
            setTabState(true);
        } else if (key === "3") {
            setCallComponent(<New />);
            scrollTop();
            setTabState(false);
        } else {
            setCallComponent(<Event />);
            scrollTop();
            setTabState(false);
        }
    };

    return (
        <>
            <Headroom>
                <Header />
                <IndexTabStyled manm={genderSetting}>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="투데이" key="1" />
                        <TabPane tab="베스트" key="2" />
                        <TabPane tab="신상" key="3" />
                        <TabPane tab="기획전" key="4" />
                    </Tabs>
                </IndexTabStyled>
                <CateNavStyled />
                {tabState ? (
                    <CateNav
                        manm={genderSetting}
                        lists={
                            genderSetting
                                ? category[1].children
                                : category[0].children
                        }
                    />
                ) : null}
            </Headroom>
            <IndexStyled manm={genderSetting} className="index_header">
                {callComponent}
            </IndexStyled>
        </>
    );
};

export default Index;
