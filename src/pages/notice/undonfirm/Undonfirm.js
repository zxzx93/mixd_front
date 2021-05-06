import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import SubHeader from "../../../components/header/SubHeader";
import { NoticeStyle } from "../NoticeStyled";
import BoardList from "../../../components/boardList/BoardList";
import { getNotice } from "../../../store/modules/notice";

const Undonfirm = ({ match, history }) => {
  const dispatch = useDispatch();
  const { notices } = useSelector(state => state.notice);

  console.log(match.url);
  console.log(history);
  useEffect(() => {
    dispatch(getNotice());
  }, [dispatch]);

  return (
    <NoticeStyle>
      <SubHeader name={"미확인 입금"} />

      <div id="content" className="board_detail">
        <div>
          <div className="board_lists">
            <BoardList lists={notices} url={match.url} />
          </div>
        </div>
      </div>
      <div className="goTop"></div>
    </NoticeStyle>
  );
};

export default Undonfirm;
