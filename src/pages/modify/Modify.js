import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Button, Modal, Select, message, } from "antd";

import ModifyStyled from "./ModifyStyled";
import SubHeader from "./../../components/header/SubHeader";
import ImagesUpload from "./components/ImagesUpload";
import PassChangeDrawer from "./components/PassChangeDrawer";
import DeleteDrawer from "./components/DeleteDrawer";
import { getUserToken } from "../../util/decryptUser";
import AddressSearch from "../register/components/AddressSearch";
import useInputs from "../../hooks/useInputs";

import {
  nicknameDuplicate,
  hpCertification,
  hpChange,
} from "../../store/modules/auth";
import { userInfo, userInfoModify } from "../../store/modules/users";
import Edit from './components/EditDrawer';
import ModalList from "./components/ModalList";

const Modify = () => {
  const dispatch = useDispatch();
  const {
    nicknameDuplicateError,
    hpNumberChangeMsg,
    hpNumberChangeDone,
  } = useSelector((state) => state.auth);

  const { user, mypageInfoDone } = useSelector((state) => state.users);
  console.log("유저의 정보", user.mem_mypage_back);

  const { token } = getUserToken();
  const { Option } = Select;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ModalVisible, setModalVisible] = useState(false);

  const [checkNumberMsg, setCheckNumberMsg] = useState(
    "휴대폰 번호를 입력하세요."
    // '휴대폰 번호 11자리를 입력해주세요.'
    // '인증번호가 전송되었습니다.'
    // '인증번호가 일치하지 않습니다.'
    // '인증시간이 만료되었습니다.'
    // '인증번호가 재전송되었습니다.'
  );
  const [visiblePass, setVisiblePass] = useState(false);
  const [usePhoneChange, setUsePhoneChange] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [currentPassword, setCurrentPassword] = useInputs(""); //현재 비밀번호

  useEffect(() => {
    dispatch(userInfo(token));
  }, [dispatch, userInfo]);

  //초기값
  useEffect(() => {
    setNickName(user.mem_nickname);
    setHpNumber(user.mem_phone);
    setRefundBankOwner(user.refund_bank_owner);
    setRefundBankName(user.refund_bank_name);
    setRefundBankNumber(user.refund_bank_number);
    setAddress({
      zipcode: user.mem_zipcode,
      detailedaddress: user.mem_address1,
    });
    setRemainderAddress(user.mem_address2);
    setChecked({
      smsChecked: user.mem_receive_sms,
      mailChecked: user.mem_receive_email,
    });
    setFileList(
      user.mem_photo
        ? [
            {
              url: `${process.env.REACT_APP_API_URL}${user.mem_photo}`,
            },
          ]
        : [
            {
              url: "/images/mypage_logo.svg",
            },
          ]
    );
  }, [user]);

  const [nickName, setNickName] = useState("");
  //닉네임 변경
  const nickNameChangeHandler = (e) => {
    let nickName = {
      nickname: e.target.value,
    };
    setNickName(e.target.value);
    dispatch(nicknameDuplicate(nickName));
  };

  const [hpNumber, setHpNumber] = useState(""); //휴대폰 번호
  const [hpCode, setHpCode] = useInputs(""); //인증번호
  //휴대폰 인증
  const hpCertificationHandler = useCallback(
    (hpNumber) => {
      let HpNumber = {
        hp: hpNumber,
      };
      dispatch(hpCertification(HpNumber, 1)); //type: 1 같이 보내줌
    },
    [dispatch, hpCertification]
  );

  //휴대폰 번호 변경
  const hpChangeHanler = useCallback(
    (hpNumber, hpCode) => {
      let variable = {
        hp: hpNumber,
        certification_code: hpCode,
      };
      dispatch(hpChange(variable, token));
      setTimeout(() => {
        setUsePhoneChange(false);
      }, 2000);
    },
    [dispatch, hpChange]
  );

  const hpValidation = useCallback((e) => {
    const regExp = /^[0-9\b -]{0,11}$/;
    const HpValidation = regExp.test(e.target.value);
    console.log(HpValidation);

    if (HpValidation) {
      setHpNumber(e.target.value);
    }
  }, []);

  const [refundBankOwner, setRefundBankOwner] = useState(""); //환불 계좌 이름
  const [refundBankName, setRefundBankName] = useState(""); //환불 계좌 은행
  const [refundBankNumber, setRefundBankNumber] = useState(""); //환불 계좌 번호

  const bankNameHandler = (item) => {
    setRefundBankName(item);
    setModalVisible(false);
  };

  //우편번호, 주소
  const [address, setAddress] = useState({
    zipcode: "",
    detailedaddress: "",
  });
  const [remainderAddress, setRemainderAddress] = useState(""); //상세주소

  const AddressSetting = (data, zonecode) => {
    setAddress({ detailedaddress: data, zipcode: zonecode });
    setIsModalVisible(false);
  };

  //수신동의 체크박스 (0-비동의 / 1-동의)
  const [checked, setChecked] = useState({
    smsChecked: "",
    mailChecked: "",
  });

  const smsCheckedHandler = (e) => {
    setChecked({ ...checked, smsChecked: Number(!checked.smsChecked) });
  };

  const mailCheckedHandler = (e) => {
    setChecked({ ...checked, mailChecked: Number(!checked.mailChecked) });
  };

  const userInfoModifyHandler = (e) => {
    e.preventDefault();
    // console.log("초기 파일값", fileList);
    // console.log("크롭데이터", cropData);

    const formData = new FormData();
    formData.append("mem_nickname", nickName);
    formData.append("refund_bank_name", refundBankName);
    formData.append("refund_bank_owner", refundBankOwner);
    formData.append("refund_bank_number", refundBankNumber);
    formData.append("mem_zipcode", address.zipcode);
    formData.append("mem_address1", address.detailedaddress);
    formData.append("mem_address2", remainderAddress);
    formData.append("mem_receive_sms", checked.smsChecked);
    formData.append("mem_receive_email", checked.mailChecked);

    fileList[0].originFileObj &&
      formData.append("mem_photo", fileList[0].originFileObj);
    cropData && formData.append("mem_mypage_back", cropData);

    // for (const value of formData) {
    //   console.log("formData", value);
    // }
    dispatch(userInfoModify(formData, token)).then(() => {
      message.info("회원정보가 변경 되었어요.", 1.5);
    });
  };

  const [fileList, setFileList] = useState([]); //프로필 사진
  const [cropData, setCropData] = useState(""); // 크롭된 백그라운드 이미지 들어감
  const [cropper, setCropper] = useState("");

  console.log("크로퍼", cropper);

  console.log("파일 리스트", fileList);
  console.log("크롭이미지", cropData);

  const showPassChange = () => {
    setVisiblePass(true);
  };

  const closePassChange = () => {
    setVisiblePass(false);
  };

  const phoneChange = () => {
    setUsePhoneChange(true);
  };

  const deleteInfo = () => {
    setVisibleDelete(true);
  };

  const closeDelete = () => {
    setVisibleDelete(false);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setModalVisible(false);
  };



  return (
    <ModifyStyled>
      <SubHeader name={"프로필 수정"} unUseCart={true} />

      {/* <form onSubmit={e => userInfoModifyHandler(e)}> */}
      <div className="profile_img_wrap">
        {/* <Edit /> */}
        <ImagesUpload
          fileList={fileList}
          setFileList={setFileList}
          // backFileList={backFileList}
          // setBackFileList={setBackFileList}
          // isFilePicked={isFilePicked}
          // setIsFilePicked={setIsFilePicked}
          cropData={cropData}
          setCropData={setCropData}
          cropper={cropper}
          setCropper={setCropper}
          user={user}
        />
      </div>

      <div className="modify_wrap">
        <div className="nickname_wrap">
          <p className="modify_title">닉네임</p>
          <Input
            // 에러상황에서 들어가는 클래스 (border 색상 변경)
            // className="err"
            maxLength="8"
            value={nickName}
            onChange={(e) => nickNameChangeHandler(e)}
          />

          <span className={nicknameDuplicateError ? "msg err" : "msg"}>
            {nicknameDuplicateError
              ? nicknameDuplicateError
              : "닉네임은 8자 이내로 설정 가능합니다."}
          </span>
        </div>

        <div className="password_wrap">
          <p className="modify_title">비밀번호</p>
          <div>
            <Input type="password" disabled={true} value={"0000"} />
            <Button
              // disabled={true}
              onClick={showPassChange}
            >
              비밀번호 변경
            </Button>
          </div>
          <PassChangeDrawer
            visible={visiblePass}
            close={closePassChange}
            value={{ currentPassword }}
            setValue={{ setCurrentPassword }}
          />
        </div>

        <div className="phone_wrap">
          <p className="modify_title">휴대폰 번호</p>
          {!usePhoneChange ? (
            <div>
              <Input disabled={true} value={hpNumber} />
              <Button
                disabled={hpNumberChangeDone ? true : false}
                onClick={phoneChange}
              >
                휴대폰 번호 변경
              </Button>

              <span
                className="msg"
                // className="msg err"
              >
                {hpNumberChangeDone ? hpNumberChangeMsg : ""}
              </span>
            </div>
          ) : (
            <>
              <div>
                <Input
                  // className="err"
                  placeholder="휴대폰 번호 입력"
                  maxLength="11"
                  onChange={hpValidation}
                />
                <Button
                  // disabled={true}
                  onClick={() => {
                    hpCertificationHandler(hpNumber);
                  }}
                >
                  인증번호 전송
                </Button>
              </div>
              <div>
                <Input
                  // className="err"
                  placeholder="인증번호"
                  value={hpCode}
                  onChange={setHpCode}
                />
                <Button
                  // disabled={true}
                  onClick={() => {
                    hpChangeHanler(hpNumber, hpCode);
                  }}
                >
                  확인
                </Button>
              </div>
              <span
                className="msg"
                // className="msg err"
              >
                {checkNumberMsg}
              </span>
            </>
          )}
        </div>

        <div className="refund_number_wrap">
          <p className="modify_title">환불계좌</p>
          <div>
            <Input
              placeholder={"입금자 명"}
              value={refundBankOwner}
              onChange={(e) => setRefundBankOwner(e.target.value)}
            />
          </div>
          <div>
            <Select
              className="bank_select"
              placeholder={"은행"}
              value={refundBankName}
              // onChange={name => setRefundBankName(name)}
              onClick={showModal}
              dropdownStyle={{ display: "none" }}
            >
              {/* <Option value="">없음</Option>
              {bankName.map((bank, index) => (
                <Option key={index} value={bank}>
                  {bank}
                </Option>
              ))} */}
            </Select>
            <Modal
              visible={ModalVisible}
              onCancel={handleCancel}
              footer={false}
              closable={false}
              centered
              bodyStyle={{ height: 360, overflow: "auto", padding: 0,}}
              width={240}
              zIndex={1400}
            >
              <ModalList
                refundBankName={refundBankName}
                setModalVisible={setModalVisible}
                setRefundBankName={setRefundBankName}
              />

            </Modal>
          </div>

          <div>
            <Input
              className="bank_number"
              placeholder={"계좌번호"}
              value={refundBankNumber}
              onChange={(e) => setRefundBankNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="address_wrap">
          <p className="modify_title">
            주소
            <span>상품 배송과 이벤트 당첨 시, 수령을 위한 선택사항입니다.</span>
          </p>
          <div>
            <Input
              className="post_number"
              placeholder={"우편번호"}
              // defaultValue={}
              value={address.zipcode}
            />
            <Button onClick={() => setIsModalVisible(true)}>
              우편번호 검색
            </Button>

            <Modal
              onOk={() => setIsModalVisible(false)}
              closable={false}
              footer={false}
              visible={isModalVisible}
              onCancel={handleCancel}
              // centered={true} //중앙에 위치하게 함
            >
              <AddressSearch AddressSetting={AddressSetting} />
            </Modal>
          </div>
          <div>
            <Input placeholder={"주소"} value={address.detailedaddress} />
          </div>
          <div>
            <Input
              placeholder={"상세주소"}
              value={remainderAddress}
              onChange={(e) => setRemainderAddress(e.target.value)}
            />
          </div>
        </div>

        <div className="alarm_wrap">
          <div>
            <label htmlFor="alarm_sns">알림 설정 (SMS 수신 동의)</label>

            <Input
              id="alarm_sns"
              type="checkbox"
              checked={!!checked.smsChecked}
              value={checked.smsChecked ? 0 : 1}
              onChange={smsCheckedHandler}
            />
          </div>
          <div>
            <label htmlFor="alarm_mail">알림 설정 (메일 수신 동의)</label>
            <Input
              id="alarm_mail"
              type="checkbox"
              checked={!!checked.mailChecked}
              value={checked.mailChecked ? 0 : 1}
              onChange={mailCheckedHandler}
            />
          </div>
        </div>

        <div className="delete_wrap">
          <span>회원정보를 삭제하시겠어요?</span>
          <Button onClick={deleteInfo}>회원탈퇴</Button>
          <DeleteDrawer visible={visibleDelete} close={closeDelete} />
        </div>

        <div className="modify_btn_wrap">
          <Button className="modify_cancel" type="link" href="/mypage">
            취소
          </Button>
          <Button
            type="submit"
            className="modify_btn"
            onClick={(e) => userInfoModifyHandler(e)}
          >
            저장
          </Button>
        </div>
      </div>
      {/* </form> */}
    </ModifyStyled>
  );
};

export default Modify;
