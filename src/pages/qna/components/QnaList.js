import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Collapse } from "antd";
import { useSelector, useDispatch } from "react-redux";
import QnaQuest from "../QnaQuest";


const QnaList = () => {
  const dispatch = useDispatch();
  const { qnaInfo } = useSelector((state) => state.qna);
  const { Panel } = Collapse;


  return (
    <div className="qna_wrap">
      <div className="qna_lists">
        <Collapse accordion={false}>
          {qnaInfo.map((value, index) => (
            <Panel
              key={index.toString()}
              header={<QnaQuest value={value} index={index} />}
              accordion={true}
            >
              <div
                style={
                  value.cqa_reply_content
                    ? { display: "block" }
                    : { display: "none" }
                }
                className="qna_answer"
              >
                <div className="answer_wrap">
                  <div>
                    <span>답변</span>
                  </div>
                  <div>마켓명</div>
                  <div className="qna_a_time">
                    <span>{value.cqa_reply_datetime}</span>
                    {/* <span>10:30</span> */}
                  </div>
                </div>
                <div>
                  <div>
                    <div className="answer_img_wrap">
                      <img src="/html/images/1.jpg" alt="" />
                    </div>
                  </div>
                  <div>
                    <div>{value.cqa_reply_content}</div>
                  </div>
                </div>
              </div>
            </Panel>
          ))}
        </Collapse>
        
      </div>
    </div>
  );
};

export default QnaList;
