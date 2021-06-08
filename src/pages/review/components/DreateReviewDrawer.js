import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DreateReviewDrawerStyled from './DreateReviewDrawerStyled';
import {reviewRemoveListInfo} from '../../../store/modules/review';
import { getUserToken } from '../../../util/decryptUser'

const DreateReviewDrawer = ({blockDelete, close, deleteId}) => {
  const dispatch = useDispatch();
  const {token} = getUserToken();
  
  const deleteBtn = () => {
  console.log(deleteId);
  
    dispatch(reviewRemoveListInfo(token,deleteId));
    
    close()
  }
 
  const onCancel = () => {
    close()
  }


  return ( 
    <DreateReviewDrawerStyled
      title={ "리뷰를 삭제하시겠습니까?"}
      placement="bottom"
      closable={false}
      visible={blockDelete}
      close={close}
    >
      {
        <>
        <p className="success" 
        onClick={onCancel}
        >취소</p> 
        <p className="delete" 
        onClick={deleteBtn}
     
        >확인</p>
        </>
      }
    </DreateReviewDrawerStyled>
  );

}

export default DreateReviewDrawer;