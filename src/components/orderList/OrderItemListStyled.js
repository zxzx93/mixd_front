import styled from 'styled-components';
import dp from '../../components/styled/Dp';

const OrderItemListStyled = styled.div`
    @media screen and (max-width: 768px) {
        .all_select_wrap {
            box-sizing: border-box;
            line-height: ${dp(48)};
            
            .ant-checkbox-input {
                width: ${dp(18)};
                height: ${dp(18)};
            }
            
            > span {
                font-size: ${dp(14)};
                line-height: ${dp(18)};
                color: #000000;
                font-weight: bold;
                padding: 0;
            }
            
            .ant-checkbox + span {
                font-size: ${dp(14)};
                line-height: ${dp(18)};
                color: #000000;
                font-weight: bold;
                padding: 0;
                margin-left: ${dp(9)};
            }

            .ant-btn {
                float: right;
                margin: ${dp([10, 0])};
                width: ${dp(74)};
                height: ${dp(28)};
                padding: 0;
                border: ${dp(1)} solid #000000;
                border-radius: ${dp(4)}; 

                span {
                    font-size: ${dp(12)};
                    color: #161616;
                }
            }
        }
        
        .orderitem_list {
            overflow: hidden;
            margin-bottom: ${dp(20)};

            &:last-child {
                margin-bottom: 0;
            }
        }

        .list_check {
            width: ${dp(26)};
            min-width: ${dp(26)};
            max-width: ${dp(26)};
            margin-top: ${dp(28)};
            float: left;
        }

        .list_wrap {
            overflow: hidden;
            float: left;
            width: ${(props) => (props.unUseCheck ? '100%' : 'calc(100% - 26px)')};

            > div {
                overflow: hidden;
                width: 100%;
                position: relative;
            }
                
            .img_wrap {
                position: absolute;
                top: 0;
                left: 0;
                float: left;

                > span {
                    display: block;
                    width: ${dp(78)};
                    height: ${dp(78)};
                    border-radius: ${dp(4)};
                    overflow: hidden;
                    background-color: #F5F5F5;

                    div {
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.3);
                        text-align:center;
                        line-height:${dp(78)};
                        color:#fff;
                        font-weight:bold;
                    }

                    img {
                        width: 100%;
                    }
                }

               
               
            }

            .info_wrap {
                float: left;
                height: ${dp(78)};
                width: 100%;
                max-width: 100%;
                box-sizing: border-box;
                padding: ${dp([3, 8, 0, 86])};
                margin-bottom: ${dp(12)};

                > span {
                    &:first-child {
                        display: block;
                        font-size: ${dp(14)};
                        line-height: ${dp(17)};
                        color: #939393;
                    }

                    &:nth-child(2) {
                        display: block;
                        font-size: ${dp(14)};
                        line-height: ${dp(20)};
                        color: #000000;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }

                > div {
                    margin-top: ${dp(17)};
                    line-height: ${dp(19)};

                    > span {
                        &.final_price {
                            color: #000000;
                            font-size: ${dp(16)};
                            font-weight: bold;
                            line-height: ${dp(19)};
                        }

                        &.origin_cost {
                            color: #D1D1D1;
                            font-size: ${dp(12)};
                            text-decoration: line-through;
                            margin-left: ${dp(8)};
                        }
                    }
                }
            }
        }

        .option_wrap {
            width: 100%;
            height: ${dp(44)};
            line-height: ${dp(44)};
            background-color: #F5F5F5;
            box-sizing: border-box;
            padding: ${dp([0, 0, 0, 12])};
            border-radius: ${dp(4)};

            > div {
                float: left;
                color: #939393;

                span {
                    display: inline-block;
                    width: ${dp(1)};
                    height: ${dp(12)};
                    background-color: #939393;
                    margin: ${dp([0, 10.5])};
                }
            }

            > .option {
                width: ${dp(77)};
                height: 100%;
                float: right;
                padding: 0;
                background-color: transparent;

                span {
                    color:#000;
                    font-weight: bold;
                }
            }

            > .soldOut {
                width: ${dp(77)};
                height: 100%;
                float: right;
                padding: 0;
                background-color: transparent;

                span {
                 
                    color: #d1d1d1;
                    font-weight: bold;
                }
            }
        }
    }
`;

export default OrderItemListStyled;
