import axios from "axios";

import produce from "../../util/produce";
import Crypto from "simple-crypto-js";

const AUTH_LOGIN_REQUEST = "auth/AUTH_LOGIN_REQUEST";
const AUTH_LOGIN_SUCCESS = "auth/AUTH_LOGIN_SUCCESS";
const AUTH_LOGIN_ERROR = "auth/AUTH_LOGIN_ERROR";

const AUTH_REGISTER_REQUEST = "auth/AUTH_REGISTER_REQUEST";
const AUTH_REGISTER_SUCCESS = "auth/AUTH_REGISTER_SUCCESS";
const AUTH_REGISTER_ERROR = "auth/AUTH_REGISTER_ERROR";

const AUTH_HP_CERTIFICATION_REQUEST = "auth/AUTH_HP_CERTIFICATION_REQUEST";
const AUTH_HP_CERTIFICATION_SUCCESS = "auth/AUTH_HP_CERTIFICATION_SUCCESS";
const AUTH_HP_CERTIFICATION_ERROR = "auth/AUTH_HP_CERTIFICATION_ERROR";

const AUTH_HP_DUPLICATION_REQUEST = "auth/AUTH_HP_DUPLICATION_REQUEST";
const AUTH_HP_DUPLICATION_SUCCESS = "auth/AUTH_HP_DUPLICATION_SUCCESS";
const AUTH_HP_DUPLICATION_ERROR = "auth/AUTH_HP_DUPLICATION_ERROR";

const AUTH_EMAIL_DUPLICATION_REQUEST = "auth/AUTH_EMAIL_DUPLICATION_REQUEST";
const AUTH_EMAIL_DUPLICATION_SUCCESS = "auth/AUTH_EMAIL_DUPLICATION_SUCCESS";
const AUTH_EMAIL_DUPLICATION_ERROR = "auth/AUTH_EMAIL_DUPLICATION_ERROR";

const AUTH_FIND_ID_CERTIFCATION_REQUEST =
  "auth/AUTH_FIND_ID_CERTIFCATION_REQUEST";
const AUTH_FIND_ID_CERTIFCATION_SUCCESS =
  "auth/AUTH_FIND_ID_CERTIFCATION_SUCCESS";
const AUTH_FIND_ID_CERTIFCATION_ERROR = "auth/AUTH_FIND_ID_CERTIFCATION_ERROR";

const AUTH_FIND_ID_DUPLICATION_REQUEST =
  "auth/AUTH_FIND_ID_DUPLICATION_REQUEST";
const AUTH_FIND_ID_DUPLICATION_SUCCESS =
  "auth/AUTH_FIND_ID_DUPLICATION_SUCCESS";
const AUTH_FIND_ID_DUPLICATION_ERROR = "auth/AUTH_FIND_ID_DUPLICATION_ERROR";

// 비밀번호 핸드폰 인증
const AUTH_FIND_PASSEWORD_CERTIFCATION_REQUEST =
  "auth/AUTH_FIND_PASSEWORD_CERTIFCATION_REQUEST";
const AUTH_FIND_PASSEWORD_CERTIFCATION_SUCCESS =
  "auth/AUTH_FIND_PASSEWORD_CERTIFCATION_SUCCESS";
const AUTH_FIND_PASSEWORD_CERTIFCATION_ERROR =
  "auth/AUTH_FIND_PASSEWORD_CERTIFCATION_ERROR";

const AUTH_FIND_PASSEWORD_DUPLICATION_REQUEST =
  "auth/AUTH_FIND_PASSEWORD_DUPLICATION_REQUEST";
const AUTH_FIND_PASSEWORD_DUPLICATION_SUCCESS =
  "auth/AUTH_FIND_PASSEWORD_DUPLICATION_SUCCESS";
const AUTH_FIND_PASSEWORD_DUPLICATION_ERROR =
  "auth/AUTH_FIND_PASSEWORD_DUPLICATION_ERROR";

