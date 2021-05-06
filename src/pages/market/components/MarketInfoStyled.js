import styled from 'styled-components';
import dp from '../../../components/styled/Dp';

const MarketInfoStyled = styled.div`
    @media screen and (max-width: 768px) {
        box-sizing: border-box;
        padding: ${dp([27, 12, 27, 16])};
        border-bottom: ${dp(6)} solid #F5F5F5;

        .service_info {
            font-size: ${dp(13)};
            line-height: ${dp(16)};
            color: #000000;
            font-weight: bold;
            margin-bottom: ${dp(13)};
        }

        .open_time {
            display: table;
            margin-bottom: ${dp(13)};

            > p {
                display: table-cell;
                vertical-align: top;   
                margin: 0; 
                padding-right: ${dp(12)};
                font-size: ${dp(12)};
                line-height: ${dp(17)};
                color: #616161;
            }

            > div {
                display: table-cell;
                vertical-align: middle;
                
                > p {
                    margin: 0;
                    font-size: ${dp(12)};
                    line-height: ${dp(17)};
                    color: #616161;
                }
            }
        }

        .channel {
            color: #616161;
            font-size: ${dp(12)};

            > span {
                margin-left: ${dp(8)};
                color: #000000;
                font-weight: bold;
            }
        }
    }
`;

export default MarketInfoStyled;
