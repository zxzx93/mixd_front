import axios from "axios";
import produce from "../../util/produce";

// 장바구니 전체 목록 카운트
const GET_ALL_COUNT_REQUEST = "cart/GET_ALL_COUNT_REQUEST";
const GET_ALL_COUNT_SUCCESS = "cart/GET_ALL_COUNT_SUCCESS";
const GET_ALL_COUNT_ERROR = "cart/GET_ALL_COUNT_ERROR";

// 장바구니 리스트 불러오기
const GET_CART_REQUEST = "cart/GET_CART_REQUEST";
const GET_CART_SUCCESS = "cart/GET_CART_SUCCESS";
const GET_CART_ERROR = "cart/GET_CART_ERROR";

// 선택된 장바구니 목록 삭제하기
const DELETE_SELECT_ITEMS_REQUEST = "cart/DELETE_SELECT_ITEMS_REQUEST";
const DELETE_SELECT_ITEMS_SUCCESS = "cart/DELETE_SELECT_ITEMS_SUCCESS";
const DELETE_SELECT_ITEMS_ERROR = "cart/DELETE_SELECT_ITEMS_ERROR";

// 체크된 아이템 목록리스트 공유
const CHECKED_ITEMS_LISTS = "cart/CHECKED_ITEMS_LISTS";

// 선택한 상품 옵션 변경
const PUT_MODIFY_OPTION_ITEM_REQUEST = "cart/PUT_MODIFY_OPTION_ITEM_REQUEST";
const PUT_MODIFY_OPTION_ITEM_SUCCESS = "cart/PUT_MODIFY_OPTION_ITEM_SUCCESS";
const PUT_MODIFY_OPTION_ITEM_ERROR = "cart/PUT_MODIFY_OPTION_ITEM_ERROR";

// 상품 카트에 추가
const POST_ADD_CART_ITEM_REQUEST = "cart/POST_ADD_CART_ITEM_REQUEST";
const POST_ADD_CART_ITEM_SUCCESS = "cart/POST_ADD_CART_ITEM_SUCCESS";
const POST_ADD_CART_ITEM_ERROR = "cart/POST_ADD_CART_ITEM_ERROR";

// const ADD_CHECK_ONE_ITEM = "cart/ADD_CHECK_ONE_ITEM"; // 아이템 한개 삭제 버튼 클릭시 아이디 추가
// const DELETE_CHECK_ONE_ITEM = "cart/DELETE_CHECK_ONE_ITEM"; // 아이템 한개 삭제 버튼 클릭시 아이디 추가
// const ADD_CHECKBOX_LIST = "cart/ADD_CHECKBOX_LIST"; // 아이템 한개 삭제 버튼 클릭시 아이디 추가
// const GET_CHECKBOX_LIST = "cart/GET_CHECKBOX_LIST"; //

// const ADD_MARKET_CHECKBOX_LIST = "cart/ADD_MARKET_CHECKBOX_LIST"; // 각 마켓에 있는 리스트만 체크

const initialState = {
  getAllCountLoading: false, // 유저 카트 전체갯수
  getAllCountDone: false,
  getAllCountError: null,
  allCount: null,

  cartListLoading: false, // 유저 카트 리스트
  cartListDone: false,
  cartListError: null,
  cartList: [],

  selectDeleteItemLoading: false, // 체크박스 선택한 아이템들 삭제
  selectDeleteItemDone: false,
  selectDeleteItemError: null,

  modifyOptionLoading: false, // 상품의 옵션 변경
  modifyOptionDone: false,
  modifyOptionError: null,

  addCartItemLoading: false, // 상품 카트에 추가
  addCartItemDone: false,
  addCartItemError: null,

  checkedItems: [],
};

//카트에 담긴 아이템 수 가져오기
export const getAllCount = token => async dispatch => {
  dispatch({ type: GET_ALL_COUNT_REQUEST, payload: token });
  try {
    const count = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/cart/count`,
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    );
    dispatch({
      type: GET_ALL_COUNT_SUCCESS,
      payload: count.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_COUNT_ERROR,
      payload: error.response.data,
    });
  }
};

// 장바구니 리스트 가져오기
export const getCart = token => async dispatch => {
  dispatch({ type: GET_CART_REQUEST, payload: token });
  try {
    const cart = await axios.get(`${process.env.REACT_APP_API_URL}/api/cart`, {
      headers: {
        Authorization: "Bearer " + token.accessToken,
      },
    });
    dispatch({
      type: GET_CART_SUCCESS,
      payload: cart.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_CART_ERROR,
      payload: error.response.data,
    });
  }
};

// 장바구니 리스트 선택 삭제 (1개삭제 or 여러개삭제 포함)
export const selectDeleteItem = (checkArray, token) => async dispatch => {
  dispatch({ type: DELETE_SELECT_ITEMS_REQUEST, payload: checkArray });
  try {
    const cart = await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/cart`,
      {
        data: {
          cct_id: checkArray,
        },
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    );
    dispatch({
      type: DELETE_SELECT_ITEMS_SUCCESS,
      payload: cart.data.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_SELECT_ITEMS_ERROR,
      payload: error.response.data,
    });
  }
};

