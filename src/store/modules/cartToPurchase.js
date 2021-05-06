import produce from "../../util/produce";

const CART_TO_PURCHASE_LIST = "purchase/CART_TO_PURCHASE_LIST";

const initialState = {
    orderToPurchaseList: [],
}

export const orderListPass = (orderList) => async(dispatch) => {
    if (orderList.length !== 0) {
        dispatch({ 
            type: CART_TO_PURCHASE_LIST,
            orderList,
        });
    }
}

const cartToPurchase = (state =  initialState, action) => 
    produce(state, (draft) => {
        switch (action.type) {
            case CART_TO_PURCHASE_LIST:
                draft.orderToPurchaseList = action.orderList;
                break;
        }
    }
);

export default cartToPurchase;