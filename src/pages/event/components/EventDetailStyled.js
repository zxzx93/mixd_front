import styled from "styled-components";
import dp from "./../../../components/styled/Dp";

const EventDetailStyled = styled.div`
    @media screen and (max-width: 768px) {
        margin: ${dp(43)} auto ${dp(51)};
        padding-bottom: ${dp(206)};

        .image_wrap {
            box-sizing: border-box;
            padding: ${dp(10)} 2vw ${dp(56)};
            border-bottom: 6px solid #f5f5f5;

            img {
                width: 100%;
            }
        }

        .line {
            width: 100%;
            height: ${dp(6)};
            background-color: #f5f5f5;
            margin: ${dp(18)} 0;
        }
        .bottm_btn_wrap {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .my_comment {
                display: flex;
                .my_comment_see {
                    margin-left: ${dp(15)};
                    margin-right: ${dp(8)};
                }
                > p {
                    font-size: ${dp(12)};
                }
                .ant-checkbox-checked .ant-checkbox-inner {
                    background-color: red;
                    border-color: red;
                }
            }
            .cre_comment_btn {
                width: ${dp(165)};
                line-height: ${dp(42)};
                margin-right: ${dp(7)};
                box-sizing: border-box;
                border: ${dp(1)} solid #d6d6d6;
                border-radius: ${dp(22)};
                text-align: center;

                img {
                    width: ${dp(13)};
                }

                span {
                    font-size: ${dp(11)};
                    color: #000000;
                    margin-left: ${dp(9)};
                }
            }
            .wirte_comment_wrap {
                width: 100%;
                display: flex;
                align-items: baseline;
                justify-content: space-between;
                border-top: ${dp(1)} solid #d6d6d6;
                padding: ${dp([16, 9])};
                position: fixed;
                bottom: 52px;
                background: #ffffff;
                z-index: 1;

                .comment_avatar {
                }
                .ant-avatar {
                    margin-right: ${dp(16)};
                }
                .wirte_comment{
                    position: relative;
                    width: 92%;
                    >textarea{
                        width: 100%;
                        height: ${dp(50)};
                        border-radius: ${dp(30)};
                        border: ${dp(1)} solid #d6d6d6;
                        outline: none;
                        padding: ${dp([16, 52, 16, 26])};
                        box-sizing: border-box;
                        resize: none;
                        &::placeholder{
                            color: #d6d6d6;
                            // padding-top: ${dp(10)};

                        }
                    }
                    >span{
                        text-align: center;
                        position: absolute;
                        right: ${dp(12)};
                        font-weight: bold;
                        bottom: ${dp(18)};
                    }
                }
            }
        }
    }
`;

export default EventDetailStyled;
