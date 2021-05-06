import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Button, message } from "antd";
import Select from 'react-select';
import { getUserToken } from "../../../util/decryptUser";
import OptionChangeDrawerStyled from "./OptionChangeDrawerStyled";
import { modifyOptionItem } from "../../../store/modules/cart";

const OptionChangeDrawer = ({ value, visible, close }) => {
    const [firstOption, setFirstOption] = useState();
    const [secondOption, setSecondOption] = useState();
    const [optionCount, setOptionCount] = useState();
    const [maxCount, setMaxCount] = useState();
    const [firstOptionList, setFirstOptionList] = useState();
    const [secondOptionList, setSecondOptionList] = useState();
    const { token } = getUserToken();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(value);
        if(value) {
            setFirstOption({
                'value': value.cde_id, 
                'label': value.itemDetail.cde_title_main,
            })
            setSecondOption({
                'value': value.cde_id, 
                'label': value.itemDetail.cde_title
            })
            setOptionCount(value.cct_count)
            
            let foptions = [];
            console.log("value  : ", value)
            value.options.forEach((ele) =>
                foptions.push(
                    {
                        'value': ele.main_option.cde_id,
                        'label': ele.main_option.cde_title_main,
                    }
                ),
            )
            
            let soptions = [];
            value.options.forEach((ele) =>
                value.cde_id === ele.main_option.cde_id ?
                ele.main_option.sub_option.forEach((val) =>
                    ele.main_option.cde_id === val.cde_id ?
                    ele.main_option.sub_option.forEach((i) =>
                        soptions.push({
                            'value': i.cde_id,
                            'label': i.cde_title
                        })
                    )
                    :
                    null
                )
                :
                null
            )

            value.options.forEach((ele) =>
                ele.main_option.sub_option.forEach((val) => 
                    ele.main_option.cde_id === val.cde_id ?
                    setMaxCount(val.cde_qty)
                    :
                    null
                )
            )

            setFirstOptionList(_.uniqWith(foptions))
            setSecondOptionList(_.uniqWith(soptions))
        }
    }, [visible])

    const changeFirstOption = (e) => {
        setFirstOption(e)
        let soptions = [];
        value.options.forEach((ele) =>
            ele.main_option.cde_id === e.value ?
                ele.main_option.sub_option.forEach((val) => {
                    soptions.push(
                        {
                            'value': val.cde_id,
                            'label': val.cde_title,
                        }
                    )
                }
            )
            :
            null
        )
        setSecondOptionList(soptions)
    }

    const changeSecondOption = (e) => {
        console.log("secondOptionList : ", secondOptionList)
        secondOptionList.forEach((ele) =>
            e.value === ele.value ?
            setSecondOption(ele)
            :
            null
        )

        value.options.forEach((ele) =>
            ele.main_option.cde_id === firstOption.value ?
                ele.main_option.sub_option.forEach((val) => {
                    return (
                        val.cde_id === e.value ?
                        setMaxCount(val.cde_qty)
                        :
                        null
                    )
                }
            )
            :
            null
        )
    }
    
    const decreaseNumber = () => {
        if (optionCount > 1) {
            setOptionCount(optionCount - 1);
        }
    };
    
    const increaseNumber = () => {
        if(optionCount < maxCount) {
            setOptionCount(optionCount + 1);
        }
    };

    const reFreshHandler = () => {
        setFirstOption()
        setFirstOptionList()
        setSecondOption()
        setSecondOptionList()
        setOptionCount(0)
        close()
    };

    const optionChange = () => {
        dispatch(modifyOptionItem(
            value.cct_id,
            secondOption, 
            optionCount, 
            token
        ))
        close()
    }

    return (
        <OptionChangeDrawerStyled
            visible={visible}
            placement={"bottom"}
            closable={false}
            zIndex='1400'
            footer={
                <div className="button_wrap">
                <Button 
                    className="change_option_cancel" 
                    onClick={reFreshHandler}
                >
                    취소
                </Button>
                <Button
                    className="change_option_btn"
                    onClick={optionChange}
                >
                    옵션변경
                </Button>
                </div>
            }
        >   
            <Select
                className="firstSelect"
                options={firstOptionList}
                onChange={changeFirstOption}
                placeholder={"옵션 선택"}
                value={firstOption}
            />

            <Select
                className="secondSelect"
                options={secondOptionList}
                onChange={changeSecondOption}
                placeholder={"옵션 선택"}
                value={secondOption}
            />

            <div className="cnt_change">
                <span>수량</span>
                <div>
                    <Button 
                        type="text" 
                        onClick={decreaseNumber}
                    >
                        -
                    </Button>
                    <span>{optionCount}</span>
                    <Button 
                        type="text" 
                        onClick={increaseNumber}
                    >
                        +
                    </Button>
                </div>
            </div>
        </OptionChangeDrawerStyled>
    );
};

export default OptionChangeDrawer;
