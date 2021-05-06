import styled from "styled-components";
import { Modal } from "antd";

import dp from "../../../components/styled/Dp";

const ModalPopupStyled = styled(Modal)`
  @media screen and (max-width: 768px) {

    .ant-modal-content {
      .ant-modal-body {
        .title {
          color: #000;
          font-weight: bold;
          font-size: ${dp(14)};
        }
        li {
          color: #939393;
          font-size: ${dp(13)};
        }
        span {
          color: #d1d1d1;
          font-size: ${dp(10)};
          margin-top: ${dp(5)};
          font-weight: 300;
        }
      }
    }
    .ant-modal-footer {
      display: flex;
      justify-content: center;
      .ant-btn {
        width: 46.5%;
        height: ${dp(48)};
        border-radius: ${dp(4)};
        font-size: 0;
        background-color: #f5f5f5;
        border: none;
      }
      .ant-btn::after {
        content: "취소";
        font-size: ${dp(15)};
        color: #939393;
        font-weight: 500;
      }
      .ant-btn-primary {
        background: #000;
        border-color: none;
        background-color: #000000;
        font-size: 0;
      }
      .ant-btn-primary::after {
        content: "완료";
        font-size: ${dp(15)};
        color: #fff;
      }
    }
  }
`;

export default ModalPopupStyled;
