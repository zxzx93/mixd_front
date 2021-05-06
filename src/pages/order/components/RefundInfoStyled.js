import styled from 'styled-components';
import dp from '../../../components/styled/Dp';

const RefundInfoStyled = styled.div`
    @media screen and (max-width: 768px) {

        .order_title {
            box-sizing: border-box;
            padding: ${dp([33, 16, 0, 16])};
        }

        > ul {
            box-sizing: border-box;
            padding: ${dp([0, 16, 0, 16])};
            margin: 0;

            li {
                overflow: hidden;
                margin-bottom: ${dp(14)};

                &:last-child {
                    margin-bottom: 0;
                }

                p {
                    float: left;
                    width: ${dp(100)};
                    font-size: ${dp(13)};
                    line-height: ${dp(16)};
                    margin: 0;
                    color: #000000;
                }

                span {
                    float: right;
                    font-size: ${dp(13)};
                    line-height: ${dp(16)};
                    color: #000000;
                }

                .bold {
                    font-weight: bold;
                }

                .point {
                    color: #FF3358;
                }
            }
        }

        .phone_wrap {
            margin-top: ${dp(30)};
            background-color: #FFC85F;
            box-sizing: border-box;
            padding: ${dp([18, 16, 17, 16])};

            > p {
                margin: 0;
                color: #FFFFFF;
                font-size: ${dp(12)};
                line-height: ${dp(15)};
            }
        }
    }
`;

export default RefundInfoStyled;
