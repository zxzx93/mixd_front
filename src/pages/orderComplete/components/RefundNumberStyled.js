import Styled from "styled-components";
import dp from './../../../components/styled/Dp';

const RefundNumberStyled = Styled.div`
    @media screen and (max-width: 768px) {
        position: relative;

        > p {
            font-size: ${dp(15)};
            line-height: ${dp(22)};
            font-weight: bold;
            color: #000000;
            margin-bottom: ${dp(6)};
        }

        > div {
            span {
                display: inline-block;
                margin-right: ${dp(12)};
                font-size: ${dp(12)};
                color: #000000;
                line-height: ${dp(18)};
            }
        }

        > .ant-btn {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            padding: ${dp(4)};
            background: transparent;

            > span {
                font-size: ${dp(12)};
                color: #000000;
                font-weight: bold;
            }
        }
    }
`;


export default RefundNumberStyled;
