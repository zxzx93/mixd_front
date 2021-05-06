import styled from 'styled-components';
import dp from '../../../components/styled/Dp';

const ShippingStyled = styled.div`
    @media screen and (max-width: 768px) {
        > ul {
            margin: 0;

            li {
                display: table;
                overflow: hidden;
                margin-bottom: ${dp(14)};

                &:last-child {
                    margin-bottom: 0;
                }

                p {
                    display: table-cell;
                    vertical-align: top;
                    width: ${dp(100)};
                    font-size: ${dp(13)};
                    line-height: ${dp(16)};
                    margin: 0;
                    color: #000000;
                }

                span {
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
    }
`;

export default ShippingStyled;
