import Styled from "styled-components";
import dp from "./../../components/styled/Dp";

const VideoStyled = Styled.div`
    @media screen and (max-width: 768px) {
        padding: ${dp([43, 0, 52, 0])};

        .video_images_wrap {
            .swiper-wrapper{
                height:auto ;
            }
            .swiper-slide-active{
                height:auto ;
            }
            
            .swiper-slide {
                width: 100%;
                text-align: center;

                img {
                    max-width: 100%;
                }

                video {
                    max-width: 100%;
                }
            }

            .swiper-pagination-bullet {
                width: ${dp(12)};
                height: ${dp(2)};
                border-radius: 0;
                margin: ${dp([0, 4, 0, 0])};
                background: #FFFFFF;
                opacity: 1;

                &:last-child {
                    margin: 0;
                }

                &.swiper-pagination-bullet-active {
                    background: #FF3358;
                }
            }

            .video-react-big-play-button {
                   display:none;
                }

                .blah {
                    width:100%;
                    height: auto;
}  
        }

        .video_info_wrap {
            box-sizing: border-box;
            padding: ${dp([13, 12])};

            .price_wrap {
                overflow: hidden;
                margin-bottom: ${dp(5)};

                li {
                    float: left;
                    line-height: ${dp(23)};
                }

                .sale {
                    font-size: ${dp(19)};
                    color: #FF3358;
                    font-weight: bold;
                    margin-right: ${dp(4)};
                }

                .price {
                    font-size: ${dp(19)};
                    color: #000000;
                    font-weight: bold;
                    margin-right: ${dp(7)};
                }

                .real_price {
                    font-size: ${dp(14)};
                    line-height: ${dp(17)};
                    margin-top: ${dp(6)};
                    color: #C4C4C4;
                    text-decoration: line-through;
                }
            }

            .icons_wrap {
                position: relative;

                > div {
                    line-height: ${dp(33)};
                }
                
                button {
                    width:${dp(32)};

                    img {
                        width: ${dp(22.5)};
                    }

                    &.share_btn {
                        img {
                            width: ${dp(20.5)};
                        }
                    }

                    &.coupon_btn {
                        position: relative;
                        float: right;
                        width: ${dp(120)};
                        height: ${dp(38)};
                        border: ${dp(1)} solid #FF3358;
                        border-radius: ${dp(8)};
                        background-color: #FFFFFF;
                        margin-right: ${dp(4)};
                        box-shadow: 0 ${dp(3)} ${dp(6)} rgba(255, 203, 211, 1);

                        &::after {
                            position: absolute;
                            top: -${dp(8)};
                            right: -${dp(8)};
                            display: block;
                            width: ${dp(16)};
                            height: ${dp(16)};
                            content: '●';
                            color: #FF3548;
                            font-size: ${dp(10)};
                            background-color: #FFFFFF;
                        }

                        > span {
                            color: #FF3358;
                            font-weight: bold;
                            font-size: ${dp(13.5)};
                        }
                    }

                    &.done_coupon_btn {
                        position: relative;
                        float: right;
                        width: ${dp(120)};
                        height: ${dp(38)};
                        border-radius: ${dp(8)};
                        background-color: #f5f5f5;
                        margin-right: ${dp(4)};

                        > span {
                            color: #d1d1d1;
                            font-weight: bold;
                            font-size: ${dp(13.5)};
                        }
                    }
                }

                > p {
                    line-height: ${dp(16)};
                    font-size: ${dp(13)};
                    color: #000000;
                    margin: 0;
                }
            }
            .info_wrap {
                margin-top: ${dp(6)};

                .market_name {
                    font-size: ${dp(14)};
                    line-height: ${dp(17)};
                    color: #000000;
                    font-weight: bold;
                }

                .item_content {
                    > p {
                        margin: ${dp([2, 0, 6, 0])};
                        line-height: ${dp(17)};
                        font-size: ${dp(14)};
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color: #000000;
                    }

                    span {
                        color: #000000;
                    }

                    button {
                        border: none;
                        height: auto;
                        padding: 0;

                        > span {
                            color: #D1D1D1;
                        }
                    }
                }

                > button {
                    margin-top: ${dp(9)};
                    height: ${dp(16)};
                    padding: 0;
                    font-size: ${dp(13)};
                    line-height: ${dp(16)};

                    > span {
                        display: block;
                        line-height: ${dp(16)};
                        color: #D1D1D1;
                    }
                }              
            }
        }

        .buttons_wrap {
            box-sizing: border-box;
            padding: ${dp([11, 7, 21, 14])};
            overflow: hidden;
            /* margin-bottom: ${dp(21)}; */
            border-bottom: ${dp(6)} solid #EDEDED;

            .ant-avatar {
                width: ${dp(42)};
                height: ${dp(42)};
                float: left;
            }

            > div {
                width: calc(100% - ${dp(58)});
                float: left;
                margin-left: ${dp(16)};
                box-shadow: 0 ${dp(3)} ${dp(6)} rgba(41, 0, 0, 0.2);
                border-radius: ${dp(21)};

                .buyNow_btn {
                    width: 66%;
                    height: ${dp(42)};
                    border-radius: 0;
                    border-top-left-radius: ${dp(21)};
                    border-bottom-left-radius: ${dp(21)};
                    background-color: #000000;
                    float: left;

                    span {
                        display: block;

                        &:nth-child(1) {
                            line-height: ${dp(17)};
                            font-size: ${dp(14)};
                            font-weight: bold;
                            color: #FFFFFF;
                        }

                        &:nth-child(2) {
                            line-height: ${dp(12)};
                            font-size: ${dp(10)};
                            margin-top: ${dp(1)};
                            color: #FFFFFF;
                        }
                    }
                }

                /* .detail_btn {
                    box-sizing: border-box;
                    width: 34%;
                    height: ${dp(42)};
                    border-radius: 0;
                    border: ${dp(1)} solid #000000;
                    border-top-right-radius: ${dp(21)};
                    border-bottom-right-radius: ${dp(21)};
                    border-left: 0;
                    font-weight: bold;
                    padding: 0;
                } */
            }
        }

        .detail_info {
            box-sizing: border-box;
            padding: ${dp([25, 20, 22, 20])};
            border-bottom: ${dp(6)} solid #EDEDED;

            > ul {
                margin: 0;

                > li {
                    overflow: hidden;
                    margin-bottom: ${dp(5)};

                    &:last-child {
                        margin: 0;
                    }

                    > p {
                        width: ${dp(45)};
                        height: ${dp(15)};
                        font-size: ${dp(12)};
                        line-height: ${dp(15)};
                        color: #616161;
                        float: left;
                        margin: ${dp([0, 15, 0, 0])};
                    }

                    > span {
                        font-size: ${dp(12)};
                        line-height: ${dp(15)};
                        color: #000000;
                        float: left;
                        font-weight: bold;
                        
                        &.detail_alarm {
                            font-weight: normal;

                            &:before {
                                display: block;
                                content: '!';
                                width: ${dp(15)};
                                height: ${dp(15)};
                                text-align: center;
                                font-size: ${dp(7)};
                                line-height: ${dp(13)};
                                border: ${dp(1)} solid #000000;   
                                border-radius: 50%;
                                float: left;
                                margin-right: ${dp(3)};
                            }
                        }
                    }
                }
            }
        }

        .comp_tabs_wrap {
            .ant-tabs-nav {
                margin: 0;
            }
            .ant-tabs-nav-wrap {
                box-sizing: border-box;
                padding: ${dp([0, 8])};
            }
            .ant-tabs-nav-list {
                width: 100%;
            }
            .ant-tabs-tab {
                padding: 0;
                margin: 0;
                width: 33.3%;

                .ant-tabs-tab-btn {
                    width: 100%;
                    height: ${dp(48)};
                    line-height: ${dp(48)};
                    text-align: center;
                    font-weight: bold;
                    font-size: ${dp(13)};

                }
            }
            .ant-tabs-tab-active {
                .ant-tabs-tab-btn {
                    color: #FF3358;        
                }
            }
            .ant-tabs-ink-bar {
                height: ${dp(3)};
                background: #FF3358;
            }
        }

        .video_detail {
            > .ant-collapse-item {
                position: relative;
                
                > .ant-collapse-header {
                    position: absolute;
                    top: -${dp(70)};
                    right: ${dp(5)};
                    padding: 0 !important;
                    width: 28.5%;

                    .ant-btn {
                        box-sizing: border-box;
                        width: 100%;
                        height: ${dp(42)};
                        border-radius: 0;
                        border: ${dp(1)} solid #000000;
                        border-top-right-radius: ${dp(21)};
                        border-bottom-right-radius: ${dp(21)};
                        border-left: 0;
                        font-weight: bold;
                        padding: 0;
                    }
                }
                .ant-collapse-content-box {
                    padding: 0;
                }
            }
        }
    }
`;

export default VideoStyled;
