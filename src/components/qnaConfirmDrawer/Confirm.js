import React, { useCallback } from "react";
import { Button, Drawer } from "antd";

function Confirm({
  onClose,
  visible,
  textAreaValue,
  selectData,
  setSelectData,
  setTextAreaValue,
}) {
  const comfirmHandler = useCallback(() => {
    onClose(true);
    setSelectData("");
    setTextAreaValue("");
  }, [onClose, setSelectData, setTextAreaValue]);

  return (
    <>
      <Drawer
        className="confirm"
        title={
          textAreaValue && selectData
            ? "문의가 등록 되었습니다."
            : "내용을 입력해 주세요."
        }
        placement="bottom"
        closable={false}
        onClose={onClose}
        visible={visible}
        headerStyle={{ textAlign: "center" }}
        drawerStyle={{ borderRadius: "20px" }}
      >
        <Button onClick={comfirmHandler}>확인</Button>
      </Drawer>
    </>
  );
}

export default Confirm;