export const checkedItemListSum = checkItems => dispatch => {
  dispatch({
    type: CHECKED_ITEMS_LISTS,
    payload: checkItems,
  });
};

// 상품의 옵션 변경
export const modifyOptionItem = (
  cct_id,
  option,
  count,
  token
) => async dispatch => {
  dispatch({ type: PUT_MODIFY_OPTION_ITEM_REQUEST });
  try {
    const cart = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/cart/${cct_id}`,
      {
        cde_id: option.value,
        cct_count: count,
      },
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    );
    dispatch({
      type: PUT_MODIFY_OPTION_ITEM_SUCCESS,
      payload: cart.data.data,
    });
  } catch (error) {
    dispatch({
      type: PUT_MODIFY_OPTION_ITEM_ERROR,
      payload: error.response.data,
    });
  }
};

// 상품 카트에 추가
export const addCartItem = (data, token) => async dispatch => {
  console.log(" 상품 카트에 추가 : ", data, token);
  dispatch({
    type: POST_ADD_CART_ITEM_REQUEST,
    payload: data,
  });
  try {
    const item = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/cart`,
      { item: data },
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    );
    dispatch({
      type: POST_ADD_CART_ITEM_SUCCESS,
      payload: item.data.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ADD_CART_ITEM_ERROR,
      payload: error.response.data.data,
    });
  }
};

const cart = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ALL_COUNT_REQUEST: // 유저 카트 리스트
        draft.getAllCountLoading = true;
        draft.getAllCountDone = false;
        draft.getAllCountError = null;
        break;
      case GET_ALL_COUNT_SUCCESS:
        draft.getAllCountLoading = false;
        draft.getAllCountDone = true;
        draft.allCount = action.payload;
        break;
      case GET_ALL_COUNT_ERROR:
        draft.getAllCountLoading = false;
        draft.getAllCountError = action.payload;
        break;

      case GET_CART_REQUEST: // 유저 카트 리스트
        draft.cartListLoading = true;
        draft.cartListDone = false;
        draft.cartListError = null;
        break;
      case GET_CART_SUCCESS:
        draft.cartListLoading = false;
        draft.cartListDone = true;
        draft.cartList = action.payload;
        break;
      case GET_CART_ERROR:
        draft.cartListLoading = false;
        draft.cartListError = action.payload;
        break;

      case DELETE_SELECT_ITEMS_REQUEST: // 아이템 삭제
        draft.selectDeleteItemLoading = true;
        draft.selectDeleteItemDone = false;
        draft.selectDeleteItemError = null;
        break;
      case DELETE_SELECT_ITEMS_SUCCESS:
        draft.selectDeleteItemLoading = false;
        draft.selectDeleteItemDone = true;
        draft.checkOneItem = [];
        break;
      case DELETE_SELECT_ITEMS_ERROR:
        draft.selectDeleteItemLoading = false;
        draft.selectDeleteItemError = action.payload;
        break;

      case CHECKED_ITEMS_LISTS:
        draft.checkedItems = action.payload;
        break;

      case PUT_MODIFY_OPTION_ITEM_REQUEST: // 상품의 옵션 변경
        draft.modifyOptionLoading = true;
        draft.modifyOptionDone = false;
        draft.modifyOptionError = null;
        break;
      case PUT_MODIFY_OPTION_ITEM_SUCCESS:
        draft.modifyOptionLoading = false;
        draft.modifyOptionDone = true;
        break;
      case PUT_MODIFY_OPTION_ITEM_ERROR:
        draft.modifyOptionLoading = false;
        draft.modifyOptionError = action.payload;
        break;

      case POST_ADD_CART_ITEM_REQUEST: // 상품 카트에 추가
        draft.addCartItemLoading = true;
        draft.addCartItemDone = false;
        draft.addCartItemError = null;
        break;
      case POST_ADD_CART_ITEM_SUCCESS:
        draft.addCartItemLoading = false;
        draft.addCartItemDone = true;
        break;
      case POST_ADD_CART_ITEM_ERROR:
        draft.addCartItemLoading = false;
        draft.addCartItemError = action.payload;
        break;

      // case ADD_CHECK_ONE_ITEM: // 아이템 하나만 배열에 추가
      //   draft.checkOneItem.push(action.id);
      //   draft.checkOneItemDone = true;
      //   break;

      // case DELETE_CHECK_ONE_ITEM: // 아이템 하나만 배열에서 삭제
      //   draft.checkOneItem = draft.checkOneItem.filter(
      //     items => items !== action.id
      //   );
      //   break;

      // case ADD_CHECKBOX_LIST: // 체크박스 전체 리스트
      //   draft.checkBoxList = action.list;
      //   break;

      // case GET_CHECKBOX_LIST: //
      //   draft.checkBoxList = action.id;
      //   break;

      default:
        break;
    }
  });

export default cart;
