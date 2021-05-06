import axios from "axios";
import produce from "../../util/produce";
import _ from 'lodash';

// 주문배송조회 - 리스트
const ORDER_LIST_REQUEST = "order/ORDER_LIST_REQUEST";
const ORDER_LIST_SUCCESS = "order/ORDER_LIST_SUCCESS";
const ORDER_LIST_ERROR = "order/ORDER_LIST_ERROR";

// 주문배송조회 - 상세페이지(취소, 반품)
const ORDER_DETAIL_REQUEST = "orderDetail/ORDER_DETAIL_REQUEST";
const ORDER_DETAIL_SUCCESS = "orderDetail/ORDER_DETAIL_SUCCESS";
const ORDER_DETAIL_ERROR = "orderDetail/ORDER_DETAIL_ERROR";

// 배송완료 후 구매확정 시
const ORDER_CONFIRMATION_REQUEST = "orderDetail/ORDER_CONFIRMATION_REQUEST";
const ORDER_CONFIRMATION_SUCCESS = "orderDetail/ORDER_CONFIRMATION_SUCCESS";
const ORDER_CONFIRMATION_ERROR = "orderDetail/ORDER_CONFIRMATION_ERROR";

// 반품진행 후 반품철회
const ORDER_REFUNDCANCEL_REQUEST = "orderDetail/ORDER_REFUNDCANCEL_REQUEST";
const ORDER_REFUNDCANCEL_SUCCESS = "orderDetail/ORDER_REFUNDCANCEL_SUCCESS";
const ORDER_REFUNDCANCEL_ERROR = "orderDetail/ORDER_REFUNDCANCEL_ERROR";

// 주문취소
const ORDER_CANCEL_REQUEST = "orderCancel/ORDER_CANCEL_REQUEST";
const ORDER_CANCEL_SUCCESS = "orderCancel/ORDER_CANCEL_SUCCESS";
const ORDER_CANCEL_ERROR = "orderCancel/ORDER_CANCEL_ERROR";

// 취소목록 리스트
const ORDER_LISTS_INFO = "orderCancel/ORDER_LISTS_INFO";

// 취소사유 & 반품사유
const ORDER_CANCEL_REASON = "orderCancel/ORDER_CANCEL_REASON";

// 환불계좌정보 변경
const BANK_OPTION_CHANGE = "orderCancel/BANK_OPTION_CHANGE";

// 입금전(결제 전) - 주문취소
const ORDER_CANCELINFO_REQUEST = "orderCancel/ORDER_CANCELINFO_REQUEST";
const ORDER_CANCELINFO_SUCCESS = "orderCancel/ORDER_CANCELINFO_SUCCESS";
const ORDER_CANCELINFO_ERROR = "orderCancel/ORDER_CANCELINFO_ERROR";

// 상품준비중(결제 후) - 주문취소
const ORDER_DEPOSITINFO_REQUEST = 'orderCancel/ORDER_DEPOSITINFO_REQUEST';
const ORDER_DEPOSITINFO_SUCCESS = 'orderCancel/ORDER_DEPOSITINFO_SUCCESS';
const ORDER_DEPOSITINFO_ERROR = 'orderCancel/ORDER_DEPOSITINFO_ERROR';

// 구매확정 후 리뷰작성 유무리스트
const ORDER_ENDREVIEW_REQUEST = 'orderCancel/ORDER_ENDREVIEW_REQUEST';
const ORDER_ENDREVIEW_SUCCESS = 'orderCancel/ORDER_ENDREVIEW_SUCCESS';
const ORDER_ENDREVIEW_ERROR = 'orderCancel/ORDER_ENDREVIEW_ERROR';

const initialState = {
    // 리스트
    orderListLoading: false,
    orderListDone: false,
    orderListError: null,
    orderLists: {},

    // 상세페이지(취소, 반품)
    orderDetailLoading: false,
    orderDetailDone: false,
    orderDetailError: null,
    orderDetail: {},

    // 배송완료 후 구매확정 시
    orderConfirmationLoading: false,
    orderConfirmationDone: false,
    orderConfirmationError: null,
    
    // 반품진행 후 반품철회
    orderRefundCancelLoading: false,
    orderRefundCancelDone: false,
    orderRefundCancelError: null,

    // 주문취소
    orderCancelLoading: false,
    orderCancelDone: false,
    orderCancelError: null,
    orderCancel: {},

    // 취소목록 리스트
    orderCancelLists: {},

    // 취소사유 & 반품사유
    orderCancelReason: [],

    // 환불계좌정보 변경
    refundBankOption: [],

    // 입금전(결제 전) - 주문취소
    orderCancelInfoLoading: false,
    orderCancelInfoDone: false,
    orderCancelInfoError: null,
    orderCancelInfo: {},

    // 상품준비중(결제 후) - 주문취소
    orderDepositInfoLoading: false,
    orderDepositInfoDone: false,
    orderDepositInfoError: null,
    orderDepositInfo: {},

    // 구매확정 후 리뷰작성 유무리스트
    orderEndReviewLoading: false,
    orderEndReviewDone: false,
    orderEndReviewError: null,
    orderEndReview: {},
}

