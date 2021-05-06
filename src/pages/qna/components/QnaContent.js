import React, { useState } from "react";
import Moment from "react-moment";
import moment from "moment";
import QnaContentStyled from "./QnaContentStyled";
import { DownOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import QnaAnsQuest from "./QnaAnsQuest";
const { Panel } = Collapse;

function callback(key) {
    console.log(key);
}

const text = `
    우리가 사람을 대할 때, 논리의 동물을 대하고 있지 않다는 점을 기억할 일이다. 우리는 감정의 동물, 편견으로 마음이 분주하고 자존심과 허영에 따라 움직이는 동물과 상대하고 있는 것이다. 
`;


function QnaContent({ qnaInfo,token }) {

    const [deleteBtn, setDeleteBtn] = useState(true);
    const [blockDelete, setBlockDelete] = useState(false);
    const [deleteCqaId, setDeleteCqaId] = useState();


    const callCom = (id) => {
        console.log(id);
        setDeleteCqaId(id);

        setBlockDelete(true);
    };
    const onClose = () => {
        setBlockDelete(false);
    };

    const deletePop = () => {
        setDeleteBtn(deleteBtn);
    };

    const limitDate = (regDate, limit) => {
        const date = moment(regDate).add(limit, "days");
        return moment(date).format("YYYY.MM.DD");
    };
    return (

        <QnaContentStyled>
            {qnaInfo.length === 0 ? (
                <p className="null_list">작성된 문의가 없습니다.</p>
            ) : (
                qnaInfo.map((value, index) => (
                    <div className="list_Box" key={index}>
                        <div className="qna_lists">
                            <div className="img_wrap">
                                <img
                                    src={`${process.env.REACT_APP_API_URL}${value.item.cit_file_2}`}
                                    alt=""
                                />
                            </div>
                            <div className="qna_title">
                                <div className="sub_name">
                                    {value.cqa_title}
                                </div>
                            </div>
                            <span className="info_name">
                                <span className="market_name">마켓명111</span>
                                상품명..길어지면 글 줄임 기능 추가
                            </span>
                            <div className="qna_text">{value.cqa_content}</div>

                            <div className="qna_q_time">
                                <Moment
                                    format="YYYY.MM.DD"
                                    style={{ color: "#d1d1d1" }}
                                >

                                    {limitDate(value.cqa_datetime)}
                                </Moment>
                                <div
                                    className="delete_btn"

                                    onClick={() => deletePop()}
                                >
                                    <div
                                        className="delete_text"
                                        onClick={() => callCom(value.cqa_id)}

                                    >
                                        삭제
                                    </div>
                                </div>

                            </div>
                        </div>
                        {value.cqa_reply_content == null ? (
                            ""
                        ) : (
                            <Collapse
                                //defaultActiveKey={["1"]}
                                onChange={callback}
                                expandIconPosition="right"
                                bordered={false}
                                expandIcon={({ isActive }) => (
                                    <DownOutlined rotate={isActive ? 180 : 0} />
                                )}
                                className="site-collapse-custom-collapse"
                            >
                                <Panel
                                    header={
                                        <div className="qna_quest">
                                            <div className="answer_ok">
                                                답변완료
                                            </div>
                                            <div className="market_name">
                                                마켓명길어요
                                            </div>
                                            <div className="qna_q_time">
                                                2020.01.01
                                            </div>
                                        </div>
                                    }
                                    key="1"
                                    className="site-collapse-custom-panel"
                                >
                                    <div className="answer_wrap">
                                        <p>{text}</p>
                                    </div>
                                </Panel>
                            </Collapse>
                        )}
                    </div>
                ))
            )}
            <QnaAnsQuest
                blockDelete={blockDelete}
                close={onClose}
                setDeleteBtn={setDeleteBtn}
                deleteCqaId={deleteCqaId}
                token={token}
            />
        </QnaContentStyled>
    );
}

export default QnaContent;
