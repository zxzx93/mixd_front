import styled from 'styled-components';
import dp from '../../../components/styled/Dp';

const RefundNumberStyled = styled.div`
    @media screen and (max-width: 768px) {
        > ul {
            overflow: hidden;
            margin: 0;

            > li {
                float: left;
                font-weight: ${dp(14)};
                color: #000000;
                margin-right: ${dp(8)};
            }
        }
    }
`;

export default RefundNumberStyled;
