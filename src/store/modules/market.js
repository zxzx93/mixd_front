import axios from "axios";
import produce from "../../util/produce";

const GET_REAL_TIME_MARKET_REQUEST = "market/GET_REAL_TIME_MARKET_REQUEST";
const GET_REAL_TIME_MARKET_SUCCESS = "market/GET_REAL_TIME_MARKET_SUCCESS";
const GET_REAL_TIME_MARKET_ERROR = "market/GET_REAL_TIME_MARKET_ERROR";
// 마켓 랭킹 페이지
const GET_REAL_TIME_MORE_MARKET_REQUEST =
    "market/GET_REAL_TIME_MORE_MARKET_REQUEST";
const GET_REAL_TIME_MORE_MARKET_SUCCESS =
    "market/GET_REAL_TIME_MORE_MARKET_SUCCESS";
const GET_REAL_TIME_MORE_MARKET_ERROR =
    "market/GET_REAL_TIME_MORE_MARKET_ERROR";

// 마켓 즐겨찾기 추가
const POST_MARKET_LIKE_REQUEST = "market/POST_MARKET_LIKE_REQUEST";
const POST_MARKET_LIKE_SUCCESS = "market/POST_MARKET_LIKE_SUCCESS";
const POST_MARKET_LIKE_ERROR = "market/POST_MARKET_LIKE_ERROR";
// 마켓 즐겨찾기 삭제delete
const DETETE_MARKET_DELETE_REQUEST = "market/DETETE_MARKET_DELETE_REQUEST";
const DETETE_MARKET_DELETE_SUCCESS = "market/DETETE_MARKET_DELETE_SUCCESS";
const DETETE_MARKET_DELETE_ERROR = "market/DETETE_MARKET_DELETE_ERROR";
// 마켓 즐겨찾기 리스트
const GET_MARKET_LIST_REQUEST = "market/GET_MARKET_LIST_REQUEST";
const GET_MARKET_LIST_SUCCESS = "market/GET_MARKET_LIST_SUCCESS";
const GET_MARKET_LIST_ERROR = "market/GET_MARKET_LIST_ERROR";
// 마켓 페이지
const GET_MARKET_DETAIL_REQUEST = "market/GET_MARKET_DETAIL_REQUEST";
const GET_MARKET_DETAIL_SUCCESS = "market/GET_MARKET_DETAIL_SUCCESS";
const GET_MARKET_DETAIL_ERROR = "market/GET_MARKET_DETAIL_ERROR";
// 마켓 별 카테고리 페이지
const GET_MARKET_DETAIL_CATEGORIES_REQUEST =
    "market/GET_MARKET_DETAIL_CATEGORIES_REQUEST";
const GET_MARKET_DETAIL_CATEGORIE_SSUCCESS =
    "market/GET_MARKET_DETAIL_CATEGORIE_SSUCCESS";
const GET_MARKET_DETAIL_CATEGORIES_ERROR =
    "market/GET_MARKET_DETAIL_CATEGORIES_ERROR";
// 마켓 별 리뷰
const GET_MARKET_DETAIL_REVIEWS_REQUEST =
    "market/GET_MARKET_DETAIL_REVIEWS_REQUEST";
const GET_MARKET_DETAIL_REVIEWS_SSUCCESS =
    "market/GET_MARKET_DETAIL_REVIEWS_SSUCCESS";
const GET_MARKET_DETAIL_REVIEWS_ERROR =
    "market/GET_MARKET_DETAIL_REVIEWS_ERROR";
// 카테고리 별 아이템 리스트
const GET_MARKET_CATEGORIES_ITEM_REQUEST =
    "market/GET_MARKET_CATEGORIES_ITEM_REQUEST";
const GET_MARKET_CATEGORIES_ITEM_SSUCCESS =
    "market/GET_MARKET_CATEGORIES_ITEM_SSUCCESS";
const GET_MARKET_CATEGORIES_ITEM_ERROR =
    "market/GET_MARKET_CATEGORIES_ITEM_ERROR";

