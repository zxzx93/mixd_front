import React, { useState } from 'react';
import AddShippingStyled from './AddShippingStyled';
import { Button, Input } from 'antd';
// import ShippingLists from './ShippingLists'
import Select from 'react-select';
import SelectShipping from './SelectShipping';

const AddShipping = () => {
    const [visibleSelectWrap, setVisibleSelectWrap] = useState(false);
    // const [visibleShipping, setVisibleShipping] = useState(false);
    const [selectShipping, setSelectShipping] = useState({
        // 데이터가 있을 시
        name: '박서울',
        post: 1111,
        address: '서울 중구 한강대로 405 서울역',
        address2: '1001호',
        phone: '01012345678'

        // 데이터가 없을 시 (default null)
        // name: null,
        // post: null,
        // address: null,
        // address2: null,
        // phone: null
    });
    const [useInput, setUserInput] = useState(false);

    const showSelectWrap = () => {
        setVisibleSelectWrap(true)
    }

    const closeSelectWrap = () => {
        setVisibleSelectWrap(false)
    }

    // const showShippingLists = () => {
    //     setVisibleShipping(true)
    // }

    // const closeShippingLists = () => {
    //     setVisibleShipping(false)
    // }


    const shippingLists = [
        {
            name: '박서울',
            post: 1111,
            address: '서울 중구 한강대로 405 서울역',
            address2: '1001호',
            phone: '01012345678'
        }, 
        {
            name: '박서울2',
            post: 2222,
            address: '서울 중구 한강대로 405 서울역',
            address2: '2002호',
            phone: '01012345678'
        }, 
    ]

    const optionLists = [
        {value: '1', label: '부재 시 경비실에 맡겨주세요.'},
        {value: '2', label: '부재 시 문 앞에 놓아주세요.'},
        {value: '3', label: '배송 전 연락해 주세요.'},
        {value: '4', label: '직접 수령할게요.'},
        {value: '5', label: '선택 안 함'},
        {value: '6', label: '직접입력'},
    ]

    const changeOptions = (e) => {
        return (
            e.value === '6' ?
            setUserInput(true)
            :
            setUserInput(false)
        )
    }

    return (
        <AddShippingStyled
            onlist={
                selectShipping.name !== null ?
                true 
                : 
                false
            }
        >
            <p>배송지 정보</p>

            <div className="shipping_info_wrap">
                {   
                    selectShipping.name !== null ?
                    <div>
                        <p>{selectShipping.name}</p>
                        <span>{selectShipping.address}</span>
                        <span>{selectShipping.address2}</span>
                        <span>{selectShipping.phone}</span>
                        <Select 
                            className="option_select"
                            classNamePrefix
                            onChange={changeOptions}
                            placeholder={"배송 시 요청사항을 선택해주세요."}
                            options={optionLists}
                        />
                        {
                            useInput ?
                            <Input 
                                className="option_add"
                                placeholder={"배송 시 요청사항을 입력해주세요."}
                            />
                            :
                            null
                        }
                    </div>
                    :
                    <span className="non_shipping">등록된 배송지 정보가 없습니다.</span>
                }
            </div>

            <Button
                type="text"
                className="add_shipping"
                onClick={showSelectWrap}
            >
                {
                    selectShipping.name ?
                    "변경하기"
                    :
                    "등록하기"
                }
            </Button>

            <SelectShipping
                visible={visibleSelectWrap}
                close={closeSelectWrap}
                lists={shippingLists}
                select={selectShipping}
                setSelect={setSelectShipping}
            />

            {/* <ShippingLists 
                visible={visibleShipping} 
                close={closeShippingLists}
                select={
                    selectShipping.name !== null ?
                    selectShipping
                    :
                    null
                }
            /> */}


        </AddShippingStyled>
    )
}

export default AddShipping;
