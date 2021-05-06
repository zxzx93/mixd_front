const OrderStatus = (status, cor_id, cde_id, endReviewlists) => {
    switch(status) {
        case 'order':
            return {
                name: '입금 전',
                class: '',
                btn: [
                    {
                        btn_name:'주문취소', 
                        type: 'link',
                        url:'/orderCancel',
                        state: 1,
                    }, 
                    {
                        btn_name:'문의하기',
                        type: 'link',
                        url:'/video',
                        class: 'bold',
                    }
                ]
            }
        case 'deposit':
            return {
                name: '상품준비중', 
                btn: [
                    {
                        btn_name:'주문취소', 
                        type: 'link',
                        url:'/orderCancel',
                        state: 1,
                    }, 
                    {
                        btn_name:'문의하기',
                        type: 'link',
                        url:'/video',
                        class: 'bold',
                    }
                ]
            }
        case 'pre_express':
            return {
                name: '배송준비중', 
                class: 'on',
                btn: [
                    {
                        btn_name:'주문취소', 
                        type: 'link',
                        url:'/orderCancel',
                        state: 1,
                    }, 
                    {
                        btn_name:'문의하기',
                        type: 'link',
                        url:'/video',
                        class: 'bold',
                    }
                ]
            }
        case 'express_ing':
            return {
                name: '배송중', 
                class: 'on',
                btn: [
                    {
                        btn_name:'문의하기', 
                        type: 'link',
                        url:'/video',
                        class: 'bold',
                    }, 
                ]
            }
        case 'express_com':
            return {
                name: '배송완료', 
                btn: [
                    {
                        btn_name:'반품신청', 
                        type: 'link',
                        url:'/orderCancel',
                        state: 2,
                    },
                    {
                        btn_name:'구매확정',
                        type: 'text',
                        click: 'confirm',
                        class: 'bold',
                    }
                ]
            }
        case 'end':
            let reviewStatus = '';
            if(endReviewlists) {
                for (let i = 0; i < endReviewlists.data.data.length; i++) {
                    if(endReviewlists.data.data[i].cor_id === cor_id &&
                       endReviewlists.data.data[i].cde_id === cde_id) {
                        if(endReviewlists.data.data[i].review !== null) {
                            reviewStatus = 0;
                        } else {
                            reviewStatus = 1;
                        }
                    }
                }
            }

            // reviewStatus = 0 // 리뷰 작성했을 시
            // reviewStatus = 1 // 리뷰 작성 안했을 시
            let result = '';
            reviewStatus === 0 ? 
            result = '작성한 리뷰보기'
            : 
            result = '리뷰쓰기'
            
            let url = '';
            reviewStatus === 0 ? 
            url = '/review'
            : 
            url = '/reviewWrite'

            return {
                name: '구매확정', 
                btn: [
                    {
                        btn_name: result, 
                        type: 'link',
                        url: url,
                        class: 'bold',
                    },
                ]
            }
        case 'cancel':
            return {
                name: '주문취소진행',
                btn: [
                    {
                        btn_name:'취소상세', 
                        type: 'link',
                        url:'/orderResult',
                        state: 1,
                    },
                    // {
                    //     type: 'text',
                    //     btn_name:'취소철회',
                    //     click: 'withdraw',
                    // },
                    {
                        btn_name:'문의하기',
                        type: 'link',
                        url:'/video',
                        class: 'bold',
                    }
                ]
            }
        case 'cancel_ing':
            return {
                name: '취소환불요청', 
                btn: [
                    {
                        btn_name:'취소상세', 
                        type: 'link',
                        url:'/orderResult',
                        state: 1,
                    },
                    {
                        btn_name:'문의하기',
                        type: 'link',
                        url:'/video',
                        class: 'bold',
                    }
                ]
            }
        case 'cancel_end':
            return {
                name: '취소완료', 
                class: 'on',
                btn: [
                    {
                        btn_name:'취소상세', 
                        type: 'link',
                        url:'/orderResult',
                        state: 1,
                    },
                    {
                        btn_name:'문의하기',
                        type: 'link',
                        url:'/video',
                        class: 'bold',
                    }
                ]
            }
        case 'refund':
            return {
                name: '반품진행', 
                btn: [
                    {
                        btn_name:'반품상세', 
                        type: 'link',
                        url:'/orderResult',
                        state: 2,
                    },
                    // {
                    //     btn_name:'반품철회', 
                    //     type: 'text',
                    //     click:'refundCancel',
                    // },
                    {
                        btn_name:'문의하기',
                        type: 'link',
                        url:'/video',
                        class: 'bold',
                    }
                ]
            }
        case 'refund_ing':
            return {
                name: '반품환불요청', 
                btn: [
                    {
                        btn_name:'반품상세', 
                        type: 'link',
                        url:'/orderResult',
                        state: 2,
                    },
                    {
                        btn_name:'문의하기',
                        type: 'link',
                        url:'/video',
                        class: 'bold',
                    }
                ]
            }
        case 'refund_end':
            return {
                name: '반품완료', 
                class: 'on',
                btn: [
                    {
                        btn_name:'반품상세', 
                        type: 'link',
                        url:'/orderResult',
                        state: 2,
                    },
                    {
                        btn_name:'문의하기',
                        type: 'link',
                        url:'/video',
                        class: 'bold',
                    }
                ]
            }
        default :
            return {name: '', btn: []}
    }
}

export default OrderStatus;
