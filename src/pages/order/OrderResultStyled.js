import styled from 'styled-components';
import dp from '../../components/styled/Dp';

const OrderResultStyled = styled.div`
    @media screen and (max-width: 768px) {
        box-sizing: border-box;
        padding: ${dp([50, 0, 53, 0])};

        .result_title {
            width: 100%;
            
            > p {
                text-align: center;
                font-weight: bold;
                color: #000000;
                font-size: ${dp(15)};
                line-height: ${dp(19)};
                padding: ${dp([25, 0])};
                margin: 0;
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

        /* .all_select_wrap {
            box-sizing: border-box;
            line-height: ${dp(48)};
            padding: ${dp([0, 16])};
            
            .ant-checkbox-input {
                width: ${dp(18)};
                height: ${dp(18)};
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
        } */

        .cancel_lists {
            box-sizing: border-box;
            padding: ${dp([0, 16, 34, 16])};
            border-bottom: ${dp(6)} solid #F5F5F5;
        }

        .cancel_reason {
            box-sizing: border-box;
            padding: ${dp([33, 16, 30, 16])};
            border-bottom: ${dp(6)} solid #F5F5F5;
        }

        .refund_address {
            box-sizing: border-box;
            padding: ${dp([33, 16, 30, 16])};
            border-bottom: ${dp(6)} solid #F5F5F5;
        }

        .refund_number {
            box-sizing: border-box;
            padding: ${dp([33, 16, 30, 16])};
            border-bottom: ${dp(6)} solid #F5F5F5;
        }

        /* .refund_info {
            box-sizing: border-box;
            padding: ${dp([33, 16, 0, 16])};
        } */

        .refund_accept {
            width: 100%;
            box-sizing: border-box;
            padding: ${dp([0, 16, 5, 16])};

            > a {
                width: 100%;
                display: block;
                text-align: center;
                color: #FFFFFF;
                font-weight: bold;
                height: ${dp(48)};
                line-height: ${dp(46)};
                padding: 0;
                margin-top: ${dp(30)};
                background-color: #000000;
                border: ${dp(1)} solid #000000;
                border-radius: ${dp(4)};
            }
        }
    }
`;

export default OrderResultStyled;
