import axios from "axios";
import { values } from "lodash";
import produce from "../../util/produce";

const GET_CATEGORIES_ITEMS_REQUEST = "items/GET_CATEGORIES_ITEMS_REQUEST";
const GET_CATEGORIES_ITEMS_SUCCESS = "items/GET_CATEGORIES_ITEMS_SUCCESS";
const GET_CATEGORIES_ITEMS_ERROR = "items/GET_CATEGORIES_ITEMS_ERROR";

const GET_ITEMS_DETAIL_INFO_REQUEST = "items/GET_ITEMS_DETAIL_INFO_REQUEST"; // 상품 디테일 정보 가져오기
const GET_ITEMS_DETAIL_INFO_SUCCESS = "items/GET_ITEMS_DETAIL_INFO_SUCCESS";
const GET_ITEMS_DETAIL_INFO_ERROR = "items/GET_ITEMS_DETAIL_INFO_ERROR";

const GET_COMMENT_REQUEST = "items/GET_COMMENT_REQUEST"; // 상품 Comment 가져오기
const GET_COMMENT_SUCCESS = "items/GET_COMMENT_SUCCESS";
const GET_COMMENT_ERROR = "items/GET_COMMENT_ERROR";

const POST_ITEMS_COMMENT_REQUEST = "items/POST_ITEMS_COMMENT_REQUEST"; // 상품 Comment 작성
const POST_ITEMS_COMMENT_SUCCESS = "items/POST_ITEMS_COMMENT_SUCCESS";
const POST_ITEMS_COMMENT_ERROR = "items/POST_ITEMS_COMMENT_ERROR";

const DELETE_COMMENT_REQUEST = "items/DELETE_COMMENT_REQUEST"; // 상품 Comment 삭제
const DELETE_COMMENT_SUCCESS = "items/DELETE_COMMENT_SUCCESS";
const DELETE_COMMENT_ERROR = "items/DELETE_COMMENT_ERROR";

const GET_ITEM_DETAIL_INFO_REQUEST = "items/GET_ITEM_DETAIL_INFO_REQUEST"; // 아이템 상세보기
const GET_ITEM_DETAIL_INFO_SUCCESS = "items/GET_ITEM_DETAIL_INFO_SUCCESS";
const GET_ITEM_DETAIL_INFO_ERROR = "items/GET_ITEM_DETAIL_INFO_ERROR";

const CHOICE_ITEM_LISTS = "items/CHOICE_ITEM_LISTS"; //옵션 선택한 아이템 리스트 정보
const REMOVE_CHOICE_ITEM_LISTS = "items/REMOVE_CHOICE_ITEM_LISTS"; //옵션 선택한 아이템 리스트 삭제
const INCREASE_COUNT = "items/INCREASE_COUNT"; //옵션 선택한 아이템 갯수 증가
const DECREASE_COUNT = "items/DECREASE_COUNT"; //옵션 선택한 아이템 갯수 증가

const initialState = {
  categoriesItemLoading: false, // 카테고리 아이템
  categoriesItemDone: false,
  categoriesItemError: null,
  categoriesItemLists: [],

  itemsDetailInfoLoading: false, // 상품 디테일 정보 가져오기
  itemsDetailInfoDone: false,
  itemsDetailInfoError: null,
  itemsDetailInfoLists: [], //상품 디테일 리스트들

  commentGetLoading: false, // 상품 Comment 가져오기
  commentGetDone: false,
  commentGetError: null,
  comment: [], //코멘트 리스트

  commentPostLoading: false, // 상품 Comment 작성
  commentPostDone: false,
  commentPostError: null,
  commentPostitem: [], //코멘트 작성 후 리스트 다시 불러옴

  commentDeleteLoading: false, // 상품 Comment 삭제
  commentDeleteDone: false,
  commentDeleteError: null,

  itemDetailLoading: false, // 아이템 상세보기
  itemDetailDone: false,
  itemDetailError: null,
  itemDetailInfo: [],

  choiceItemLists: [], //옵션 선택한 아이템 리스트 정보
  choiceItemValue: [], // 장바구니 추가 시 넘길 데이터 (cde_id, count)
};

