import styled from "styled-components";
import dp from "../../components/styled/Dp";

const ReviewListStyled = styled.div`
  @media screen and (max-width: 768px) {
    .review_content {
      overflow: hidden;
      box-sizing: border-box;
      padding: ${dp([24, 16, 0, 16])};
      border-bottom: ${dp(6)} solid #f5f5f5;
      .review_title {
        border-bottom: ${dp(1)} solid #f5f5f5;
        overflow: hidden;
        padding-bottom: ${dp(12)};

        .review_img {
          width: ${dp(60)};
          height: ${dp(60)};
          overflow: hidden;
          border-radius: ${dp(4)};
          float: left;
          margin-right: ${dp(12)};

          background-color: gray;

          > img {
            width: 100%;
          }
        }

        .review_info {
          float: left;
          width: calc(100% - ${dp(72)});

          > div {
            margin: ${dp([6, 0, 7, 0])};
            overflow: hidden;

            .ant-rate {
              line-height: ${dp(20)};
              float: left;
            }
            .ant-rate-star {
              position: relative;
              top: ${dp(2)};
              margin-right: ${dp(4)};
              line-height: ${dp(18)};

              &:last-child {
                margin-right: 0;
              }
            }
            .anticon {
              display: block;
            }

            .ant-rate-star-full {
              .ant-rate-star-first,
              .ant-rate-star-second {
                color: #ff3358;
              }
            }

            .ant-rate-star-first,
            .ant-rate-star-second {
              color: #dfdfdf;
            }

            > span {
              float: right;
              font-size: ${dp(12)};
              color: #d1d1d1;
              line-height: ${dp(22)};
            }
          }

          > p {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: 0;
            font-size: ${dp(14)};
            line-height: ${dp(17)};

            &.detail {
              color: #939393;
            }

            &.useReview {
              > span {
                display: inline-block;
                margin-right: ${dp(5)};
                color: #939393;
              }
            }

            .blank {
              position: relative;
              top: ${dp(1.5)};
              display: inline-block;
              width: ${dp(1)};
              height: ${dp(14)};
              background-color: #d1d1d1;
              margin: ${dp([0, 8])};
            }
          }
        }
      }

      .user_review {
        box-sizing: border-box;
        padding: ${dp([19, 0, 12, 0])};

        .user_info {
          margin-bottom: ${(props) => (props.useReview ? "" : dp(11))};
          overflow: ${(props) => (props.useReview ? "" : "hidden")};

          > span {
            float: left;
            color: #000000;
            font-size: ${dp(13)};
            line-height: ${dp(20)};
          }

          > div {
            float: right;
            margin-top: -${dp(5)};
            > span {
              color: #d1d1d1;
              float: left;
              font-size: ${dp(12)};
              line-height: ${dp(20)};
              margin-right: ${dp(8)};
            }

            > .ant-btn {
              float: left;
              width: ${dp(20)};
              height: ${dp(21)};
              padding: 0;
              background-color: #ffffff;

              > img {
                display: block;
                width: ${dp(16)};
                margin: 0 auto;
              }
            }
          }
        }

        .product_info {
          margin-bottom: ${dp(12)};

          > p {
            font-size: ${dp(12)};
            line-height: ${dp(15)};
            margin-bottom: ${dp(5)};
            color: #939393;

            > span {
              position: relative;
              top: ${dp(1.5)};
              display: inline-block;
              width: ${dp(1)};
              height: ${dp(12)};
              margin: ${dp([0, 8])};
              background-color: #939393;
            }
          }

          > div {
            margin-top: ${dp(3)};
            font-size: ${dp(13)};
            line-height: ${dp(20)};
            color: #000000;
          }
        }

        .image_wrap {
          width: 100%;

          > ul {
            overflow: hidden;
            margin: 0;

            > li {
              width: 18.4%;
              float: left;
              margin-right: 2%;
              border-radius: ${dp(4)};
              overflow: hidden;

              &:last-child {
                margin-right: 0;
              }

              > img {
                width: 100%;
              }
            }
          }
        }
      }
      .review_change {
        display: flex;
        justify-content: space-between;
        margin-bottom: ${dp(12)};
        > span {
          padding-top: ${dp(5)};
          font-size: ${dp(12)};
          color: #d1d1d1;
        }
        .change_btn {
          .modify {
            width: ${dp(48)};
            height: ${dp(28)};
            line-height: ${dp(27)};
            border: ${dp(1)} solid #d1d1d1;
            text-align: center;
            border-radius: ${dp(4)};
            float: left;
            margin-right: ${dp(10)};
            color: #616161;
            font-size: ${dp(13)};
          }
          .delete {
            width: ${dp(48)};
            height: ${dp(28)};
            line-height: ${dp(27)};
            border: ${dp(1)} solid #d1d1d1;
            text-align: center;
            border-radius: ${dp(4)};
            float: right;
            color: #616161;
            font-size: ${dp(13)};
          }
        }
      }
    }

    .review_answer {
      box-sizing: border-box;
      padding: ${dp([0, 16, 16, 16])};

      > div {
        border-top: ${dp(1)} solid #f5f5f5;
        box-sizing: border-box;
        padding: ${dp([16, 0, 0, 0])};

        .ant-collapse {
          border: none;
          background-color: #ffffff;
        }
        .anticon {
          display: none !important;
        }
        .ant-collapse-item {
          border: none;
        }
        .ant-collapse-header {
          width: 100%;
          overflow: hidden;
          padding: 0;

          &:before {
            display: none;
          }

          > div {
            &:nth-child(2) {
              position: relative;
              float: left;
              width: 100%;

              .market_answer {
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                /* float: left; */
                width: ${dp(60)};
                height: ${dp(24)};
                border-radius: ${dp(32)};
                background-color: #000000;
                color: #ffffff;
                border-radius: ${(props) => (props.useVideo ? dp(4) : dp(32))};
                font-size: ${dp(12)};
                line-height: ${dp(24)};
                text-align: center;
                margin-right: ${dp(12)};
              }

              .market_info {
                width: 100%;
                box-sizing: border-box;
                padding: ${dp([0, 98, 0, 72])};
                margin: 0;
                color: #939393;
                font-size: ${dp(14)};
                line-height: ${dp(24)};
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;

                > span {
                  padding-left: ${dp(5)};
                  font-size: ${dp(14)};
                  line-height: ${dp(17)};
                  color: #000000;
                }
              }
            }

            &:nth-child(3) {
              float: right;
              position: absolute;
              top: 0;
              right: 0;

              > span {
                float: left;
                font-size: ${dp(12)};
                color: #d1d1d1;
                line-height: ${dp(24)};
                margin-right: ${dp(8)};
              }

              > .ant-btn {
                width: ${dp(20)};
                height: ${dp(24)};
                padding: 0;
                background-color: #ffffff;

                > img {
                  display: block;
                  margin: 0 auto;
                  transform: rotate(90deg);
                  height: ${dp(10)};
                }
              }
            }
          }
        }
        .ant-collapse-content {
          border: none;
        }

        .ant-collapse-content-box {
          margin: ${dp([12, 0, 0, 0])};
          padding: 0;
          border-radius: ${dp(4)};
          background-color: #f5f5f5;

          .answer_content {
            box-sizing: border-box;
            padding: ${dp([12, 12, 15, 12])};
            font-size: ${dp(13)};
            line-height: ${dp(19)};
          }
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
export default ReviewListStyled;
