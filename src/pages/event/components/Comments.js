import React, { useState } from "react";
import CommentsStyled from "./CommentsStyled";
import { Comment, Avatar, List, Tooltip } from "antd";
// import timeForToday
import { Swiper, SwiperSlide } from "swiper/react";
import { Drawer, Button } from "antd";
import { timeForToday } from "./../../../components/Time/TimeFor";
import { getUserToken } from "../../../util/decryptUser";
import { eventDetailListInfo,eventDetailCommentsDeleteInfo } from "../../../store/modules/event";
import { useDispatch } from "react-redux";

const Comments = ({ lists, myComment,paramsId }) => {
    console.log(lists);
    const { user, token } = getUserToken();
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [commentId, setCommentId] = useState(0);
    // eventDetailCommentsDeleteInfo
    console.log(token);
    console.log(user);
    console.log(paramsId);

    // console.log(user.mem_nickname);
    const showDrawer = (id) => {
        setCommentId(id);
        setVisible(true);
    };
    const deleteComment = () => {
        dispatch(eventDetailCommentsDeleteInfo(commentId, token));
        console.log(commentId);
        setVisible(false);
    };

    const onClose = () => {
        setVisible(false);
    };

    const resetList = () => {
        dispatch(eventDetailListInfo(paramsId));
    };

    return (
        <CommentsStyled>
            <Button type="button" className="reset_btn" onClick={resetList}>
                <img src="/images/reset.png" alt="" />
            </Button>
            <List
                className="comment_list"
                header={"댓글"}
                itemLayout="horizontal"
                dataSource={lists}
                renderItem={(value, index) => (
                    <li key={index}>
                        {myComment ? (
                            user.mem_nickname === value.user.mem_nickname ? (
                                <Swiper slidesPerView={"auto"}>
                                    <SwiperSlide>
                                        <Comment
                                            author={
                                                <span>
                                                    {value.user.mem_nickname}
                                                </span>
                                            }
                                            avatar={
                                                <Avatar
                                                    src={`${process.env.REACT_APP_API_URL}${value.mem_photo}`}
                                                    alt=""
                                                />
                                            }
                                            content={<p>{value.content}</p>}
                                        >
                                            <Tooltip>
                                                <span className="cre_time">
                                                    {timeForToday(
                                                        value.regdate
                                                    )}
                                                </span>
                                            </Tooltip>
                                        </Comment>
                                    </SwiperSlide>
                                    <SwiperSlide className="delete_wrap">
                                        <div>
                                            <Button
                                                type="primary"
                                                onClick={() =>
                                                    showDrawer(value.bit_id)
                                                }
                                            >
                                                <img
                                                    src="/images/trash_can.png"
                                                    alt=""
                                                />
                                            </Button>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            ) : (
                                ""
                            )
                        ) : user ? (
                            user.mem_nickname === value.user.mem_nickname ? (
                                <Swiper slidesPerView={"auto"}>
                                    <SwiperSlide>
                                        <Comment
                                            author={
                                                <span>
                                                    {value.user.mem_nickname}
                                                </span>
                                            }
                                            avatar={
                                                <Avatar
                                                    src={`${process.env.REACT_APP_API_URL}${value.mem_photo}`}
                                                    alt=""
                                                />
                                            }
                                            content={<p>{value.content}</p>}
                                        >
                                            <Tooltip>
                                                <span className="cre_time">
                                                    {timeForToday(
                                                        value.regdate
                                                    )}
                                                </span>
                                            </Tooltip>
                                        </Comment>
                                    </SwiperSlide>
                                    <SwiperSlide className="delete_wrap">
                                        <div>
                                            <Button
                                                type="primary"
                                                onClick={() =>
                                                    showDrawer(value.bit_id)
                                                }
                                            >
                                                <img
                                                    src="/images/trash_can.png"
                                                    alt=""
                                                />
                                            </Button>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            ) : (
                                <>
                                    <Comment
                                        author={
                                            <span>
                                                {value.user.mem_nickname}
                                            </span>
                                        }
                                        avatar={
                                            <Avatar
                                                src={`${process.env.REACT_APP_API_URL}${value.mem_photo}`}
                                                alt=""
                                            />
                                        }
                                        content={<p>{value.content}</p>}
                                    >
                                        <Tooltip>
                                            <span className="cre_time">
                                                {timeForToday(value.regdate)}
                                            </span>
                                        </Tooltip>
                                    </Comment>
                                    <div>
                                    </div>
                                </>
                            )
                        ) : (
                            <>
                                <Comment
                                    author={
                                        <span>{value.user.mem_nickname}</span>
                                    }
                                    avatar={
                                        <Avatar
                                            src={`${process.env.REACT_APP_API_URL}${value.mem_photo}`}
                                            alt=""
                                        />
                                    }
                                    content={<p>{value.content}</p>}
                                >
                                    <Tooltip>
                                        <span className="cre_time">
                                            {timeForToday(value.regdate)}
                                        </span>
                                    </Tooltip>
                                </Comment>
                                <div>
                                </div>
                            </>
                        )}
                    </li>
                )}
            />
            <>
                <Drawer
                    title="신고판"
                    placement="bottom"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                    style={{zIndex: '1400'}}
                >
                    <span onClick={deleteComment}>삭제</span>
                </Drawer>

            </>
        </CommentsStyled>
    );
};

export default Comments;
