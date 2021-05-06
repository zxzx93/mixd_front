import styled from 'styled-components';
import dp from '../../../components/styled/Dp';

const CancelReasonStyled = styled.div`
    @media screen and (max-width: 768px) {
        > div {
            > p {
                color: #000000;
                font-size: ${dp(13)};
                line-height: ${dp(16)};
                font-weight: bold;
                margin-bottom: ${dp(7)};
            }

            > span {
                display: block;
                color: #000000;
                font-size: ${dp(13)};
                line-height: ${dp(16)};
            }
        }
    }
`;

export default CancelReasonStyled;
