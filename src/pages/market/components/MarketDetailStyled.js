import styled from 'styled-components';
import dp from '../../../components/styled/Dp';

const MarketDetailStyled = styled.div`
    @media screen and (max-width: 768px) {
        overflow: hidden;
        background-color: gray;
        width: 100%;
        height: ${dp(160)};
        border-bottom-left-radius: ${dp(16)};
        border-bottom-right-radius: ${dp(16)};

        .img_wrap {
            float: left;
            margin: ${dp([31, 0, 0, 20])};

            .market_img {
                width: ${dp(60)};
                height: ${dp(60)};
                border-radius: 50%;
                border: ${dp(1)} solid #E5E5E5;
                overflow: hidden;
                margin-bottom: ${dp(11)};

                > img {
                    width: 100%;
                }
            }
            
            .market_info {
                overflow: hidden;
                margin-bottom: ${dp(5)};

                .market_name {
                    font-size: ${dp(14)};
                    line-height: ${dp(17)};
                    color: #FFFFFF;
                    float: left;
                    font-weight: bold;
                    margin: 0;
                }

                .ant-btn {
                    float: left;
                    width: ${dp(17)};
                    height: ${dp(17)};
                    padding: 0;
                    border: none;
                    margin-left: ${dp(7)};

                    img {
                        display: block;
                        width: ${dp(12)};
                        margin: 0 auto;
                    }
                }
            }

            .market_hash {
                overflow: hidden;

                > li {
                    float: left;
                    margin-right: ${dp(5)};
                    font-size: ${dp(13)};
                    line-height: ${dp(16)};
                    color: #FFFFFF;
                }
            }
        }

        .count_wrap {
            float: right;
            margin: ${dp([34, 20, 0, 0])};

            ul {
                overflow: hidden;

                > li {
                    float: left;
                    text-align: center;
                    margin-left: ${dp(5)};

                    > p {
                        color: #FFFFFF;
                        margin-bottom: ${dp(3)};
                        font-size: ${dp(13)};
                        line-height: ${dp(16)};
                    }

                    > span {
                        color: #FFFFFF;
                        font-size: ${dp(13)};
                        line-height: ${dp(16)};
                    }
                }
            }
        }
    }
`;

export default MarketDetailStyled;
