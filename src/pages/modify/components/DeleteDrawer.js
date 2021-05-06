import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

import DeleteDrawerStyled from "./DeleteDrawerStyled";
import { getUserToken } from "../../../util/decryptUser";
import { deleteAccount } from "../../../store/modules/users";

const DeleteDrawer = ({ visible, close }) => {
  const dispatch = useDispatch();
  const { deleteAccountDone } = useSelector(state => state.users);

  const { token } = getUserToken();
  const history = useHistory();

  useEffect(() => {
    if (deleteAccountDone) {
      history.push("/");
    }
  }, [deleteAccountDone]);

  const closeDelete = () => {
    close();
  };

  const deleteAccountHandler = () => {
    dispatch(deleteAccount(token));
    close();
  };

  return (
    <DeleteDrawerStyled visible={visible} placement="bottom" closable={false}>
      <p>정말로 회원탈퇴를 하시겠습니까?</p>
      <span>사용했던 모든 기록이 삭제되고 서비스 이용이 제한됩니다.</span>
      <div>
        <Button type="text" onClick={closeDelete} className="delete_cancel">
          취소
        </Button>

        <Button
          type="text"
          className="delete_btn"
          onClick={deleteAccountHandler}
        >
          확인
        </Button>
      </div>
    </DeleteDrawerStyled>
  );
};

export default DeleteDrawer;
