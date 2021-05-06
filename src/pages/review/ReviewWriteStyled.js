import Styled from "styled-components";
import dp from './../../components/styled/Dp';

const ReviewWriteStyled = Styled.div`
    @media screen and (max-width: 768px) {
        box-sizing: border-box;
        padding: ${dp([50, 0, 52, 0])};

        .score_wrap {
            box-sizing: border-box;
            padding: ${dp([12, 16, 0, 16])};
            
            > div {
                overflow: hidden;
                box-sizing: border-box;
                padding: ${dp([12, 0])};
                border-bottom: ${dp(1)} solid #F5F5F5; 

                > div {
                    float: left;

                    &:first-child {
                        width: ${dp(60)};
                        height: ${dp(60)};
                        border-radius: ${dp(4)};
                        overflow: hidden;
                        background-color: #d1d1d1 ;
                        > img {
                            width: 100%;
                        }
                    }

                    &:nth-child(2) {
                        box-sizing: border-box;
                        padding: ${dp([10, 0, 0, 12])};

                        > p {
                            color: #939393;
                            font-size: ${dp(12)};
                            line-height: ${dp(15)};
                            margin-bottom: ${dp(4)};

                            > span {
                                display: inline-block;
                                margin: ${dp([0, 6])};
                            }
                        }

                        .ant-rate {
                            height: ${dp(24)};
                        }
                        .ant-rate-star {
                            display: block;
                            float: left;

                            > div {
                                transform: unset;
                            }
                        }

                        .ant-rate-star-full {
                            .ant-rate-star-first,
                            .ant-rate-star-second {
                                color: #FF3358;
                            }
                        }
                        .ant-rate-star-first,
                        .ant-rate-star-second {
                            height: ${dp(24)};
                            color: #DFDFDF;

                            > span {
                                display: block;
                            }
                        }

                        .ant-rate-star {
                            margin-right: ${dp(4)};
                        }
                    }
                }
            }
        }

        .size_wrap {
            overflow: hidden;
            box-sizing: border-box;
            padding: ${dp([18, 16, 21, 16])};

            > div {
                overflow: hidden;

                &:first-child {
                    margin-bottom: ${dp(12)};
                }

                > div {
                    float: left;

                    &:first-child {
                        line-height: ${dp(32)};
                        font-weight: bold;
                        color: #000000;
                    }

                    &:nth-child(2) {
                        float: right;
                    }
                }
            }

            .ant-radio-button-wrapper {
                margin-right: ${dp(4)};
                border-radius: ${dp(16)};
                border-top-width: ${dp(1)};
                border-left-width: ${dp(1)};
                border: ${dp(1)} solid #D1D1D1;
                padding: 0;
                text-align: center;

                > span {
                    color: #616161;
                    font-size: ${dp(13)};
                }

                &:before {
                    display: none;
                }

                &:first-child {
                    width: ${dp(68)};
                }
                &:nth-child(2) {
                    width: ${dp(100)};
                }
                &:last-child {
                    width: ${dp(68)};
                    margin-right: 0;
                }
            }

            .ant-radio-button-wrapper-checked {
                border: ${dp(1)} solid #FF3358;
                border-right-color: #FF3358 !important;

                > span {
                    color: #FF3358;
                    font-size: ${dp(13)};
                    font-weight: bold;
                }
            }
        }

        .photo_wrap {
            box-sizing: border-box;
            padding: ${dp([0, 16, 27, 16])};

            > p {
                font-weight: bold;
                color: #000000;

                > span {
                    color: #D1D1D1;
                    font-weight: normal;
                    font-size: ${dp(12)};
                    margin-left: ${dp(12)};
                }
            }
        }

        .photo_wrap {
            .ant-upload-list-item {
                padding: 0;
            }

            .ant-tooltip {
                display: none;
            }

            .ant-upload-list-item-actions {
                top: 0;
                right: 0;
                left: unset;
                transform: unset;

                > a {
                    display: none;
                }
            }

            .ant-upload-select-picture-card {
                width: ${dp(60)};
                height: ${dp(60)};
                box-sizing: border-box;
                border: none;
                background-color: #F5F5F5;
                margin: 0;
                border-radius: ${dp(4)};

                > .ant-upload {
                    box-sizing: border-box;
                    display: block;
                    padding-top: ${dp(11)};

                    > img {
                        width: ${dp(20)};
                    }

                    > p {
                        font-size: ${dp(12)};
                        text-align: center;
                    }
                }
            }
            .ant-upload-list-picture-card-container {
                width: ${dp(60)};
                height: ${dp(60)};
                margin: 0 ${dp(7)} 0 0;
                background-color: #F5F5F5;
                border-radius: ${dp(4)};
                overflow: hidden;

                &:nth-child(5) {
                    margin: 0;
                }
            }
            .ant-upload-list-item {
                border: none;
            }
            .ant-upload-list-item-info {
                &:before {
                    background: transparent;
                }
            }
        }

        .review_wrap {
            box-sizing: border-box;
            padding: ${dp([0, 16, 20, 16])};
            border-bottom: ${dp(6)} solid #F5F5F5;

            > p {
                font-weight: bold;
                font-size: ${dp(14)};
                margin-bottom: ${dp(8)};
                color: #000000;
            }

            .create_review {
                resize: none;
                width: 100%;
                height: ${dp(154)};
                border-radius: ${dp(4)};
                box-sizing: border-box;
                padding: ${dp(12)};
            }
        }

        .shape_wrap {
            > .ant-btn {
                width: 100%;
                padding: ${dp([17, 24, 17, 16])};
                background-color: #FFFFFF;
                text-align: left;
                height: ${dp(54)};
                overflow: hidden;

                > span {
                    display: block;
                    float: left;
                    font-size: ${dp(14)};
                    line-height: ${dp(20)};
                    font-weight: bold;
                    color: #000000;
                }

                > img {
                    position: relative;
                    top: ${dp(3)};
                    float: right;
                    width: ${dp(8)};
                }
            }
        }

        .review_notice {
            background-color: #F5F5F5;
            box-sizing: border-box;
            padding: ${dp([24, 16, 50, 16])};

            > p {
                font-size: ${dp(13)};
                line-height: ${dp(19)};
                font-weight: bold;
                color: #D1D1D1;
                margin-bottom: ${dp(4)};
            }

            > span {
                font-size: ${dp(13)};
                line-height: ${dp(18)};
                color: #D1D1D1;
                letter-spacing: -${dp(0.33)};
            }

            > div {
                margin-top: ${dp(60)};

                button {
                    width: 49%;
                    height: ${dp(48)};
                    margin-right: 2%;
                    border: none;
                    border-radius: ${dp(4)};

                    > span {
                        font-size: ${dp(15)};
                        font-weight: bold;
                    }

                    &.create_review_cancel {
                        > span {
                            color: #000000;
                        }
                    }

                    &.create_review_btn {
                        background-color: #000000;

                        > span {
                            color: #FFFFFF;
                        }
                    }

                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }

        .add_size {
            box-sizing: border-box;
            padding: ${dp([0, 16])};
            
            .add_size_btn {
                width: 100%;
            }
        }
    }
`;

export default ReviewWriteStyled;
