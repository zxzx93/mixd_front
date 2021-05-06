import React from 'react';
import ShippingListsStyled from './ShippingListsStyled';
import SubHeader from './../../../components/header/SubHeader';
import { Input, Button } from 'antd'

const ShippingLists = ({ visible, close, select }) => {
    const name = "배송지 추가";

    return (
        <ShippingListsStyled
            closable={false}
            visible={visible}
            footer={
                <Button>배송지 추가 하기</Button>
            }
        >

            <SubHeader name={name} useToggle={close} unUseCart={true} />

            <div className="add_shipping_info">
                <div className="arrival_name">
                    <Input
                        className="middle"
                        placeholder="받는분"
                        value={
                            select ?
                            select.name
                            :
                            null
                        }
                    />
                </div>
                <div className="post_number">
                    <Input
                        className="middle"
                        placeholder="우편번호"
                        value={
                            select ?
                            select.post
                            :
                            null
                        }
                    />
                    <Button>
                        우편번호 검색
                    </Button>
                </div>
                <div className="address">
                    <Input
                        placeholder="주소"
                        value={
                            select ?
                            select.address
                            :
                            null
                        }
                    />
                </div>
                <div className="address_detail">
                    <Input
                        placeholder="상세주소"
                        value={
                            select ?
                            select.address2
                            :
                            null
                        }
                    />
                </div>
                <div className="phone_number">
                    <Input
                        placeholder="휴대폰번호"
                        value={
                            select ?
                            select.phone
                            :
                            null
                        }
                    />
                </div>
            </div>

        </ShippingListsStyled>
    )
}

export default ShippingLists;
