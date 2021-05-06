import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import _ from "lodash";
import { Button } from "antd";

import { choiceItemList } from "../../../store/modules/items";
import BuyNowDrawerStyled from "./BuyNowDrawerStyled";
// const { Option } = Select;

const BuyNowDrawer = ({ visible, close, itemDetailInfo }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [choiceList, setChoiceList] = useState([]);

  const [firstOption, setFirstOption] = useState(""); // 선택한 첫번째 옵션 : 색상
  const [secondOption, setSecondOption] = useState(""); // 선택한 두번째 옵션 : 사이즈

  const [firstOptionList, setFirstOptionList] = useState(""); // 상품의 첫번째 옵션 전체 리스트 : 색상
  const [secondOptionList, setSecondOptionList] = useState(""); // 상품의 두번째 옵션 전체 리스트 : 사이즈

  useEffect(() => {
    if (visible === false && isOpen === true) {
      setIsOpen(false);
    }
    // console.log("useEffect choiceList : ", choiceList)
  });

  const closeOption = () => {
    reFreshHandler();
  };

  useEffect(() => {
    console.log("페이지", itemDetailInfo);

    if (itemDetailInfo.options) {
      let foptions = [];
      itemDetailInfo.options.forEach(ele =>
        ele.cde_title_main
          ? foptions.push({
              value: ele.cde_id,
              label: ele.cde_title_main,
              qty: ele.cde_qty,
            })
          : null
      );
      setFirstOptionList(_.uniqWith(_.compact(foptions)));

      let soptions = [];
      itemDetailInfo.options.forEach(ele =>
        ele.cde_parent === firstOption.value
          ? soptions.push({
              value: ele.cde_id,
              label: ele.cde_title,
            })
          : null
      );
      setSecondOptionList(_.uniqWith(_.compact(soptions)));
    }
  }, [itemDetailInfo, firstOption]);

  console.log("firstOption 1", firstOption);
  console.log("secondOption 2", secondOption);

  console.log("firstOptionList 3", firstOptionList);
  console.log("secondOptionList 4", secondOptionList);

  const changeFirstOption = e => {
    setIsOpen(true);
    setFirstOption(e);
  };

  const changeSecondOption = e => {
    setIsOpen(false);
    setSecondOption(e);
    // setChoiceList(_.uniqWith(_.compact(_.concat(choiceList, e)), _.isEqual));

    const choiceList = itemDetailInfo.options.filter(
      element => element.cde_id === e.value
    );
    console.log("선택함 choiceList", choiceList);
    dispatch(choiceItemList(choiceList[0]));
    reFreshHandler();
  };

  const reFreshHandler = () => {
    setFirstOption("");
    setFirstOptionList("");
    setSecondOption("");
    setSecondOptionList("");
    // setOptionCount(0);
    close();
  };

  return (
    <BuyNowDrawerStyled
      placement="bottom"
      closable={false}
      onClose={close}
      visible={visible}
      footer={
        <Button className="closeOption" onClick={closeOption}>
          옵션 닫기
        </Button>
      }
    >
      <Select
        className="firstSelect"
        classNamePrefix
        onChange={changeFirstOption}
        placeholder={"옵션 선택"}
        options={firstOptionList}
        value={firstOption}
      ></Select>

      <Select
        className="secondSelect"
        classNamePrefix
        onChange={changeSecondOption}
        placeholder={"옵션 선택"}
        options={secondOptionList}
        value={secondOption}
      ></Select>
    </BuyNowDrawerStyled>
  );
};

export default BuyNowDrawer;
