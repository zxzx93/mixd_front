import React, { useState } from "react";
import QnaNonQuestStyled from "./QnaNonQuestStyled";
import QnaAnsQuest from "./QnaAnsQuest";

const QnaNonQuest = ({blockDelete, close}) => {

  const [deleteInfo,setDeleteInfo] = useState(false);

  const deleteBtn = () => {
    setDeleteInfo(!deleteInfo)
  }
  //console.log(deleteInfo);
  
  const onCancel = () => {
    close()
  }
  const comment = true ;

  return ( comment ? 
    <QnaNonQuestStyled
      title={ deleteInfo ? "삭제되었습니다." : "상품 문의를 삭제하시겠습니까?"}
      placement="bottom"
      closable={false}
      visible={blockDelete}
    >
      {
        deleteInfo ? 
        <p className="success" 
        onClick={onCancel}
        >확인</p> :
        <p className="delete" 
        onClick={deleteBtn}
        >삭제</p>
      }
      {
        deleteInfo ?  "" :  
        <p className="cancel"
          onClick={onCancel}
        >취소</p>
      }
      
    </QnaNonQuestStyled> : <QnaAnsQuest/>
  );
};


export default QnaNonQuest;