// 주문배송조회 리스트
export const OrderListsInfo = (token) => async(dispatch) => {
    dispatch({ type: ORDER_LIST_REQUEST });
    try {
        const orderCancel = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/orders`,
            {
                headers: {
                    Authorization: "Bearer " + token.accessToken,
                },
            }
        );
        dispatch({
            type: ORDER_LIST_SUCCESS,
            payload: orderCancel.data.data,
        });
    } catch(error)  {
        dispatch({
            type: ORDER_LIST_ERROR,
            payload: error.response.data,
        });
    }
}

// 주문배송조회 - 상세페이지(취소, 반품)
export const OrderDetailInfo = (token, id) => async(dispatch) => {
    dispatch({ type: ORDER_DETAIL_REQUEST })
    try {
        const orderDetail = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/orders/${id}`,
            {
                headers: {
                    Authorization: "Bearer " + token.accessToken,
                },
            }
        );
        dispatch({
            type: ORDER_DETAIL_SUCCESS,
            payload: orderDetail.data.data,
        });
    } catch(error) {
        dispatch({ 
            type: ORDER_DETAIL_ERROR,
            payload: error.response,
        })
    }
}

// 배송완료 후 구매확정
export const OrderConfirmation = (token, corId, codId) => async(dispatch) => {
    if (corId !== undefined && codId !== undefined) {
        dispatch({ type: ORDER_CONFIRMATION_REQUEST })
        try {
            const orderConfirm = await axios.put(
                `${process.env.REACT_APP_API_URL}/api/orders/${corId}/details/${codId}/confirmation`,
                {},
                {
                    headers: {
                        Authorization: "Bearer " + token.accessToken,
                    },
                }
            );
            dispatch({
                type: ORDER_CONFIRMATION_SUCCESS,
                payload: orderConfirm.data.data
            });
        } catch(error) {
            dispatch({ 
                type: ORDER_CONFIRMATION_ERROR,
                payload: error.response.data,
            })
        }
    }
}

// 반품진행 후 반품 철회
export const OrderRefundCancel = (token, corId, codId) => async(dispatch) => {
    if (corId !== undefined && codId !== undefined) {
        dispatch({ type: ORDER_REFUNDCANCEL_REQUEST })
        try {
            const orderRefundCancel = await axios.put(
                `${process.env.REACT_APP_API_URL}/api/orders/${corId}/details/${codId}/refund-cancellation`,
                {},
                {
                    headers: {
                        Authorization: "Bearer " + token.accessToken,
                    },
                }
            );
            dispatch({
                type: ORDER_REFUNDCANCEL_SUCCESS,
                payload: orderRefundCancel.data.data
            });
        } catch(error) {
            dispatch({ 
                type: ORDER_REFUNDCANCEL_ERROR,
                payload: error.response.data,
            })
        }
    }
}

