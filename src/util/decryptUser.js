import Crypto from "simple-crypto-js";

export const getUserToken = function () {
  const simpleCrypto = new Crypto(process.env.REACT_APP_REDUX_STORE_KEY);
  let user = window.localStorage.getItem("user");
  user = user ? simpleCrypto.decrypt(user.substring(1, user.length - 1)) : "";

  return user;
};
