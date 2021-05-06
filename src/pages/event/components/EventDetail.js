import React, { useEffect, useState } from "react";
import EventDetailStyled from "./EventDetailStyled";
import SubHeader from "./../../../components/header/SubHeader";
import Comments from "./Comments";
import {
    eventDetailListInfo,
    eventDetailCommentsListInfo,
    eventCommentProduceInfo,
} from "../../../store/modules/event";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox, Input } from "antd";
import event from "./../../../store/modules/event";
import { Avatar } from "antd";
import { getUserToken } from "../../../util/decryptUser";

const EventDetail = ({ match }) => {
    const { TextArea } = Input;
    const dispatch = useDispatch();
    const {
        eventDetailList,
        eventDetailListComments,
        eventDetailListCommentDelete,
        eventDetailListCommentProduce,
    } = useSelector((state) => state.event);
    const { user, token } = getUserToken();

    console.log(user);
    useEffect(() => {
        dispatch(eventDetailListInfo(match.params.id));
    }, [dispatch]);

    useEffect(() => {
        dispatch(eventDetailCommentsListInfo(match.params.id));
    }, [dispatch, eventDetailListCommentDelete, eventDetailListCommentProduce]);

    // console.log(match.params.id);

    const [myComment, setMyComment] = useState(false);
    const [writeComment, setWriteComment] = useState(false);
    const seeMyComment = (e) => {
        if (token) {
            if (e.target.checked) {
                setMyComment(true);
            } else {
                setMyComment(false);
            }
        } else {
            alert("로그인 후 이용 할 수 있습니다");
        }
    };

    const witeCommentBtn = () => {
        if (token) {
            setWriteComment(true);
        } else {
            alert("로그인 후 이용 할 수 있습니다");
        }
    };
    const [checkCommentValue, setCheckCommentValue] = useState("");
    const chcekComment = (e) => {
        setCheckCommentValue(e.target.value);
    };
    const settingComment = () => {
        // console.log("눌렸따");
        dispatch(
            eventCommentProduceInfo(match.params.id, checkCommentValue, token)
        );
        setCheckCommentValue("");
    };
    return (
        <EventDetailStyled>
            <SubHeader name="이벤트" />
            <div className="image_wrap">
                {/* <img src={`${process.env.REACT_APP_API_URL}${eventDetailList.event_img}`} alt="" /> */}
                <div
                    dangerouslySetInnerHTML={{
                        __html: eventDetailList.content,
                    }}
                ></div>
            </div>
            <div className="comment_wrap">
                <Comments
                    myComment={myComment}
                    lists={eventDetailListComments.items}
                    paramsId ={match.params.id}
                />
            </div>
            <div className="line"></div>
            <div className="bottm_btn_wrap">
                {writeComment ? (
                    <div className="wirte_comment_wrap">
                        <Avatar
                            // src={`${process.env.REACT_APP_API_URL}${value.mem_photo}`}
                            alt=""
                            className="comment_avatar"
                        />
                        <div className="wirte_comment">
                            <TextArea
                                autoSize={{ minRows: 1, maxRows:5 }}
                                placeholder="댓글 달기"
                                onChange={(e) => chcekComment(e)}
                                value={checkCommentValue}
                            />
                            <span onClick={settingComment}>게시</span>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="my_comment">
                            <Checkbox
                                onChange={(e) => seeMyComment(e)}
                                className="my_comment_see"
                                checked={myComment}
                            />
                            <p>내가 쓴 댓글 보기</p>
                        </div>
                        <div
                            className="cre_comment_btn"
                            onClick={witeCommentBtn}
                        >
                            <img src="/images/c_add.png" alt="" />
                            <span>댓글 달기</span>
                        </div>
                    </>
                )}
            </div>
        </EventDetailStyled>
    );
};

export default EventDetail;