// 주문취소
export const OrderCancelInfo = (token, corId) => async(dispatch) => {
    dispatch({ type: ORDER_CANCEL_REQUEST })
    try {
        const orderLists = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/orders/${corId}`,
            {
                headers: {
                    Authorization: "Bearer " + token.accessToken,
                },
            }
        );
        dispatch({
            type: ORDER_CANCEL_SUCCESS,
            payload: orderLists.data.data,
        });
    } catch(error)  {
        dispatch({
            type: ORDER_CANCEL_ERROR,
            payload: error.response.data,
        });
    }
}

// 주문취소 리스트
export const CancelListsInfo = (checkItems, sumTotal) => (dispatch) => {
    dispatch({
        type: ORDER_LISTS_INFO,
        payload: {
            'checkItems' : checkItems,
            'sumPrice' : sumTotal,
        }
    });
}


// 취소사유 정보
export const CancelReason = (selectOption, textValueChange) => (dispatch) => {
    dispatch({
        type: ORDER_CANCEL_REASON,
        payload: {
            'reasonOption': selectOption,
            'reasonValue' : textValueChange,
        }
    });
}

// 환불 계좌 선택
export const BankOptions = ( refundBankNameChanged, refundOwnerChanged, refundBankNumberChanged, changeState ) => (dispatch) => {
    dispatch({
        type: BANK_OPTION_CHANGE,
        payload: {
            'bankName': refundBankNameChanged, 
            'bankOwner' : refundOwnerChanged, 
            'bankNumber' : refundBankNumberChanged,
            'changeState' : changeState,
        }
    });
}

// 입금전(결제 전) - 주문취소
export const OrderCancelSubmit = (token, orderCancelReason, corId) => async(dispatch) => {
    dispatch({ type: ORDER_CANCELINFO_REQUEST })
    try {
        const orderCancelResult = await axios.put(
            `${process.env.REACT_APP_API_URL}/api/orders/${corId}/cancel`,
            {
                "cancel_etc": orderCancelReason.reasonOption,
                "cancel_etc_detail": orderCancelReason.reasonValue,
            },
            {
                headers: {
                    Authorization: "Bearer " + token.accessToken,
                },
            }
        );
        dispatch({
            type: ORDER_CANCELINFO_SUCCESS,
            payload: orderCancelResult,
        });
    } catch(error)  {
        dispatch({
            type: ORDER_CANCELINFO_ERROR,
            payload: error.response,
        });
    }
}

// 상품준비중(결제 후) - 주문취소
export const OrderDepositSubmit = (
    token, 
    orderCancelLists,  
    orderCancelReason, 
    refundBankOption,
    corId,
    status,
    ) => async(dispatch) => {
    dispatch({ type: ORDER_DEPOSITINFO_REQUEST })

    try {
        const orderDepositInfo = {};
        if(status === 1) {
            orderDepositInfo = await axios.put(
                `${process.env.REACT_APP_API_URL}/api/orders/${corId}/details/cancel`,
                {
                    "cancel_etc": orderCancelReason.reasonOption,
                    "cancel_etc_detail": orderCancelReason.reasonValue,
                    "cod_ids": orderCancelLists,
                    "refund_name": refundBankOption.bankOwner,
                    "refund_bank_name": 
                        refundBankOption.bankName.label ?
                        refundBankOption.bankName.label : refundBankOption.bankName,
                    "refund_bank_number": refundBankOption.bankNumber,
                },
                {
                    headers: {
                        Authorization: "Bearer " + token.accessToken,
                    },
                }
            )
        } else {
            orderDepositInfo = await axios.put(
                `${process.env.REACT_APP_API_URL}/api/orders/${corId}/details/refund`,
                {
                    "refund_etc": orderCancelReason.reasonOption,
                    "refund_etc_detail": orderCancelReason.reasonValue,
                    "cod_ids": orderCancelLists,
                    "refund_name": refundBankOption.bankOwner,
                    "refund_bank_name": 
                        refundBankOption.bankName.label ?
                        refundBankOption.bankName.label : refundBankOption.bankName,
                    "refund_bank_number": refundBankOption.bankNumber,
                },
                {
                    headers: {
                        Authorization: "Bearer " + token.accessToken,
                    },
                }
            )
        }

        dispatch({
            type: ORDER_DEPOSITINFO_SUCCESS,
            payload: orderDepositInfo,
        });
    } catch(error)  {
        dispatch({
            type: ORDER_DEPOSITINFO_ERROR,
            payload: error.response,
        });
    }
}

// 구매확정 후 리뷰작성 유무리스트
export const OrderEndReviewInfoList = (token, mem_id) => async(dispatch) => {
    dispatch({ type: ORDER_ENDREVIEW_REQUEST })
    try {
        const orderEndReview = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/review/users/${mem_id}/orders`,
            {
                headers: {
                    Authorization: "Bearer " + token.accessToken,
                },
            }
        );
        dispatch({ 
            type: ORDER_ENDREVIEW_SUCCESS,
            payload: orderEndReview,
        })
    } catch(error)  {
        dispatch({
            type: ORDER_ENDREVIEW_ERROR,
            payload: error.response,
        });
    }
}

