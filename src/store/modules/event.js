import axios from "axios";
import produce from "../../util/produce";

// 이벤트 리스트
const GET_EVENT_LISTS_REQUEST = "event/GET_EVENT_LISTS_REQUEST";
const GET_EVENT_LISTS_SUCCESS = "event/GET_EVENT_LISTS_SUCCESS";
const GET_EVENT_LISTS_ERROR = "event/GET_EVENT_LISTS_ERROR";
// 이벤트 디테일
const GET_EVENT_DETAIL_LISTS_REQUEST = "event/GET_EVENT_DETAIL_LISTS_REQUEST";
const GET_EVENT_DETAIL_LISTS_SUCCESS = "event/GET_EVENT_DETAIL_LISTS_SUCCESS";
const GET_EVENT_DETAIL_LISTS_ERROR = "event/GET_EVENT_DETAIL_LISTS_ERROR";
// 이벤트 디테일 댓글 리스트
const GET_EVENT_DETAIL_COMMENTS_LISTS_REQUEST =
  "event/GET_EVENT_DETAIL_COMMENTS_LISTS_REQUEST";
const GET_EVENT_DETAIL_COMMENTSLISTS_SUCCESS =
  "event/GET_EVENT_DETAIL_COMMENTSLISTS_SUCCESS";
const GET_EVENT_DETAIL_COMMENTSLISTS_ERROR =
  "event/GET_EVENT_DETAIL_COMMENTSLISTS_ERROR";
// 이벤트 디테일 댓글 삭제
const DELETE_EVENT_DETAIL_COMMENT_DELETE_REQUEST =
  "event/DELETE_EVENT_DETAIL_COMMENT_DELETE_REQUEST";
const DELETE_EVENT_DETAIL_COMMENT_DELETE_SUCCESS =
  "event/DELETE_EVENT_DETAIL_COMMENT_DELETE_SUCCESS";
const DELETE_EVENT_DETAIL_COMMENT_DELETE_ERROR =
  "event/DELETE_EVENT_DETAIL_COMMENT_DELETE_ERROR";
// 이벤트 디테일 댓글 생성
const POST_EVENT_DETAIL_COMMENT_PRODUCE_REQUEST =
  "event/POST_EVENT_DETAIL_COMMENT_PRODUCE_REQUEST";
const POST_EVENT_DETAIL_COMMENT_PRODUCE_SUCCESS =
  "event/POST_EVENT_DETAIL_COMMENT_PRODUCE_SUCCESS";
const POST_EVENT_DETAIL_COMMENT_PRODUCE_ERROR =
  "event/POST_EVENT_DETAIL_COMMENT_PRODUCE_ERROR";

const initialState = {
  // 이벤트 리스트
  eventListLoading: false,
  eventListDone: false,
  eventList: [],
  eventListError: null,
  // 이벤트 디테일
  eventDetailListLoading: false,
  eventDetailListDone: false,
  eventDetailList: [],
  eventDetailListError: null,
  // 이벤트 디테일 댓글
  eventDetailListCommentsLoading: false,
  eventDetailListCommentsDone: false,
  eventDetailListComments: [],
  eventDetailListCommentsError: null,
  // 이벤트 디테일 댓글 삭제
  eventDetailListCommentDeleteLoading: false,
  eventDetailListCommentDeleteDone: false,
  eventDetailListCommentDelete: [],
  eventDetailListCommentDeleteError: null,
  // 이벤트 디테일 댓글 생성
  eventDetailListCommentProduceLoading: false,
  eventDetailListCommentProduceDone: false,
  eventDetailListCommentProduce: [],
  eventDetailListCommentProduceError: null,
};

export const eventListInfo = () => async dispatch => {
  dispatch({ type: GET_EVENT_LISTS_REQUEST });

  try {
    const eventLists = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/events`
    );
    dispatch({
      type: GET_EVENT_LISTS_SUCCESS,
      payload: eventLists.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_EVENT_LISTS_ERROR,
      payload: error.response,
    });
  }
};

export const eventDetailListInfo = id => async dispatch => {
  dispatch({ type: GET_EVENT_DETAIL_LISTS_REQUEST });

  try {
    const eventDetailLists = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/events/${id}`
    );
    dispatch({
      type: GET_EVENT_DETAIL_LISTS_SUCCESS,
      payload: eventDetailLists.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_EVENT_DETAIL_LISTS_ERROR,
      payload: error.response,
    });
  }
};

export const eventDetailCommentsListInfo = id => async dispatch => {
  dispatch({ type: GET_EVENT_DETAIL_COMMENTS_LISTS_REQUEST });

  try {
    const eventDetailCommentsLists = await axios.get(
      `${
        process.env.REACT_APP_API_URL
      }/api/events/${id}/comments?page=${1}&pageSize=${50}`
    );
    dispatch({
      type: GET_EVENT_DETAIL_COMMENTSLISTS_SUCCESS,
      payload: eventDetailCommentsLists.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_EVENT_DETAIL_COMMENTSLISTS_ERROR,
      payload: error.response,
    });
  }
};

