import React from 'react';
import ZzimStyled from './ZzimStyled';
import SubHeader from './../../components/header/SubHeader';
import { Tabs } from 'antd';
import ZzimProduct from './components/ZzimProduct.js';
import ZzimFavorites from './components/ZzimFavorites';
import ZzimRecently from './components/ZzimRecently';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

const Zzim = () => {
    const genderSetting = JSON.parse(localStorage.getItem("gender"));
    const name = "찜";

    return (
        <ZzimStyled manm={genderSetting}>
            <SubHeader name="찜" />
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="찜한 상품" key="1">
                    <ZzimProduct />
                </TabPane>
                <TabPane tab="마켓 즐겨찾기" key="2">
                    <ZzimFavorites />
                </TabPane>
                <TabPane tab="최근 본 상품" key="3">
                    <ZzimRecently />
                </TabPane>
            </Tabs>
        </ZzimStyled>
    )
}

export default Zzim;
