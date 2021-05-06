import styled from 'styled-components';
import dp from './../styled/Dp';

const HeaderStyled = styled.div`
  @media screen and (max-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-sizing: border-box;
    background-color: ${(props) => (props.gender ? "#000000" : "#FFFFFF")};
    z-index: 1200;
    height: ${dp(50)};

    .title_back {
      display: none;
      position: absolute;
      top: 0;
      left: ${dp(7)};
      width: ${dp(36)};
      height: ${dp(50)};

      > img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: ${dp(8)};
      }
    }
    .gender {
      position: absolute;
      top: 0;
      left: ${dp(9)};
      width: ${dp(32)};
      height: ${dp(50)};
      box-sizing: border-box;
      text-align: center;
    }

    .search_close {
      position: absolute;
      top: 0;
      left: ${dp(7)};
      width: ${dp(36)};
      height: ${dp(50)};

      > img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: ${dp(8)};
      }
    }

    /* 검색바 */
    .search {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: ${dp([10, 65, 10, 65])};

      .ant-input-search {
        position: relative;
      }
      .ant-input-wrapper {
        position: relative;

        .ant-input-group-addon {
          position: absolute;
          top: ${dp(-2)};
          left: 0;
          width: ${dp(32)};
          background-color: transparent;
          z-index: 1;

          > button {
            background: transparent;
          }
        }
      }
      .ant-input-affix-wrapper {
        border: ${dp(1)} solid transparent;
        line-height: ${dp(15)};

        &:hover {
          border: ${dp(1)} solid transparent;
        }
      }
      .ant-input-affix-wrapper {
        box-sizing: border-box;
        border-radius: ${dp(16)} !important;
        padding: ${dp([8, 30, 7, 31])};
        background-color: #f5f5f5;
      }
      .ant-btn {
        &:active {
          border: ${dp(1)} solid transparent;
        }
      }
      .ant-input {
        background-color: #f5f5f5;
        font-size: ${dp(12)};
        line-height: ${dp(15)};
      }
      .ant-input-affix-wrapper-focused {
        box-shadow: none;
        border: ${dp(1)} solid transparent;
      }
      .ant-input-search-button {
        border: ${dp(1)} solid transparent;
        width: ${dp(30)};
        padding: 0;
        box-shadow: none;

        > img {
          width: ${dp(13.5)};
        }
      }
      .ant-input-suffix {
        position: absolute;
        top: ${dp(6)};
        right: ${dp(7)};

        svg {
          width: ${dp(20)};
          height: ${dp(20)};
        }
      }
    }

    .ant-modal-wrap {
      background-color: red;
    }

    /* 장바구니 */
    .cart {
      position: absolute;
      top: 0;
      right: ${dp(14)};
      width: ${dp(32)};
      height: ${dp(50)};
      box-sizing: border-box;
      //margin-top: ${dp(9)};
      text-align: center;

      > a {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;

        > img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: ${dp(18)};
        }
      }
    }
  }
`;

export default HeaderStyled;