// 비밀번호 변경
const AUTH_CHANGE_PASSEWORD_REQUEST = "auth/AUTH_CHANGE_PASSEWORD_REQUEST";
const AUTH_CHANGE_PASSEWORD_SUCCESS = "auth/AUTH_CHANGE_PASSEWORD_SUCCESS";
const AUTH_CHANGE_PASSEWORD_ERROR = "auth/AUTH_CHANGE_PASSEWORD_ERROR";

// 닉네임 중복 여부
const AUTH_NICKNAME_DUPLICATION_REQUEST =
  "auth/AUTH_NICKNAME_DUPLICATION_REQUEST";
const AUTH_NICKNAME_DUPLICATION_SUCCESS =
  "auth/AUTH_NICKNAME_DUPLICATION_SUCCESS";
const AUTH_NICKNAME_DUPLICATION_ERROR = "auth/AUTH_NICKNAME_DUPLICATION_ERROR";

// 회원정보 수정 페이지 - 현재 비밀번호 확인
const POST_PASSEWORD_CERTIFCATION_REQUEST =
  "auth/POST_PASSEWORD_CERTIFCATION_REQUEST";
const POST_PASSEWORD_CERTIFCATION_SUCCESS =
  "auth/POST_PASSEWORD_CERTIFCATION_SUCCESS";
const POST_PASSEWORD_CERTIFCATION_ERROR =
  "auth/POST_PASSEWORD_CERTIFCATION_ERROR";

// 회원정보 수정 페이지 - 비밀번호 변경
const PUT_PASSEWORD_CHANGE_REQUEST = "auth/PUT_PASSEWORD_CHANGE_REQUEST";
const PUT_PASSEWORD_CHANGE_SUCCESS = "auth/PUT_PASSEWORD_CHANGE_SUCCESS";
const PUT_PASSEWORD_CHANGE_ERROR = "auth/PUT_PASSEWORD_CHANGE_ERROR";

// 회원정보 수정 페이지 - 휴대폰 번호 변경
const PUT_HP_NUMBER_CHANGE_REQUEST = "auth/PUT_HP_NUMBER_CHANGE_REQUEST";
const PUT_HP_NUMBER_CHANGE_SUCCESS = "auth/PUT_HP_NUMBER_CHANGE_SUCCESS";
const PUT_HP_NUMBER_CHANGE_ERROR = "auth/PUT_HP_NUMBER_CHANGE_ERROR";

const AUTH_LOGOUT_SUCCESS = "auth/AUTH_LOGOUT_SUCCESS";
const REFRESH_REGISTER = "REFRESH_REGISTER";

const initialState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  registerLoading: false, // 회원가입 시도중
  registerDone: false,
  registerError: null,
  hpCertificationLoading: false, // 휴대폰번호 인증 전송
  hpCertificationDone: false,
  hpCertificationError: null,
  hpDuplicateLoading: false, // 휴대폰번호 인증 확인
  hpDuplicateDone: false,
  hpDuplicateError: null,
  emailDuplicateLoading: false, // 이메일 중복 체크
  emailDuplicateDone: false,
  emailDuplicateError: null,
  nicknameDuplicateLoading: false, // 닉네임 중복 체크
  nicknameDuplicateDone: false,
  nicknameDuplicateError: null,
  findIdCertificationLoading: false, // 아이디 찾기 휴대폰 인증
  findIdCertificationDone: false,
  findIdCertificationError: null,
  findIdDuplicateLoading: false, // 아이디 찾기 휴대폰 확인
  findIdDuplicateDone: false,
  findIdDuplicateError: null,
  findPwCertificationLoading: false, // 비밀번호 찾기 휴대폰 인증
  findPwCertificationDone: false,
  findPwCertificationError: null,
  findPwDuplicateLoading: false, // 비밀번호 찾기 휴대폰 확인
  findPwDuplicateDone: false,
  findPwDuplicateError: null,
  passwordcertificationLoading: false, // 회원정보 수정 페이지 - 현재 비밀번호 확인
  passwordcertificationDone: false,
  passwordcertificationError: null,
  passwordChangeLoading: false, // 회원정보 수정 페이지 - 비밀번호 변경
  passwordChangeDone: false,
  passwordChangeError: null,
  hpNumberChangeLoading: false, // 회원정보 수정 페이지 - 휴대폰 번호 변경
  hpNumberChangeDone: false,
  hpNumberChangeError: null,

  loginUser: [],
  registerUser: [],
  hpCertificationData: [],
  findIdCertification_Email: [],
  findPwCertification_PassWord: [],
  emailDuplicateMsg: [],
  nicknameDuplicateMsg: [],
  ChangePassWordHashCode: [],
  passwordcertificationSuccess: false,
  hpNumberChangeMsg: "",
};