const initialState = {
    realTimeMarketLoading: false, // 실시간 인기 마켓
    realTimeMarketDone: false,
    realTimeMarketLists: [],
    realTimeMarketError: null,

    realTimeMarketMoreLoading: false, // 실시간 인기 20개 이후 리스트 마켓
    realTimeMarketMoreDone: false,
    realTimeMarketMoreLists: [],
    realTimeMarketMoreError: null,

    marketLikeLoading: false, // 마켓 즐겨찾기 추가
    marketLikeDone: false,
    marketLikeLists: [],
    marketLikeError: null,

    marketDeleteLoading: false, // 마켓 즐갸 찾기 삭제
    marketDeleteDone: false,
    marketDeleteLists: [],
    marketDeleteError: null,

    marketListsLoading: false, // 마켓 즐갸 찾기 리스트
    marketListsDone: false,
    marketListsLists: [],
    marketListsError: null,

    marketDetailLoading: false, // 마켓 페이지
    marketDetailDone: false,
    marketDetailLists: [],
    marketDetailError: null,

    marketDetailCategoriesLoading: false, // 마켓 카테고리 리스트
    marketDetailCategoriesDone: false,
    marketDetailCategoriesLists: [],
    marketDetailCategoriesError: null,

    marketCategoriesItemLoading: false, // 마켓 카테고리 별 아이템
    marketCategoriesItemDone: false,
    marketCategoriesItemLists: [],
    marketCategoriesItemError: null,

    marketDetailReviewsLoading: false, // 마켓 별 리뷰
    marketDetailReviewsDone: false,
    marketDetailReviewsLists: [],
    marketDetailReviewsError: null,
};

// 마켓 전체 리스트
export const realTimeMarket = (token, gender) => async (dispatch) => {
    dispatch({ type: GET_REAL_TIME_MARKET_REQUEST });
    try {
        const realTimeMarketInfo = token
            ? await axios.get(
                  `${process.env.REACT_APP_API_URL}/api/market/rank`,
                  {
                      headers: {
                          gender: gender ? 1 : 2,
                          Authorization: "Bearer " + token.accessToken,
                      },
                  }
              )
            : await axios.get(
                  `${process.env.REACT_APP_API_URL}/api/market/rank`,
                  {
                      headers: {
                          gender: gender ? 1 : 2,
                      },
                  }
              );

        dispatch({
            type: GET_REAL_TIME_MARKET_SUCCESS,
            payload: realTimeMarketInfo.data,
        });

        dispatch({
            type: GET_REAL_TIME_MARKET_SUCCESS,
            payload: realTimeMarketInfo.data,
        });
    } catch (error) {
        dispatch({
            type: GET_REAL_TIME_MARKET_ERROR,
            payload: error,
        });
    }
};

// 마켓 랭킹 20개 이후 리스트
export const realTimeMoreMarket = (token, gender, page) => async (dispatch) => {
    dispatch({ type: GET_REAL_TIME_MORE_MARKET_REQUEST });
    try {
        const realTimeMarketMoreInfo = token
            ? await axios.get(
                  `${process.env.REACT_APP_API_URL}/api/market/rank?page=${page}`,
                  {
                      headers: {
                          gender: gender ? 1 : 2,
                          Authorization: "Bearer " + token.accessToken,
                          // "Access-Control-Allow-Origin": "*",
                          // "Content-Type": "application/json",
                      },
                      // withCredentials: true,
                      // credentials: "same-origin",
                  }
              )
            : await axios.get(
                  `${process.env.REACT_APP_API_URL}/api/market/rank?page=${page}`,
                  {
                      headers: {
                          gender: gender ? 1 : 2,
                      },
                  }
              );

        dispatch({
            type: GET_REAL_TIME_MORE_MARKET_SUCCESS,
            payload: realTimeMarketMoreInfo.data,
        });
    } catch (error) {
        dispatch({
            type: GET_REAL_TIME_MORE_MARKET_ERROR,
            payload: error,
        });
    }
};

// 마켓 즐겨찾기 추가
// export const marketLikeInfo = (id, token) => async (dispatch) => {
//     dispatch({ type: POST_MARKET_LIKE_REQUEST });
//     try {
//         const marketLike = await axios.post(
//             `${process.env.REACT_APP_API_URL}/api/favorites`,
//             {
//                 market_mem_id: String(id),

//             },
//           };
//           dispatch({
//             type: GET_REAL_TIME_MORE_MARKET_SUCCESS,
//             payload: realTimeMarketMoreInfo.data,
//         });
//         );

// }

