import React, { useState } from "react";
import { useDispatch } from "react-redux";
import EditDrawerStyled from "./EditDrawerStyled";

const PictureEdit = () => {
  const dispatch = useDispatch();
  const [editPopUp, setEditPopUp] = useState(false); //선택팝업창
  const [picDelete, setPicDelete] = useState(false); //사진삭제
  const [picEdit, setPicEdit] = useState(false); //사진편집

  const edit = () => {
    setEditPopUp(!editPopUp);
  };

  const onClose = () => {
    setEditPopUp(editPopUp);
  };
  const deleteBtn = () => {
    setPicDelete(picDelete);
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
      visible={edit}
      onClose={onClose}
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

export default PictureEdit;
