import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Upload } from "antd";
import EditDrawerStyled from "./EditDrawerStyled";

const EditDrawer = ({ editPopUp, close }) => {
  const dispatch = useDispatch();

  const [picEdit, setPicEdit] = useState(false); //사진편집

  const deleteBtn = () => {
    //setPicDelete(picDelete);
    close()
  };

  const onChange = () => {
    setPicEdit(!picEdit);
  };

  const editTitle = true;

  return (
    <EditDrawerStyled
      title={editTitle ? "프로필 사진 편집" : "배경화면 편집"}
      placement="bottom"
      closable={false}
      visible={editPopUp}
      onClose={close}
    >
      <p className="delete" onClick={deleteBtn}>
        사진 삭제
      </p>
      <p className="change" onClick={onChange}>
        사진 변경
      </p>

    </EditDrawerStyled>
  );
};

export default EditDrawer;