const secretKey = process.env.REACT_APP_REDUX_STORE_KEY;
const simpleCrypto = new Crypto(secretKey);

//로그인
export const logIn = userInfo => async dispatch => {
  // console.log("userId, password  : ", userInfo);
  dispatch({ type: AUTH_LOGIN_REQUEST, payload: userInfo });
  try {
    const user = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/login`,
      userInfo
    );
    // console.log(user.data.data.token);
    dispatch({ type: AUTH_LOGIN_SUCCESS, payload: user.data.data });
    const cipherText = simpleCrypto.encrypt(user.data.data);

    localStorage.setItem("user", JSON.stringify(cipherText));
    // LS에는 객체 형태로 정보를 저장할 수 없음. JSON.stringfy를 해줘야 함. 나중에 사용할 때는 JSON.parse를 통해 파싱한 다음 사용

    // const decipherText = simpleCrypto.decrypt(cipherText);
    // console.log(decipherText);
  } catch (error) {
    dispatch({ type: AUTH_LOGIN_ERROR, payload: error.response.data });
  }
};

//로그아웃
export const logOut = () => dispatch => {
  localStorage.removeItem("user");
  dispatch({ type: AUTH_LOGOUT_SUCCESS });
};

//회원가입
export const register = userInfo => async dispatch => {
  // console.log("user_signUp_Info : ", userInfo);
  dispatch({ type: AUTH_REGISTER_REQUEST, payload: userInfo });
  try {
    const Register = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/register`,
      userInfo
    );
    dispatch({ type: AUTH_REGISTER_SUCCESS, payload: Register.data.data });
  } catch (error) {
    dispatch({ type: AUTH_REGISTER_ERROR, payload: error.response.data });
  }
};

//휴대폰 번호 인증 전송 - 회원가입(register), 아이디찾기(user-id), 비밀번호 찾기(user-password), 회원수정 페이지(1)
export const hpCertification = (hpNumber, type) => async dispatch => {
  // console.log("hpNumber , type : ", hpNumber, type);
  dispatch({ type: AUTH_HP_CERTIFICATION_REQUEST, payload: hpNumber });
  try {
    const hp = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/hp/certification/${type}`,
      hpNumber
    );
    dispatch({
      type: AUTH_HP_CERTIFICATION_SUCCESS,
      payload: hp.data.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_HP_CERTIFICATION_ERROR,
      payload: error.response.data,
    });
  }
};

//휴대폰 번호 인증 확인
export const hpDuplicate = variable => async dispatch => {
  // console.log("hpDuplicate  : ", variable);
  dispatch({ type: AUTH_HP_DUPLICATION_REQUEST, payload: variable });
  try {
    const hp = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/account/hp/duplicate`,
      variable
    );
    dispatch({ type: AUTH_HP_DUPLICATION_SUCCESS, payload: hp.data.data });
  } catch (error) {
    dispatch({
      type: AUTH_HP_DUPLICATION_ERROR,
      payload: error.response.data,
    });
  }
};

