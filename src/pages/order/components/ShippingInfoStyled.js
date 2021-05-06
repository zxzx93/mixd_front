import styled from 'styled-components';
import dp from '../../../components/styled/Dp';

const ShippingInfoStyled = styled.div`
    @media screen and (max-width: 768px) {
        > ul {
            margin: 0;

            li {
                position: relative;
                color: #939393;
                box-sizing: border-box;
                padding-left: ${dp(16)};
                font-size: ${dp(12)};
                line-height: ${dp(18)};

                &:before {
                    position: absolute;
                    top: 0;
                    left: 0;
                    content: 'ㆍ';
                }
            }
        }
    }
`;

export default ShippingInfoStyled;
