import React, { useEffect, useState } from "react";
import QnaStyled from "./QnaStyled";
import SubHeader from "./../../components/header/SubHeader";
import { useSelector, useDispatch } from "react-redux";
import { deleteComment, qna } from "../../store/modules/qna";
import { Tabs } from "antd";
import QnaContent from "./components/QnaContent";
import { getUserToken } from "./../../util/decryptUser";

const { TabPane } = Tabs;


const Qna = () => {
    const dispatch = useDispatch();

    const { qnaInfo, qnaDelete} = useSelector((state) => state.qna);
    const [dataCheck, setDataCheck] = useState();

    const { user, token } = getUserToken();

    useEffect(() => {
        dispatch(qna(user, token,dataCheck));
    }, [dispatch,dataCheck,qnaDelete]);

    const callback =(key) =>{
        setDataCheck(parseInt(key))
        console.log(key);
    }
    return (
        <>

            <QnaStyled>
                <SubHeader name="Q&A" />
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="전체보기" key="1">

                        <QnaContent token={token} qnaInfo={qnaInfo} />
                    </TabPane>

                    <TabPane tab="답변완료" key="2">
                        <QnaContent token={token} qnaInfo={qnaInfo} />
                    </TabPane>

                    <TabPane tab="답변대기" key="3">
                        <QnaContent token={token} qnaInfo={qnaInfo} />
                    </TabPane>
                </Tabs>
            </QnaStyled>
        </>
    );
};

export default Qna;