//이메일 중복 여부 확인
export const emailDuplicate = variable => async dispatch => {
  // console.log("emailDuplicate  : ", variable);
  dispatch({ type: AUTH_EMAIL_DUPLICATION_REQUEST, payload: variable });
  try {
    const email = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/account/email/duplicate`,
      variable
    );
    dispatch({
      type: AUTH_EMAIL_DUPLICATION_SUCCESS,
      payload: email.data.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_EMAIL_DUPLICATION_ERROR,
      payload: error.response.data.data,
    });
  }
};

//닉네임 중복 여부 체크
export const nicknameDuplicate = nickname => async dispatch => {
  // console.log("nicknameDuplicate  : ", nickname);
  dispatch({ type: AUTH_NICKNAME_DUPLICATION_REQUEST, payload: nickname });
  try {
    const nickName = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/account/nickname/duplicate`,
      nickname
    );
    dispatch({
      type: AUTH_NICKNAME_DUPLICATION_SUCCESS,
      payload: nickName.data.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_NICKNAME_DUPLICATION_ERROR,
      payload: error.response.data.data,
    });
  }
};

//아이디 휴대폰 인증 - 아이디 찾기
export const findIdCertification = hpNumber => async dispatch => {
  // console.log("hpNumber  : ", hpNumber);
  dispatch({ type: AUTH_FIND_ID_CERTIFCATION_REQUEST, payload: hpNumber });
  try {
    const hp = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/hp/certification/user-id`,
      hpNumber
    );
    dispatch({
      type: AUTH_FIND_ID_CERTIFCATION_SUCCESS,
      payload: hp.data.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_FIND_ID_CERTIFCATION_ERROR,
      payload: error.response.data,
    });
  }
};

//휴대폰 인증 코드
export const FindIdDuplicate = variable => async dispatch => {
  // console.log("hpDuplicate  : ", variable);
  dispatch({ type: AUTH_FIND_ID_DUPLICATION_REQUEST, payload: variable });
  try {
    const hp = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/account/user-id`,
      variable
    );
    // console.log(hp);

    dispatch({
      type: AUTH_FIND_ID_DUPLICATION_SUCCESS,
      payload: hp.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_FIND_ID_DUPLICATION_ERROR,
      payload: error.response.data.data,
    });
  }
};

//비밀번호 휴대폰 인증 -비밀번호 찾기
export const findPwCertification = pwHpNum => async dispatch => {
  dispatch({
    type: AUTH_FIND_PASSEWORD_CERTIFCATION_REQUEST,
    payload: pwHpNum,
  });
  try {
    const hp = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/hp/certification/user-password`,
      pwHpNum
    );
    dispatch({
      type: AUTH_FIND_PASSEWORD_CERTIFCATION_SUCCESS,
      payload: hp.data.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_FIND_PASSEWORD_CERTIFCATION_ERROR,
      payload: error.response.data,
    });
  }
};

// 비밀번호 휴대폰 찾기 버튼
export const FindPwDuplicate = email => async dispatch => {
  // console.log("emil  : ", email.email);
  dispatch({
    type: AUTH_FIND_PASSEWORD_DUPLICATION_REQUEST,
    payload: email,
  });
  try {
    const hp = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/account/password`,
      email
    );
    dispatch({
      type: AUTH_FIND_PASSEWORD_DUPLICATION_SUCCESS,
      payload: hp.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_FIND_PASSEWORD_DUPLICATION_ERROR,
      payload: error.response.data.data,
    });
  }
};