const order = (state =  initialState, action) => 
    produce(state, (draft) => {
        switch (action.type) {
            // 리스트
            case ORDER_LIST_REQUEST:
                draft.orderListLoading = true;
                draft.orderListDone = false;
                draft.orderListError = null;
                break;
            case ORDER_LIST_SUCCESS:
                draft.orderListLoading = false;
                draft.orderListDone = true;
                draft.orderLists = action.payload;
                break;
            case ORDER_LIST_ERROR:
                draft.orderListLoading = false;
                draft.orderListError = action.payload;
                break;


            // 상세페이지(취소, 반품)
            case ORDER_DETAIL_REQUEST:
                draft.orderDetailLoading = true;
                draft.orderDetailDone = false;
                draft.orderDetailError = null;
                break;
            case ORDER_DETAIL_SUCCESS:
                draft.orderDetailLoading = false;
                draft.orderDetailDone = true;
                draft.orderDetail = action.payload;
                break;
            case ORDER_DETAIL_ERROR:
                draft.orderDetailLoading = false;
                draft.orderDetailError = action.payload;
                break;


            // 배송완료 후 구매확정
            case ORDER_CONFIRMATION_REQUEST:
                draft.orderConfirmationLoading = true;
                draft.orderConfirmationDone = false;
                draft.orderConfirmationError = null;
                break;
            case ORDER_CONFIRMATION_SUCCESS:
                draft.orderConfirmationLoading = false;
                draft.orderConfirmationDone = true;
                break;
            case ORDER_CONFIRMATION_ERROR:
                draft.orderConfirmationLoading = false;
                draft.orderConfirmationError = action.payload;
                break;


            // 반품진행 후 반품철회
            case ORDER_REFUNDCANCEL_REQUEST:
                draft.orderRefundCancelLoading = true;
                draft.orderRefundCancelDone = false;
                draft.orderRefundCancelError = null;
                break;
            case ORDER_REFUNDCANCEL_SUCCESS:
                draft.orderRefundCancelLoading = false;
                draft.orderRefundCancelDone = true;
                break;
            case ORDER_REFUNDCANCEL_ERROR:
                draft.orderRefundCancelLoading = false;
                draft.orderRefundCancelError = action.payload;
                break;

            
            // 주문취소
            case ORDER_CANCEL_REQUEST:
                draft.orderCancelLoading = true;
                draft.orderCancelDone = false;
                draft.orderCancelError = null;
                break;
            case ORDER_CANCEL_SUCCESS:
                draft.orderCancelLoading = false;
                draft.orderCancelDone = true;
                draft.orderCancel = action.payload;
                break;
            case ORDER_CANCEL_ERROR:
                draft.orderCancelLoading = false;
                draft.orderCancelError = action.payload;
                break;

            // 취소목록 리스트
            case ORDER_LISTS_INFO:
                // draft.orderCancelLists = action.payload.checkItems;
                draft.orderCancelLists = action.payload;
                break;

            // 취소사유 & 환불사유
            case ORDER_CANCEL_REASON:
                draft.orderCancelReason = action.payload;
                break;

            // 환불계좌정보 변경
            case BANK_OPTION_CHANGE:
                draft.refundBankOption = action.payload;
                break;

            // 입금전(결제 전) - 주문취소
            case ORDER_CANCELINFO_REQUEST:
                draft.orderCancelInfoLoading = true;
                draft.orderCancelInfoDone = false;
                draft.orderCancelInfoError = null;
                break;
            case ORDER_CANCELINFO_SUCCESS:
                draft.orderCancelInfoLoading = false;
                draft.orderCancelInfoDone = true;
                draft.orderCancelInfo = action.payload;
                break;
            case ORDER_CANCELINFO_ERROR:
                draft.orderCancelInfoLoading = false;
                draft.orderCancelInfoError = action.payload;
                break;

            // 상품준비중(결제 후) - 주문취소
            case ORDER_DEPOSITINFO_REQUEST:
                draft.orderDepositInfoLoading = true;
                draft.orderDepositInfoDone = false;
                draft.orderDepositInfoError = null;
                break;
            case ORDER_DEPOSITINFO_SUCCESS:
                draft.orderDepositInfoLoading = false;
                draft.orderDepositInfoDone = true;
                draft.orderDepositInfo = action.payload;
                break;
            case ORDER_DEPOSITINFO_ERROR:
                draft.orderDepositInfoLoading = false;
                draft.orderDepositInfoError = action.payload;
                break;

            // 구매확정 후 리뷰작성 유무리스트
            case ORDER_ENDREVIEW_REQUEST:
                draft.orderEndReviewLoading = true;
                draft.orderEndReviewDone = false;
                draft.orderEndReviewError = null;
                break;
            case ORDER_ENDREVIEW_SUCCESS:
                draft.orderEndReviewLoading = false;
                draft.orderEndReviewDone = true;
                draft.orderEndReviewInfo = action.payload;
                break;
            case ORDER_ENDREVIEW_ERROR:
                draft.orderEndReviewLoading = false;
                draft.orderEndReviewError = action.payload;
                break;

            default:
                break;
        }
    });
export default order;
    