// 마켓 즐겨찾기 추가
export const marketLikeInfo = (id, token) => async (dispatch) => {
    dispatch({ type: POST_MARKET_LIKE_REQUEST });
    try {
        const marketLike = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/favorites`,
            {
                market_mem_id: String(id),
            },
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );

        dispatch({ type: POST_MARKET_LIKE_SUCCESS, payload: marketLike });
    } catch (error) {
        dispatch({ type: POST_MARKET_LIKE_ERROR, payload: error });
    }
};

// 마켓 즐겨찾기 삭제
export const marketDeleteinfo = (id, token) => async (dispatch) => {
    dispatch({ type: DETETE_MARKET_DELETE_REQUEST });
    try {
        const marketDelete = await axios.delete(
            `${process.env.REACT_APP_API_URL}/api/favorites`,
            {
                data: {
                    market_mem_id: String(id),
                },
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );

        dispatch({ type: DETETE_MARKET_DELETE_SUCCESS, payload: marketDelete });
    } catch (error) {
        dispatch({ type: DETETE_MARKET_DELETE_ERROR, payload: error });
    }
};

// 즐겨찾기 리스트
export const marketLits = (token) => async (dispatch) => {
    dispatch({ type: GET_MARKET_LIST_REQUEST });
    try {
        const realTimeMarketLists = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/favorites`,
            {
                headers: {
                    Authorization: "Bearer " + token.accessToken,
                },
            }
        );

        dispatch({
            type: GET_MARKET_LIST_SUCCESS,
            payload: realTimeMarketLists,
        });
    } catch (error) {
        dispatch({
            type: GET_MARKET_LIST_ERROR,
            payload: error.response.data,
        });
    }
};

// 마켓 별 정보 리스트
export const marketDetailLits = (id) => async (dispatch) => {
    dispatch({ type: GET_MARKET_DETAIL_REQUEST });
    try {
        const MarketDetailInfo = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/market/${parseInt(id)}`
        );

        dispatch({
            type: GET_MARKET_DETAIL_SUCCESS,
            payload: MarketDetailInfo,
        });
    } catch (error) {
        dispatch({
            type: GET_MARKET_DETAIL_ERROR,
            payload: error.response,
        });
    }
};

// 마켓 별 카테고리 리스트
export const marketDetailCategoriesLits = (id) => async (dispatch) => {
    dispatch({ type: GET_MARKET_DETAIL_CATEGORIES_REQUEST });
    try {
        const MarketDetailCategoriesInfo = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/market/${parseInt(
                id
            )}/categories`
        );

        dispatch({
            type: GET_MARKET_DETAIL_CATEGORIE_SSUCCESS,
            payload: MarketDetailCategoriesInfo,
        });
    } catch (error) {
        dispatch({
            type: GET_MARKET_DETAIL_CATEGORIES_ERROR,
            payload: error.response,
        });
    }
};

// 마켓 별 카테고리 아이템
export const marketCategoriesITemLits = (id, itemId) => async (dispatch) => {
    dispatch({ type: GET_MARKET_CATEGORIES_ITEM_REQUEST });
    try {
        const marketCategoriesITemInfo = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/market/${parseInt(
                id
            )}/categories/${itemId}`
        );

        dispatch({
            type: GET_MARKET_CATEGORIES_ITEM_SSUCCESS,
            payload: marketCategoriesITemInfo,
        });
    } catch (error) {
        dispatch({
            type: GET_MARKET_CATEGORIES_ITEM_ERROR,
            payload: error.response,
        });
    }
};

// 마켓 별 리뷰 리스트
export const marketDetailReviewsLits = (id) => async (dispatch) => {
    dispatch({ type: GET_MARKET_DETAIL_REVIEWS_REQUEST });
    try {
        const MarketDetailReviewsInfo = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/market/${parseInt(
                id
            )}/reviews`
        );

        dispatch({
            type: GET_MARKET_DETAIL_REVIEWS_SSUCCESS,
            payload: MarketDetailReviewsInfo,
        });
    } catch (error) {
        dispatch({
            type: GET_MARKET_DETAIL_REVIEWS_ERROR,
            payload: error.response,
        });
    }
};

