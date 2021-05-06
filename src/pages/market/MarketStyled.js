import styled from "styled-components";
import dp from "../../components/styled/Dp";

const MarketStyled = styled.div`
  @media screen and (max-width: 768px) {
    padding: ${dp([43, 0, 52, 0])};

    .ant-tabs-nav {
      margin: 0;

      &::before {
        border-bottom: ${dp(1)} solid #f5f5f5;
      }
    }
    .swiper-wrapper {
      box-sizing: border-box;
      padding: ${dp([0, 8])};
    }
    .ant-tabs-nav-list {
      width: 100%;
      box-sizing: border-box;
      padding: ${dp([0, 9])};
    }
    .ant-tabs-tab {
      margin: 0;
      padding: 0;
      width: 33.3%;
      height: ${dp(34)};
    }
    .ant-tabs-tab-btn {
      width: 100%;
      text-align: center;
    }
    .ant-tabs-tab-active {
      .ant-tabs-tab-btn {
        color: #000000;
      }
    }
    .ant-tabs-ink-bar {
      background: #000000;
      height: ${dp(3)} !important;
    }

    .open_drawer_btn {
      width: 100%;
      height: auto;
      text-align: left;
      padding: ${dp([0, 16])};
      font-size: ${dp(14)};
      line-height: ${dp(48)};
      border: none;
      font-weight: bold;
      color: #000000;

      > img {
        margin-top: ${dp(17)};
        float: right;
        width: ${dp(8)};
      }
    }
  }
`;

export default MarketStyled;
