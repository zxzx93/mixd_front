import React from "react";
import { Route, Switch } from "react-router-dom";
import { BackTop } from "antd";
import "antd/dist/antd.css";

import Index from "./pages/index/Index";
import IndexDetail from "./components/indexDetail/IndexDetail";
import Search from "./pages/search/SearchResult";
import Category from "./pages/category/CategoryResult";
import Footer from "./components/footer/Footer";

import Login from "./pages/login/Login";
import FindIdPwForm from "./pages/login/FindIdPwForm";
import FindPwdEnd from "./pages/login/FindPw/FindPwdEnd";
import Register from "./pages/register/Register";
import RegisterFinish from "./pages/registerFinish/RegisterFinish";

import Video from "./pages/video/Video";

import Order from "./pages/order/Order";
import OrderDetail from "./pages/order/OrderDetail";
import OrderCancel from "./pages/order/OrderCancel";
import OrderResult from "./pages/order/OrderResult";

import Purchase from "./pages/orderComplete/Purchase";
import OrderComplete from "./pages/orderComplete/OrderComplete";

import Review from "./pages/review/Review";
import ReviewWrite from "./pages/review/ReviewWrite";

import Mypage from "./pages/mypage/Mypage";
import Modify from "./pages/modify/Modify";
import Qna from "./pages/qna/Qna";
import Service from "./pages/Service/Service";
import Privacy from "./pages/privacy/Privacy";
import Notice from "./pages/notice/Notice";
import NoticeDetail from "./pages/noticeDetail/NoticeDetail";
import Undonfirm from "./pages/notice/undonfirm/Undonfirm";
import Faq from "./pages/faq/Faq";

import Point from "./pages/point/Point";
import Coupon from "./pages/coupon/Coupon";

import RealTimeMarket from "./pages/realTimeMarket/RealTimeMarket";
import Market from "./pages/market/Market";

import Zzim from "./pages/zzim/Zzim";

import Cart from "./pages/cart/Cart";
import EventDetail from "./pages/event/components/EventDetail";
import CategoryResult from "./pages/category/CategoryResult";

import PlanDetail from "./pages/event/components/PlanDetail";
// import Header from "./components/header/Header"

function App() {
  return (
    <>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/IndexDetail/:name/:id" component={IndexDetail} />
        <Route path="/search/:word" component={Search} />
        <Route path="/categories/:keyword" component={CategoryResult} />

        <Route path="/login" component={Login} />
        <Route path="/findpwdend" component={FindPwdEnd} />
        <Route path="/findIdPwform" component={FindIdPwForm} />
        <Route path="/register" component={Register} />
        <Route path="/registerFinish" component={RegisterFinish} />
        <Route path="/Modify" component={Modify} />

        <Route exact path="/video/:cit_key" component={Video} />
        <Route exact path="/video" component={Video} />

        <Route path="/order" component={Order} />
        <Route path="/orderDetail/:id" component={OrderDetail} />
        <Route path="/orderCancel/:id" component={OrderCancel} />
        <Route path="/orderResult/:id/:cod_id" component={OrderResult} />

        <Route path="/orderPurchase" component={Purchase} />
        <Route path="/orderComplete" component={OrderComplete} />

        <Route path="/review" component={Review} />
        <Route exact path="/reviewWrite/:cre_id" component={ReviewWrite} />
        <Route exact path="/reviewWrite" component={ReviewWrite} />

        <Route exact path="/mypage/modify" component={Modify} />
        <Route exact path="/mypage" component={Mypage} />
        <Route path="/qna" component={Qna} />
        <Route path="/service" component={Service} />
        <Route path="/privacy" component={Privacy} />
        <Route exact path="/notice/view/:id" component={NoticeDetail} />
        <Route exact path="/notice/unconfirm/:id" component={NoticeDetail} />
        <Route exact path="/notice/unconfirm" component={Undonfirm} />
        <Route exact path="/notice" component={Notice} />
        <Route path="/faq" component={Faq} />

        <Route path="/point" component={Point} />
        <Route path="/coupon" component={Coupon} />

        <Route path="/realTimeMarket" component={RealTimeMarket} />
        <Route path="/market/:value" component={Market} />

        <Route path="/zzim" component={Zzim} />

        <Route path="/cart" component={Cart} />

        <Route path="/eventDetail/:id" component={EventDetail} />
        <Route path="/planDetail/:id" component={PlanDetail} />
      </Switch>
      <BackTop>
        <img src="/images/top.png" alt="" />
      </BackTop>
      <Footer />
    </>
  );
}

export default App;