export const categoriesItem = id => async dispatch => {
  dispatch({ type: GET_CATEGORIES_ITEMS_REQUEST });
  try {
    const categoriesItemInfo = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/items/category/${id}`
    );

    dispatch({
      type: GET_CATEGORIES_ITEMS_SUCCESS,
      payload: categoriesItemInfo,
    });
  } catch (error) {
    dispatch({
      type: GET_CATEGORIES_ITEMS_ERROR,
      payload: error.response,
    });
  }
};

// 상품 디테일 정보 가져오기
export const getItemsDetail = (
  cit_key,
  type,
  token,
  gender
) => async dispatch => {
  dispatch({ type: GET_ITEMS_DETAIL_INFO_REQUEST });
  try {
    const itemsInfo = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/items/${cit_key}/detail/${type}`,
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
          gender: gender ? 1 : 2,
        },
      }
    );
    dispatch({
      type: GET_ITEMS_DETAIL_INFO_SUCCESS,
      payload: itemsInfo.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ITEMS_DETAIL_INFO_ERROR,
      payload: error.response,
    });
  }
};

// 상품 Comment 가져오기
export const getComment = cit_key => async dispatch => {
  console.log("cit_key", cit_key);
  dispatch({ type: GET_COMMENT_REQUEST });
  try {
    const comment = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/items/comment/${cit_key}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    dispatch({
      type: GET_COMMENT_SUCCESS,
      payload: comment.data.data,
    });
    // console.log(comment, "comment");
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_COMMENT_ERROR,
      payload: error.response,
    });
  }
};

// 상품 Comment 작성
export const commentPost = (comment, cit_key, token) => async dispatch => {
  // console.log("상품 Comment 작성", comment, cit_key, token);
  dispatch({ type: POST_ITEMS_COMMENT_REQUEST });
  try {
    const text = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/items/comment/${cit_key}`,
      comment,
      {
        headers: {
          Authorization: "Bearer " + token,
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    dispatch({
      type: POST_ITEMS_COMMENT_SUCCESS,
      payload: text.data,
    });
    console.log(text, "text");
  } catch (error) {
    console.log(error);
    dispatch({
      type: POST_ITEMS_COMMENT_ERROR,
      payload: error.response,
    });
  }
};

// 상품 Comment 삭제
export const deleteComment = (cmt_id, token) => async dispatch => {
  // console.log("삭제할 아이디랑 토큰 :::", cmt_id, token);
  dispatch({ type: DELETE_COMMENT_REQUEST });
  try {
    const comment = await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/items/comment/${cmt_id}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    dispatch({
      type: DELETE_COMMENT_SUCCESS,
      payload: comment.data.data,
      id: cmt_id,
    });
    // console.log("삭제 했을때 SUCCESS", comment);
  } catch (error) {
    dispatch({ type: DELETE_COMMENT_ERROR, payload: error });
  }
};

// 아이템 상세보기
export const getItemDetailInfo = cit_key => async dispatch => {
  console.log("아이템 상세보기. cit_key", cit_key);
  dispatch({ type: GET_ITEM_DETAIL_INFO_REQUEST });
  try {
    const itemInfo = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/items/list/${cit_key}/detail`
    );
    dispatch({
      type: GET_ITEM_DETAIL_INFO_SUCCESS,
      payload: itemInfo.data.data,
    });
    // console.log(comment, "comment");
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_ITEM_DETAIL_INFO_ERROR,
      payload: error.response,
    });
  }
};

//옵션 선택한 아이템 리스트 정보
export const choiceItemList = list => ({ type: CHOICE_ITEM_LISTS, list });

//옵션 선택한 아이템 리스트 삭제
export const removeChoiceItemList = cde_id => ({
  type: REMOVE_CHOICE_ITEM_LISTS,
  cde_id,
});

//옵션 선택한 아이템 갯수 증가
export const increaseCount = (cde_id, index) => ({
  type: INCREASE_COUNT,
  cde_id,
  index,
});
//옵션 선택한 아이템 갯수 증가
export const decreaseCount = (cde_id, index) => ({
  type: DECREASE_COUNT,
  cde_id,
  index,
});

