import styled from 'styled-components';
import dp from '../../components/styled/Dp';

const OrderListStyled = styled.div`
    @media screen and (max-width: 768px) {
        .order_list {
            margin-bottom: ${dp(10)};
            
            &:last-child {
                margin-bottom: 0;
            }
        }

        .non_lists {
            margin-top: ${dp(200)};
            
            p {
                font-size: ${dp(14)};
                line-height: ${dp(17)};
                margin-bottom: ${dp(30)};
                color: #D1D1D1;
                text-align: center;
            }

            > div {
                text-align: center;
            }

            .ant-btn {
                width: ${dp(192)};
                height: ${dp(42)};
                background-color: #FF3358;
                padding: 0;
                border-radius: ${dp(4)};
                margin: 0 auto;

                > span {
                    line-height: ${dp(42)};
                    color: #FFFFFF;
                    font-size: ${dp(14)};
                }
            }
        }

        .lists_title_btn {
            position: relative;
            box-sizing: border-box;
            width: 100%;
            height: ${dp(50)};
            line-height: ${dp(50)};
            padding: ${dp([0, 16, 0, 16])};

            > time {
                color: #000000;
                font-size: ${dp(17)};
                font-weight: bold;
            }

            a {
                float: right;
                padding: 0;
                height: 100%;
                background-color: #FFFFFF;
                line-height: ${dp(50)};

                > span {
                    font-size: ${dp(14)};
                    font-weight: bold;
                    color: #000000;
                }
            }

            img {
                margin-left: ${dp(10)};
                width: ${dp(6)};
            }
        }

        .order_number_wrap {
            position: relative;
            box-sizing: border-box;
            width: 100%;
            height: ${dp(50)};
            line-height: ${dp(50)};
            padding: ${dp([0, 16, 0, 16])};

            > p {
                float: left;
                margin: 0;
                font-size: ${dp(15)};
                font-weight: bold;
                color: #000000;
            }

            > time { 
                float: right;
                font-size: ${dp(13)};
                color: #000000;
            }
        }

        .lists_wrap {
            box-sizing: border-box;
            width: 100%;
            padding: ${dp([8, 16, 24, 16])};
            border-bottom: ${dp(4)} solid #F5F5F5;

            .list_content {
                overflow: hidden;
                /* height: ${dp(86)}; */
                margin-bottom: ${dp(20)};
                
                &:last-child {
                    margin-bottom: 0;
                }

                .image_wrap {
                    width: ${dp(86)};
                    height: ${dp(86)};
                    /* height: 100%; */
                    border-radius: ${dp(4)};
                    overflow: hidden;
                    float: left;
                    background-color: #F5F5F5;

                    img {
                        width: 100%;
                    }
                }

                .content_wrap {
                    float: left;
                    width: calc(100% - 98px);
                    margin-left: ${dp(12)};

                    .status {
                        font-size: ${dp(14)};
                        color: #939393;
                        font-weight: bold;
                        line-height: ${dp(17)};

                        &.on {
                            color: #FF3358;
                        }
                    }

                    p {
                        font-size: ${dp(17)};
                        margin: ${dp([10, 0, 4, 0])};
                        color: #000000;
                        font-weight: bold;
                        line-height: ${dp(20)};
                    }

                    > span {
                        display: block;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        font-size: ${dp(13)};
                        line-height: ${dp(16)};
                        color: #000000;
                        margin-bottom: ${dp(3)};
                    }

                    .options {
                        color: #939393;
                        font-size: ${dp(13)};
                        line-height: ${dp(16)};

                        > span {
                            position: relative;
                            top: ${dp(2)};
                            display: inline-block;
                            width: ${dp(1)};
                            height: ${dp(12)};
                            margin: ${dp([0, 9])};
                            background-color: #939393;
                        }
                    }
                }

                .btn_wrap {
                    width: 100%;
                    overflow: hidden;

                    > div {
                        margin-top: ${dp(10)};
                        border: 1px solid #D1D1D1;
                        border-radius: ${dp(4)};
                        height: ${dp(44)};
                        
                        .ant-btn, 
                        > a,
                        > button {
                            position: relative;
                            display: block;
                            padding: 0;
                            height: 100%;
                            line-height: ${dp(42)};
                            text-align: center;
                            color: #939393;
                            font-weight: bold;
                            font-size: ${dp(13)};
                            background-color: transparent;
                            cursor: pointer;
                            border: none;
                            
                            > span {
                                display: block;
                                color: #939393;
                                font-weight: bold;
                                font-size: ${dp(13)};
                            }

                            &.bold {
                                color: #000000;
                                > span {
                                    color: #000000;
                                }
                            }

                            &:last-child {
                                &:after {
                                    display: none;
                                }
                            }

                            &:focus {
                                border: none;
                                outline: none;
                            }

                            &:after {
                                position: absolute;
                                top: 50%;
                                transform: translateY(-50%);
                                right: -${dp(2)};
                                display: block;
                                content: '';
                                width: ${dp(2)};
                                height: ${dp(14)};
                                background-color: #D1D1D1;
                            }
                        }
                    }

                    &.btn_1 {
                        > div {
                            .ant-btn, > a, > button {
                                width: 100%;
                            }
                        }
                    }

                    &.btn_2 {
                        overflow: hidden;
                        > div {
                            .ant-btn, > a, > button {
                                float: left;
                                width: 50%;
                            }
                        }
                    }

                    &.btn_3 { 
                        overflow: hidden;
                        > div {
                            .ant-btn, > a, > button {
                                float: left;
                                width: 33.3%;
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default OrderListStyled;
