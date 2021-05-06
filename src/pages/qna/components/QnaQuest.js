import React, { useState } from "react";
import {  useDispatch,useSelector } from "react-redux";
import { deleteComment } from "../../store/modules/qna";

const QnaQuest = ({ value, index }) => {
  const dispatch = useDispatch();
  const { qnaInfo } = useSelector((state) => state.qna);
  const deleteQna = () => {
    dispatch(deleteComment(value));
    setDeletePop(!deletePop) 
  };
  
  const [deletePop , setDeletePop] = useState('false');
  const deleteToggle = () => {
    setDeletePop(!deletePop) 
    console.log(deletePop);
  }

  console.log(value.mem_id);
  
  return (
    <>
      <div className="qna_list">
        <div className="qna_delete_quest" onClick={deleteToggle} >
          삭제
        </div>
        <div className="qna_quest">
          <div>
            <div
              className="repl_on"
              style={
                value.cqa_reply_content
                  ? { backgroundColor: "#000" }
                  : { backgroundColor: "#d1d1d1" }
              }
            >
              {value.cqa_title}
              {index}
            </div>
            <div className="sub_name">{value.cqa_content}</div>
            <div className="quest_box2">
              <div className="qna_q_time">
                <span>{value.cqa_datetime}</span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="quest_img_wrap">
                <img src="/html/images/1.jpg" alt="" />
              </div>
            </div>
            <div>
              <div className="quest_box">{value.cqa_content}</div>
              <div className="border_line"></div>
            </div>
          </div>
        </div>
      </div>
    <div>
      <div className={`qna_delete_popup ${deletePop ? "" : "on"}`}>
        <div className="qna_delete_bg"></div>
        <div>
          <div className="qna_delete_text">
            <p>답변이 완료된 문의입니다.</p>
            <p>정말로 상품 문의를 삭제하시겠습니까?</p>
          </div>
          <div className="button_wrap">
            <div className="delete_cancel" onClick={deleteToggle}>취소</div>
            <div className="delete_ok" onClick={deleteQna}>삭제</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default QnaQuest;
