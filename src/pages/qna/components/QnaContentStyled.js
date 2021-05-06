import styled from "styled-components";
import dp from '../../../components/styled/Dp';

const QnaContentStyled = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: ${dp(109)};
    .ant-collapse {
      border: none;
      background: none;
    }
    .ant-collapse-item {
      border-bottom: none;

      > .ant-collapse-header {
        position: relative;
        padding: 0;
        padding-left: 0;
        color: rgba(0, 0, 0, 0.85);
        line-height: 1.5715;
        cursor: pointer;
        -webkit-transition: all 0.3s, visibility 0s;
        transition: all 0.3s, visibility 0s;
        margin: 0 ${dp(15)};

        > .ant-collapse-arrow {
          display: block;
          top: ${dp(-5)};
          color: #939393;
          font-size: ${dp(13)};
          right: ${dp(3)};
        }
      }

      > .ant-collapse-content {
        > .ant-collapse-content-box {
          padding-top: 0;
          margin-top: ${dp(-10)};
          padding: 0;

          > .answer_wrap {
            width: 92%;
            margin: ${dp(10)} auto;
            background-color: #f5f5f5;
            padding: ${dp(10)};
            border-radius: ${dp(4)};

            > p {
              font-size: ${dp(13)};
            }
          }
        }
      }
    }
    .list_Box {
      border-bottom: ${dp(6)} solid #f5f5f5;

      .qna_lists {
        padding-bottom: ${dp(10)};
        position: relative;
        margin: ${dp(25)} ${dp(15)} 0;

        > .img_wrap {
          width: ${dp(60)};
          height: ${dp(60)};
          background-color: #4d616161;
          border-radius: ${dp(4)};
          float: left;
          margin-bottom: ${dp(5)};
          overflow: hidden;

          > img {
            width: 100%;
          }
        }

        > .qna_title {
          display: flex;
          justify-content: space-between;
          padding-top: ${dp(10)};

          > .sub_name {
            margin-left: ${dp(10)};
            color: #ff6783;
            font-weight: bold;
            font-size: ${dp(12)};
          }
        }
        .info_name {
          display: block;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          font-size: ${dp(14)};

          > .market_name {
            margin: 0 ${dp(5)} 0 ${dp(10)};
            color: #939393;
            font-size: ${dp(14)};
          }
        }
        > .qna_text {
          clear: both;
          font-size: ${dp(13)};
          color: #000;
          text-align: left;
          width: 100%;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          height: auto;
        }
        .qna_q_time {
          margin: ${dp(15)} 0 ${dp(20)} 0;
          color: #d1d1d1;
          font-size: ${dp(12)};
          display: flex;

          .delete_btn {
            margin: ${dp(-4)} ${dp(-3)} 0 0;
          }

          .delete_text {
            border: ${dp(1)} solid #d1d1d1;
            border-radius: ${dp(5)};
            width: ${dp(44)};
            height: ${dp(25)};
            line-height: ${dp(25)};
            text-align: center;
            color: #939393;
            position: absolute;
            right: 0;
            background-color: #fff;
          }
        }
      }
    }

    .qna_quest {
      position: relative;
      height: ${dp(56)};
      overflow: hidden;
      margin-top: ${dp(-15)};
      box-sizing: border-box;
      padding: ${dp(10)} 0;
      border-top: ${dp(1)} solid #f5f5f5;

      > .answer_ok {
        background-color: #000;
        width: ${dp(60)};
        height: ${dp(24)};
        line-height: ${dp(24)};
        text-align: center;
        color: #fff;
        border-radius: ${dp(4)};
        font-size: ${dp(12)};
        margin-top: ${dp(6)};
      }

      > div {
        float: left;
      }

      > .market_name {
        margin: ${dp(6)} 0 0 ${dp(10)};
        float: left;
        color: #939393;
        font-weight: normal;
        font-size: ${dp(14)};
      }

      > .qna_q_time {
        float: right;
        color: #d1d1d1;
        margin-right: ${dp(22)};
        margin-top: ${dp(8)};
        font-size: ${dp(12)};
      }
    }
  }
`;

export default QnaContentStyled;