import axios from "axios";
import produce from "../../util/produce";

const HOME_LIST_REQUEST = "home/HOME_LIST_REQUEST";
const HOME_LIST_SUCCESS = "home/HOME_LIST_SUCCESS";
const HOME_LIST_ERROR = "home/HOME_LIST_ERROR";
// 홈 에서 더 보기 누르면
const HOME_DETAIL_LIST_REQUEST = "home/HOME_DETAIL_LIST_REQUEST";
const HOME_DETAIL_LIST_SUCCESS = "home/HOME_DETAIL_LIST_SUCCESS";
const HOME_DETAIL_LIST_ERROR = "home/HOME_DETAIL_LIST_ERROR";

// 홈 에서 더 보기 누르면 More
const HOME_MORE_DETAIL_LIST_REQUEST = "home/HOME_MORE_DETAIL_LIST_REQUEST";
const HOME_MORE_DETAIL_LIST_SUCCESS = "home/HOME_MORE_DETAIL_LIST_SUCCESS";
const HOME_MORE_DETAIL_LIST_ERROR = "home/HOME_MORE_DETAIL_LIST_ERROR";

// 베스트
const BEST_LIST_REQUEST = "home/BEST_LIST_REQUEST";
const BEST_LIST_SUCCESS = "home/BEST_LIST_SUCCESS";
const BEST_LIST_ERROR = "home/BEST_LIST_ERROR";

// 베스트
const BEST_MORE_LIST_REQUEST = "home/BEST_MORE_LIST_REQUEST";
const BEST_MORE_LIST_SUCCESS = "home/BEST_MORE_LIST_SUCCESS";
const BEST_MORE_LIST_ERROR = "home/BEST_MORE_LIST_ERROR";

// 신상
const NEW_LIST_REQUEST = "home/NEW_LIST_REQUEST";
const NEW_LIST_SUCCESS = "home/NEW_LIST_SUCCESS";
const NEW_LIST_ERROR = "home/NEW_LIST_ERROR";

// 신상 더보기
const NEW_MORE_LIST_REQUEST = "home/NEW_MORE_LIST_REQUEST";
const NEW_MORE_LIST_SUCCESS = "home/NEW_MORE_LIST_SUCCESS";
const NEW_MORE_LIST_ERROR = "home/NEW_MORE_LIST_ERROR";

// 베스트 카테고리 ccaId
const BEST_CCA_ID = "home/BEST_CCA_ID";

const initialState = {
    homeListLoading: false, // 홈
    homeListDone: false,
    homeListError: false,
    homeLists: [],

    homeDetailListLoading: false, // 홈디테일
    homeDetailListDone: false,
    homeDetailListError: false,
    homeDetailLists: [],
    homeDetailItemsLists: [],
    homeDetailSubItemLists: [],

    homeMoreDetailListLoading: false, // 홈 More 디테일
    homeMoreDetailListDone: false,
    homeMoreDetailListError: false,
    homeMoreDetailLists: [],

    bestListLoading: false, // 베스트
    bestListDone: false,
    bestListError: false,
    bestLists: [],

    bestMoreListLoading: false, // 베스트 MORE
    bestMoreListDone: false,
    bestMoreListError: false,
    bestMoreLists: [],

    ccaId: [], //베스트 카테고리 id

    newListLoading: false, // 신상
    newListDone: false,
    newListError: false,
    newLists: [],

    newMoreListLoading: false, // 신상 더보기
    newMoreListDone: false,
    newMoreListError: false,
    newMoreLists: [],
};
// 홈 리스트
export const homeListInfo = (token, gender) => async (dispatch) => {
    dispatch({ type: HOME_LIST_REQUEST, payload: token });
    try {
        const homeList = token
            ? await axios.get(`${process.env.REACT_APP_API_URL}/api/home`, {
                  headers: {
                      gender: gender ? 1 : 2,
                      Authorization: "Bearer " + token.accessToken,
                  },
              })
            : await axios.get(`${process.env.REACT_APP_API_URL}/api/home`, {
                  headers: {
                      gender: gender ? 1 : 2,
                  },
              });
        dispatch({
            type: HOME_LIST_SUCCESS,
            payload: homeList.data,
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: HOME_LIST_ERROR,
            payload: error.response,
        });
    }
};
// 홈 리스트 디테일
export const homeDetailListInfo = (groupID, token) => async (dispatch) => {
    dispatch({ type: HOME_DETAIL_LIST_REQUEST });
    if (groupID === undefined) return;
    try {
        const homeDetailList = token
            ? await axios.get(
                  `${process.env.REACT_APP_API_URL}/api/home/${groupID}?filter=1&page=1`,
                  {
                      headers: {
                          Authorization: "Bearer " + token.accessToken,
                      },
                  }
              )
            : await axios.get(
                  `${process.env.REACT_APP_API_URL}/api/home/${groupID}?filter=1&page=1`
              );
        // console.log("homeDetailList", homeDetailList);
        dispatch({
            type: HOME_DETAIL_LIST_SUCCESS,
            payload: homeDetailList.data,
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: HOME_DETAIL_LIST_ERROR,
            payload: error.response,
        });
    }
};
// 홈 리스트 디테일
export const homeMoreDetailListInfo = (groupID, page, token) => async (
    dispatch
) => {
    dispatch({ type: HOME_MORE_DETAIL_LIST_REQUEST });
    // console.log("props", groupID, page);
    if (groupID === undefined) return;
    try {
        const homeDetailList = token
            ? await axios.get(
                  `${process.env.REACT_APP_API_URL}/api/home/${groupID}?filter=1&page=2`,
                  {
                      headers: {
                          Authorization: "Bearer " + token.accessToken,
                      },
                  }
              )
            : await axios.get(
                  `${process.env.REACT_APP_API_URL}/api/home/${groupID}?filter=1&page=2`
              );
        // console.log("homeDetailList", homeDetailList);
        dispatch({
            type: HOME_MORE_DETAIL_LIST_SUCCESS,
            payload: homeDetailList.data,
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: HOME_MORE_DETAIL_LIST_ERROR,
            payload: error.response,
        });
    }
};

