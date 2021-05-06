import React, { useState, useEffect, useCallback } from "react";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import FindIdform from "./FindId/FindIdform";
import FindPwd from "./FindPw/FindPwd";
import SubHeader from "../../components/header/SubHeader";
import FindPwdFormStyled from "./FindPwdFormStyle";

const { TabPane } = Tabs;

const name = "계정찾기";

const FindIdPwForm = ({ location }) => {
    const key = !location.state ? "1" : location.state.data;
    
    return (
        <>
            <SubHeader name={name} />
            <FindPwdFormStyled defaultActiveKey={key}>
                <TabPane tab="아이디 찾기" key="1">
                    <FindIdform />
                </TabPane>
                <TabPane tab="비밀번호 찾기" key="2">
                    <FindPwd />
                </TabPane>
            </FindPwdFormStyled>
        </>
    );
};

export default FindIdPwForm;
