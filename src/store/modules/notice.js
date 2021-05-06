import axios from "axios";

import produce from "../../util/produce";
import { URL } from "../../Config";

const GET_NOTICE_REQUEST = "notice/GET_NOTICE_REQUEST"; // 공지사항
const GET_NOTICE_SUCCESS = "notice/GET_NOTICE_SUCCESS";
const GET_NOTICE_ERROR = "notice/GET_NOTICE_ERROR";

const GET_NOTICEDETAIL_REQUEST = "notice/GET_NOTICEDETAIL_REQUEST"; // 공지사항 디테일
const GET_NOTICEDETAIL_SUCCESS = "notice/GET_NOTICEDETAIL_SUCCESS";
const GET_NOTICEDETAIL_ERROR = "notice/GET_NOTICEDETAIL_ERROR";

const initialState = {
  getNoticeLoading: false, // 공지사항 가져오기
  getNoticeDone: false,
  getNoticeError: null,
  getNoticeDetailLoading: false, // 공지사항 디테일 가져오기
  getNoticeDetailDone: false,
  getNoticeDetailError: null,
  notices: [],
  noticeDetail: [],
};

export const getNotice = memberLevel => async dispatch => {
  // console.log("memberLevel : ", memberLevel);
  dispatch({ type: GET_NOTICE_REQUEST, memberLevel: memberLevel });
  try {
    const notices = await axios.get(`${process.env.REACT_APP_API_URL}/api/notices`);
    // console.log("notice :", notices.data.data);
    dispatch({
      type: GET_NOTICE_SUCCESS,
      payload: notices.data.data,
      memberLevel: memberLevel,
    });
  } catch (error) {
    dispatch({
      type: GET_NOTICE_ERROR,
      payload: error.response.data,
    });
  }
};

export const getNoticeDetail = id => async dispatch => {
  // console.log("getNoticeDetail : ", id);
  dispatch({ type: GET_NOTICEDETAIL_REQUEST });
  try {
    const notice = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/notices/${id}`
    );
    // console.log("notice :", notice);
    dispatch({
      type: GET_NOTICEDETAIL_SUCCESS,
      payload: notice.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_NOTICEDETAIL_ERROR,
      payload: error.response.data,
    });
  }
};

const notice = (state = initialState, action) =>
  produce(state, draft => {
    // console.log(action.payload);
    // console.log("memberLevel : ", action.memberLevel);

    switch (action.type) {
      case GET_NOTICE_REQUEST: // 공지사항 전체 가져오기
        draft.getNoticeLoading = true;
        draft.getNoticeDone = false;
        draft.getNoticeError = null;
        break;
      case GET_NOTICE_SUCCESS:
        draft.getNoticeLoading = true;
        draft.getNoticeDone = false;
        draft.notices = action.payload.filter(todo =>
          action.memberLevel < 99
            ? todo.only_user === null || todo.only_user === 1
            : action.payload
        );
        break;
      case GET_NOTICE_ERROR:
        draft.getNoticeLoading = true;
        draft.getNoticeDone = false;
        draft.getNoticeError = action.payload;
        break;

      case GET_NOTICEDETAIL_REQUEST: // 공지사항 디테일 가져오기
        draft.getNoticeLoading = true;
        draft.getNoticeDone = false;
        draft.getNoticeError = null;
        break;
      case GET_NOTICEDETAIL_SUCCESS:
        draft.getNoticeLoading = true;
        draft.getNoticeDone = false;
        draft.noticeDetail = action.payload;
        break;
      case GET_NOTICEDETAIL_ERROR:
        draft.getNoticeLoading = true;
        draft.getNoticeDone = false;
        draft.getNoticeDetailError = action.payload;
        break;

      default:
        break;
    }
  });

export default notice;
