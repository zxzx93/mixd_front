import React, { useState } from "react";
import { Button, Upload } from "antd";

import "cropperjs/dist/cropper.css";
import ImgCrop from 'antd-img-crop';
import ImagesUploadStyled from "./ImagesUploadStyled";
import ModalPopUp from "./ModalPopUp";
import EditDrawer from "./EditDrawer";

const ImagesUpload = ({
  fileList,
  setFileList,
  cropData,
  setCropData,
  cropper,
  setCropper,
  user,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  console.log("cropData", cropData);
  console.log("user.mem_mypage_back", user.mem_mypage_back);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const [editPopUp, setEditPopUp] = useState(false); //프로필,배경 사진팝업창
  const [picDelete, setPicDelete] = useState(false); //사진 삭제

  const edit = () => {
    setEditPopUp(true);
  };

  const onClose = () => {
    setEditPopUp(false);
  };

  return (
    <ImagesUploadStyled>
      {/* <ImgCrop> */}
      <Upload
        className="profile_wrap"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        onRemove={true}
        maxCount={1}
      >

        <Button
          icon={<img src="/images/profile_cam.svg" alt="" />}
          onClick={edit} />
      </Upload>

      {/* <EditDrawer
        editPopUp={editPopUp}
        close={onClose}
        picDelete={picDelete}
      /> */}
      {/* </ImgCrop> */}

      {cropData || user.mem_mypage_back ? (
        <img
          src={
            cropData
              ? cropData
              : `${process.env.REACT_APP_API_URL}${user.mem_mypage_back}`
          }
          alt="백그라운드 이미지"
          style={{ width: "100%" }}
        />
      ) : (
        <img src="/images/mypage_bg.png" alt="백그라운드 이미지" />
      )}

      <Button type="primary" onClick={showModal}>
        배경 화면 변경
      </Button>

      <ModalPopUp
        value={{ isModalVisible, cropper }}
        setValue={{ setIsModalVisible, setCropper, setCropData }}
      />
    </ImagesUploadStyled>
  );
};

export default ImagesUpload;
