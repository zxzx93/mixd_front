import styled from "styled-components";
import dp from "../../../components/styled/Dp";

const ImagesUploadStyled = styled.div`
  @media screen and (max-width: 768px) {
    .profile_wrap {
      position: absolute;
      bottom: ${dp(18)};
      left: ${dp(16)};
      width: auto;
      z-index: 1;

      .ant-upload-list-picture-card-container {
        width: ${dp(50)};
        height: ${dp(50)};
        border-radius: 50%;
        overflow: hidden;
        margin: 0;
        border: ${dp(1)} solid #fff;
      }
      .ant-upload-list-item {
        padding: 0;
        border: none;
      }
      .ant-upload-list {
        width: ${dp(50)};
        height: ${dp(50)};
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.2);
      }
      .ant-upload-select {
        position: absolute;
        left: ${dp(13)};
        bottom: ${dp(12)};
        width: ${dp(23)};
        height: ${dp(23)};
        background: transparent;
        border: none;
        margin: 0;
        z-index: 1;
      }
      .ant-upload {
        > button {
          width: 100%;
          height: 100%;
          border: none;
          padding: 0;
          border-radius: 50%;
          background-color: transparent;
          > img {
            display: block;
            width: ${dp(24)};
            margin: 0 auto;
          }
        }
      }
      .ant-upload-list-item-image {
        opacity: 1;
      }

      .ant-upload-list-item-actions {
        display: none;
      }

      .ant-upload-list-item-info {
        &:before {
          background-color: transparent;
        }
      }

      .back_img_btn {
        position: absolute;
        right: ${dp(16)};
        bottom: ${dp(23)};
        width: ${dp(129)};
        height: ${dp(36)};
        border-radius: ${dp(8)};
        background-color: transparent;
        border: ${dp(1)} solid #f5f5f5;
        padding: 0;

        > img {
          width: ${dp(20)};
          margin-right: ${dp(12.5)};
        }

        > span {
          color: #ffffff;
          font-size: ${dp(13)};
        }
      }

      .ant-tooltip {
        display: none;
      }
    }

    .backbround_wrap {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;

      .ant-upload-list {
        position: relative;
        width: 100%;
        height: 100%;
      }

      .ant-upload-list-picture-card-container {
        width: 100%;
        height: 100%;
        margin: 0;
      }
      .ant-upload-list-item {
        border: none;
        padding: 0;
      }

      .ant-upload-list-item-info {
        &:before {
          background-color: transparent;
        }
      }

      .ant-upload-list-item-actions {
        display: none;
      }

      .ant-upload-select {
        position: absolute;
        right: ${dp(16)};
        bottom: ${dp(23)};
        width: ${dp(129)};
        height: ${dp(36)};
        background-color: transparent;
        border: ${dp(1)} solid #f5f5f5;
        border-radius: ${dp(8)};
        margin: 0;
        z-index: 1;

        .back_img_btn {
          width: 100%;
          height: 100%;
          border: none;
          background-color: transparent;
          padding: 0;

          > span {
            font-size: ${dp(13)};
            color: #ffffff;
            margin-left: ${dp(15)};
          }
        }
      }

      .ant-upload-list-item-thumbnail {
        opacity: 1;

        > img {
          object-fit: cover;
        }
      }

      .ant-tooltip {
        display: none;
      }
    }
  }
`;

export default ImagesUploadStyled;
