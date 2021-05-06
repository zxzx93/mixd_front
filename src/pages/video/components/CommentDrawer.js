import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Avatar, Input, Button, Comment, Image } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";

import CommentDrawerStyled from "./CommentDrawerStyled";
import ReportDrawer from "./ReportDrawer";
import DeleteDrawer from "./DeleteDrawer";
import { commentPost, getComment } from "../../../store/modules/items";
import { getUserToken } from "../../../util/decryptUser";

const { TextArea } = Input;

const CommentDrawer = ({ close, visible, list, cit_key }) => {
  const dispatch = useDispatch();
  const {
    comment,
    commentPostitem, //코멘트 작성 후 리스트 다시 불러옴
  } = useSelector(state => state.items);
  const { mypageInfoLists } = useSelector(state => state.users);

  const { token, user } = getUserToken();

  const [visibleDelete, setVisibleDelete] = useState(false);
  const [visibleReport, setVisibleReport] = useState(false);

  const [commentLists, setCommentLists] = useState([]);

  useEffect(() => {
    console.log("탐");
    console.log(" cit_key", cit_key);
    cit_key && dispatch(getComment(cit_key));
  }, [dispatch, getComment, commentPostitem, cit_key]);

  // console.log("list", list);
  // console.log("commentPostDone", commentGetDone);

  const [textAreavalue, setTextAreaValue] = useState(""); //코멘트 인풋창
  const handleSubmitHandler = () => {
    const comment = {
      cmt_content: textAreavalue,
    };
    dispatch(commentPost(comment, list.cit_key, token.accessToken));
    setTextAreaValue("");
  };

  const handleChange = e => {
    setTextAreaValue(e.target.value);
  };

  const [deleteId, setDeleteId] = useState(""); //list의 상품의 코멘트
  // 삭제 Drawer 열고 닫기
  const getCmtId = e => {
    setDeleteId(e.target.value);
    setVisibleDelete(true);
  };

  const closeDelete = () => {
    setVisibleDelete(false);
  };

  // 신고 Drawer 열고 닫기
  const showReport = () => {
    setVisibleReport(true);
  };
  const closeReport = () => {
    setVisibleReport(false);
  };

  return (
    <CommentDrawerStyled
      width={"100%"}
      title={
        <div>
          <Link to="/cart">
            <img src="/images/cart_w.png" alt="장바구니" />
          </Link>
        </div>
      }
      footer={
        <Comment
          avatar={
            <Avatar
              src={
                user.mem_photo === ""
                  ? "/images/mypage_logo.svg"
                  : `${process.env.REACT_APP_API_URL}${user.mem_photo}`
              }
              alt="로그인 유저 프로필 사진"
            />
          }
          content={
            <>
              <TextArea
                value={textAreavalue}
                onChange={handleChange}
                autoSize={{ minRows: 1, maxRows: 4 }}
              />
              <Button
                type="submit"
                htmlType="submit"
                onClick={() => handleSubmitHandler()}
              >
                게시
              </Button>
            </>
          }
        />
      }
      visible={visible}
      placement={"right"}
      closable={true}
      closeIcon={<img src="/images/back.png" alt="" />}
      onClose={close}
    >
      <div className="repl_wrap">
        <div className="repl_info">
          <div className="market_info">
            <Avatar
              icon={
                <img
                  src={`${process.env.REACT_APP_API_URL}${list.market.profile_img}`}
                  alt="마켓 프로필 사진"
                />
              }
            />
            <span>{list.market.market_name}</span>
          </div>
          <div className="item_info">
            <div className="item_title">{list.cit_name}</div>
            <div className="item_content">
              <p>{list.cit_summary}</p>

              <br />
              <p>{list.cit_hashtag}</p>
            </div>
            <div className="item_tooltip">
              <span>1시간</span>
              <Button type="text">댓글달기</Button>
            </div>
          </div>
        </div>

        <div className="comment_lists">
          {comment &&
            comment.map(value => {
              // console.log(
              //   "유저 확인",
              //   `${process.env.REACT_APP_API_URL}${value.user.mem_photo}`
              // );
              return (
                <Swiper slidesPerView={"auto"} key={value.cmt_id}>
                  <div>
                    <SwiperSlide>
                      <Comment
                        author={value.user.mem_nickname}
                        avatar={
                          <img
                            src={
                              value.mem_photo === ""
                                ? "/image/mypage_logo.svg"
                                : `${process.env.REACT_APP_API_URL}${value.user.mem_photo}`
                            }
                            alt="프로필 사진"
                          />
                        }
                        content={value.cmt_content}
                        datetime={value.regdate}
                      />
                    </SwiperSlide>
                    {value.user.mem_id === user.group.mem_id ? (
                      //글쓴 유저와 로그인한 사람 같을때 삭제 버튼 나옴
                      <SwiperSlide className="delete_wrap">
                        <div>
                          <button
                            className="deleteImg"
                            onClick={getCmtId}
                            value={value.cmt_id}
                          />
                          <DeleteDrawer
                            cmtId={deleteId}
                            visible={visibleDelete}
                            close={closeDelete}
                          />
                        </div>
                      </SwiperSlide>
                    ) : (
                      <SwiperSlide className="report_wrap">
                        <div>
                          <Button type="text" onClick={showReport}>
                            <img src="/images/report.png" alt="신고" />
                          </Button>
                          <ReportDrawer
                            visible={visibleReport}
                            close={closeReport}
                          />
                        </div>
                      </SwiperSlide>
                    )}
                  </div>
                </Swiper>
              );
            })}
        </div>
      </div>
    </CommentDrawerStyled>
  );
};

export default CommentDrawer;

// let today = new Date();

// let hours = today.getHours(); // 시
// let minutes = today.getMinutes(); // 분
// let seconds = today.getSeconds(); // 초
// let milliseconds = today.getMilliseconds(); // 밀리초

// useEffect(() => {
//   console.log(hours + ":" + minutes + ":" + seconds + ":" + milliseconds);
// }, [hours, minutes, seconds, milliseconds]);
