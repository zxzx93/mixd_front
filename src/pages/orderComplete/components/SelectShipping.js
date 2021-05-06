import React, { useState, useEffect } from 'react';
import SelectShippingStyled from './SelectShippingStyled'
import SubHeader from './../../../components/header/SubHeader';
import ShippingLists from './ShippingLists';
import { Button, Radio } from 'antd';

const SelectShipping = ({ visible, close, lists, setSelect, select }) => {
    const name = "배송지 추가"
    const [visibleShipping, setVisibleShipping] = useState(false);
    // 0의 기준은 이전에 선택되었던 객채의 번호 (0은 임의)
    const [choiceNum, setChoiceNum] = useState(0)

    const showShippingLists = () => {
        setVisibleShipping(true)
    }

    const closeShippingLists = () => {
        setVisibleShipping(false)
    }

    const updateShipping = (e) => {
        console.log("수정 !!")
        setVisibleShipping(true)
    }

    const onChange = (e) => {
        console.log("e.target.value : ", e.target.value)
        // setChoiceNum(e.target.value)
    }
    


    return (
        <SelectShippingStyled
            visible={visible}
            closable={false}
            footer={
                <Button
                    onClick={close}
                >
                    배송지 선택 완료
                </Button>
            }
        >
            <SubHeader useToggle={close} name={name} show={showShippingLists} />

            <div className="shipping_lists_wrap">
                <Radio.Group defaultValue={choiceNum} onChange={onChange} >
                    {
                        lists.map((value, index) => 
                            <Radio.Button key={index} value={index} className="shipping_list">
                                <div>
                                    <p>{value.name}</p>
                                    <span>기본배송지</span>
                                </div>
                                <ul>
                                    <li>{value.address}</li>
                                    <li>{value.address2}</li>
                                    <li>{value.phone}</li>
                                </ul>

                                <div className="btns_wrap">
                                    <Button>
                                        삭제
                                    </Button>
                                    <button
                                        type="button"
                                        onClick={updateShipping}
                                        value={index}
                                    >
                                        수정
                                    </button>
                                </div>
                            </Radio.Button>
                        )
                    }
                </Radio.Group>
            </div>

            <ShippingLists 
                visible={visibleShipping} 
                close={closeShippingLists}
                lists={lists}
                select={
                    select.name !== null ?
                    select
                    :
                    null
                }
            />
        </SelectShippingStyled>
    )
}

export default SelectShipping;
