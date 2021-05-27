import React, { useState } from 'react';
import ZzimStyled from './ZzimStyled';
import SubHeader from './../../components/header/SubHeader';
import { Tabs } from 'antd';
import ZzimProduct from './components/ZzimProduct.js';
import ZzimFavorites from './components/ZzimFavorites';
import ZzimRecently from './components/ZzimRecently';

const { TabPane } = Tabs;


const Zzim = () => {

const [keyValue, setKey] = useState("")

function callback(key) {
    console.log(key);
    setKey(key);
}
const dummyList = [
    {
        key: 1,
        main_title: " 찜한 상품이 없어요!",
        sub_title: "믹스디 MD들이 PICK한 아이템들을 찜하러 갈까요?",
        go_shop: "쇼핑하러가기 "
    },
    {
        key: 2,
        main_title: " 즐겨찾기한 마켓이 없어요!",
        sub_title: "요즘 핫한 실시간 인기마켓들을 보러 갈까요?",
        go_shop: "인기마켓 보러 가기 "
    },
    {
        key: 3,
        main_title: " 찜한 상품이 없어요!",
        sub_title: "지금 할인하는 아이템들을 보러 갈까요?",
        go_shop: "쇼핑하러가기 "
    }
]
    const genderSetting = JSON.parse(localStorage.getItem("gender"));
   
    return (
        <ZzimStyled manm={genderSetting}>
            <SubHeader name="찜" />
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="찜한 상품" key="1">
                    <ZzimProduct keyValue={keyValue}  list={dummyList} />
                </TabPane>
                <TabPane tab="마켓 즐겨찾기" key="2">
                    <ZzimFavorites keyValue={keyValue} list={dummyList} />
                </TabPane>
                <TabPane tab="최근 본 상품" key="3">
                    <ZzimRecently keyValue={keyValue} list={dummyList} />
                </TabPane>
            </Tabs>
        </ZzimStyled>
    )
}

export default Zzim;
