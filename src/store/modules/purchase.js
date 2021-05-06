import axios from "axios";
import produce from "../../util/produce";
import _ from 'lodash';

// // 주문배송조회 - 리스트
const PURCHASE_LIST_REQUEST = "purchase/PURCHASE_LIST_REQUEST";
const PURCHASE_LIST_SUCCESS = "purchase/PURCHASE_LIST_SUCCESS";
const PURCHASE_LIST_ERROR = "purchase/PURCHASE_LIST_ERROR";

const initialState = {
    purchaseListLoading: false,
    purchaseListDone: false,
    purchaseListError: null,
    purchaseList: {},
}

export const purchaseListInfo = (orderList, token, cit_key) => async(dispatch) => {
    console.log("purchase orderList : ", orderList)
    let triggerData = {};
    let subUrl= '';
    dispatch({ type: PURCHASE_LIST_REQUEST });

    if (cit_key === null || cit_key === undefined) {
        triggerData = {
            "items": orderList,
            "platform": "MOBILE"
        }
        subUrl = 'cart';
    } else {
        // triggerData = {
        //     "items": orderList,
        //     "platform": "MOBILE"
        // }
        subUrl = 'item';
    }

    try {
        const purchaseList = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/orders/${subUrl}`,
            triggerData,
            {
                headers: {
                    Authorization: "Bearer " + token.accessToken,
                },
            }
        );
        dispatch({
            type: PURCHASE_LIST_SUCCESS,
            payload: purchaseList.data.data,
        });
    } catch(error)  {
        dispatch({
            type: PURCHASE_LIST_ERROR,
            payload: error.response.data,
        });
    }
}


const purchase = (state =  initialState, action) => 
    produce(state, (draft) => {
        switch (action.type) {
            case PURCHASE_LIST_REQUEST:
                draft.purchaseListLoading = true;
                draft.purchaseListDone = false;
                draft.orderListError = null;
                break;
            case PURCHASE_LIST_SUCCESS:
                draft.purchaseListLoading = false;
                draft.purchaseListDone = true;
                draft.purchaseList = action.payload;
                break;
            case PURCHASE_LIST_ERROR:
                draft.purchaseListLoading = false;
                draft.purchaseListError = action.payload;
                break;
        }
    }
);
export default purchase;