// 베스트 리스트
export const bestListInfo = (cca_id, token, gender) => async (dispatch) => {
    dispatch({ type: BEST_LIST_REQUEST });
    console.log("아이디", cca_id);
    console.log("토큰", token);
    console.log("성별", gender);
    if (cca_id.length === 0) return;
    try {
        const bestList = token
            ? await axios.get(
                  `${
                      process.env.REACT_APP_API_URL
                  }/api/items/best/${cca_id}?page=${1}`,
                  {
                      headers: {
                          gender: gender ? 1 : 2,
                          Authorization: "Bearer " + token.accessToken,
                      },
                  }
              )
            : await axios.get(
                  `${
                      process.env.REACT_APP_API_URL
                  }/api/items/best/${cca_id}?page=${1}`,
                  {
                      headers: {
                          gender: gender ? 1 : 2,
                      },
                  }
              );
        dispatch({
            type: BEST_LIST_SUCCESS,
            payload: bestList.data,
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: BEST_LIST_ERROR,
            payload: error.response,
        });
    }
};

// 베스트 리스트 more
export const bestMoreListInfo = (page, token, gender, ccaId) => async (
    dispatch
) => {
    dispatch({ type: BEST_MORE_LIST_REQUEST });

    console.log("나와랏", page, token, gender, ccaId);

    try {
        const bestMoreList = token
            ? await axios.get(
                  `${process.env.REACT_APP_API_URL}/api/items/best/${ccaId}?page=${page}`,
                  {
                      headers: {
                          gender: gender ? 1 : 2,
                          Authorization: "Bearer " + token.accessToken,
                      },
                  }
              )
            : await axios.get(
                  `${process.env.REACT_APP_API_URL}/api/items/best/${ccaId}?page=${page}`,
                  {
                      headers: {
                          gender: gender ? 1 : 2,
                      },
                  }
              );
        dispatch({
            type: BEST_MORE_LIST_SUCCESS,
            payload: bestMoreList.data,
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: BEST_MORE_LIST_ERROR,
            payload: error.response,
        });
    }
};

//베스트 카테고리 id
export const bestCateId = (id) => ({ type: BEST_CCA_ID, id });

// 신상 리스트
export const newListInfo = (token, gender, selectValue) => async (dispatch) => {
    dispatch({ type: NEW_LIST_REQUEST });

    console.log("리덕스 value", selectValue);

    try {
        const newList = token
            ? await axios.get(
                  `${
                      process.env.REACT_APP_API_URL
                  }/api/items/new?filter=${Number(selectValue)}&page=1`,
                  {
                      headers: {
                          gender: gender ? 1 : 2,
                          Authorization: "Bearer " + token.accessToken,
                      },
                  }
              )
            : await axios.get(
                  `${
                      process.env.REACT_APP_API_URL
                  }/api/items/new?filter=${Number(selectValue)}&page=1`,
                  {
                      headers: {
                          gender: gender ? 1 : 2,
                      },
                  }
              );
        dispatch({
            type: NEW_LIST_SUCCESS,
            payload: newList.data,
        });
        // console.log("000000000000 : ", newList.data);
    } catch (error) {
        console.log(error);
        dispatch({
            type: NEW_LIST_ERROR,
            payload: error.response,
        });
    }
};

// 신상 더보기 리스트
export const newMoreListInfo = (page, token, selectValue) => async (
    dispatch
) => {
    dispatch({ type: NEW_MORE_LIST_REQUEST });
    // console.log("리덕스 쪽 숫자", page);
    try {
        const newMoreList = token
            ? await axios.get(
                  `${
                      process.env.REACT_APP_API_URL
                  }//api/items/new?filter=${Number(selectValue)}&page=${page}`,
                  {
                      headers: {
                          Authorization: "Bearer " + token.accessToken,
                      },
                  }
              )
            : await axios.get(
                  `${
                      process.env.REACT_APP_API_URL
                  }/api/items/new?filter=${Number(selectValue)}&page=${page}`
              );
        dispatch({
            type: NEW_MORE_LIST_SUCCESS,
            payload: newMoreList.data,
        });
        // console.log("111111111111 : ", newMoreList.data);
    } catch (error) {
        console.log(error);
        dispatch({
            type: NEW_MORE_LIST_ERROR,
            payload: error.response,
        });
    }
};

