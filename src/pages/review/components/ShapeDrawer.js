import React, { useState, useEffect } from 'react';
import ShapeDrawerStyled from './ShapeDrawerStyled';
import SubHeader from './../../../components/header/SubHeader';
import { Input, Button, Radio } from 'antd';
import AddSizeDrawer from './AddSizeDrawer.js';
import { Swiper, SwiperSlide } from 'swiper/react';

const ShapeDrawer = ({ visible, close , value, setValue}) => {

    const {handleSize,choiceSize,tall,weight} = value; 
    const {setHandleSize, setChoiceSize,setTall,setWeight} = setValue; 

    const name = '나의 체형(선택)';
   
    const [visibleSize, setVisibleSize] = useState(false);

    console.log("나의 체형 사이즈",handleSize, visibleSize, choiceSize ,tall,weight);

    const [returnDom, setReturnDom] = useState();
    
    // 상세사이즈 선택
    const handleSizeChange = e => {
        setChoiceSize(e.target.value)
   
    }
    // 키
    const handleTallChange = e => {
        setTall(e.target.value)
    }
    // 몸무게
    const handleWeightChange = e => {
        setWeight (e.target.value)
    }
    const sizeLists = [
        {
            status: 0,
            name: '여성 상의 사이즈',
            size: [
                44, 55, 66, 77, 88, 99
            ]
        },
        {
            status: 1,
            name: '여성 하의 사이즈',
            size: [
                25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38
            ]
        },
        {
            status: 2,
            name: '남성 상의 사이즈',
            size: [
                86, 90, 95, 100, 105, 110, 115, 120
            ]
        },
        {
            status: 3,
            name: '남성 하의 사이즈',
            size: [
                25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38
            ]
        },
        {
            status: 4,
            name: '신발 사이즈',
            size: [
                225, 230, 235, 245, 255, 260, 265, 270, 275, 280, 285, 290
            ]
        }
    ]

    const showSizeCheck = () => {
        setVisibleSize(true)
    }
    
    const closeSizeCheck = () => {
        setVisibleSize(false)
    }
    
    useEffect(() => {
        resetDom()
    }, [handleSize])

    const setStatus = (e) => {
        setHandleSize(e)
    }

    const resetDom = () => {
        return (
            setReturnDom(
                <Swiper
                    freeMode={true}
                    slidesPerView={'auto'}
                >
                    {
                        sizeLists.map((value) => 
                            value.status === handleSize ?
                            value.size.map((val, el) => 
                            val >= 100 ?
                                <SwiperSlide 
                                    key={el} 
                                    style={{ width: 60 }}
                                    >
                                    <Radio.Button value={val}>{val}</Radio.Button>
                                    </SwiperSlide>
                                :
                                <SwiperSlide 
                                    key={el} 
                                    style={{ width: 48 }}
                                >
                                    <Radio.Button value={val}>{val}</Radio.Button>
                                </SwiperSlide>
                            )
                            :
                            null
                        )
                    }
                </Swiper>
            )
        )
    }

    return (
        <ShapeDrawerStyled
            placement="right"
            visible={visible}
            closable={false}
            afterVisibleChange={() =>
                setStatus(0)
            }
            footer={
                <div className="create_review_btn">
                    <Button
                        onClick={close}
                    >
                        저장
                    </Button>
                </div>
            }
        >
            <SubHeader name={name} useToggle={close} unUseCart={true} />

            <div className="shape_info_wrap">
                <div>
                    <div>
                        <p>키</p>
                        <Input suffix="cm" 
                        onChange={handleTallChange}/>
                    </div>
                    <div>
                        <p>몸무게</p>
                        <Input suffix="kg" 
                        onChange={handleWeightChange}/>
                    </div>
                </div>
            </div>

            <div className="add_size">
                <Button
                    type="text"
                    onClick={showSizeCheck}
                    className="add_size_btn"
                >
                    {
                        sizeLists.map((value, index) => 
                            value.status === handleSize ?
                            <span key={index}>
                                {value.name}
                                <img src="/images/arrow_d.png" alt="" />
                            </span>
                            :
                            null
                        )
                    }    
                </Button>

                <div className="swiper_test">
                    <Radio.Group onChange={handleSizeChange}>
                        {returnDom}
                    </Radio.Group>
                </div>


                <AddSizeDrawer 
                    visible={visibleSize} 
                    close={closeSizeCheck}
                    changeValue={setStatus}
                    value={handleSize} 
                    lists={sizeLists}    
                />               
            </div>
        </ShapeDrawerStyled>
    )
}

export default ShapeDrawer;
