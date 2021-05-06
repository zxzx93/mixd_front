import React, { useState, useEffect } from 'react';
import DeliveryStyled from './DeliveryStyled';
import OrderTitle from './OrderTitle';
import { Button, Modal } from 'antd';
import Moment from 'react-moment';
import 'moment/locale/ko';
import axios from 'axios';

const Delivery = ({ order, orderDone }) => {

    console.log("delivery order : ", order)

    const orderName = "배송정보";
    const privateKey = "6X7sodfcs3mRFSFrpY6d6Q";
    const [company, setCompany] = useState()
    const [visibleModal, setVisibleModal] = useState(false);
    const [resHtml, setResHtml] = useState()

    // 1. smart택배 api에서 택배리스트를 호출 
    // 2. 전달받은 order객체에서 택배회사명 같은걸 company에 담음
    useEffect(() => {
        axios.get(
            `https://info.sweettracker.co.kr/api/v1/companylist?t_key=` + privateKey,
        ).then(({ data }) => {
            data.Company.map((value) => 
                value.Name === order.order.items[0].detail.express_name ?
                setCompany(value)
                :
                null
            )
        }).catch(err => {
            console.log(err)
        })
    }, [])

    
    const searchDelivery = () => {
        // axios.get(
        axios.post(
            `http://info.sweettracker.co.kr/tracking/5?` +
            `t_key=` + privateKey +
            `&t_code=` + company.Code +
            `&t_invoice=` + order.order.cor_id,
            // `&t_code=` + '05' +
            // `&t_invoice=` + '510509706350',
        ).then(({ data }) => {
            setResHtml(data)
        }).catch(err => {
            console.log(err)
        })

        setVisibleModal(true)
    }

    const closeVisibleModal = () => {
        setVisibleModal(false)
    }

    return (
        <DeliveryStyled>
            {
                orderDone ?
                <>
                    <OrderTitle orderName={orderName} />
                    <ul>
                        <li>
                            <p>택배사</p>
                            <span className="bold">{order.order.items[0].detail.express_name}</span>
                        </li>
                        <li>
                            <p>송장번호</p>
                            <span className="bold">{order.order.items[0].detail.express_number}</span>
                        </li>
                        <li>
                            <p>배송 출발일</p>
                            <Moment 
                                format="YYYY.MM.DD"
                                className="bold"
                            >
                                {order.order.items[0].detail.express_ing_date}
                            </Moment>
                            {/* <span className="bold">{order.order.items[0].detail.express_date}</span> */}
                        </li>
                    </ul>
                    <Button
                        onClick={searchDelivery}
                    >
                        배송조회
                    </Button>

                    {/* 조회하기 눌렀을 시 뜨는 Modal */}
                    <Modal
                        visible={visibleModal}
                        onCancel={closeVisibleModal}
                        zIndex={1400}
                        footer={false}
                    >   
                        <div dangerouslySetInnerHTML={{ __html: resHtml }} />
                        {/* {renderHTML(resHtml)} */}
                    </Modal>
                </>
                :
                null
            }
        </DeliveryStyled>
    )
}

export default Delivery;
