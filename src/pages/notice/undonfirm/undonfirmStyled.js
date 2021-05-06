import Styled from 'styled-components';


export const UndonfirmStlye = Styled.div`
    //mobile
        margin: 50px 0 60px;

        #content {
            box-sizing: border-box;
            padding: 0 3vw;
            overflow: hidden;
        }

        .board_top {
            background-color: #EEEBF9;
            box-sizing: border-box;
            padding: 25px 10px;
            font-size: rem(10);
            margin-top: 3vw;

            > div {
                overflow: hidden;
                font-weight: bold;
                font-size: 14px;
                
                > p {
                    padding: 10px 0;
                    float: left;
                    color: #616161;
                    > span {
                        font-weight: bold;
                        margin-right: 5px;
                    }
                }
                    
                > a {
                    cursor: pointer;
                    padding: 5px 0;
                    font-weight: bold;
                    float: right;
                    font-size: 13px;
        
                    width: 80px;
                    height: 20px;
                    line-height: 20px;
                    border: 1px solid #8874D6;
                    background-color: #fff;
                    color: #8874D6;
                    border-radius: 100px;
                    text-align: center;
                }
            }
        }

        .board_lists {
            margin-top: 10px;

            > div {
                .board_list {
                    position: relative;
                    left: 0;
                    box-sizing: border-box;
                    padding: 30px 10px;
                    border-bottom: 1px solid #efefef;
                    cursor: pointer;

                    > div {
                        position: absolute;
                        left: 10px;
                        top: 16px;
                        font-weight: bold;
                        color: #616161;
                        font-size: 14px;
                        > span {
                            position:absolute;
                            left: 0px;
                            top: 22px;
                            color: #d1d1d1;
                            font-weight: normal;
                            font-size: 12px;
                        }
                    }
                }
            }
        }

        .board_detail {
            box-sizing: border-box;
            padding: 0 3vw;
        }

        .board_detail_title {
            padding: 20px 0;
            font-size: 14px;
            border-bottom: 1px solid #efefef;

            > div {
                > span {
                    color: #797979;
                    float: right;
                }
            }
        }

        .board_detail_cont {
            box-sizing: border-box;
            padding: 20px 0;
            font-size: 13px;
            line-height: 1.4;
        }

        .board_unconfirm_title {
            background-color: #efefef;
            box-sizing: border-box;
            padding: 15px 10px;
            border-radius: 5px;
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
            max-width: 1200px;
            margin: 20px auto 0;

            .board_unconfirm_list {
                box-sizing: border-box;
                padding: 18px 10px;
                font-size: 14px;
                border-bottom: 1px solid #efefef;
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
            margin-top: 30px;

            ul{
                display: table;
                margin-left: auto;
                margin-right: auto;

                li{
                    float: left;
                    margin-left: 25px;
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