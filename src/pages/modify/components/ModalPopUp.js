import React, { useState } from "react";
import Cropper from "react-cropper";

import "cropperjs/dist/cropper.css";
import ModalPopUpStyled from "./ModalPopUpStyled";

const ModalPopUp = ({ value, setValue }) => {
  const { isModalVisible, cropper } = value;
  const { setIsModalVisible, setCropper, setCropData } = setValue;

  const [image, setImage] = useState("");

  const changeHandler = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  //크롭된 이미지 base64
  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
    getCropData();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <ModalPopUpStyled
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      centered={true}
      closable={false}
      zIndex="1400"
      width="100%"
      style={{ maxWidth: "100%",
      height: "100%",
      margin: 0}}
   
    >
      <p className="title">배경 사진 등록</p>
      <li>권장 사이즈와 다를 시 사진이 잘리거나</li>
      <li>화질이 저하될 수 있습니다.</li>
      <span>jpg / png(5MB)</span>

      <div>
        <input type="file" onChange={(e) => changeHandler(e)} />
      </div>

      <Cropper
        zoomTo={0}
        initialAspectRatio={1}
        preview=".img-preview"
        src={image}
        viewMode={1}
        guides={true}
        minCropBoxHeight={10}
        minCropBoxWidth={10}
        background={false}
        responsive={true}
        autoCropArea={1}
        checkOrientation={false}
        onInitialized={(instance) => {
          setCropper(instance);
        }}
      />
    </ModalPopUpStyled>
  );
};

export default ModalPopUp;