export const ChangePw = changePassWord => async dispatch => {
  // console.log("emil  : ", changePassWord);
  dispatch({
    type: AUTH_CHANGE_PASSEWORD_REQUEST,
    payload: changePassWord,
  });
  try {
    const hp = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/auth/account/password`,
      changePassWord
    );
    dispatch({
      type: AUTH_CHANGE_PASSEWORD_SUCCESS,
      payload: hp.data.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_CHANGE_PASSEWORD_ERROR,
      payload: error.response.data.data,
    });
  }
};

// 회원정보 수정 페이지 - 현재 비밀번호 확인
export const passwordCertification = (password, token) => async dispatch => {
  // console.log("password  : ", password);
  dispatch({
    type: POST_PASSEWORD_CERTIFCATION_REQUEST,
    payload: password,
  });
  try {
    const pw = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/mypage/password`,
      password,
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    );
    dispatch({
      type: POST_PASSEWORD_CERTIFCATION_SUCCESS,
      payload: pw.data.data,
    });
  } catch (error) {
    dispatch({
      type: POST_PASSEWORD_CERTIFCATION_ERROR,
      payload: error.response.data.data,
    });
  }
};

// 회원정보 수정 페이지 - 비밀번호 변경
export const passwordChange = (password, token) => async dispatch => {
  // console.log("비밀번호 변경  : ", password);
  dispatch({
    type: PUT_PASSEWORD_CHANGE_REQUEST,
    payload: password,
  });
  try {
    const pw = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/auth/mypage/password`,
      password,
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    );

    dispatch({
      type: PUT_PASSEWORD_CHANGE_SUCCESS,
      payload: pw.data.data,
    });
  } catch (error) {
    dispatch({
      type: PUT_PASSEWORD_CHANGE_ERROR,
      payload: error.response.data.data,
    });
  }
};

// 회원정보 수정 페이지 - 휴대폰 번호 변경
export const hpChange = (hpNumber, token) => async dispatch => {
  // console.log("비밀번호 변경  : ", hpNumber);
  dispatch({
    type: PUT_HP_NUMBER_CHANGE_REQUEST,
    payload: hpNumber,
  });
  try {
    const hp = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/auth/mypage/hp`,
      hpNumber,
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    );
    // console.log("asdasdasdasdasdasd", hp);
    dispatch({
      type: PUT_HP_NUMBER_CHANGE_SUCCESS,
      payload: hp.data.data,
    });
  } catch (error) {
    dispatch({
      type: PUT_HP_NUMBER_CHANGE_ERROR,
      payload: error.response.data.data,
    });
  }
};

export const refreshRegister = () => ({
  type: REFRESH_REGISTER,
});

