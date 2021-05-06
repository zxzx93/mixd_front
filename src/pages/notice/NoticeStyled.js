import Styled from "styled-components";
import dp from "../../components/styled/Dp";

export const NoticeStyle = Styled.div`
        margin: ${dp(50)} 0 ${dp(60)};
        #content {
              box-sizing: border-box;
              overflow: hidden;
        }
        .board_top {
          background-color: #000000;
          box-sizing: border-box;
          padding: ${dp([19, 16])};
          font-size:${dp(15)};
          height:${dp(76)};
          width:100%;

            > div {
                overflow: hidden;
                font-weight: bold;
                font-size:${dp(15)};
                width:100%;
                line-height: ${dp(38)};
                text-align: center;
               

                > p {
                  float: left;
                  color: #ffffff;
                    > span {
                        font-weight: bold;
                        margin-right: ${dp(5)};
                        color: #ffffff;
                    }

                    > img {
                        width:${dp(24)};
                        height:${dp(20)};
                        margin-right: ${dp(10)};
                    }

                }
                    
                > a {   
                  display:inline-block;
                  cursor: pointer;
                  font-weight: bold;
                  float: right;
                  width: ${dp(97)};
                  height:  ${dp(38)};
                  font-size: ${dp(14)};
                  line-height: ${dp(38)};
                  background-color: #fff;
                  color:#ff3358;
                  border-radius: ${dp(31)};
                  text-align: center;
                  text-decoration: none;
                  border: ${dp(1)} solid #ff3358; 
                }
            }
        }

        .board_lists {
            margin: ${dp([10, 0, 102, 0])};
            margin-top: ${dp(10)};

            > div {
                .board_list {
                    height:${dp(76)};
                    position: relative;
                    left: 0;
                    box-sizing: border-box;
                    padding: ${dp([21, 16])};
                    border-bottom: ${dp(1)} solid #efefef;
                    cursor: pointer;

                    > div {
                        width:100%;
                        position: absolute;
                        top: ${dp(16)};
                        font-weight: bold;
                        font-size: ${dp(15)};
                        color:#000000;
                        > span {
                            position:absolute;
                            left: ${dp(0)};
                            top: ${dp(22)};
                            color: #d1d1d1;
                            font-weight: normal;
                            font-size:${dp(10)};
                        }
                    }
                }
            }
        }

        .board_detail {
            box-sizing: border-box;
        }
    
        .board_detail_title {
            font-size: ${dp(15)};
            border-bottom: ${dp(1)} solid #efefef;

            > div {
                padding:${dp([21, 16, 21])};
                font-weight: bold;

                > p {
                    font-size: ${dp(10)};
                    color:#d1d1d1;
                    font-weight:normal;
                    margin-bottom:0;
                    }
            }
        }
        

        .board_detail_cont { 
            padding:${dp([25, 16, 0, 24])};
            box-sizing: border-box;
            font-size: ${dp(14)};
            line-height: 1.4;
         
        }
  

        .board_unconfirm_title {
            background-color: #efefef;
            box-sizing: border-box;
            padding: ${dp(15)} ${dp(10)};
            border-radius: ${dp(5)};
            font-size: 14px;
            margin-top: 3vw;
            text-align: center;
            line-height: 1.5;
            word-break: keep-all;

            > div {
                > span {
                    font-weight: bold;
                }
            }
        }

        .board_unconfirm_lists {
            max-width: ${dp(1200)};
            margin: ${dp(20)} auto 0;

            .board_unconfirm_list {
                box-sizing: border-box;
                padding: ${dp(18)} ${dp(10)};
                font-size: ${dp(14)};
                border-bottom: ${dp(1)} solid #efefef;
                cursor: pointer;

                > div {
                    > span {
                        color: #797979;
                        float: right;
                    }
                }
            }
        }

        .page_nationbar {
            margin-top: ${dp(30)};

            ul{
                display: table;
                margin-left: auto;
                margin-right: auto;

                li{
                    float: left;
                    margin-left: ${dp(25)};
                    color: #D1D1D1;
                    font-weight: bold;
                    
                    &:nth-child(1) {
                        color: #8874D6;
                    }
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }

`;
