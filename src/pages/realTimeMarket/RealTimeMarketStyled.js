import Styled from "styled-components";
import dp from './../../components/styled/Dp';

const RealTimeMarketStyld = Styled.div`
    @media screen and (max-width: 768px) {
        padding: ${dp([43, 0, 52, 0])};

        .market_wrap {
            position: relative;
            overflow: hidden;
            padding: ${dp([18, 0, 18, 10])};


            .market_inner {
                
                margin-bottom: 6px;

                .rank_wrap {
                    > p {
                        color: #939393;
                    }
                }

                &:first-child,:nth-child(2),:nth-child(3){
                    .rank_wrap {
                        > p {
                            color: #ff3358;
                        }
                    }
                }
            }
        }

        .rank_wrap {
            float: left;
            

            p {
                width: ${dp(34)};
                color: #FF3358;
                margin: ${dp([24, 0, 4, 0])};
                text-align: center;
                font-weight: bold;
                font-size: ${dp(18)};
                line-height: ${dp(21)};
            }

            div {
                width: ${dp(22)};
                margin: 0 auto;
                line-height: ${dp(15)};
            }

        }

        .marketList_wrap {
            width: 100%;
            box-sizing: border-box;

            > div {
                overflow: hidden;
            }

            .profile_wrap {
                .ant-badge-count {
                    right: ${dp(6)};
                }
                > div:nth-child(2) {
                    a {
                        line-height: 1.8;
                    }
                    ul {
                        li {
                            font-weight: normal;
                        }
                    }
                }
            }
            .lists_wrap {
                padding-right: 0;

                .ant-btn {
                    margin-left: ${dp(8)};
                }
            }
        }
    }
`;

export default RealTimeMarketStyld;
