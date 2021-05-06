import React from "react";
import { Link } from "react-router-dom";
import LoginStyled from "./MypageLoginStyled";
import { useDispatch } from "react-redux";

import { logOut } from "../../../store/modules/auth";
import { getUserToken } from "../../../util/decryptUser";


const MypageLoginInfo = () => {
    const dispatch = useDispatch();

    const { user } = getUserToken();

    // 로그아읏 onclick
    const logOutHandler = () => {
        dispatch(logOut());
        localStorage.clear();
        window.location.reload();
    };

    return (
        <LoginStyled>
        <div className="mypage_lists">
        <p>정보</p>   
            <div>
                <div>
                    <Link to="/notice">
                        <img
                            src="/images/board_g.svg"
                            alt="노트모양 아이콘"
                        />
                        <span>공지사항</span>
                    </Link>
                </div>
            </div>
            <div>
                <div>
                    <Link to="/qna">
                        <img src="/images/qna_g.svg" alt="qna 아이콘" />
                        <span>Q&amp;A</span>
                    </Link>
                </div>
            </div>
            <div>
                <div>
                    <Link to="/faq">
                        <img
                            src="/images/faq_g.svg"
                            alt="헤드셋 아이콘"
                        />
                        <span>FAQ</span>
                    </Link>
                </div>
            </div>
            <div>
                <div>
                    <Link to="/service">
                        <img
                            src="/images/service_g.svg"
                            alt="책자모양 아이콘"
                        />
                        <span>서비스 이용약관</span>
                    </Link>
                </div>
            </div>
            <div>
                <div>
                    <Link to="/privacy">
                        <img
                            src="/images/private_g.svg"
                            alt="자물쇠모양 아이콘"
                        />
                        <span>개인정보 취급방침</span>
                    </Link>
                </div>
            </div>
            <div>
                <div>
                    <Link to="/mypage">
                        <img
                            src="/images/logout_g.svg"
                            alt="나가는 모양 아이콘"
                        />
                        <span onClick={logOutHandler}>로그아웃</span>
                    </Link>
                </div>
            </div>
            <div className="channel_talk">
                <a
                    href="http://pf.kakao.com/_GJxlbK/chat"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#fff" }}
                >
                    <p>채널톡 문의하기</p>
                </a>
            </div>
        </div>
        </LoginStyled>
    )
}

export default MypageLoginInfo;