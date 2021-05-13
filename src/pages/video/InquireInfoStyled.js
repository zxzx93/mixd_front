import Styled from "styled-components";
import dp from "./../../components/styled/Dp";

const InquireInfoStyled = Styled.div`
    @media screen and (max-width: 768px) {
        .select_wrap {
            //overflow: hidden;
            box-sizing: border-box;
            padding: ${dp([24, 8, 21, 8])};
            border-bottom: ${dp(1)} solid #F5F5F5;
            height: 282px;
            > p {
                font-size: ${dp(13)};
                line-height: ${dp(16)};
                color: #414141;
                font-weight: bold;
                margin: ${dp([0, 0, 12, 4])};
            }

            .question_select {
                margin-bottom: ${dp(8)};

                .true__control {
                    box-shadow: none;
                    height: ${dp(42)};
                    border: ${dp(1)} solid #E3E3E3;
                }

                .true__control--menu-is-open {
                    border-radius: 0;
                    border-top-left-radius: ${dp(4)};
                    border-top-right-radius: ${dp(4)};
                    border-bottom: 1px solid transparent;
                }

                .true__value-container {
                    padding: ${dp([0, 12])};
                    font-size: ${dp(13)};

                }

                .true__menu {
                    margin: 0;
                    border-radius: 0;
                    border: 1px solid #E3E3E3;
                    border-top: transparent;
                    border-bottom-right-radius: ${dp(4)};
                    border-bottom-left-radius: ${dp(4)};
                    box-shadow: none;
                }

                .true__option {
                    padding: ${dp([11, 12])};
                    font-size: ${dp(13)};
                }

                .true__option--is-focused {
                    background-color: transparent;
                }
                
                .true__option--is-selected {
                    color: #000000;
                    font-weight: bold;
                    background-color: transparent;
                }

                .true__indicator-separator {
                    display: none;
                }
            }

            .question_textarea {
                width: 100%;
                height: ${dp(120)};
                border: ${dp(1)} solid #D1D1D1;
                border-radius: ${dp(4)};
                resize: none;
            }

            .question_register {
                float: right;
                width: ${dp(174)};
                height: ${dp(36)};
                background-color: #000000;
                margin-top: ${dp(8)};
                border-radius: ${dp(4)};

                > span {
                    font-size: ${dp(12)};
                    color: #FFFFFF;
                }
            }

          
        }

        .market_info_wrap {
            box-sizing: border-box;
            padding: ${dp([24, 16, 21, 16])};
            border-bottom: ${dp(6)} solid #F5F5F5;

            > p {
                font-weight: bold;
                color: #000000;
                font-size: ${dp(13)};
                line-height: ${dp(16)};
            }

            > ul {
                margin: 0;

                > li {
                    display: table;
                    margin-bottom: ${dp(11)};

                    &:last-child {
                        margin-bottom: 0;
                        
                        > p {
                            width: auto;
                            vertical-align: middle;
                        }
                    }

                    > p {
                        display: table-cell;
                        vertical-align: top;
                        font-size: ${dp(12)};
                        line-height: ${dp(17)};
                        color: #616161;
                        width: ${dp(60)};
                        padding-right: ${dp(12)};
                    }

                    > span {
                        display: table-cell;
                        font-size: ${dp(12)};
                        line-height: ${dp(17)};
                        color: #616161;

                        > span {
                            display: block;
                        }
                    }
                }
            }
        }

        .channel_talk {
            box-sizing: border-box;
            padding: ${dp([21, 16, 32, 16])};

            .channel_btn {
                width: 100%;
                height: ${dp(48)};
                background-color: #FF3358;
                border-radius: ${dp(4)};

                > span {
                    color: #FFFFFF;
                    font-size: ${dp(15)};
                }
            }
        }

        .footer_wrap {
            background-color: #F5F5F5;
            box-sizing: border-box;
            padding: ${dp([27, 0, 150, 20])};

            > ul {
                margin: 0;

                > li {
                    overflow: hidden;

                    > p {
                        float: left;
                        width: ${dp(48)};
                        font-size: ${dp(13)};
                        line-height: ${dp(18)};
                        font-weight: bold;
                        box-sizing: border-box;
                        margin: ${dp([0, 20, 0, 0])};
                    }

                    > span {
                        float: left;
                        font-size: ${dp(13)};
                        line-height: ${dp(18)};
                    }
                }
            }
        }

       
    }
`;

export default InquireInfoStyled;
