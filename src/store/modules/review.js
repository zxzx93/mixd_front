import axios from "axios";
import produce from "../../util/produce";

// 리뷰
const REVIEW_NONE_LISTS_REQUEST = "review/REVIEW_NONE_LISTS_REQUEST";
const REVIEW_NONE_LISTS_SUCCESS = "review/REVIEW_NONE_LISTS_SUCCESS";
const REVIEW_NONE_LISTS_ERROR = "review/REVIEW_NONE_LISTS_ERROR";

// 회원이 쓴 리뷰
const REVIEW_LISTS_REQUEST = "review/REVIEW_LISTS_REQUEST";
const REVIEW_LISTS_SUCCESS = "review/REVIEW_LISTS_SUCCESS";
const REVIEW_LISTS_ERROR = "review/REVIEW_LISTS_ERROR";

// 리뷰 작성여부
const REVIEW_WRITE_ORDER_LISTS_REQUEST =
  "review/REVIEW_WRITE_ORDER_LISTS_REQUEST";
const REVIEW_WRITE_ORDER_LISTS_SUCCESS =
  "review/REVIEW_WRITE_ORDER_LISTS_SUCCESS";
const REVIEW_WRITE_ORDER_LISTS_ERROR = "review/REVIEW_WRITE_ORDER_LISTS_ERROR";

// 상품 디테일 - 회원이 쓴 리뷰
const GET_REVIEW_LISTS_REQUEST = "review/GET_REVIEW_LISTS_REQUEST";
const GET_REVIEW_LISTS_REQUEST_SUCCESS =
  "review/GET_REVIEW_LISTS_REQUEST_SUCCESS";
const GET_REVIEW_LISTS_REQUEST_ERROR = "review/GET_REVIEW_LISTS_REQUEST_ERROR";


//  리뷰 작성
const GET_REVIEW_LISTS_WRITE_REQUEST = "review/GET_REVIEW_LISTS_WRITE_REQUEST";
const GET_REVIEW_LISTS_WRITE_REQUEST_SUCCESS =
  "review/GET_REVIEW_LISTS_WRITE_REQUEST_SUCCESS";
const GET_REVIEW_LISTS_WRITE_REQUEST_ERROR = "review/GET_REVIEW_LISTS_WRITE_REQUEST_ERROR";

const initialState = {

  reviewNoneListLoading: false, // 리뷰
  reviewNoneListDone: false,
  reviewNoneListError: false,
  reviewNoneLists: [],

  reviewListLoading: false, // 회원이 쓴 리뷰
  reviewListDone: false,
  reviewListError: false,
  reviewLists: [],

  reviewOrderWriteListLoading: false, // 리뷰 작성여부
  reviewOrderWriteListDone: false,
  reviewOrderWriteListError: false,
  reviewOrderWriteLists: [],

  itemsReviewListLoading: false, // 상품 디테일 - 회원이 쓴 리뷰
  itemsReviewListDone: false,
  itemsReviewListError: false,
  itemsReviewLists: [],

  reviewListWriteLoading: false, // 리뷰 작성
  reviewListWriteDone: false,
  reviewListWriteError: false,
  reviewWriteLists: [],
};

// 리뷰
export const reviewNoneListInfo = (token, cre_id) => async dispatch => {
  dispatch({ type: REVIEW_NONE_LISTS_REQUEST });
  try {
    const reviewNoneList = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/review/${cre_id}`,
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    );
    dispatch({
      type: REVIEW_NONE_LISTS_SUCCESS,
      payload: reviewNoneList.data.data,
    });
  } catch (error) {
    dispatch({
      type: REVIEW_NONE_LISTS_ERROR,
      payload: error.response,
    });
  }
};

// 회원이 쓴 리뷰
export const reviewListInfo = (token, mem_id) => async dispatch => {
  dispatch({ type: REVIEW_LISTS_REQUEST });
  try {
    const reviewList = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/review/users/${mem_id}`,
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    );
    dispatch({
      type: REVIEW_LISTS_SUCCESS,
      payload: reviewList.data.data,
    });
  } catch (error) {
    dispatch({
      type: REVIEW_LISTS_ERROR,
      payload: error.response,
    });
  }
};

