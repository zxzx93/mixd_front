import styled from 'styled-components';
import dp from '../../components/styled/Dp';

const ScoreStyled = styled.div`
    @media screen and (max-width: 768px) {
        border-bottom: ${dp(6)} solid #F5F5F5;

        > p {
            margin: ${dp([19, 0, 7, 0])};
            text-align: center;
            color: #000000;
            font-size: ${dp(14)};
            line-height: ${dp(17)};
        }

        > div {
            display: table;
            margin: 0 auto ${dp(16)};

            > span {
                display: inline-block;
                font-size: ${dp(20)};
                font-weight: bold;
                margin-right: ${dp(12)};
                line-height: ${dp(24)};
            }

            .ant-rate {
                line-height: ${dp(24)};
            }
            .ant-rate-star {
                position: relative;
                top: ${dp(2)};
                margin-right: ${dp(4)};
                line-height: ${dp(22)};

                &:last-child {
                    margin-right: 0;
                }
            }
            .anticon {
                display: block;
            }

            .ant-rate-star-full {
                .ant-rate-star-first,
                .ant-rate-star-second {
                    color: #FF3358;
                }
            }

            .ant-rate-star-first,
            .ant-rate-star-second {
                color: #DFDFDF;
            }
        }
    }
`;

export default ScoreStyled;
