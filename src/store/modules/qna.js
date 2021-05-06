import axios from "axios";

import produce from "../../util/produce";

const GET_QNAINFO_REQUEST = "qna/GET_QNAINFO_REQUEST"; // QnA 정보 호출
const GET_QNAINFO_SUCCESS = "qna/GET_QNAINFO_SUCCESS";
const GET_QNAINFO_ERROR = "qna/GET_QNAINFO_ERROR";

const DELETE_QNAINFO_REQUEST = "qna/DELETE_QNAINFO_REQUEST"; // QnA 삭제
const DELETE_QNAINFO_SUCCESS = "qna/DELETE_QNAINFO_SUCCESS";
const DELETE_QNAINFO_ERROR = "qna/DELETE_QNAINFO_ERROR";

const POST_QNA_REQUEST = "qna/POST_QNA_REQUEST"; // QnA 작성
const POST_QNA_SUCCESS = "qna/POST_QNA_SUCCESS";
const POST_QNA_ERROR = "qna/POST_QNA_ERROR";

const initialState = {
  qnaInfoLoading: false, // QnA 정보 호출
  qnaInfoDone: false,
  qnaInfoError: null,
  qnaInfo: [],

  qnaDeleteLoading: false, // QnA 삭제
  qnaDeleteDone: false,
  qnaDeleteError: null,
  qnaDelete: [],

  postQnaLoading: false, // QnA 작성
  postQnaDone: false,
  postQnaError: null,
  postQna: [],
};

// QnA 정보 호출
export const qna = (user, token, dataCheck) => async dispatch => {
  console.log("숫자가 나와야해", dataCheck);
  dispatch({ type: GET_QNAINFO_REQUEST });
  try {
    const qnaList = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/qna/users/${user.group.mem_id}`,
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    );
    console.log("qnaList", qnaList);
    dispatch({
      type: GET_QNAINFO_SUCCESS,
      payload: qnaList.data.data,
      status: dataCheck,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_QNAINFO_ERROR,
      payload: error.response.data,
    });
  }
};

// QnA 삭제
export const deleteComment = (deleteCqaId, token) => async dispatch => {
  dispatch({ type: DELETE_QNAINFO_REQUEST });
  try {
    const deleteCom = await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/qna/${deleteCqaId}`,
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    ); //401
    dispatch({
      type: DELETE_QNAINFO_SUCCESS,
      payload: deleteCom.data.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_QNAINFO_ERROR,
      payload: error.response.data,
    });
  }
};

// QnA 작성
export const postQna = (qnaValue, cit_key, token) => async dispatch => {
  dispatch({ type: POST_QNA_REQUEST });
  try {
    const qna = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/qna/${cit_key}`,
      qnaValue,
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    );
    dispatch({
      type: POST_QNA_SUCCESS,
      payload: qna.data.data,
    });
  } catch (error) {
    dispatch({
      type: POST_QNA_ERROR,
      payload: error.response.data,
    });
  }
};

const auth = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_QNAINFO_REQUEST: // QnA 정보 호출
        draft.qnaInfoLoading = true;
        draft.qnaInfoDone = false;
        draft.qnaInfoError = null;
        break;
      case GET_QNAINFO_SUCCESS:
        draft.qnaInfoLoading = false;
        draft.qnaInfoDone = true;
        draft.qnaInfoError = null;
        draft.qnaInfo = action.payload.filter(value => {
          if (action.status === 1) {
            return value;
          } else if (action.status === 2) {
            if (value.cqa_reply_content) {
              return value;
            }
          } else {
            if (value.cqa_reply_content === null) {
              return value;
            }
          }
        });
        break;
      case GET_QNAINFO_ERROR:
        draft.qnaInfoLoading = true;
        draft.qnaInfoDone = false;
        draft.qnaInfoError = action.payload;
        break;

      case DELETE_QNAINFO_REQUEST: // QnA 삭제
        draft.qnaDeleteLoading = true;
        draft.qnaDeleteDone = false;
        draft.qnaDeleteError = null;
        break;
      case DELETE_QNAINFO_SUCCESS:
        draft.qnaDeleteLoading = false;
        draft.qnaDeleteDone = true;
        draft.qnaDelete = action.payload;
        break;
      case DELETE_QNAINFO_ERROR:
        draft.qnaDeleteLoading = true;
        draft.qnaInfoError = action.payload;
        break;

      case POST_QNA_REQUEST: //QnA 작성
        draft.postQnaLoading = true;
        draft.postQnaDone = false;
        draft.postQnaError = null;
        break;
      case POST_QNA_SUCCESS:
        draft.postQnaLoading = false;
        draft.postQnaDone = true;
        draft.postQna = action.payload;
        break;
      case POST_QNA_ERROR:
        draft.postQnaLoading = true;
        draft.postQnaError = action.payload;
        break;

      default:
        break;
    }
  });

export default auth;
