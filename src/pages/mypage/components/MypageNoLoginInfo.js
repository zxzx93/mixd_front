import React from "react";
import { Link } from "react-router-dom";
import NoLoginStyled from './MypageNoLoginStyled';

const MypageNoLoginInfo = () => {

    return (
        <NoLoginStyled>
        <div className="non_login_mypage_lists">
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
      </NoLoginStyled>
    )
}
export default MypageNoLoginInfo;