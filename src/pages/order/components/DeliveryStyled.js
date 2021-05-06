import styled from 'styled-components';
import dp from '../../../components/styled/Dp';

const DeliveryStyled = styled.div`
    @media screen and (max-width: 768px) {
        > ul {
            margin: 0;

            li {
                display: table;
                overflow: hidden;
                margin-bottom: ${dp(14)};

                p {
                    display: table-cell;
                    vertical-align: top;
                    width: ${dp(100)};
                    font-size: ${dp(13)};
                    line-height: ${dp(16)};
                    margin: 0;
                    color: #000000;
                }

                span,
                time {
                    display: table-cell;
                    vertical-align: middle;
                    font-size: ${dp(13)};
                    line-height: ${dp(16)};
                    color: #000000;
                }

                .bold {
                    font-weight: bold;
                }
            }
        }

        .ant-btn {
            width: 100%;
            height: ${dp(44)};
            border-radius: ${dp(22)};
            border: ${dp(1)} solid #D1D1D1;

            > span {
                color: #000000;
                font-weight: bold;
            }
        }
    }
`;

export default DeliveryStyled;
