import styled from 'styled-components';
import dp from '../../components/styled/Dp';

const OrderCancelStyled = styled.div`
    @media screen and (max-width: 768px) {
        box-sizing: border-box;
        padding: ${dp([50, 0, 52, 0])};

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

        .refund_accept {
            width: 100%;
            box-sizing: border-box;
            padding: ${dp([0, 16, 5, 16])};

            > button {
                width: 100%;
                display: block;
                text-align: center;
                height: ${dp(48)};
                line-height: ${dp(46)};
                padding: 0;
                margin-top: ${dp(30)};
                border: ${dp(1)} solid #000000;
                border-radius: ${dp(4)};

                > span {
                    color: #000000;
                    font-weight: bold;
                }
            }
        }
    }
`;

export default OrderCancelStyled;