const market = (state = initialState, action) =>
    produce(state, (draft) => {
        // console.log(action.payload);

        switch (action.type) {
            case GET_REAL_TIME_MARKET_REQUEST: // 실시간 인기마켓
                draft.realTimeMarketLoading = true;
                draft.realTimeMarketDone = false;
                draft.realTimeMarketError = null;
                break;
            case GET_REAL_TIME_MARKET_SUCCESS:
                draft.realTimeMarketLoading = false;
                draft.realTimeMarketDone = true;
                draft.realTimeMarketLists = action.payload.data;
                break;
            case GET_REAL_TIME_MARKET_ERROR:
                draft.realTimeMarketLoading = false;
                draft.realTimeMarketError = action.payload;
                break;

            case GET_REAL_TIME_MORE_MARKET_REQUEST: // 실시간 인기마켓 20개 이후 리스트
                draft.realTimeMarketMoreLoading = true;
                draft.realTimeMarketMoreDone = false;
                draft.realTimeMarketMoreError = null;
                break;
            case GET_REAL_TIME_MORE_MARKET_SUCCESS:
                if (action.payload.data.length !== 0) {
                    draft.realTimeMarketMoreLoading = false;
                    draft.realTimeMarketMoreDone = true;
                    // draft.realTimeMarketMoreLists = action.payload.data;
                    draft.realTimeMarketLists = draft.realTimeMarketLists.concat(
                        action.payload.data
                    );
                }
                break;
            case GET_REAL_TIME_MORE_MARKET_ERROR:
                draft.realTimeMarketMoreLoading = false;
                draft.realTimeMarketMoreError = action.payload;
                break;

            case POST_MARKET_LIKE_REQUEST: // 마켓 즐겨찾기 추가
                draft.marketLikeLoading = true;
                draft.marketLikeDone = false;
                draft.marketLikeError = null;
                break;
            case POST_MARKET_LIKE_SUCCESS:
                draft.marketLikeLoading = false;
                draft.marketLikeDone = true;
                draft.marketLikeLists = action.payload;
                break;
            case POST_MARKET_LIKE_ERROR:
                draft.marketLikeLoading = false;
                draft.marketLikeError = action.payload;
                break;

            case DETETE_MARKET_DELETE_REQUEST: // 마켓 즐겨찾기 삭제
                draft.marketDeleteLoading = true;
                draft.marketDeleteDone = false;
                draft.marketDeleteError = null;
                break;
            case DETETE_MARKET_DELETE_SUCCESS:
                draft.marketDeleteLoading = false;
                draft.marketDeleteDone = true;
                draft.marketDeleteLists = action.payload;
                break;
            case DETETE_MARKET_DELETE_ERROR:
                draft.marketDeleteLoading = false;
                draft.marketDeleteError = action.payload;
                break;

            case GET_MARKET_LIST_REQUEST: // 마켓 즐겨찾기 리스트
                draft.marketListsLoading = true;
                draft.marketListsDone = false;
                draft.marketListsError = null;
                break;
            case GET_MARKET_LIST_SUCCESS:
                draft.marketListsLoading = false;
                draft.marketListsDone = true;
                draft.marketListsLists = action.payload.data.data;
                break;
            case GET_MARKET_LIST_ERROR:
                draft.marketListsLoading = false;
                draft.marketListsError = action.payload;
                break;

            case GET_MARKET_DETAIL_REQUEST: // 마켓 페이지
                draft.marketDetailLoading = true;
                draft.marketDetailDone = false;
                draft.marketDetailError = null;
                break;
            case GET_MARKET_DETAIL_SUCCESS:
                draft.marketDetailLoading = false;
                draft.marketDetailDone = true;
                draft.marketDetailLists = action.payload.data.data;
                break;
            case GET_MARKET_DETAIL_ERROR:
                draft.marketDetailLoading = false;
                draft.marketDetailError = action.payload;

            case GET_MARKET_DETAIL_CATEGORIES_REQUEST: // 마켓 별 카테고리 리스트
                draft.marketDetailCategoriesLoading = true;
                draft.marketDetailCategoriesDone = false;
                draft.marketDetailCategoriesError = null;
                break;
            case GET_MARKET_DETAIL_CATEGORIE_SSUCCESS:
                draft.marketDetailCategoriesLoading = false;
                draft.marketDetailCategoriesDone = true;
                draft.marketDetailCategoriesLists = action.payload.data.data;
                break;
            case GET_MARKET_DETAIL_CATEGORIES_ERROR:
                draft.marketDetailCategoriesLoading = false;
                draft.marketDetailCategoriesError = action.payload;

            case GET_MARKET_CATEGORIES_ITEM_REQUEST: // 마켓 별 카테고리 아이템
                draft.marketCategoriesItemLoading = true;
                draft.marketCategoriesItemDone = false;
                draft.marketCategoriesItemError = null;
                break;
            case GET_MARKET_CATEGORIES_ITEM_SSUCCESS:
                draft.marketCategoriesItemLoading = false;
                draft.marketCategoriesItemDone = true;
                draft.marketCategoriesItemLists = action.payload.data.data;
                break;
            case GET_MARKET_CATEGORIES_ITEM_ERROR:
                draft.marketCategoriesItemLoading = false;
                draft.marketCategoriesItemError = action.payload;
                break;

            case GET_MARKET_DETAIL_REVIEWS_REQUEST: // 마켓 별 리뷰 리스트
                draft.marketDetailReviewsLoading = true;
                draft.marketDetailReviewsDone = false;
                draft.marketDetailReviewsError = null;
                break;
            case GET_MARKET_DETAIL_REVIEWS_SSUCCESS:
                draft.marketDetailReviewsLoading = false;
                draft.marketDetailReviewsDone = true;
                draft.marketDetailReviewsLists = action.payload.data.data;
                break;
            case GET_MARKET_DETAIL_REVIEWS_ERROR:
                draft.marketDetailReviewsLoading = false;
                draft.marketDetailReviewsError = action.payload;
                break;

            default:
                break;
        }
    });

export default market;
