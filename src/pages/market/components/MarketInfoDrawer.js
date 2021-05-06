import React from 'react';
import MarketInfoDrawerStyled from './MarketInfoDrawerStyled';
import SubHeader from './../../../components/header/SubHeader';

const MarketInfoDrawer = ({ visible, close }) => {
    const name = "배송 / 결제 / 반품안내";

    const useToggle = () => {
        close()
    }

    return (
        <MarketInfoDrawerStyled
            className="order_drawer"
            placement="right"
            closable={false}
            title={false}
            onClose={close}
            visible={visible}
        >
            <SubHeader name={name} useToggle={useToggle}  />

            <div className="title_wrap">
                <p>모든 디자인이 다 있다, 언제나 무료배송이다!</p>
                <p>고객을 위한 패션 쇼핑</p>
                <img src="/images/logo_drawer.png" alt="" />
            </div>

            <div className="market_info_wrap">
                <p className="info_wrap_title">
                    결제
                </p>
                <div>
                    무통장 입금을 해주신 고객 중 입금 후 2시간 이내 입금 확인 메시지를 받지 못하신 고객은 MIX:D 고객센터로 연락 부탁드리겠습니다.
                </div>
                <div>   
                    무통장 입금을 해주실 때, 아래와 같은 경우일 때 배송이 지연될 수 있습니다. 꼭 고객센터로 연락 부탁드리겠습니다.
                    <ul>
                        <li>주문 금액과 입금 금액이 다른 경우</li>
                        <li>주문 시 기재하신 입금자 성함이 다른 경우</li>
                        <li>주문 후 24시간 이내 결제 확인이 되지 않을 경우, 주문은 자동으로 취소됩니다.</li>
                    </ul>
                </div>                
            </div>

            <div className="market_info_wrap">
                <p className="info_wrap_title">
                    배송
                </p>
                <div>
                    MIX:D에서 구매하시는 [쇼핑몰명]의 모든 상품은 1년 내내 무료 배송입니다. (제주도 및 도서산간 일부 지역의 경우, 추가 배송비 발생할 수 있음)
                </div>
                <div>
                    [쇼핑몰명]의 평균 상품 준비 기간은 평일 기준 [1~4] 일이며, 상품 공급사 사정에 따라서 최대 [10] 일까지 지연될 수 있는 점 양해 부탁드리겠습니다.
                </div>
            </div>

            <div className="market_info_wrap">
                <p className="info_wrap_title">
                    주문 취소 & 변경
                </p>
                <div>
                    배송 전 취소는 [마이페이지 > 주문. 배송조회 > 주문 취소] 버튼을 통하여 처리 가능합니다.
                </div>
                <div>
                    배송 전 주문을 변경하시려면 평일 [00]시 이전에 [쇼핑몰명] 고객센터로 연락 부탁드리겠습니다.
                </div>
                <div>
                    배송 중 주문을 변경하거나, 주문 취소를 하실 경우에는 교환/환불로 처리되어, 추가 배송비가 발생할 수 있습니다. 자세한 내용은 [쇼핑몰명] 고객센터로 연락 부탁드리겠습니다.
                </div>
                <div>
                    주문 변경 또는 배송 중 주문 취소 등 변경, 취소 관련 문의는 [쇼핑몰명] 고객센터로 연락 부탁드리겠습니다.
                </div>
            </div>

            <div className="market_info_wrap">
                <p className="info_wrap_title">
                    반품접수
                </p>
                <div>
                    반품은 고객님께서 상품을 수령하신 이후, 7일 이내 [마이페이지 > 주문. 배송조회 > 반품 접수] 버튼을 통하여 신청 가능합니다.
                </div>
                <div>
                    반품은 고객님께서 상품을 수령하신 이후, 7일 이내 [마이페이지 > 주문. 배송조회 > 반품 접수] 버튼을 통하여 신청 가능합니다.
                </div>
                <div>
                    [추가적 내용 작성시 노출]
                    <ul>
                        <li>만약 단순 변심에 의한 반품일 경우 추가 배송비가 발생하며, 반품 배송비 차감 후 환불 처리됩니다.</li>
                        <li>주문하신 상품을 전체 반품할 시 5,000원 차감, 부분 반품할 시 2,500원의 배송비가 차감됩니다.</li>
                        <li>단, 제주도 및 도서산간 일부 지역의 경우 전체 반품 11,000원 차감, 부분 반품 시 5,500원의 배송비가 차감됩니다. (주문 때 고객님이 부담하신 추가 배송비는 차감)</li>
                    </ul>
                </div>
            </div>

            <div className="market_info_wrap">
                <p className="info_wrap_title">
                    교환신청
                </p>
                <div>
                    교환은 고객님께서 상품을 수령하신 이후, 7일 이내 [마이페이지 > 주문. 배송조회 > 주문하신 상품 > 교환 문의] 버튼을 통하여 신청 가능합니다.
                </div>
                <div>
                    교환 신청 방법과 관련해서 부가적으로 안내해야 할 내용이 있다면 작성해 주세요.
                </div>
                <div>
                    [추가적 내용 작성시 노출]
                </div>
                <div>
                    단순 변심에 의한 교환일 경우 추가적인 배송비가 발생합니다.
                    <ul>
                        <li>제주도 및 도서산간 일부 지역의 경우 교환 배송비 11,000원 추가 그 외 지역은 5,000원의 교환 배송비가 추가됩니다.</li>
                    </ul>
                </div>
            </div>

            <div className="market_info_wrap">
                <p className="info_wrap_title">
                    교환/반품 택배 접수 안내
                </p>
                <div>
                    [1. 기본안내]
                </div>
                <div>
                    [2. 교환/반품지명]
                </div>
            </div>

            <div className="market_info_wrap">
                <p className="info_wrap_title">
                    교환/반품이 불가능한 상황
                </p>
                <div>
                    소비자에게 책임이 있는 사유로 제품이 멸실 또는 훼손된 경우 교환/반품이 불가능합니다. (단, 제품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외)
                </div>
                <div>
                    포장을 개봉하였거나 포장 및 제품의 택이 훼손되어 상품가치가 상실된 경우
                </div>
                <div>
                    나염 상품은 상품 특성으로 인해, 나염의 위치가 조금씩 다를 수 있습니다. 이 경우 하자 또는 불량에 해당되지 않습니다
                </div>
                <div>
                    본드자국,초크자국,지퍼의 퍽퍽함, 단추 구멍이 완벽히 뚫리지 않은 경우, 박음질 불균형, 실밥등은 하자 또는 불량에 해당되지 않습니다.
                </div>
                <div>
                    상품의 재판매가 불가능한 경우(향수,담배,방향제 냄새 및 1회라도 착용을 한 경우)
                </div>
                <div>
                    고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우
                </div>
                <div>
                    상품과 관계없는 포장지나, 케이스 등의 훼손 및 파손은 상품 하자 또는 불량에 해당되지 않습니다.
                </div>
                <div>
                    상품과 관계없는 포장지나, 케이스 등의 훼손 및 파손은 상품 하자 또는 불량에 해당되지 않습니다.
                </div>
                <div>
                    시간의 경과에 의하여 재판매가 곤란할 정도로 상품등의 가치가 현저히 감소한 경우
                </div>
                <div>
                    상품에 하자가 있다고 하더라도 상품을 세탁하거나 수선한 경우
                </div>
                <div>
                    상품을 수령하신 이후로 7일이 지난 경우
                </div>
                <div>
                    셋트 상품 중 구성품 일부만 반품하는 것은 불가능 합니다.
                </div>
                <div>
                    털 또는 충전재가 포함된 제품의 털 빠짐 현상은 자연스러운 현상이므로 하자 또는 불량에 해당되지 않습니다.
                </div>
            </div>

            <div className="market_info_wrap">
                <p className="info_wrap_title">
                    상품 문의, 결제 외 주문 관련 기타 문의<br />
                    [쇼핑몰명] 고객센터
                </p>
                <div>
                    운영시간 :  9시 ~ 15시
                </div>
                <div>
                    대표번호 :  010-0000-0000
                </div>
                <div>
                    카카오톡 :  마켓정보에서 지정한 카카오톡 아이디가 자동으로 보이게 됩니다
                </div>
            </div>

            <div className="market_info_wrap">
                <p className="info_wrap_title">
                    결제 관련 문의사항 - MIX:D 고객센터
                </p>
                <div>
                    MIX:D 온라인 고객센터
                    <ul>
                        <li>운영시간 : 월 ~ 금요일 오전 9시 30분 ~ 오후 6시</li>
                        <li>카카오톡 : MIX:D</li>
                    </ul>
                </div>
                <div>
                    MIX:D 전화 고객센터
                    <ul>
                        <li>운영시간 : 월 ~ 금요일 오전 9시 30분 ~ 오후 6 (점심시간 오후 12시 ~ 오후 1시)</li>
                        <li>대표번호 : 1000-1000</li>
                    </ul>
                </div>
            </div>
        </MarketInfoDrawerStyled>
    )
}

export default MarketInfoDrawer;