const items = (state = initialState, action) =>
  produce(state, draft => {
    // console.log(action.payload);
    console.log("리덕스", action.cde_id, action.index);
    switch (action.type) {
      case GET_CATEGORIES_ITEMS_REQUEST:
        draft.categoriesItemLoading = true;
        draft.categoriesItemDone = false;
        draft.categoriesItemError = null;
        break;
      case GET_CATEGORIES_ITEMS_SUCCESS:
        draft.categoriesItemLoading = false;
        draft.categoriesItemDone = true;
        draft.categoriesItemLists = action.payload.data.data;
        break;
      case GET_CATEGORIES_ITEMS_ERROR:
        draft.categoriesItemLoading = false;
        draft.categoriesItemError = action.payload;
        break;

      case GET_ITEMS_DETAIL_INFO_REQUEST: // 상품 디테일 정보 가져오기
        draft.itemsDetailInfoLoading = true;
        draft.itemsDetailInfoDone = false;
        draft.itemsDetailInfoError = null;
        break;
      case GET_ITEMS_DETAIL_INFO_SUCCESS:
        draft.itemsDetailInfoLoading = false;
        draft.itemsDetailInfoDone = true;
        draft.itemsDetailInfoLists = action.payload;
        break;
      case GET_ITEMS_DETAIL_INFO_ERROR:
        draft.itemsDetailInfoLoading = false;
        draft.itemsDetailInfoError = action.payload;
        break;

      case GET_COMMENT_REQUEST: // 상품 Comment 가져오기
        draft.commentGetLoading = true;
        draft.commentGetDone = false;
        draft.commentGetError = null;
        break;
      case GET_COMMENT_SUCCESS:
        draft.commentGetLoading = false;
        draft.commentGetDone = true;
        draft.comment = action.payload;
        break;
      case GET_COMMENT_ERROR:
        draft.commentGetLoading = false;
        draft.commentGetError = action.payload;
        break;

      case POST_ITEMS_COMMENT_REQUEST: // 상품 Comment 작성
        draft.commentPostLoading = true;
        draft.commentPostDone = false;
        draft.commentPostError = null;
        break;
      case POST_ITEMS_COMMENT_SUCCESS:
        draft.commentPostLoading = false;
        draft.commentPostDone = true;
        draft.commentPostitem = action.payload;
        break;
      case POST_ITEMS_COMMENT_ERROR:
        draft.commentPostLoading = false;
        draft.commentPostError = action.payload;
        break;

      case DELETE_COMMENT_REQUEST: // 상품 Comment 삭제
        draft.commentDeleteLoading = true;
        draft.commentDeleteDone = false;
        draft.commentDeleteError = null;
        break;
      case DELETE_COMMENT_SUCCESS:
        draft.commentDeleteLoading = false;
        draft.commentDeleteDone = true;
        draft.comment = state.comment.filter(
          value => value.cmt_id !== Number(action.id)
        );
        break;
      case DELETE_COMMENT_ERROR:
        draft.commentDeleteLoading = false;
        draft.commentDeleteError = action.payload;
        break;

      case GET_ITEM_DETAIL_INFO_REQUEST: // 아이템 상세보기
        draft.itemDetailLoading = true;
        draft.itemDetailDone = false;
        draft.itemDetailError = null;
        break;
      case GET_ITEM_DETAIL_INFO_SUCCESS:
        draft.itemDetailLoading = false;
        draft.itemDetailDone = true;
        draft.itemDetailInfo = action.payload;
        break;
      case GET_ITEM_DETAIL_INFO_ERROR:
        draft.itemDetailLoading = false;
        draft.itemDetailError = action.payload;
        break;

      case CHOICE_ITEM_LISTS: //옵션 선택한 아이템 리스트 정보
        draft.choiceItemLists.push(action.list);
        draft.choiceItemValue.push({
          cde_id: action.list.cde_id,
          cct_count: 1,
        }); // 장바구니 추가 시 넘길 데이터
        break;

      case REMOVE_CHOICE_ITEM_LISTS: // 장바구니 추가 시 넘길 데이터 삭제
        draft.choiceItemLists = draft.choiceItemLists.filter(
          value => value.cde_id !== action.cde_id
        );
        draft.choiceItemValue = draft.choiceItemValue.filter(
          value => value.cde_id !== action.cde_id
        );
        break;

      case INCREASE_COUNT: //아이템 갯수 증가
        // const index = draft.choiceItemValue.findIndex(
        //   todo => todo.cde_id === action.cde_id
        // );
        // if (index !== -1)
        draft.choiceItemValue[action.index].cct_count =
          draft.choiceItemValue[action.index].cct_count + 1;
        break;

      case DECREASE_COUNT: //아이템 갯수 증가
        // const i = draft.choiceItemValue.findIndex(
        //   todo => todo.cde_id === action.cde_id
        // );
        if (action.index !== -1)
          draft.choiceItemValue[action.index].cct_count =
            draft.choiceItemValue[action.index].cct_count - 1;
        break;

      default:
        break;
    }
  });

export default items;