// 리뷰 작성여부
export const reviewOrderWriteListInfo = (token, mem_id) => async dispatch => {
  dispatch({ type: REVIEW_WRITE_ORDER_LISTS_REQUEST });
  try {
    const reviewWriteOrderList = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/review/users/${mem_id}/orders`,
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    );
    dispatch({
      type: REVIEW_WRITE_ORDER_LISTS_SUCCESS,
      payload: reviewWriteOrderList.data.data,
    });
  } catch (error) {
    dispatch({
      type: REVIEW_WRITE_ORDER_LISTS_ERROR,
      payload: error.response,
    });
  }
};

// 상품 디테일 - 회원이 쓴 리뷰
export const itemsReviewListInfo = (token, cit_key) => async dispatch => {
  console.log("cit_key::", cit_key);
  dispatch({ type: GET_REVIEW_LISTS_REQUEST });
  try {
    const itemsReviewList = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/review/items/${cit_key}`,
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    );
    dispatch({
      type: GET_REVIEW_LISTS_REQUEST_SUCCESS,
      payload: itemsReviewList.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_REVIEW_LISTS_REQUEST_ERROR,
      payload: error.response,
    });
  }
};

// 리뷰작성
export const reviewWriteListInfo = (token, cod_id,value) => async dispatch => {
  console.log("cod_id::", cod_id, value);
  dispatch({ type: GET_REVIEW_LISTS_WRITE_REQUEST });
  try {
    const reviewWriteList = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/review/${cod_id}`,
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    );
    dispatch({
      type: GET_REVIEW_LISTS_WRITE_REQUEST_SUCCESS,
      payload: reviewWriteList.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_REVIEW_LISTS_WRITE_REQUEST_ERROR,
      payload: error.response,
    });
  }
};

const review = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REVIEW_NONE_LISTS_REQUEST: // 리뷰
      draft.reviewNoneListLoading = true;
      draft.reviewNoneListDone = false;
      draft.reviewNoneListError = null;
      break;
    case REVIEW_NONE_LISTS_SUCCESS:
      draft.reviewNoneListLoading = false;
      draft.reviewNoneListDone = true;
      draft.reviewNoneLists = action.payload;
      break;
    case REVIEW_NONE_LISTS_ERROR:
      draft.reviewNoneListLoading = false;
      draft.reviewNoneListError = action.payload;
      break;

      case REVIEW_LISTS_REQUEST: // 회원이 쓴 리뷰
        draft.reviewListLoading = true;
        draft.reviewListDone = false;
        draft.reviewListError = null;
        break;
      case REVIEW_LISTS_SUCCESS:
        draft.reviewListLoading = false;
        draft.reviewListDone = true;
        draft.reviewLists = action.payload;
        break;
      case REVIEW_LISTS_ERROR:
        draft.reviewListLoading = false;
        draft.reviewListError = action.payload;
        break;

      case REVIEW_WRITE_ORDER_LISTS_REQUEST: // 리뷰 작성여부
        draft.reviewOrderWriteListLoading = true;
        draft.reviewOrderWriteListDone = false;
        draft.reviewOrderWriteListError = null;
        break;
      case REVIEW_WRITE_ORDER_LISTS_SUCCESS:
        draft.reviewOrderWriteListLoading = false;
        draft.reviewOrderWriteListDone = true;
        draft.reviewOrderWriteLists = action.payload;
        break;
      case REVIEW_WRITE_ORDER_LISTS_ERROR:
        draft.reviewOrderWriteListLoading = false;
        draft.reviewOrderWriteListError = action.payload;
        break;

      case GET_REVIEW_LISTS_REQUEST: // 상품 디테일 - 회원이 쓴 리뷰
        draft.itemsReviewListLoading = true;
        draft.itemsReviewListDone = false;
        draft.itemsReviewListError = null;
        break;
      case GET_REVIEW_LISTS_REQUEST_SUCCESS:
        draft.itemsReviewListLoading = false;
        draft.itemsReviewListDone = true;
        draft.itemsReviewLists = action.payload;
        break;
      case GET_REVIEW_LISTS_REQUEST_ERROR:
        draft.itemsReviewListLoading = false;
        draft.itemsReviewListError = action.payload;
        break;

        case GET_REVIEW_LISTS_WRITE_REQUEST: // 리뷰작성
        draft.reviewListWriteLoading = true;
        draft.reviewListWriteDone = false;
        draft.reviewListWriteError = null;
        break;
      case GET_REVIEW_LISTS_WRITE_REQUEST_SUCCESS:
        draft.reviewListWriteLoading = false;
        draft.reviewListWriteDone = true;
        draft.reviewWriteLists = action.payload;
        break;
      case GET_REVIEW_LISTS_WRITE_REQUEST_ERROR:
        draft.reviewListWriteLoading = false;
        draft.reviewListWriteError = action.payload;
        break;

      default:
        break;
    }
  });

export default review;
