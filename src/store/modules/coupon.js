import axios from "axios";
import produce from "../../util/produce";

// 쿠폰
const AUTH_COUPON_REQUEST = "coupon/AUTH_COUPON_REQUEST";
const AUTH_COUPON_SUCCESS = "coupon/AUTH_COUPON_SUCCESS";
const AUTH_COUPON_ERROR = "coupon/AUTH_COUPON_ERROR";
// 신규 쿠폰 발급
const AUTH_NEW_COUPON_ISSUED_REQUEST = "coupon/AUTH_NEW_COUPON_ISSUED_REQUEST";
const AUTH_NEW_COUPON_ISSUED_SUCCESS = "coupon/AUTH_NEW_COUPON_ISSUED_SUCCESS";
const AUTH_NEW_COUPON_ISSUED_ERROR = "coupon/AUTH_NEW_COUPON_ISSUED_ERROR";

// 오늘의 랜덤 쿠폰 발급 여부
const GET_RANDOM_COUPON_REQUEST = "coupon/GET_RANDOM_COUPON_REQUEST";
const GET_RANDOM_COUPON_SUCCESS = "coupon/GET_RANDOM_COUPON_SUCCESS";
const GET_RANDOM_COUPON_ERROR = "coupon/GET_RANDOM_COUPON_ERROR";

// 쿠폰 발급 받기 버튼 클릭시 랜덤 쿠폰 발급
const POST_RANDOM_COUPON_ISSUED_REQUEST =
  "coupon/POST_RANDOM_COUPON_ISSUED_REQUEST";
const POST_RANDOM_COUPON_ISSUED_SUCCESS =
  "coupon/POST_RANDOM_COUPON_ISSUED_SUCCESS";
const POST_RANDOM_COUPON_ISSUED_ERROR =
  "coupon/POST_RANDOM_COUPON_ISSUED_ERROR";

const initialState = {
  couponListLoading: false, // 쿠폰
  couponListDone: false,
  couponListError: null,
  couponLists: [],
  couponIssuedLoading: false, // 신규 쿠폰 발급
  couponIssuedDone: false,
  couponIssuedError: [],
  randomCouponLoading: false, // 오늘의 랜덤 쿠폰 발급 여부
  randomCouponDone: false,
  randomCouponError: null,
  randomCouponIssuedLoading: false, // 쿠폰 발급 받기 버튼 클릭시 랜덤 쿠폰 발급
  randomCouponIssuedDone: false,
  randomCouponIssuedError: null,
  randomCP: [],
  randomCpCode: "",
};

// 쿠폰
export const CouponListInfo = token => async dispatch => {
  console.log("로그인 유저 : ", token);
  dispatch({ type: AUTH_COUPON_REQUEST, payload: token });

  try {
    const couponList = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/coupons`,
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    );
    dispatch({
      type: AUTH_COUPON_SUCCESS,
      payload: couponList.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_COUPON_ERROR,
      payload: error.response.data,
    });
  }
};

// 신규 쿠폰 발급
export const NewCouponIssued = token => async dispatch => {
  console.log("로그인 쿠폰 발급 : ", token);
  dispatch({ type: AUTH_NEW_COUPON_ISSUED_REQUEST, payload: token });
  try {
    const CouponIssued = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/coupons/event/new`,
      {},
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    );
    dispatch({
      type: AUTH_NEW_COUPON_ISSUED_SUCCESS,
      payload: CouponIssued.data.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_NEW_COUPON_ISSUED_ERROR,
      payload: error.response.data,
    });
  }
};

// 오늘의 랜덤 쿠폰 발급 여부
export const getRandomCoupon = token => async dispatch => {
  console.log("로그인 유저 : ", token);
  dispatch({ type: GET_RANDOM_COUPON_REQUEST, payload: token });

  try {
    const couponList = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/coupons/event/random-cp`,
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    );
    dispatch({
      type: GET_RANDOM_COUPON_SUCCESS,
      payload: couponList.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_RANDOM_COUPON_ERROR,
      payload: error.response.data,
    });
  }
};

// 쿠폰 발급 받기 버튼 클릭시 랜덤 쿠폰 발급
export const RandomCouponIssued = token => async dispatch => {
  console.log(" 랜덤 쿠폰 발급 : ", token);
  dispatch({ type: POST_RANDOM_COUPON_ISSUED_REQUEST, payload: token });

  try {
    const couponList = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/coupons/event/random`,
      {},
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    );
    console.log("couponList", couponList);
    dispatch({
      type: POST_RANDOM_COUPON_ISSUED_SUCCESS,
      payload: couponList.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: POST_RANDOM_COUPON_ISSUED_ERROR,
      payload: error.response.data,
    });
  }
};

const coupon = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case AUTH_COUPON_REQUEST: //쿠폰 리스트
        draft.couponListLoading = true;
        draft.couponListDone = false;
        draft.couponError = null;
        break;

      case AUTH_COUPON_SUCCESS:
        draft.couponListLoading = false;
        draft.couponListDone = true;
        draft.couponLists = action.payload;
        break;

      case AUTH_COUPON_ERROR:
        draft.couponLoading = false;
        draft.couponListError = action.payload;
        break;

      case AUTH_NEW_COUPON_ISSUED_REQUEST: //쿠폰 발급
        draft.couponIssuedLoading = true;
        draft.couponIssuedDone = false;
        draft.couponIssuedError = false;
        break;

      case AUTH_NEW_COUPON_ISSUED_SUCCESS:
        draft.couponIssuedLoading = false;
        draft.couponIssuedDone = true;
        draft.CouponIssued = action.payload;
        break;

      case AUTH_NEW_COUPON_ISSUED_ERROR:
        draft.couponIssuedLoading = null;
        draft.couponIssuedDone = false;
        draft.couponIssuedError = action.payload;
        break;

      case GET_RANDOM_COUPON_REQUEST: // 오늘의 랜덤 쿠폰 발급 여부
        draft.randomCouponLoading = true;
        draft.randomCouponDone = false;
        draft.randomCouponError = false;
        break;

      case GET_RANDOM_COUPON_SUCCESS:
        draft.randomCouponLoading = false;
        draft.randomCouponDone = true;
        draft.randomCpCode = action.payload;
        break;

      case GET_RANDOM_COUPON_ERROR:
        draft.randomCouponLoading = null;
        draft.randomCouponDone = false;
        draft.randomCouponError = action.payload;
        break;

      case POST_RANDOM_COUPON_ISSUED_REQUEST: // 쿠폰 발급 받기 버튼 클릭시 랜덤 쿠폰 발급
        draft.randomCouponIssuedLoading = true;
        draft.randomCouponIssuedDone = false;
        draft.randomCouponIssuedError = false;
        break;

      case POST_RANDOM_COUPON_ISSUED_SUCCESS:
        draft.randomCouponIssuedLoading = false;
        draft.randomCouponIssuedDone = true;
        draft.randomCP = action.payload;
        break;

      case POST_RANDOM_COUPON_ISSUED_ERROR:
        draft.randomCouponIssuedLoading = null;
        draft.randomCouponIssuedDone = false;
        draft.randomCouponIssuedError = action.payload;
        break;

      default:
        break;
    }
  });
export default coupon;
