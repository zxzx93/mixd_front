import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage/session';
// import storage from "redux-persist/lib/storage";
// Redux-persist한테 나는 localstorage를 사용할 것이라고 알려주는것

import auth from "./auth";
import qna from "./qna";
import gender from "./gender";
import notice from "./notice";
import coupon from "./coupon";
import point from "./point";
import cart from "./cart";
import home from "./home";
import zzim from "./zzim";
import users from "./users";
import market from "./market";
import event from "./event";
import categories from "./categories";
import search from "./search";
import items from "./items";
import order from "./order";
import plan from "./plan";
import review from "./review";
import purchase from "./purchase";
import cartToPurchase from './cartToPurchase';
// const persistConfig = {
//   key: "root",
//   // localStorage에 저장합니다.
//   // reducer 객체의 어느 지점에서 부터 데이터를 저장할 것인지 설정해주는것이 key이다.
//   // root부터 시작한다고 지정해준다.
//   storage,
//   // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
//   // 위에 import 한 성격의 storage를 지정해준다. 이 예제의 경우에는 localstorage
//   whitelist: ["auth"],
//   // blacklist -> 그것만 제외합니다
//   // whitelist -> 유지 및 보존하고 싶은 데이터를 배열안에 지정해준다.
//   // string 형태이고 아래 combineReducers에 지정된 값들을 사용해주면 된다.
// };

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cartToPurchase"],
};

const rootReducer = combineReducers({
  auth,
  qna,
  gender,
  notice,
  coupon,
  point,
  cart,
  home,
  zzim,
  users,
  market,
  event,
  search,
  categories,
  items,
  order,
  plan,
  review,
  purchase,
  cartToPurchase,
});

export default persistReducer(persistConfig, rootReducer);
// export default rootReducer;