const auth = (state = initialState, action) =>
  produce(state, draft => {
    // console.log(action.payload);

    switch (action.type) {
      case AUTH_LOGIN_REQUEST: //로그인
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;
      case AUTH_LOGIN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.loginUser = action.payload;
        break;
      case AUTH_LOGIN_ERROR:
        draft.logInLoading = false;
        draft.logInError = action.payload;
        break;

      case AUTH_LOGOUT_SUCCESS: //로그아웃
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.loginUser = null;
        break;

      case AUTH_HP_CERTIFICATION_REQUEST: //휴대폰 인증 전송
        draft.hpCertificationLoading = true;
        draft.hpCertificationDone = false;
        draft.hpCertificationError = null;
        break;
      case AUTH_HP_CERTIFICATION_SUCCESS:
        draft.hpCertificationLoading = false;
        draft.hpCertificationDone = true;
        draft.hpCertificationData = action.payload;
        break;
      case AUTH_HP_CERTIFICATION_ERROR:
        draft.hpCertificationLoading = false;
        draft.hpCertificationError = action.payload;
        draft.hpCertificationData = []; // 인증 확인 코드 비워줌
        break;

      case AUTH_HP_DUPLICATION_REQUEST: //휴대폰 인증 확인
        draft.hpDuplicateLoading = true;
        draft.hpDuplicateDone = false;
        draft.hpDuplicateError = null;
        break;
      case AUTH_HP_DUPLICATION_SUCCESS:
        draft.hpDuplicateLoading = false;
        draft.hpDuplicateDone = true;
        draft.hpDuplicateData = action.payload;
        // action.payload === null ? "휴대폰 인증이 완료 되었습니다." : ""; //성공 일때 null 값 받음
        break;
      case AUTH_HP_DUPLICATION_ERROR:
        draft.hpDuplicateLoading = false;
        draft.hpDuplicateError = action.payload;
        draft.hpDuplicateData = [];
        break;

      case AUTH_EMAIL_DUPLICATION_REQUEST: //이메일 중복 체크
        draft.emailDuplicateLoading = true;
        draft.emailDuplicateDone = false;
        draft.emailDuplicateError = null;
        break;
      case AUTH_EMAIL_DUPLICATION_SUCCESS:
        draft.emailDuplicateLoading = false;
        draft.emailDuplicateDone = true;
        draft.emailDuplicateMsg = action.payload;
        // action.payload === null ? "사용할 수 있는 이메일 입니다." : "";
        //성공 일때 null 값 받음
        break;
      case AUTH_EMAIL_DUPLICATION_ERROR:
        draft.emailDuplicateLoading = false;
        draft.emailDuplicateError = action.payload;
        draft.emailDuplicateMsg = [];
        break;

      case AUTH_NICKNAME_DUPLICATION_REQUEST: //닉네임 중복 체크
        draft.nicknameDuplicateLoading = true;
        draft.nicknameDuplicateDone = false;
        draft.nicknameDuplicateError = null;
        break;
      case AUTH_NICKNAME_DUPLICATION_SUCCESS:
        draft.nicknameDuplicateLoading = false;
        draft.nicknameDuplicateDone = true;
        draft.nicknameDuplicateMsg = action.payload;
        // action.payload === null ? "사용할 수 있는 닉네임 입니다." : ""; //성공 일때 null 값 받음
        break;
      case AUTH_NICKNAME_DUPLICATION_ERROR:
        draft.nicknameDuplicateLoading = false;
        draft.nicknameDuplicateError = action.payload;
        draft.nicknameDuplicateMsg = [];
        break;

      case AUTH_REGISTER_REQUEST: //회원가입
        draft.registerLoading = true;
        draft.registerDone = false;
        draft.registerError = null;
        break;
      case AUTH_REGISTER_SUCCESS:
        draft.registerLoading = false;
        draft.registerDone = true;
        draft.registerUser = action.payload;
        break;
      case AUTH_REGISTER_ERROR:
        draft.registerLoading = false;
        draft.registerError = action.payload;
        break;

      case REFRESH_REGISTER: //회원가입 완료 후
        draft.registerDone = false;
        break;

      case AUTH_FIND_ID_CERTIFCATION_REQUEST: //아이디 찾기 휴대폰 인증
        draft.findIdCertificationLoading = true;
        draft.findIdCertificationDone = false;
        draft.findIdCertificationError = null;
        break;
      case AUTH_FIND_ID_CERTIFCATION_SUCCESS:
        draft.findIdCertificationLoading = false;
        draft.findIdCertificationDone = true;
        draft.findIdCertification_Email = action.payload;
        break;
      case AUTH_FIND_ID_CERTIFCATION_ERROR:
        draft.findIdCertificationLoading = false;
        draft.findIdCertificationError = action.payload;
        break;

      case AUTH_FIND_ID_DUPLICATION_REQUEST: //아이디 찾기 휴대폰 확인
        draft.findIdDuplicateLoading = true;
        draft.findIdDuplicateDone = false;
        draft.findIdDuplicateError = null;
        break;
      case AUTH_FIND_ID_DUPLICATION_SUCCESS:
        draft.findIdDuplicateLoading = false;
        draft.findIdDuplicateDone = true;
        draft.findIdCertification_Email = action.payload;
        break;
      case AUTH_FIND_ID_DUPLICATION_ERROR:
        draft.findIdDuplicateLoading = false;
        draft.findIdDuplicateError = action.payload;
        break;

      case AUTH_FIND_PASSEWORD_CERTIFCATION_REQUEST: //비밀번호 찾기 휴대폰 인증
        draft.findPwCertificationLoading = true;
        draft.findPwCertificationDone = false;
        draft.findPwCertificationError = null;
        break;
      case AUTH_FIND_PASSEWORD_CERTIFCATION_SUCCESS:
        draft.findIdCertificationLoading = false;
        draft.findIdCertificationDone = true;
        draft.findPwCertification_PassWord = action.payload;
        break;
      case AUTH_FIND_PASSEWORD_CERTIFCATION_ERROR:
        draft.findPwCertificationLoading = false;
        draft.findPwCertificationError = action.payload;
        break;

      case AUTH_CHANGE_PASSEWORD_REQUEST: //비밀번호 변경
        draft.findPwDuplicateLoading = true;
        draft.findPwDuplicateDone = false;
        draft.findPwDuplicateError = null;
        break;
      case AUTH_CHANGE_PASSEWORD_SUCCESS:
        draft.findPwDuplicateLoading = false;
        draft.findPwDuplicateDone = true;

        break;
      case AUTH_CHANGE_PASSEWORD_ERROR:
        draft.findPwDuplicateLoading = false;
        draft.findPwDuplicateError = action.payload;
        break;

      case AUTH_FIND_PASSEWORD_DUPLICATION_REQUEST: //아이디 찾기 휴대폰 확인
        draft.findPwDuplicateLoading = true;
        draft.findPwDuplicateDone = false;
        draft.findPwDuplicateError = null;
        break;
      case AUTH_FIND_PASSEWORD_DUPLICATION_SUCCESS:
        draft.findPwDuplicateLoading = false;
        draft.findPwDuplicateDone = true;
        draft.ChangePassWordHashCode = action.payload;
        break;
      case AUTH_FIND_PASSEWORD_DUPLICATION_ERROR:
        draft.findPwDuplicateLoading = false;
        draft.findPwDuplicateError = action.payload;
        break;

      case POST_PASSEWORD_CERTIFCATION_REQUEST: // 회원정보 수정 페이지 - 현재 비밀번호 확인
        draft.passwordcertificationLoading = true;
        draft.passwordcertificationDone = false;
        draft.passwordcertificationError = null;
        break;
      case POST_PASSEWORD_CERTIFCATION_SUCCESS:
        draft.passwordcertificationLoading = false;
        draft.passwordcertificationDone = true;
        draft.passwordcertificationSuccess = action.payload; // true 값 들어옴
        break;
      case POST_PASSEWORD_CERTIFCATION_ERROR:
        draft.passwordcertificationLoading = false;
        draft.passwordcertificationError = action.payload;
        draft.passwordcertificationSuccess = false;
        break;

      case PUT_PASSEWORD_CHANGE_REQUEST: // 회원정보 수정 페이지 - 비밀번호 변경
        draft.passwordChangeLoading = true;
        draft.passwordChangeDone = false;
        draft.passwordChangeError = null;
        break;
      case PUT_PASSEWORD_CHANGE_SUCCESS:
        draft.passwordChangeLoading = false;
        draft.passwordChangeDone = true;
        // draft.passwordcertificationSuccess = action.payload;
        break;
      case PUT_PASSEWORD_CHANGE_ERROR:
        draft.passwordChangeLoading = false;
        draft.passwordChangeError = action.payload;
        // draft.passwordcertificationSuccess = false;
        break;

      case PUT_HP_NUMBER_CHANGE_REQUEST: // 회원정보 수정 페이지 - 휴대폰 번호 변경
        draft.hpNumberChangeLoading = true;
        draft.hpNumberChangeDone = false;
        draft.hpNumberChangeError = null;
        break;
      case PUT_HP_NUMBER_CHANGE_SUCCESS:
        draft.hpNumberChangeLoading = false;
        draft.hpNumberChangeDone = true;
        draft.hpNumberChangeMsg = action.payload;
        break;
      case PUT_HP_NUMBER_CHANGE_ERROR:
        draft.hpNumberChangeLoading = false;
        draft.hpNumberChangeError = action.payload;
        draft.hpNumberChangeMsg = "";
        break;

      default:
        break;
    }
  });
export default auth;
