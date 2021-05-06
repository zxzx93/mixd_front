import styled from 'styled-components';
import dp from '../../../components/styled/Dp';

const OrderTitleStyled = styled.div`
    @media screen and (max-width: 768px) {
        font-weight: bold;
        font-size: ${dp(15)};
        line-height: ${dp(19)};
        margin-bottom: ${dp(14)};
        color: #000000;

        .url_share {
            float: right;
            padding: 0;
            background-color: #FFFFFF;
            height: ${dp(19)};

            > span {
                display: block;
                font-weight: bold;
                color: #FF3358;
                font-size: ${dp(12)};
            }
        }

        .modify_option {
            margin-top: -${dp(3.5)};
            width: ${dp(74)};
            height: ${dp(26)};
            float: right;
            padding: 0;
            border: ${dp(1)} solid #D0D0D0;
            border-radius: ${dp(13)};
            background-color: #FFFFFF;

            > span {
                display: block;
                color: #000000;
                font-size: ${dp(12)};
            }
        }
    }
`;

export default OrderTitleStyled;
