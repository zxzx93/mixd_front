import Styled from "styled-components";
import dp from "./../../../components/styled/Dp";

const WriteReviewListStyled = Styled.div`
    @media screen and (max-width: 768px) {
        .review_lists_wrap {
            box-sizing: border-box;
            padding: ${dp([6, 18])};
        }

        .review_write_list {
            position: relative;
            padding: ${dp([16, 0, 12, 0])};
            overflow: hidden;
            border-bottom: ${dp(1)} solid #F5F5F5;

            .img_wrap {
                width: ${dp(60)};
                height: ${dp(60)};
                border-radius: ${dp(4)};
                overflow: hidden;
                background-color: #616161;
                float: left;

                > img {
                    width: 100%;
                }
            }

            .review_info {
                float: left;
                width: calc(100% - 3.75rem);
                box-sizing: border-box;
                padding: ${dp([13, 50, 10, 12])};
            
                > p {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-bottom: ${dp(5)};
                    line-height: ${dp(17)};

                    > span {
                        font-size: ${dp(14)};
                        margin-right: ${dp(5)};

                        &:first-child {
                            color: #939393;
                        }

                        &:nth-child(2) {
                            color: #000000;
                        }
                    }
                }

                > div {
                    font-size: ${dp(12)};
                    color: #939393;
                    line-height: ${dp(15)};

                    > span {
                        position: relative;
                        top: ${dp(2)};
                        display: inline-block;
                        width: ${dp(1)};
                        height: ${dp(12)};
                        background-color: #939393;
                        margin: ${dp([0, 8])};
                    }
                }
            }

            .write_btn {
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);

                > img {
                    transform: rotate(-90deg);
                }
            }
        }
        .review_non {
            text-align: center;
            margin: ${dp(220)} auto;
            color: #d1d1d1;
            font-size: ${dp(14)};
        }
    }
`;

export default WriteReviewListStyled;
