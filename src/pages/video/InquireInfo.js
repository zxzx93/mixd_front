import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { Input, Button } from "antd";

import InquireInfoStyled from "./InquireInfoStyled";
import Confirm from "../../components/qnaConfirmDrawer/Confirm";
import { getUserToken } from "../../util/decryptUser";
import { postQna } from "../../store/modules/qna";

const { TextArea } = Input;

const InquireInfo = ({ itemDetailInfo }) => {
  const dispatch = useDispatch("");
  const { token } = getUserToken();

  const options = [
    { value: "1", label: "상품문의" },
    { value: "2", label: "교환/반품" },
    { value: "3", label: "불량/배송오류" },
    { value: "4", label: "배송문의" },
    { value: "5", label: "취소/변경" },
    { value: "6", label: "기타" },
  ];

  const [selectData, setSelectData] = useState(""); // 질문 유형
  const [textAreaValue, setTextAreaValue] = useState(""); // 질문 내용 입력 공간

  const [visible, setVisible] = useState(false); //등록하기 버튼 클릭시 확인 버튼 나옴

  console.log("====================================");
  console.log(selectData, textAreaValue);
  console.log("====================================");
  const submitHandler = useCallback(() => {
    setVisible(true);

    const data = {
      cqa_title: selectData,
      cqa_content: textAreaValue,
    };

    if (data.cqa_title && data.cqa_content) {
      dispatch(postQna(data, itemDetailInfo.cit_key, token));
    }
  }, [selectData, textAreaValue, dispatch, itemDetailInfo.cit_key, token]);

  const onClose = () => {
    setVisible(false);
    setSelectData("");
    setTextAreaValue("");
  };

  return (
    <InquireInfoStyled>
      <div className="select_wrap">
        <p>질문하기</p>
        <Select
          className="question_select"
          classNamePrefix
          placeholder={selectData ? selectData : "질문 유형 선택"}
          options={options}
          value={selectData}
          onChange={value => setSelectData(value.label)}
          dropdownStyle={{ zIndex: "9999", display: "block" }}
        />

        <TextArea
          className="question_textarea"
          placeholder={"내용을 입력해 주세요."}
          value={textAreaValue}
          onChange={e => setTextAreaValue(e.target.value)}
        />

        <Button className="question_register" onClick={submitHandler}>
          등록하기
        </Button>

        <Confirm
          cit_key={itemDetailInfo.cit_key}
          selectData={selectData}
          onClose={onClose}
          visible={visible}
          textAreaValue={textAreaValue}
          setSelectData={setSelectData}
          setTextAreaValue={setTextAreaValue}
        />
      </div>

      <div className="market_info_wrap">
        <p>
          상품 문의, 결제 외 주문 관련 문의 : &nbsp;
          {itemDetailInfo.market_info.market_name} 고객센터
        </p>

        <ul>
          <li>
            <p>운영시간</p>
            <span>
              <span>10:00 ~ 17:00 | 주말휴무</span>
              <span>점심시간 12:00 ~ 13:00</span>
            </span>
          </li>
          <li>
            <p>대표번호</p>
            <span>010-0000-0000</span>
          </li>
          <li>
            <p>카카오톡 채널 (플러스친구)</p>
            <span>@마켓이름</span>
          </li>
        </ul>
      </div>

      <div className="channel_talk">
        <Button className="channel_btn">채널톡 문의하기</Button>
      </div>

      <div className="footer_wrap">
        <ul>
          <li>
            <p>고객센터</p>
            <span>1566-0000</span>
          </li>
          <li>
            <p>영업시간</p>
            <span>AM 10:00 ~ PM 05:00 (주말 및 공휴일 휴무)</span>
          </li>
          <li>
            <p>점심시간</p>
            <span>PM 12:00 ~ PM 13:00</span>
          </li>
        </ul>
      </div>
    </InquireInfoStyled>
  );
};

export default InquireInfo;
