import Styled from 'styled-components';
import dp from '../../../components/styled/Dp';

const NoLoginStyled = Styled.div`
@media screen and (max-width: 768px) {
  .non_login_wrap {
    position: relative;
    width: 100%;
    height: ${dp(152)};
    border-bottom-left-radius: ${dp(15)};
    border-bottom-right-radius: ${dp(15)};
    overflow: hidden;
    box-sizing: border-box;
    padding: 0 3vw;
    background-color: #ffcc74;
    display: table;

    .non_login_icon {
      position: absolute;
      right: ${dp(23)};
      bottom: ${dp(15)};
      width: ${dp(139)};
      height: ${dp(127.9)};

      > img {
        width: 100%;
      }
    }

    .non_login_title {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      position: absolute;
      left: ${dp(25)};
      top: ${dp(38)};

      > div {
      
        >p {
          color: #fff;
          font-weight:normal;
          font-size: ${dp(15)};
        }

        >h1 {
          color: #fff;
          font-size: ${dp(20)};
          letter-spacing: ${dp(-1)};
          line-height: ${dp(24)};
        }

        &:first-child {
          line-height: 1.4;
          text-shadow: 0 ${dp(3)} ${dp(6)} rgba(80, 79, 79, 0.3);
        }

        &:last-child {
          margin-top: ${dp(15)};

        }
      }
    }
  }
  .non_user {
    border-bottom : ${dp(2)} solid #f5f5f5;
    width: 92%;
    margin: 0 auto;
    padding-bottom: ${dp(15)};

    .non_login {
      display: table;
      margin: ${dp(28)} auto ${dp(10)};
      width: 90%;
      overflow: hidden;

      img {
        margin-right: ${dp(10)};
        float: left;
        width: ${dp(13.9)};
        height: ${dp(10.4)};;
        margin-top: ${dp(11)};
      }
      p {
        font-size: ${dp(14)};
        float: left;
        margin-top: ${dp(5)};
        color: #000;
      }
      a {
        margin-top: ${dp(5)};
        color: #000;
        display: block;
        text-align: right;
        float: right;
        font-size: ${dp(14)};
        font-weight: bold;
        margin-right:${dp(5)};
      }
    }
      
    .non_signup {
      display: table;
      margin: ${dp(10)} auto ${dp(10)};
      width: 90%;
      overflow: hidden;

      img {
        margin-right: ${dp(10)};
        float: left;
        width: ${dp(13.9)};
        height: ${dp(10.4)};;
        margin-top: ${dp(11)};
      }
      p {
        font-size: ${dp(14)};
        float: left;
        margin-top: ${dp(5)};
        color: #0A0A0A;
      }
      a {
        margin-top: ${dp(5)};
        color: #FF3A5F;
        display: block;
        text-align: right;
        float: right;
        font-size: ${dp(14)};
        font-weight: bold;  
      }
    }
  }

  .non_login_mypage_lists {
    width: 100%;
    padding: ${dp(5)} 0 ${dp(10)} 0;

    > p {
      font-size: ${dp(14)};
      font-weight: bold;
      padding:  ${dp(15)} 0 ${dp(15)} 5vw;
      color: #000;
      font-weight: bold;
    }

    > div {
      width: 100%;

      div {
        box-sizing: border-box;
        padding: ${dp(10)} 0 ${dp(10)} 5vw;
        overflow: hidden;

        a {
          display: inline-block;
          width: 100%;
          height: 100%;

          img {
            width: ${dp(24)};
            margin-right: ${dp(20)};
            float: left;
          }

          span {
            line-height: ${dp(20)};
            float: left;
            font-size: ${dp(13)};
            color: #000;
          }
        }        
      }
    }
    .channel_talk {
      margin: ${dp(20)} auto ${dp(15)};               
      width: 90%;
      height: ${dp(48)};
      border-radius:  ${dp(4)};
      line-height: ${dp(48)};
      box-sizing: border-box;
      box-shadow: 0 ${dp(4)} ${dp(4)} rgba(0, 0, 0, 0.1);
      background-color: #FF3A5E;
      text-align: center;

      > a {
        display: block;
        width: 100%;
        height: 100%;
      }
      p {
        display: inline-block;
        color: #fff;
        font-size: ${dp(15)};
      }
    }
  }
}    
`;


export default NoLoginStyled;