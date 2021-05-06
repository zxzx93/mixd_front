import axios from "axios";
import produce from "../../util/produce";

const GET_MYPAGE_REQUEST = "users/GET_MYPAGE_REQUEST"; // 마이페이지
const GET_MYPAGE_SUCCESS = "users/GET_MYPAGE_SUCCESS";
const GET_MYPAGE_ERROR = "users/GET_MYPAGE_ERROR";

const GET_USER_INFO_REQUEST = "users/GET_USER_INFO_REQUEST"; // 회원정보 가져오기
const GET_USER_INFO_SUCCESS = "users/GET_USER_INFO_SUCCESS";
const GET_USER_INFO_ERROR = "users/GET_USER_INFO_ERROR";

const PUT_USER_INFO_MODIFY_REQUEST = "users/PUT_USER_INFO_MODIFY_REQUEST"; // 회원정보 수정하기
const PUT_USER_INFO_MODIFY_SUCCESS = "users/PUT_USER_INFO_MODIFY_SUCCESS";
const PUT_USER_INFO_MODIFY_ERROR = "users/PUT_USER_INFO_MODIFY_ERROR";

const DELETE_ACCOUNT_REQUEST = "users/DELETE_ACCOUNT_REQUEST"; // 회원탈퇴
const DELETE_ACCOUNT_SUCCESS = "users/DELETE_ACCOUNT_SUCCESS";
const DELETE_ACCOUNT_ERROR = "users/DELETE_ACCOUNT_ERROR";

const initialState = {
  mypageInfoLoading: false, //마이페이지 유저 인포
  mypageInfoDone: false,
  mypageError: null,
  userInfoLoading: false, //회원정보수정 유저 인포
  userInfoDone: false,
  userInfoError: null,
  userInfoModifyLoading: false, //회원정보 수정하기
  userInfoModifyDone: false,
  userInfoModifyError: null,
  deleteAccountLoading: false, //회원탈퇴
  deleteAccountDone: false,
  deleteAccountError: null,
  mypageInfoLists: [],
  user: [], //회원정보수정 유저 인포
};

//마이페이지
export const mypageInfo = token => async dispatch => {
  //   console.log("user  : ", token);
  dispatch({ type: GET_MYPAGE_REQUEST, payload: token });
  try {
    const mypage =
      // token?
      await axios.get(`${process.env.REACT_APP_API_URL}/api/users/mypage`, {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      });
    // : await axios.get(`${process.env.REACT_APP_API_URL}/api/users/mypage`);
    dispatch({ type: GET_MYPAGE_SUCCESS, payload: mypage.data.data });
    return mypage.data.data;
  } catch (error) {
    dispatch({ type: GET_MYPAGE_ERROR, payload: error.response.data });
  }
};

//회원정보 가져오기
export const userInfo = token => async dispatch => {
  console.log("memId, token  : ", token);
  dispatch({ type: GET_USER_INFO_REQUEST, payload: token });
  try {
    const user = await axios.get(`${process.env.REACT_APP_API_URL}/api/users`, {
      headers: {
        Authorization: "Bearer " + token.accessToken,
      },
    });
    dispatch({ type: GET_USER_INFO_SUCCESS, payload: user.data.data });
  } catch (error) {
    dispatch({ type: GET_USER_INFO_ERROR, payload: error.response.data });
  }
};

//회원정보 수정
export const userInfoModify = (formData, token) => async dispatch => {
  console.log("memId, token  : ", formData, token);
  dispatch({ type: PUT_USER_INFO_MODIFY_REQUEST, payload: token });
  try {
    const user = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/users`,
      formData,
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    dispatch({ type: PUT_USER_INFO_MODIFY_SUCCESS, payload: user.data.data });
  } catch (error) {
    dispatch({
      type: PUT_USER_INFO_MODIFY_ERROR,
      payload: error.response.data,
    });
  }
};

//회원탈퇴
export const deleteAccount = token => async dispatch => {
  console.log("memId, token  : ", token);
  dispatch({ type: DELETE_ACCOUNT_REQUEST, payload: token });
  try {
    const user = await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/users`,
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    );
    dispatch({ type: DELETE_ACCOUNT_SUCCESS, payload: user.data.data });
    localStorage.removeItem("user");
  } catch (error) {
    dispatch({
      type: DELETE_ACCOUNT_ERROR,
      payload: error.response.data,
    });
  }
};

const mypage = (state = initialState, action) =>
  produce(state, draft => {
    // console.log("action.payload", action.payload);

    switch (action.type) {
      case GET_MYPAGE_REQUEST: // 유저 카트 리스트
        draft.mypageInfoLoading = true;
        draft.mypageInfoDone = false;
        draft.mypageError = null;
        break;
      case GET_MYPAGE_SUCCESS:
        draft.mypageInfoLoading = false;
        draft.mypageInfoDone = true;
        draft.mypageInfoLists = action.payload;
        break;
      case GET_MYPAGE_ERROR:
        draft.mypageInfoLoading = false;
        draft.mypageError = action.payload;
        break;

      case GET_USER_INFO_REQUEST: // 회원정보 가져오기
        draft.mypageInfoLoading = true;
        draft.mypageInfoDone = false;
        draft.mypageError = null;
        break;
      case GET_USER_INFO_SUCCESS:
        draft.mypageInfoLoading = false;
        draft.mypageInfoDone = true;
        draft.user = action.payload;
        break;
      case GET_USER_INFO_ERROR:
        draft.mypageInfoLoading = false;
        draft.mypageError = action.payload;
        break;

      case PUT_USER_INFO_MODIFY_REQUEST: // 회원정보 수정하기
        draft.userInfoModifyLoading = true;
        draft.userInfoModifyDone = false;
        draft.userInfoModifyError = null;
        break;
      case PUT_USER_INFO_MODIFY_SUCCESS:
        draft.userInfoModifyLoading = false;
        draft.userInfoModifyDone = true;
        // draft.user = action.payload;
        break;
      case PUT_USER_INFO_MODIFY_ERROR:
        draft.userInfoModifyLoading = false;
        draft.userInfoModifyError = action.payload;
        break;

      case DELETE_ACCOUNT_REQUEST: // 회원탈퇴
        draft.deleteAccountLoading = true;
        draft.deleteAccountDone = false;
        draft.deleteAccountError = null;
        break;
      case DELETE_ACCOUNT_SUCCESS:
        draft.deleteAccountLoading = false;
        draft.deleteAccountDone = true;
        // draft.user = action.payload;
        break;
      case DELETE_ACCOUNT_ERROR:
        draft.deleteAccountLoading = false;
        draft.deleteAccountError = action.payload;
        break;

      default:
        break;
    }
  });

export default mypage;
