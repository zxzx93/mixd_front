import Styled from "styled-components";
import dp from "../../../components/styled/Dp";

const LoginStyled = Styled.div`
@media screen and (max-width: 768px) {
  .my_info_wrap {
      position: relative;
      width: 100%;
      height: ${dp(152)};
      margin: 0;
      border-bottom-left-radius: ${dp(15)};
      border-bottom-right-radius: ${dp(15)};
      overflow: hidden;
      background-color: #ffcc74;

      .info_bg_wrap {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;

        > img {
          position: absolute;
          width: 100%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%)
        }
      }
      
      .info_cont_wrap {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.1);

        > div {
          position: absolute;
          bottom: ${dp(24)};
          width: 100%;
          height: ${dp(58)};
          box-sizing: border-box;
          padding: 0 ${dp(20)};
          //overflow: hidden;
        }

        .info_profile {
          position: relative;
          width: ${dp(54)};
          height: ${dp(54)};
          line-height: ${dp(54)};
          border-radius: 50%;
          overflow: hidden;
          margin-right: ${dp(15)};
          float: left;
          background-color:#fff;
          border : ${dp(1)} solid #e5e5e5;
          margin-top: ${dp(10)};
          
          >p {
            font-size: ${dp(14)};
            color:#d1d1d1;
            font-weight: bold;
            text-align: center;
            margin: ${dp(14)} auto;
          }

          img {
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }

        .info_cont {
          float: left;
          margin: ${dp(10)} 0 0 ${dp(-3)};

          h1 {
            font-size: ${dp(15)};
            font-weight: 500;
            color: #fff;
            margin-right: ${dp(14)};
            float: left;
            line-height: ${dp(11)};
            margin-top: ${dp(13)};
            margin-bottom: ${dp(1)};
          
          }

          > span {
            display: block;
            font-weight: 100;
            font-size: ${dp(14)};
            color: #fff !important;
          }
        }
        .modify_btn {
          width: ${dp(50)};
          height: ${dp(40)};
          line-height: ${dp(40)};
          border-radius: ${dp(50)};
          border: ${dp(1)} solid #fff;
          float: right;
          padding-left: ${dp(14)};
          margin-top: ${dp(18)};
          a {
            float: left;
            margin-top: ${dp(-2)};
            
            >img {
              width: ${dp(20)};
              height: ${dp(20)};
            }
          }
        }
      }
    }

    .mypage_main_btns {
      width: 90%;
        margin: 0 auto;
        box-sizing: border-box;
        padding: ${dp(0)} 0vw ${dp(20)} 0vw;
        overflow: hidden;
        border-bottom: ${dp(2)} solid #f5f5f5;
      
      .my_order {
        background-image: ${({ me }) => (me ? "" : "url('/images/order.svg')")};
        
        > a {
          display: block;
          width: 100%;
          height: ${dp(48)};
        } 
      }
      .my_review {
        background-image: ${({ me }) =>
          me ? "" : "url('/images/review.svg')"};
          
        > a {
          display: block;
          width: 100%;
          height: ${dp(48)};
        }
      }

      > div {
        width: 91%;
        height: ${dp(48)};
        float: left;
        box-sizing: border-box;
        background-repeat: no-repeat;
        background-position: left ${dp(15)};
        background-size: ${dp(24)};
        cursor: pointer;
        
        &:last-child {
          margin-right: 0;
        }

        p {
          transition: 0.2s;
          font-size: ${dp(13)};
          color: #000;
          font-weight: bold;
          margin: ${dp(16)} ${dp(0)} ${dp(15)} ${dp(40)};
          float: left;
        }
        img {
          float: right;
          margin: ${dp(20)} ${dp(-10)} 0 0 ;
        }
      }
    }

    .mypage_CandP {
      width: 100%;
      box-sizing: border-box;
      padding: ${dp(18)} ${dp(12)};
      overflow: hidden;
      
      > .my_accum {
          width: 98%;
          height: ${dp(88)};
          box-shadow: 0 ${dp(4)} ${dp(10)} rgba(0, 0, 0, 0.05);
          margin: 0 auto;
          border: ${dp(1)} solid #f5f5f5;
          border-radius:${dp(8)};

        > div {
          position: relative;
          box-sizing: border-box;
          width: 49%;
          height: ${dp(88)};
          border-right: ${dp(1)} solid #f5f5f5;
          box-sizing: border-box;
    
          cursor: pointer;
          float: left;
          margin-left: ${dp(2)};

          &:last-child {
            margin-right: 0;
            border-right:none;
            
            img {
              width: ${dp(24)};
              margin-top: ${dp(-1)};
            }
          }

          > a {
            display: inline-block;
            width: 100%;
            height: 100%;

            > img {
              position: absolute;
              top: ${dp(19)};
              left: ${dp(22)};
              width: ${dp(20)};
            }

            > div {
              width: 100%;

              p {
                position: relative;
                padding: ${dp(20)} 0 0 ${dp(24)};
                font-size: ${dp(13)};
                margin-left:${dp(40)};
                display: inline-block;
                font-weight: bold;
                color: #000;
              }
            }
          }
          
          h1 {
            font-size: ${dp(14)};
            color: #ff3358;
            margin : ${dp(5)} 0 0 ${dp(20)};
            
            >span {
              color:#000;
            }
          }
        }
      }  
    }

    .mypage_lists {
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
export default LoginStyled;
