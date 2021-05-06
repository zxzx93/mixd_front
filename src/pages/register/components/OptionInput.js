/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import DatePicker from "react-mobile-datepicker";
import AddressSearch from "./AddressSearch";

function OptionInput({ value, setValue }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { gender, year, month, day, remainderAddress, address } = value;
  const {
    setGender,
    setYear,
    setMonth,
    setDay,
    setAddress,
    setRemainderAddress,
  } = setValue;

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const AddressSetting = (data, zonecode) => {
    setAddress({ detailedaddress: data, zipcode: zonecode });
    setIsModalVisible(false);
  };

  const numberPad = (n, width) => {
    n = n + "";
    return n.length >= 2 ? n : new Array(width - n.length + 1).join("0") + n;
  };

  const selectOption = (number, number2) => {
    let options = [];
    for (let i = number; i <= number2; i++) {
      let value = numberPad(i, 2);
      options.push(
        <option key={i} value={value}>
          {value}
        </option>
      );
    }
    return number === 1921 ? options.reverse() : options;
  };

  const genderBtn = (e) => {
    setGender(e.target.value);
    console.log("성별", e.target.value);
  };

  const monthMap = {
    1: "01",
    2: "02",
    3: "03",
    4: "04",
    5: "05",
    6: "06",
    7: "07",
    8: "08",
    9: "09",
    10: "10",
    11: "11",
    12: "12",
  };

  const dateConfig = {
    year: {
      format: "YYYY",
      caption: "Year",
      step: 1,
    },
    month: {
      format: (value) => monthMap[value.getMonth() + 1],
      caption: "Mon",
      step: 1,
    },
    date: {
      format: "DD",
      caption: "Day",
      step: 1,
    },
  };
  const [isOpen, setIsOpen] = useState(false);
  const time = new Date();

  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSelect = () => {
    setIsOpen({ time, isOpen });
  };

  return (
    <>
      <p>선택 입력 사항</p>

      <div className="gender">
        <div>
          <div>성별</div>
          {/* <span>맞춤 상품이 추천됩니다.</span> */}
        </div>
        <ul className="genderBtn">
          {/* 여성  : 1 -> 2 / 남성  : 2 -> 1 로 바뀜 */}
          <li
            value={2}
            className={gender === 2 ? "on" : ""}
            onClick={genderBtn}
          >
            여성
          </li>
          <li
            value={1}
            className={gender === 1 ? "on" : ""}
            onClick={genderBtn}
          >
            남성
          </li>
        </ul>
      </div>

      <div className="birthday">
        <div>
          <div>생년월일</div>
          <span className="add_s">
            연령대별 상품 추천을 위한 선택사항입니다.
          </span>
        </div>
        <div>
          <div className="birth_choice" onClick={handleClick}>
            생년월일 선택
            <DatePicker
              className="12312312313"
              value={time}
              isOpen={isOpen}
              onCancel={handleClose}
              onSelect={handleSelect}
              showCaption={false}
              dateConfig={dateConfig}
              confirmText="확인"
              cancelText="취소"
              showHeader={false}
            />
          </div>
          {/* <select name="year" id="year" value={year} onChange={setYear}>
            <option value="">연도(선택)</option>
            {selectOption(1921, 2010)}
          </select>
          <select name="month" id="month" value={month} onChange={setMonth}>
            <option value="">월(선택)</option>
            {selectOption(1, 12)}
          </select>

          <select name="day" id="day" value={day} onChange={setDay}>
            <option value="">일(선택)</option>
            {selectOption(1, 31)}
          </select> */}
        </div>
      </div>

      <div className="address">
        <div>
          <div>주소</div>
          <span className="add_s">
            상품 배송과 이벤트 당첨시, 수령을 위한 선택사항입니다.
          </span>
        </div>
        <input
          name={address.zipcode}
          value={address.zipcode}
          type="text"
          placeholder="우편번호"
          readOnly
        />

        <button type="button" className="checkBtn" onClick={showModal}>
          우편번호 검색
        </button>

        <Modal
          onOk={handleOk}
          closable={false}
          footer={false}
          centered={true}
          visible={isModalVisible}
          onCancel={handleCancel}
        >
          <AddressSearch AddressSetting={AddressSetting} />
        </Modal>

        <input
          value={"Full 주소"}
          type="text"
          name={address.detailedaddress}
          value={address.detailedaddress}
          className="in_add_a"
          placeholder="주소"
          readOnly
        />
        <input
          type="text"
          className="in_add_b"
          placeholder="상세 주소"
          // name={remainder}
          value={remainderAddress}
          onChange={setRemainderAddress}
        />
      </div>
    </>
  );
}

export default OptionInput;
