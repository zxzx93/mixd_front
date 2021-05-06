import Styled from 'styled-components'
import dp from './../../../components/styled/Dp';

const CommentsStyled = Styled.div`
    @media screen and (max-width: 768px) {
        position: relative;
        box-sizing: border-box;
        padding: 0 2vw;

        .reset_btn {
            position: absolute;
            top: ${dp(12)};
            right: 2vw;
            height: ${dp(23)};
            border: none;
            padding: 0 ${dp(10)};
            text-align: center;
            z-index: 1;

            img {
                width: ${dp(12)};
            }
        }
        
        .ant-comment-content-author {
            display: inline-block;
            float: left;
            line-height: ${dp(14)};
            margin: 0;

            span {
                font-size: ${dp(11)};
                color: #000000;
                font-weight: bold;
            }
        }

        .ant-comment-inner {
            padding: ${dp(16)} 0 0 0;
        }

        .ant-comment-content-detail {
            line-height: ${dp(18)};

            p {
                font-size: ${dp(12)};
                color: #000000;
            }
        }

        .ant-comment-nested {
            .cre_time {
                font-size: ${dp(12)};
                color: #C4C4C4;
            }

            .cre_repl {
                font-size: ${dp(12)};
                color: #C4C4C4;
                margin-left: ${dp(12)};
            }

            .like_btn {
                margin-left: ${dp(12)};

                img {
                    width: ${dp(11)};
                }
                span {
                    margin-left: ${dp(2)};
                    font-size: ${dp(11)};
                    color: #C4C4C4;
                }
            }
        }

        .swiper-wrapper {
            position: relative;
        }
        .delete_wrap {
            position: absolute;
            width: ${dp(40)};
            top: 50%;
            left: 100%;
            transform: translateY(-50%);
            box-sizing: border-box;
            background: #FF3358;
            padding-left: ${dp(1)};

            > div {
                position: relative;
                width: 100%;
                height: 100%;

                > button {
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    box-shadow: none;
                    background: transparent;
                    border-color: transparent;
                    padding: 0;

                    img {
                        width: ${dp(15)};
                    }
                }
            }
        }
    }
`;

export default CommentsStyled;
