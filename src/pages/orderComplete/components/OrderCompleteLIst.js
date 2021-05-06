import React from 'react'
import "antd/dist/antd.css";
import { Collapse } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import ItemList from '../../../components/itemList/ItemList';


const OrderCompleteLIst = () => {
    const { Panel } = Collapse;

    function callback(key) {
        console.log(key);
    }

    const dummyLists = [
        {
          "cct_id": 8864,
          "mem_id": 3206,
          "cit_id": 22566,
          "cde_id": 139887,
          "market_mem_id": 381,
          "cct_count": 1,
          "cct_cart": 1,
          "cct_order": 0,
          "cct_datetime": "2021-03-29T08:48:13.000Z",
          "cct_ip": "112.187.180.223",
          "change_sale_per": null,
          "marketInfo": {
            "market_name": "지민언니"
          },
          "itemInfo": {
            "computed_change_sale_price": 26800,
            "computed_change_sale_per": 0,
            "computed_sale_type": "normal",
            "cit_id": 22566,
            "cit_key": "1611661437",
            "cit_name": "비타민 꼬임 허리끈 드로잉 롱원피스 (2col)",
            "cit_datetime": "2021-01-26T12:27:49.000Z",
            "cit_file_2": "/uploads/thumb/cmallitem/912342f3613a816f88afb74063643a9a.gif",
            "cit_price": 26800,
            "cit_real_price": 26800,
            "cit_sale_per": 0,
            "cit_hit": 43,
            "cit_status": 1,
            "cit_open": 1,
            "cit_del": 2,
            "cit_sell_count": 2,
            "mem_id": 381,
            "cit_download_days": 0,
            "cit_hashtag": ",원피스,롱원피스,플레어,플레어원피스,a라인,a라인원피스,a라인롱원피스,드로잉,드로잉원피스,긴팔원피스,소매퍼프,퍼프원피스,퍼프,허리끈,허리끈원피스,꼬임원피스,꼬임롱원피스,봄원피스,스프링원피스,라운드원피스,라운드롱원피스,데이트,데이트룩"
          },
          "itemDetail": {
            "cde_id": 139887,
            "cit_id": 22566,
            "cde_title": "FREE",
            "cde_price": 0,
            "cde_parent": 139887,
            "cde_title_main": "노랑",
            "cde_qty": 1000,
            "cde_del": 0,
            "mem_id": 381
          },
          "options": [
            {
              "main_option": {
                "cde_title_main": "노랑",
                "cde_id": 139887,
                "sub_option": [
                  {
                    "cde_id": 139887,
                    "cit_id": 22566,
                    "cde_title": "FREE",
                    "cde_price": 0,
                    "cde_parent": 139887,
                    "cde_title_main": "노랑",
                    "cde_qty": 1000,
                    "cde_del": 0,
                    "mem_id": 381
                  }
                ]
              }
            },
            {
              "main_option": {
                "cde_title_main": "블랙",
                "cde_id": 139888,
                "sub_option": [
                  {
                    "cde_id": 139888,
                    "cit_id": 22566,
                    "cde_title": "FREE",
                    "cde_price": 0,
                    "cde_parent": 139888,
                    "cde_title_main": "블랙",
                    "cde_qty": 1000,
                    "cde_del": 0,
                    "mem_id": 381
                  }
                ]
              }
            }
          ]
        }
      ]

    return (
        <Collapse
            onChange={callback} 
            bordered={false} 
            expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} />}
        >
            <Panel header={ <div className='orderList'>주문상품 <span> 총 3개</span> </div>} key="1">
                <>
                  <div className="comProduct">
                    <div>
                      <p>전체 상품 3개</p>
                      <span>2020.01.06</span>
                    </div>
                  </div>
                  <ItemList 
                      lists={dummyLists} 
                      unUseOption={true} 
                      unUseDelete={true} 
                      unUseOrder={true} 
                  />
                </>
            </Panel>
        </Collapse>
    )
}

export default OrderCompleteLIst
