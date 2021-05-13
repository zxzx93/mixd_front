import Styled from "styled-components";
import { Drawer } from "antd";
import dp from "../../../components/styled/Dp";

const ReplDrawerStyled = Styled(Drawer)`
    @media screen and (max-width: 768px) {
        transform: translateX(0) !important;

        z-index: 1300;
        box-sizing: border-box;
        padding: ${dp([0, 0, 52, 0])};

        .ant-drawer-header {
            padding: 0;
            border: none;

            .ant-drawer-title {
                position: relative;
                height: ${dp(43)};

                > div {
                    position: absolute;
                    top: 0;
                    right: ${dp(14)};
                    width: ${dp(32)};
                    height: ${dp(32)};
                    margin-top: ${dp(11)};
                    padding: 0;

                    > a {
                        position: relative;
                        display: block;
                        width: 100%;
                        height: 100%;

                        img {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            width: ${dp(18)};
                        }
                    }
                }
            }
        }

        .ant-drawer-close {
            position: absolute;
            top: 0;
            left: ${dp(7)};
            width: ${dp(32)};
            height: ${dp(32)};
            margin-top: ${dp(11)};
            padding: 0;

            img {
                width: ${dp(8)};
            }
        }

        .ant-drawer-body {
            padding: 0;

            .repl_header {
                position: relative;
                height: ${dp(42)};

                button {
                    position: absolute;
                    top: 0;
                    right: ${dp(14)};
                    width: ${dp(32)};
                    height: ${dp(32)};
                    margin-top: ${dp(11)};

                    img {
                        width: ${dp(18)};
                    }
                }
            }

            .repl_info {
                position: relative;
                box-sizing: border-box;
                padding: ${dp([0, 16, 16, 16])};
                border-bottom: ${dp(1)} solid #E5E5E5;

                .market_info {
                    position: absolute;
                    top: 0;
                    padding: ${dp([9, 0])};

                    .ant-avatar {
                        width: ${dp(30)};
                        height: ${dp(30)};
                        margin-right: ${dp(8)};
                    }

                    span {
                        font-weight: bold;
                        color: #000000;
                    }
                }

                .item_info {
                    .item_title {
                        padding-top: ${dp(44)};
                        font-size: ${dp(14)};
                        line-height: ${dp(20)};
                        font-weight: bold;
                        color: #000000;
                        margin-bottom: ${dp(3)};
                    }
                    
                    .item_content {
                        p {
                            font-size: ${dp(14)};
                            line-height: ${dp(19)};
                            color: #000000;
                            margin: 0;
                        }
                    }

                    .item_tooltip {
                        overflow: hidden;
                        margin-top: ${dp(9)};

                        > span {
                            display: block;
                            float: left;
                            line-height: ${dp(20)};
                            margin-right: ${dp(13)};
                            color: #D1D1D1;
                        }

                        button {
                            float: left;
                            height: ${dp(20)};
                            padding: 0;
                            border: none;

                            > span {
                                height: ${dp(20)};
                                color: #D1D1D1;
                            }
                        }
                    }
                }
            }

            .comment_lists {
                .ant-comment-inner {
                    padding: ${dp([10, 8, 8, 8])};
                
                    .ant-comment-avatar {
                        width: ${dp(40)};
                        height: ${dp(40)};
                        margin-right: ${dp(9)};

                        img {
                            width: ${dp(40)};
                            height: ${dp(40)};
                        }
                    }
                    .ant-comment-content {
                        width: 500px;
                    }
                    .ant-comment-content-author {
                        line-height: ${dp(20)};
                        margin-bottom: ${dp(4)};

                        .ant-comment-content-author-name {
                            font-size: ${dp(14)};
                            color: #000000;
                            font-weight: bold;
                        }
                    }

                    .ant-comment-content-detail {
                        color: #000000;
                        font-size: ${dp(14)};
                        line-height: ${dp(19)};
                    }
                }

                .swiper-slide {
                    width: auto;
                    max-width: 100%;

                    &.delete_wrap,
                    &.report_wrap {
                        z-index: 1400;
                        position: absolute;
                        width: ${dp(60)};
                        top: 50%;
                        left: 100%;
                        transform: translateY(-50%);
                        box-sizing: border-box;
                        background: #FF3358;
                        padding-left: ${dp(1)};

                        .deleteImg{
                            background: url("/images/delete.png")  no-repeat;
                            background-position: center; 
                            background-size: ${dp(25)} ${dp(25)};
                        }

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
                                    width: ${dp(22)};
                                }
                            }
                        }

                       
                    }
                }
            }
        }

        .ant-drawer-footer {
            padding: 0;

            .ant-comment-inner {
                padding: ${dp([8, 10, 8, 8])};
            
            }

            .ant-comment-avatar {
                position: relative;
                margin-right: ${dp(8)};
                width: ${dp(30)};
            }
            .ant-avatar {
                position: absolute;
                bottom: ${dp(6)};
                width: ${dp(30)};
                height: ${dp(30)};
            }

            .ant-comment-content-detail {
                position: relative;

                textarea {
                    min-height: ${dp(42)} !important;
                    box-sizing: border-box;
                    padding: ${dp([12, 46, 11, 23])};
                    border-radius: ${dp(21)};
                    border: ${dp(1)} solid #D6D6D6;
                    font-size: ${dp(14)};
                    line-height: ${dp(17)};
                }
                
                .ant-btn {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: ${dp(46)};
                    height: ${dp(42)};
                    padding: 0;
                }
            }
        }

    }
`;

export default ReplDrawerStyled;
