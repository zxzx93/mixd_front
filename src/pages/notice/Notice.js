import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import SubHeader from "../../components/header/SubHeader";
import BoardList from "../../components/boardList/BoardList";
import { NoticeStyle } from "./NoticeStyled";
import { getNotice } from "../../store/modules/notice";
import { getUserToken } from "../../util/decryptUser";

const Notice = ({ match }) => {
  const dispatch = useDispatch();
  const { notices } = useSelector(state => state.notice);

  const{user} = getUserToken();

  console.log(user);

  useEffect(() => {
    dispatch(getNotice());
  }, [dispatch]);

  return (
    <NoticeStyle>
      <SubHeader name={"공지사항"} unUseCart={true} />

      <div id="content">
        <div className="board_top">
          <div>
            <p>
              <img src="/images/loud_speaker.png" alt="스피커아이콘" />
              <span>미확인 입금자 확인하세요!</span>
            </p>
            <Link to="/notice/unconfirm">확인하기</Link>
          </div>
        </div>
        <div className="board_lists">
          <BoardList
            lists={notices}
            url={match.url}
            mem_level={ user ? user.mem_level: ""}
          />
        </div>
      </div>
      <div className="goTop"></div>
    </NoticeStyle>
  );
};

export default Notice;
