import React, { useState } from "react";
import { Button, Upload } from "antd";

import "cropperjs/dist/cropper.css";
import ImagesUploadStyled from "./ImagesUploadStyled";
import ModalPopUp from "./ModalPopUp";

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
        <Button icon={<img src="/images/profile_cam.svg" alt="" />} />
      </Upload>
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
