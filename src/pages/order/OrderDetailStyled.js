import styled from 'styled-components';
import dp from '../../components/styled/Dp';

const OrderDetailStyled = styled.div`
    @media screen and (max-width: 768px) {
        padding: ${dp([50, 0, 52, 0])};

        .shipping_info {
            box-sizing: border-box;
            padding: ${dp([33, 16, 30, 16])};
            border-bottom: ${dp(8)} solid #F5F5F5;
        }

        .delivery_info {
            box-sizing: border-box;
            padding: ${dp([33, 16, 30, 16])};
            border-bottom: ${dp(8)} solid #F5F5F5;
        }

        .payment_info {
            box-sizing: border-box;
            padding: ${dp([33, 16, 30, 16])};
            border-bottom: ${dp(8)} solid #F5F5F5;
        }

        /* .deposit_info {
            box-sizing: border-box;
            padding: ${dp([33, 16, 30, 16])};
        } */

        .shipping_info_wrap {
            box-sizing: border-box;
            padding: ${dp([24, 21, 50, 11])};
            background-color: #F5F5F5;
        }
    }
`;

export default OrderDetailStyled;
