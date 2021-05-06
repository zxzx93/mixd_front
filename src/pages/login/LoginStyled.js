import styled from "styled-components";
import dp from "../../components/styled/Dp";

export const LoginStyled = styled.div`
    @media screen and (max-width: 767px) {
        #login {
            > div {
                position: relative;
                width: 100%;
                margin-top: ${dp(50)};

                &#form_tab {
                    position: relative;
                    padding: ${dp([15, 16, 150, 16])};
                    box-sizing: border-box;
                    overflow: hidden;

                    #login_form,
                    #search_form {
                        > form {
                            > div {
                                > p {
                                    margin-bottom: ${dp(5)};
                                }

                                > div {
                                    &:first-child {
                                        margin-bottom: ${dp(40)};
                                        span {
                                            font-weight: bold;
                                        }
                                    }
                                }
                            }
                        }

                        .input_box {
                            margin: 0 0 ${dp(16)} 0;

                            &:nth-child(3) {
                                margin: 0 0 ${dp(24)} 0;
                            }

                            input {
                                width: 100%;
                                height: ${dp(36)};
                                box-sizing: border-box;
                                padding: ${dp([0, 18])};
                                font-size: ${dp(15)};
                                border: ${dp(1)} solid transparent;
                                border-bottom: ${dp(1)} solid #d1d1d1;
                                &::placeholder {
                                    color: #d1d1d1;
                                }
                            }
                        }

                        .error_info {
                            /* margin: 0 0 ${dp(16)} 0; */
                            margin: ${dp([45,0,35,0])};
                            border-radius: ${dp(4)};
                            text-align: center;
                            background-color: #f5f5f5;
                            width: 100%;
                            height: ${dp(45)};
                            line-height:${dp(45)} ;
                            p {
                                width: 100%;
                                /* height: ${dp(36)}; */
                                /* box-sizing: border-box; */
                                padding: ${dp([0, 18])};
                                font-size: ${dp(13)};
                                color: #ff3358;
                            }
                        }

                        .login_btn {
                            margin-bottom: ${dp(15)};
                            > input {
                                display: block;
                                width: 100%;
                                height: ${dp(48)};
                                line-height: 36px;
                                font-size: 14px;
                                box-sizing: border-box;
                                color: #ffffff;
                                border-radius: ${dp(4)};
                                cursor: pointer;
                                text-align: center;
                                border: ${dp(1)} solid transparent;
                            }
                        }

                        .search_line {
                            text-align: center;
                            margin-top: ${dp(26)};

                            span {
                                padding: ${dp([5, 15])};
                                font-size: ${dp(12)};
                                cursor: pointer;

                                &.between_line {
                                    display: inline-block;
                                    margin: ${dp([0, 45, 0, 50])};
                                    padding: ${dp(0)};
                                    width: ${dp(1)};
                                    height: ${dp(12)};
                                    background: #000000;
                                }
                            }
                        }

                        // 구글, 네이버, 카카오 숨기기 - 요청사항
                        .email {
                            a {
                                color: #000000;
                                font-size: ${dp(15)};
                            }
                        }

                        .google,
                        .naver,
                        .kakao,
                        .email {
                            margin-bottom: 12px;

                            > div {
                                width: 100%;
                                height: ${dp(48)};
                                line-height: ${dp(48)};
                                font-size: ${dp(14)};
                                box-sizing: border-box;
                                background-color: #ffffff;
                                border-radius: ${dp(4)};
                                cursor: pointer;
                                text-align: center;
                                border: ${dp(1)} solid #000000;
                            }

                            &.email {
                                margin-bottom: 0;

                                > div {
                                    padding: 0;
                                    text-align: center;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
