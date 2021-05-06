import axios from "axios";
import produce from "../../util/produce";

// 찜 추가
const ZZIM_WISH_STATE_REQUEST = "zzim/ZZIM_WISH_STATE";
const ZZIM_WISH_STATE_SUCCESS = "zzim/ZZIM_WISH_STATE_SUCCESS";
const ZZIM_WISH_STATE_ERROR = "zzim/ZZIM_WISH_STATE_ERROR";
// 찜 삭제
const ZZIM_WISH_STATE_DELETE_REQUEST = "zzim/ZZIM_WISH_STATE_DELETE_REQUEST";
const ZZIM_WISH_STATE_DELETE_SUCCESS = "zzim/ZZIM_WISH_STATE_DELETE_SUCCESS";
const ZZIM_WISH_STATE_DELETE_ERROR = "zzim/ZZIM_WISH_STATE_DELETE_ERROR";
// 찜 리스트
const ZZIM_WISH_LIST_REQUEST = "zzim/ZZIM_WISH_LIST_REQUEST";
const ZZIM_WISH_LIST_SUCCESS = "zzim/ZZIM_WISH_LIST_SUCCESS";
const ZZIM_WISH_LIST_ERROR = "zzim/ZZIM_WISH_LIST_ERROR";

const initialState = {
  // 찜 추가
  zzimWishLoading: false,
  zzimWishDone: false,
  zzimWishState: [],
  zzimWishError: null,
  // 찜 삭제
  zzimWishDeleteLoading: false,
  zzimWishDeleteDone: false,
  zzimWishDeleteState: [],
  zzimWishDeleteError: null,
  // 찜 리스트
  zzimListsLoading: false,
  zzimListsDone: false,
  zzimListsInfo: [],
  zzimListsError: null,
};

// 찜 상태 변경
export const zzimeWishInfo = (id, token) => async dispatch => {
  dispatch({ type: ZZIM_WISH_STATE_REQUEST });
  // console.log("zzim 토큰", id, token);

  try {
    const zzimAdd = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/wishlists`,
      {
        cit_id: id,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    dispatch({
      type: ZZIM_WISH_STATE_SUCCESS,
      payload: zzimAdd.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ZZIM_WISH_STATE_ERROR,
      payload: error.response,
    });
  }
};

export const zzimeWishDeleteInfo = (id, token) => async dispatch => {
  dispatch({ type: ZZIM_WISH_STATE_DELETE_REQUEST });
  // console.log("zzim  토큰", id, token);

  try {
    const zzimRemove = await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/wishlists`,
      {
        data: {
          cit_id: id,
        },
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    dispatch({
      type: ZZIM_WISH_STATE_DELETE_SUCCESS,
      payload: zzimRemove.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ZZIM_WISH_STATE_DELETE_ERROR,
      payload: error.response,
    });
  }
};

export const zzimeWishListInfo = token => async dispatch => {
  dispatch({ type: ZZIM_WISH_LIST_REQUEST });

  try {
    const zzimListInfo = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/wishlists`,
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    );
    dispatch({
      type: ZZIM_WISH_LIST_SUCCESS,
      payload: zzimListInfo.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ZZIM_WISH_LIST_ERROR,
      payload: error.response,
    });
  }
};

const zzim = (state = initialState, action) =>
  produce(state, draft => {
    // console.log(action.payload);
    switch (action.type) {
      case ZZIM_WISH_STATE_REQUEST: // 찜 추가
        draft.zzimWishLoading = true;
        draft.zzimWishDone = false;
        draft.zzimWishError = null;
        break;

      case ZZIM_WISH_STATE_SUCCESS:
        draft.zzimWishLoading = false;
        draft.zzimWishDone = true;
        draft.zzimWishState = action.payload;
        draft.zzimWishStatus = action.payload;
        break;

      case ZZIM_WISH_STATE_ERROR:
        draft.zzimWishLoading = false;
        draft.zzimWishError = action.payload;
        break;

      case ZZIM_WISH_STATE_DELETE_REQUEST: //찜 삭제
        draft.zzimWishDeleteLoading = true;
        draft.zzimWishDeleteDone = false;
        draft.zzimWishDeleteError = null;
        break;

      case ZZIM_WISH_STATE_DELETE_SUCCESS:
        draft.zzimWishDeleteLoading = false;
        draft.zzimWishDeleteDone = true;
        draft.zzimWishDeleteState = action.payload;
        draft.zzimWishStatus = action.payload;
        break;

      case ZZIM_WISH_STATE_DELETE_ERROR:
        draft.zzimWishDeleteLoading = false;
        draft.zzimWishDeleteError = action.payload;
        break;

      case ZZIM_WISH_LIST_REQUEST: //찜 리스트
        draft.zzimListsLoading = true;
        draft.zzimListsDone = false;
        draft.zzimListsError = null;
        break;

      case ZZIM_WISH_LIST_SUCCESS:
        draft.zzimListsLoading = false;
        draft.zzimListsDone = true;
        draft.zzimListsInfo = action.payload.data.items;
        break;

      case ZZIM_WISH_LIST_ERROR:
        draft.zzimListsLoading = false;
        draft.zzimListsError = action.payload;
        break;

      default:
        break;
    }
  });
export default zzim;
