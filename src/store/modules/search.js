import axios from "axios";
import produce from "../../util/produce";

// 상품 검색
const GET_SEARCH_RESULT_REQUEST = "search/GET_SEARCH_RESULT_REQUEST";
const GET_SEARCH_RESULT_SUCCESS = "search/GET_SEARCH_RESULT_SUCCESS";
const GET_SEARCH_RESULT_ERROR = "search/GET_SEARCH_RESULT_ERROR";

// 상품 검색 (로그 호출만 함)
const POST_SEARCH_RESULT_LOG_REQUEST = "search/POST_SEARCH_RESULT_LOG_REQUEST";
const POST_SEARCH_RESULT_LOG_SUCCESS = "search/POST_SEARCH_RESULT_LOG_SUCCESS";
const POST_SEARCH_RESULT_LOG_ERROR = "search/POST_SEARCH_RESULT_LOG_ERROR";

// 마켓 검색
const GET_SEARCH_MARKET_RESULT_REQUEST =
  "search/GET_SEARCH_MARKET_RESULT_REQUEST";
const GET_SEARCH_MARKET_RESULT_SUCCESS =
  "search/GET_SEARCH_MARKET_RESULT_SUCCESS";
const GET_SEARCH_MARKET_RESULT_ERROR = "search/GET_SEARCH_MARKET_RESULT_ERROR";

// 상품 인기 리스트
const GET_SEARCH_POULAR_REQUEST = "search/GET_SEARCH_POULAR_REQUEST";
const GET_SEARCH_POULAR_SUCCESS = "search/GET_SEARCH_POULAR_SUCCESS";
const GET_SEARCH_POULAR_ERROR = "search/GET_SEARCH_POULAR_ERROR";

const initialState = {
  searchResultLoading: false, // 상품 검색 결과
  searchResultDone: false,
  searchResultError: null,
  searchResultLists: [],

  searchResultLogLoading: false, // 상품 검색 결과 (로그 호출 만함)
  searchResultLogDone: false,
  searchResultLogError: null,
  searchResultLogLists: [],

  searchResultMarketLoading: false, // 마켓 검색 결과
  searchResultMarketDone: false,
  searchResultMarketError: null,
  searchResultMarketLists: [],

  searchPoularLoading: false, // 마켓 검색 결과
  searchPoularDone: false,
  searchPoularError: null,
  searchPoularLists: [],
};

// 상품 검색
export const searchResults = value => async dispatch => {
  console.log(value);
  dispatch({ type: GET_SEARCH_RESULT_REQUEST });
  try {
    const searchResultInfo = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/search/items/${value}`
    );
    console.log("searchResultInfo", searchResultInfo);
    dispatch({
      type: GET_SEARCH_RESULT_SUCCESS,
      payload: searchResultInfo,
    });
  } catch (error) {
    dispatch({ type: GET_SEARCH_RESULT_ERROR, payload: error.response });
  }
};
// 상품 검색 로그 (호출만 함)
export const searchResultsLog = value => async dispatch => {
  console.log(value);
  dispatch({ type: POST_SEARCH_RESULT_LOG_REQUEST });
  try {
    const searchResultLogInfo = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/search/${value}`
    );
    // console.log("searchResultInfo",searchResultInfo);
    dispatch({
      type: POST_SEARCH_RESULT_LOG_SUCCESS,
      payload: searchResultLogInfo,
    });
  } catch (error) {
    dispatch({ type: POST_SEARCH_RESULT_LOG_ERROR, payload: error.response });
  }
};

// 마켓 검색
export const searchResultMarket = value => async dispatch => {
  // console.log("user  : ", token);
  dispatch({ type: GET_SEARCH_MARKET_RESULT_REQUEST });
  try {
    const searchResultMarketInfo = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/search/markets/${value}`
    );
    dispatch({
      type: GET_SEARCH_MARKET_RESULT_SUCCESS,
      payload: searchResultMarketInfo.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_SEARCH_MARKET_RESULT_ERROR,
      payload: error,
    });
  }
};

// 마켓 인기  검색어
export const searchPoular = value => async dispatch => {
  // console.log("user  : ", token);
  dispatch({ type: GET_SEARCH_POULAR_REQUEST });
  try {
    const searchPoulartInfo = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/search/popular`
    );
    dispatch({
      type: GET_SEARCH_POULAR_SUCCESS,
      payload: searchPoulartInfo.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_SEARCH_POULAR_ERROR,
      payload: error,
    });
  }
};

const search = (state = initialState, action) =>
  produce(state, draft => {
    // console.log(action.payload);

    switch (action.type) {
      case GET_SEARCH_RESULT_REQUEST: // 상품 검색
        draft.searchResultLoading = true;
        draft.searchResultDone = false;
        draft.searchResultError = null;
        break;
      case GET_SEARCH_RESULT_SUCCESS:
        draft.searchResultLoading = false;
        draft.searchResultDone = true;
        draft.searchResultLists = action.payload.data.data.items;
        break;
      case GET_SEARCH_RESULT_ERROR:
        draft.searchResultLoading = false;
        draft.searchResultError = action.payload;
        break;
      case POST_SEARCH_RESULT_LOG_REQUEST: // 상품 검색 (로그 호출만 함)
        draft.searchResultLogLoading = true;
        draft.searchResultLogDone = false;
        draft.searchResultLogError = null;
        break;
      case POST_SEARCH_RESULT_LOG_SUCCESS:
        draft.searchResultLogLoading = false;
        draft.searchResultLogDone = true;
        draft.searchResultLogLists = action.payload;
        break;
      case POST_SEARCH_RESULT_LOG_ERROR:
        draft.searchResultLogLoading = false;
        draft.searchResultLogError = action.payload;
        break;

      case GET_SEARCH_MARKET_RESULT_REQUEST: // 마켓 검색
        draft.searchResultMarketLoading = true;
        draft.searchResultMarketDone = false;
        draft.searchResultMarketError = null;
        break;
      case GET_SEARCH_MARKET_RESULT_SUCCESS:
        draft.searchResultMarketLoading = false;
        draft.searchResultMarketDone = true;
        draft.searchResultMarketLists = action.payload.data;
        break;
      case GET_SEARCH_MARKET_RESULT_ERROR:
        draft.searchResultMarketLoading = false;
        draft.searchResultMarketError = action.payload;
        break;
      case GET_SEARCH_POULAR_REQUEST: // 검색 인기 리스트
        draft.searchPoularLoading = true;
        draft.searchPoularDone = false;
        draft.searchPoularError = null;
        break;
      case GET_SEARCH_POULAR_SUCCESS:
        draft.searchPoularLoading = false;
        draft.searchPoularDone = true;
        draft.searchPoularLists = action.payload.data;
        break;
      case GET_SEARCH_POULAR_ERROR:
        draft.searchPoularLoading = false;
        draft.searchPoularError = action.payload;
        break;

      default:
        break;
    }
  });

export default search;