const home = (state = initialState, action) =>
    produce(state, (draft) => {
        // console.log("action.payload", action.payload);

        switch (action.type) {
            case HOME_LIST_REQUEST: // 홈 리스트
                draft.homeListLoading = true;
                draft.homeListDone = false;
                draft.homeListError = null;
                break;

            case HOME_LIST_SUCCESS:
                draft.homeListLoading = false;
                draft.homeListDone = true;
                draft.homeLists = action.payload;
                break;

            case HOME_LIST_ERROR:
                draft.homeLoading = false;
                draft.homeListError = action.payload;
                break;

            case HOME_DETAIL_LIST_REQUEST: //홈디테일 리스트
                draft.homeDetailListLoading = true;
                draft.homeDetailListDone = false;
                draft.homeDetailListError = null;
                break;

            case HOME_DETAIL_LIST_SUCCESS:
                draft.homeDetailListLoading = false;
                draft.homeDetailListDone = true;
                console.log("action.payload", action.payload.data.group_type);

                draft.homeDetailLists =
                    action.payload.data.group_type === 2
                        ? action.payload.data.market_items.items
                        : action.payload.data;

                // draft.homeDetailItemsLists = action.payload.data;
                // draft.homeDetailSubItemLists =
                //     action.payload.group_type === 1
                //         ? draft.homeDetailItemsLists.concat(
                //               action.payload.data.sub_item
                //           )
                //         : action.payload.data.market_items;
                break;

            case HOME_DETAIL_LIST_ERROR:
                draft.homeDetailListLoading = false;
                draft.homeDetailListError = action.payload;
                break;

            case HOME_MORE_DETAIL_LIST_REQUEST: //홈디테일 More 리스트
                draft.homeMoreDetailListLoading = true;
                draft.homeMoreDetailListDone = false;
                draft.homeMoreDetailListError = null;
                break;

            case HOME_MORE_DETAIL_LIST_SUCCESS:
                draft.homeMoreDetailListLoading = false;
                draft.homeMoreDetailListDone = true;
                if (action.payload.data.length !== 0) {
                    draft.homeMoreDetailLists =
                        action.payload.data.group_type === 2
                            ? action.payload.data.market_items.items
                            : action.payload.data;
                }
                break;

            case HOME_MORE_DETAIL_LIST_ERROR:
                draft.homeMoreDetailListLoading = false;
                draft.homeMoreDetailListError = action.payload;
                break;

            case BEST_LIST_REQUEST: // 베스트 리스트
                draft.bestListLoading = true;
                draft.bestListDone = false;
                draft.bestListError = null;
                break;

            case BEST_LIST_SUCCESS:
                draft.bestListLoading = false;
                draft.bestListDone = true;
                draft.bestLists = action.payload.data;

                break;

            case BEST_LIST_ERROR:
                draft.bestListLoading = false;
                draft.bestListError = action.payload;
                break;

            case BEST_MORE_LIST_REQUEST: // 베스트 MORE 리스트
                draft.bestMoreListLoading = true;
                draft.bestMoreListDone = false;
                draft.bestMoreListError = null;
                break;

            case BEST_MORE_LIST_SUCCESS:
                draft.bestMoreListLoading = false;
                draft.bestMoreListDone = true;
                if (action.payload.data.length !== 0) {
                    draft.bestMoreLists = draft.bestMoreLists.concat(
                        action.payload.data
                    );
                }
                break;

            case BEST_MORE_LIST_ERROR:
                draft.bestMoreListLoading = false;
                draft.bestMoreListError = action.payload;
                break;

            case BEST_CCA_ID: //베스트 카테고리 id
                draft.ccaId = action.id;
                break;

            case NEW_LIST_REQUEST: // 신상 리스트
                draft.newListLoading = true;
                draft.newListDone = false;
                draft.newListError = null;
                break;

            case NEW_LIST_SUCCESS:
                draft.newListLoading = false;
                draft.newListDone = true;
                draft.newLists = action.payload.data;
                // console.log(action.payload.data);
                break;

            case NEW_LIST_ERROR:
                draft.newListLoading = false;
                draft.newListError = action.payload;
                break;

            case NEW_MORE_LIST_REQUEST: // 신상 더보기 리스트
                draft.newMoreListLoading = true;
                draft.newMoreListDone = false;
                draft.newMoreListError = null;
                break;

            case NEW_MORE_LIST_SUCCESS:
                draft.newMoreListLoading = false;
                draft.newMoreListDone = true;
                if (action.payload.data.length !== 0) {
                    draft.newMoreLists = action.payload.data;
                }
                break;

            case NEW_MORE_LIST_ERROR:
                draft.newMoreListLoading = false;
                draft.newMoreListError = action.payload;
                break;

            default:
                break;
        }
    });

export default home;