export const eventDetailCommentsDeleteInfo = (
  commentId,
  token
) => async dispatch => {
  dispatch({ type: DELETE_EVENT_DETAIL_COMMENT_DELETE_REQUEST });

  console.log("commentId", commentId);
  console.log("token", token);

  try {
    const eventDetailCommentsDelete = await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/events/comments/${commentId}`,
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    );
    dispatch({
      type: DELETE_EVENT_DETAIL_COMMENT_DELETE_SUCCESS,
      payload: eventDetailCommentsDelete.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: DELETE_EVENT_DETAIL_COMMENT_DELETE_ERROR,
      payload: error.response,
    });
  }
};
// 댓글 달기
export const eventCommentProduceInfo = (Id, value, token) => async dispatch => {
  dispatch({ type: POST_EVENT_DETAIL_COMMENT_PRODUCE_REQUEST });
  console.log(Id, value, token);

  // console.log("commentId",commentId);
  // console.log("token",token);

  try {
    const eventDetailCommentsProduce = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/events/${parseInt(Id)}/comments`,
      {
        content: value,
      },
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    );
    dispatch({
      type: POST_EVENT_DETAIL_COMMENT_PRODUCE_SUCCESS,
      payload: eventDetailCommentsProduce.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: POST_EVENT_DETAIL_COMMENT_PRODUCE_ERROR,
      payload: error.response,
    });
  }
};

const event = (state = initialState, action) =>
  produce(state, draft => {
    // console.log(action.payload);

    switch (action.type) {
      case GET_EVENT_LISTS_REQUEST: // 이벤트 리스트
        draft.eventListLoading = true;
        draft.eventListDone = false;
        draft.eventListError = null;
        break;

      case GET_EVENT_LISTS_SUCCESS:
        draft.eventListLoading = false;
        draft.eventListDone = true;
        draft.eventList = action.payload.data;
        break;

      case GET_EVENT_LISTS_ERROR:
        draft.eventListLoading = false;
        draft.eventListError = action.payload;
        break;

      case GET_EVENT_DETAIL_LISTS_REQUEST: // 이벤트 디테일
        draft.eventDetailListLoading = true;
        draft.eventDetailListDone = false;
        draft.eventDetailListError = null;
        break;

      case GET_EVENT_DETAIL_LISTS_SUCCESS:
        draft.eventDetailListLoading = false;
        draft.eventDetailListDone = true;
        draft.eventDetailList = action.payload;
        break;

      case GET_EVENT_DETAIL_LISTS_ERROR:
        draft.eventDetailListLoading = false;
        draft.eventDetailListError = action.payload;
        break;

      case GET_EVENT_DETAIL_COMMENTS_LISTS_REQUEST: // 이벤트 디테일 댓글
        draft.eventDetailListCommentsLoading = true;
        draft.eventDetailListCommentsDone = false;
        draft.eventDetailListCommentsError = null;
        break;

      case GET_EVENT_DETAIL_COMMENTSLISTS_SUCCESS:
        draft.eventDetailListCommentsLoading = false;
        draft.eventDetailListCommentsDone = true;
        draft.eventDetailListComments = action.payload;
        break;

      case GET_EVENT_DETAIL_COMMENTSLISTS_ERROR:
        draft.eventDetailListCommentsLoading = false;
        draft.eventDetailListCommentsError = action.payload;
        break;
      case DELETE_EVENT_DETAIL_COMMENT_DELETE_REQUEST: // 이벤트 디테일 댓글 삭제
        draft.eventDetailListCommentDeleteLoading = true;
        draft.eventDetailListCommentDeleteDone = false;
        draft.eventDetailListCommentDeleteError = null;
        break;

      case DELETE_EVENT_DETAIL_COMMENT_DELETE_SUCCESS:
        draft.eventDetailListCommentDeleteLoading = false;
        draft.eventDetailListCommentDeleteDone = true;
        draft.eventDetailListCommentDelete = action.payload;
        break;

      case DELETE_EVENT_DETAIL_COMMENT_DELETE_ERROR:
        draft.eventDetailListCommentDeleteLoading = false;
        draft.eventDetailListCommentDeleteError = action.payload;
        break;
      case POST_EVENT_DETAIL_COMMENT_PRODUCE_REQUEST: // 이벤트 디테일 댓글 생성
        draft.eventDetailListCommentProduceLoading = true;
        draft.eventDetailListCommentProduceDone = false;
        draft.eventDetailListCommentProduceError = null;
        break;

      case POST_EVENT_DETAIL_COMMENT_PRODUCE_SUCCESS:
        draft.eventDetailListCommentProduceLoading = false;
        draft.eventDetailListCommentProduceDone = true;
        draft.eventDetailListCommentProduce = action.payload;
        break;

      case POST_EVENT_DETAIL_COMMENT_PRODUCE_ERROR:
        draft.eventDetailListCommentProduceLoading = false;
        draft.eventDetailListCommentProduceError = action.payload;
        break;

      default:
        break;
    }
  });
export default event;
