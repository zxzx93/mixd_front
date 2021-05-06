import styled from "styled-components";
import dp from "../../components/styled/Dp";

const ModifyStyled = styled.div`
  @media screen and (max-width: 768px) {
    box-sizing: border-box;
    padding: ${dp([50, 0, 52, 0])};

    .profile_img_wrap {
      position: relative;
      width: 100%;
      height: 100%;
      background-color: #ffcc74;
      width: 100%;
      height: ${dp(152)};
      border-bottom-right-radius: ${dp(12)};
      border-bottom-left-radius: ${dp(12)};
      overflow: hidden;
      img {
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .ant-btn-primary {
      position: absolute;
      right: ${dp(14)};
      top: ${dp(94)};
      width: ${dp(129)};
      height: ${dp(36)};
      background-color: transparent;
      border: ${dp(1)} solid #fff;
      border-radius: ${dp(8)};
      background-image: url("/images/profile_cam.svg");
      background-repeat: no-repeat;
      background-position: 10px;
      background-size: ${dp(20)};
      > span {
        color: #fff;
        margin-left: 25px;
        font-size: ${dp(13)};
        font-weight: normal;
      }
    }

    .modify_wrap {
      box-sizing: border-box;
      padding: ${dp([22, 16, 100, 16])};

      .modify_title {
        font-size: ${dp(16)};
        margin: ${dp([0, 0, 5, 0])};
        color: #000000;
        line-height: ${dp(24)};

        > span {
          margin-left: ${dp(15)};
          font-size: ${dp(12)};
          color: #000000;
        }
      }

      input[type="text"],
      input[type="password"] {
        border: ${dp(1)} solid #d1d1d1;
        border-radius: ${dp(4)};
        height: ${dp(43)};
        padding: ${dp(12)};
        font-size: ${dp(13)};

        &:focus {
          border: ${dp(1)} solid #000000;
        }

        &.err {
          border: ${dp(1)} solid #ff3358;
        }
      }

      .msg {
        display: block;
        color: #d1d1d1;
        font-size: ${dp(11)};
        line-height: ${dp(17)};

        &.err {
          color: #ff3358;
        }
      }

      .nickname_wrap {
        margin-bottom: ${dp(15)};

        input {
          color: #000000;
          margin-bottom: ${dp(5)};

          &.err {
            border: ${dp(1)} solid #ff3358;
          }
        }
      }

      .password_wrap {
        margin-bottom: ${dp(15)};
        overflow: hidden;

        input {
          float: left;
          width: 67.5%;
        }

        button {
          background-color: #000000;
          float: right;
          padding: 0;
          width: 30.5%;
          height: ${dp(43)};
          border-radius: ${dp(4)};
          border: none;

          &:disabled {
            background-color: #f5f5f5;

            > span {
              color: #d1d1d1;
            }
          }

          > span {
            color: #ffffff;
            font-size: ${dp(12)};
          }
        }
      }

      .phone_wrap {
        margin-bottom: ${dp(15)};

        > div {
          overflow: hidden;
          margin-bottom: ${dp(9)};

          &:nth-child(3) {
            margin-bottom: ${dp(5)};
          }
        }

        input {
          float: left;
          width: 67.5%;
        }

        button {
          background-color: #000000;
          float: right;
          padding: 0;
          width: 30.5%;
          height: ${dp(43)};
          border-radius: ${dp(4)};
          border: none;

          &:disabled {
            background-color: #f5f5f5;

            > span {
              color: #d1d1d1;
            }
          }

          > span {
            color: #ffffff;
            font-size: ${dp(12)};
          }
        }
      }

      .refund_number_wrap {
        margin-bottom: ${dp(15)};

        > div {
          margin-bottom: ${dp(9)};
        }

        input {
          width: 67.5%;

          &.bank_number {
            width: 100%;
          }
        }

        .bank_select {
          width: 67.5%;

          .ant-select-selector {
            border-radius: ${dp(4)};
            height: ${dp(43)};
            padding: ${dp(12)};
            font-size: ${dp(13)};

            > .ant-select-selection-item {
              line-height: 1;
            }
          }

          .true__control {
            box-shadow: none;
            height: ${dp(43)};
            border: ${dp(1)} solid #e3e3e3;
          }

          .true__control--menu-is-open {
            border-radius: 0;
            border-top-left-radius: ${dp(4)};
            border-top-right-radius: ${dp(4)};
            border-bottom: 1px solid transparent;
          }

          .true__value-container {
            padding: ${dp([0, 12])};
            height: ${dp(43)};
          }

          .css-b8ldur-Input {
            display: none;
          }

          .true__menu {
            margin: 0;
            border-radius: 0;
            border: 1px solid #e3e3e3;
            border-top: transparent;
            border-bottom-right-radius: ${dp(4)};
            border-bottom-left-radius: ${dp(4)};
            box-shadow: none;
          }

          .true__option {
            padding: ${dp([11, 12])};
            font-size: ${dp(14)};
          }

          .true__option--is-focused {
            background-color: transparent;
          }

          .true__option--is-selected {
            color: #000000;
            font-weight: bold;
            background-color: transparent;
          }

          .true__indicator-separator {
            display: none;
          }
        }
      }

      .address_wrap {
        margin-bottom: ${dp(20)};

        > div {
          overflow: hidden;
          margin-bottom: ${dp(9)};
        }

        input {
          width: 100%;

          &.post_number {
            float: left;
            width: 67.5%;
          }
        }

        button {
          background-color: #000000;
          float: right;
          padding: 0;
          width: 30.5%;
          height: ${dp(43)};
          border-radius: ${dp(4)};
          border: none;

          &:disabled {
            background-color: #f5f5f5;

            > span {
              color: #d1d1d1;
            }
          }

          > span {
            color: #ffffff;
            font-size: ${dp(12)};
          }
        }
      }

      .alarm_wrap {
        > div {
          overflow: hidden;
          margin-bottom: ${dp(10)};

          &:last-child {
            padding-bottom: ${dp(20)};
            margin-bottom: 0;
            border-bottom: ${dp(1)} solid #f5f5f5;
            > input[type="checkbox"] {
              width: ${dp(18)};
              height: ${dp(18)};
              float: left;
              margin-left: ${dp(16)};
            }
          }
        }

        label {
          float: left;
          color: #000000;
          font-size: ${dp(14)};
          line-height: ${dp(18)};
        }

        input[type="checkbox"] {
          width: ${dp(18)};
          height: ${dp(18)};
          float: left;
          margin-left: ${dp(15)};
        }
      }

      .delete_wrap {
        overflow: hidden;
        margin: ${dp([26, 0, 57, 0])};

        > span {
          float: left;
          font-size: ${dp(12)};
          line-height: ${dp(36)};
          color: #d1d1d1;
        }

        button {
          float: right;
          width: ${dp(130)};
          height: ${dp(36)};
          border: 1px solid #d1d1d1;
          border-radius: ${dp(4)};

          > span {
            color: #d1d1d1;
            font-size: ${dp(12)};
          }
        }
      }

      .modify_btn_wrap {
        overflow: hidden;

        a,
        button {
          float: left;
          width: 49%;
          height: ${dp(48)};
          padding: 0;
          border: none;
          border-radius: ${dp(4)};

          > span {
            font-size: ${dp(15)};
          }
        }

        .modify_cancel {
          margin-right: 2%;
          background-color: #f5f5f5;

          > span {
            color: #939393;
            line-height: ${dp(48)};
          }
        }

        .modify_btn {
          margin-right: 0;
          background-color: #000000;

          > span {
            color: #ffffff;
          }
        }
      }
    }
  }
`;

export default ModifyStyled;
