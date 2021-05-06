import axios from "axios";
import produce from "../../util/produce";

// 기획전 배너 (기)
const BANNER_LIST_REQUEST = "plan/BANNER_LIST_REQUEST";
const BANNER_LIST_SUCCESS = "plan/BANNER_LIST_SUCCESS";
const BANNER_LIST_ERROR = "plan/BANNER_LIST_ERROR";

// 기획전 디테일
const GET_PLAN_DETAIL_LISTS_REQUEST = "plan/GET_PLAN_DETAIL_LISTS_REQUEST";
const GET_PLAN_DETAIL_LISTS_SUCCESS = "plan/GET_PLAN_DETAIL_LISTS_SUCCESS";
const GET_PLAN_DETAIL_LISTS_ERROR = "plan/GET_PLAN_DETAIL_LISTS_ERROR";

const initialState = {
  bannerListLoading: false, // 기획전 배너 리스트
  bannerListDone: false,
  bannerListError: false,
  bannerLists: [],

  planDetailListLoading: false,
  planDetailListDone: false,
  planDetailListError: null,
  planDetailList: [],
};

// 기획전 리스트
export const bannerListInfo = token => async dispatch => {
  dispatch({ type: BANNER_LIST_REQUEST });

  try {
    const bannerList = token
      ? await axios.get(`${process.env.REACT_APP_API_URL}/api/plan`, {
          headers: {
            Authorization: "Bearer " + token.accessToken,
          },
        })
      : await axios.get(`${process.env.REACT_APP_API_URL}/api/plan`);
    // console.log(bannerList);
    dispatch({
      type: BANNER_LIST_SUCCESS,
      payload: bannerList.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: BANNER_LIST_ERROR,
      payload: error.response,
    });
  }
};

// 기획전 상품 리스트
export const planDetailListInfo = (plan_id, id) => async dispatch => {
  dispatch({ type: GET_PLAN_DETAIL_LISTS_REQUEST });

  try {
    const planDetailLists = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/plan/${plan_id}`
    );
    dispatch({
      type: GET_PLAN_DETAIL_LISTS_SUCCESS,
      payload: planDetailLists.data,
    });
    console.log("기획전 디테일 ", planDetailLists.data.data);
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_PLAN_DETAIL_LISTS_ERROR,
      payload: error.response,
    });
  }
};

const plan = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case BANNER_LIST_REQUEST: // 기획전 배너 리스트
        draft.bannerListLoading = true;
        draft.bannerListDone = false;
        draft.bannerListError = null;
        break;

      case BANNER_LIST_SUCCESS:
        draft.bannerListLoading = false;
        draft.bannerListDone = true;
        draft.bannerLists = action.payload;
        break;

      case BANNER_LIST_ERROR:
        draft.bannerListLoading = false;
        draft.bannerListError = action.payload;
        break;

      case GET_PLAN_DETAIL_LISTS_REQUEST:
        draft.planDetailListLoading = true;
        draft.planDetailListDone = false;
        draft.planDetailListError = null;
        break;

      case GET_PLAN_DETAIL_LISTS_SUCCESS:
        draft.planDetailListLoading = false;
        draft.planDetailListDone = true;
        draft.planDetailList = action.payload.data;
        break;

      case GET_PLAN_DETAIL_LISTS_ERROR:
        draft.planDetailListLoading = false;
        draft.planDetailListError = action.payload;
        break;

      default:
        break;
    }
  });
export default plan;
