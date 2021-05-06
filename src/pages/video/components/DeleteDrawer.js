import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, message } from "antd";

import { deleteComment } from "../../../store/modules/items";
import DeleteDrawerStyled from "./DeleteDrawerStyled";
import { getUserToken } from "../../../util/decryptUser";

const DeleteDrawer = ({ visible, close, cmtId }) => {
  const dispatch = useDispatch();

  const { token } = getUserToken();

  const commentDelete = () => {
    dispatch(deleteComment(cmtId, token.accessToken))
      .then(() => {
        message.info("댓글이 삭제 되었어요.", 1.5);
      })
      .catch(() => message.info("댓글 삭제가 안 되었어요.", 1.5));
    close();
  };
  const commentDeleteCancel = () => {
    close();
  };
  console.log("삭제할 아이디", cmtId);
  return (
    <DeleteDrawerStyled
      title="댓글을 삭제하시겠습니까?"
      placement="bottom"
      className="delete_drawer"
      closable={false}
      onClose={close}
      visible={visible}
    >
      <div>
        <Button
          type="text"
          className="comment_delete_btn"
          onClick={commentDelete}
        >
          삭제
        </Button>
      </div>
      <div>
        <Button
          type="text"
          className="comment_delete_cancel"
          onClick={commentDeleteCancel}
        >
          취소
        </Button>
      </div>
    </DeleteDrawerStyled>
  );
};

export default DeleteDrawer;
