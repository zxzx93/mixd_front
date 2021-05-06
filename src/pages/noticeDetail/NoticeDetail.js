import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import SubHeader from "../../components/header/SubHeader";
import { getNoticeDetail } from "../../store/modules/notice";
import { NoticeStyle } from "../notice/NoticeStyled";

function NoticeDetail({ match }) {
  const dispatch = useDispatch();
  const { noticeDetail } = useSelector(state => state.notice);

  const { title, content, regdate } = noticeDetail;

  useEffect(() => {
    dispatch(getNoticeDetail(match.params.id));
  }, [dispatch, match.params.id]);

  // console.log(title, content, regdate);

  let date = regdate;
  if (regdate) {
    date = regdate.substring(0, 10).replaceAll("-", ".");
  }
  
  return (
    <NoticeStyle>
      <SubHeader name={"공지사항"} />

      <div id="content" className="board_detail">
        <div>
          <div className="board_detail_title">
            <div>
              {title}
              <p>{date}</p>
            </div>
          </div>

          <div className="board_detail_cont">
            <div
              dangerouslySetInnerHTML={{
                __html: `${content}`,
              }}
            />
          </div>
        </div>
      </div>
    </NoticeStyle>
  );
}

export default NoticeDetail;
