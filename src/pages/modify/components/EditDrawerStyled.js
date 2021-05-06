import styled from "styled-components";
import dp from "../../../components/styled/Dp";
import { Drawer } from "antd";

const PictureEditStyled = styled(Drawer)`
  @media screen and (max-width: 768px) {
    text-align: center;

    .ant-drawer-content-wrapper {
      height: ${dp(240)} !important;
      .ant-drawer-content {
        border-radius: ${dp(16)};
        padding: ${dp([5, 20])};
        .ant-drawer-wrapper-body {
          .ant-drawer-header {
            padding: ${dp([20, 24])};
            border-bottom: ${dp(1)} solid #f5f5f5;
            .ant-drawer-title {
              font-weight: bold;
              font-size: ${dp(14)};
            }
          }
          .ant-drawer-body {
            padding: ${dp([12, 0])};
            .delete {
              border-bottom: ${dp(1)} solid #f5f5f5;
              color: #ff3358;
              font-size: ${dp(14)};
              padding-bottom: ${dp(12)};
            }
            .change {
              border-bottom: ${dp(1)} solid #f5f5f5;
              color: #939393;
              font-size: ${dp(14)};
              padding-bottom: ${dp(12)};
            }
          }
        }
      }
    }
  }
`;
export default PictureEditStyled;
