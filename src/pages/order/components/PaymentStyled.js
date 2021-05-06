import styled from 'styled-components';
import dp from '../../../components/styled/Dp';

const PaymentStyled = styled.div`
    @media screen and (max-width: 768px) {
        > ul {
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
    }
`;

export default PaymentStyled;
