import styled from "styled-components";
import { Modal } from "antd";
import dp from "../styled/Dp";

const NoLoginPopUpStyle = styled(Modal)`


@media screen and (max-width: 768px) {
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: -webkit-fill-available;
    .ant-modal-content{
      width: 100%;
      height: ${dp(340)};
      margin: ${dp([0,5,0,5])};
      border-radius: ${dp(5)};
    }
    li {
      &:nth-child(1) {
        >p {
          text-align: center;
          font-size: ${dp(12)};
          margin-top: ${dp(20)};
          color: #939393;
          line-height: ${dp(16)};
        }
      }
  
      &:nth-child(2) {
        h1 {
          text-align:center;
          font-size: ${dp(18)};
          font-weight: bold;
          //letter-spacing: ${dp(-1)};
          margin-top: ${dp(20)};
        }
        >p {
          text-align:center;
          font-size: ${dp(13)};
          color: #000;
          margin-top: ${dp(-8)};
        }
      }
    }
    .login {
      margin-top: ${dp(40)};
      width: 100%;
      height: ${dp(50)};
      line-height: ${dp(50)};
      background-color: #ff3358;
      color: #fff;
      border-radius: ${dp(5)};
      text-align:center;
      font-size: ${dp(15)};
    }

    .sign {
      margin-top: ${dp(10)};
      width: 100%;
      height: ${dp(50)};
      line-height: ${dp(48)};
      background-color: #fff;
      border: ${dp(2)} solid #848484;
      color: #000;
      border-radius: ${dp(5)};
      text-align:center;
      font-size: ${dp(15)};
      font-weight: bold;
    }
  }
`;

export default NoLoginPopUpStyle;
