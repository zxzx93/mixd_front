import Styled from "styled-components";
import dp from "../../../components/styled/Dp";
import { Drawer } from "antd";

const ReviewDrawer = Styled(Drawer)`
@media screen and (max-width: 768px){
 
  .ant-drawer-content-wrapper {
    width: 100%;
    .ant-drawer-content {
      .ant-drawer-header {
        border-bottom: none;
        .ant-drawer-title {
          font-size: ${dp(13)};
          text-align: center;
          font-weight: bold;
        }
      }
      .ant-drawer-body {
        padding: 0 ${dp(5)} 0 ${dp(5)};
        margin-top: -${dp(50)};
      } 
    }
  }
}
`;

export default ReviewDrawer;
