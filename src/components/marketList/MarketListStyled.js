import Styled from 'styled-components';
import dp from './../styled/Dp';

const MarketListStyled = Styled.div`
    @media screen and (max-width: 768px) {
        .market_list {
            box-sizing: border-box;
            height: ${dp(193)};
        }

        .profile_wrap {
            display: table;
            width: 100%;
            height: ${dp(56)};
            box-sizing: border-box;
            padding: ${dp([7, 8, 0, 8])};
            margin-bottom: ${dp(6)};

            > div {
                display: table-cell;
                vertical-align: middle;
            
                &:nth-child(1) {
                    width: ${dp(73)};
                }

                &:nth-child(2) {
                    width: auto;

                    a {
                        font-weight: bold;
                        color: #000000;
                        font-size: ${dp(13)};
                        line-height: ${dp(16)};
                        margin-bottom: ${dp(3)};
                    }

                    ul {
                        overflow: hidden;
                        margin: 0;

                        li {
                            font-size: ${dp(12)};
                            line-height: ${dp(15)};
                            float: left;
                            padding-right: ${dp(5)};
                            color: #939393;
                        }
                    }
                }
            }

            .ant-btn-text {
                width: ${dp(32)};
                height: ${dp(53)};
                text-align: center;
                float: right;
                padding: 0;
                background: #FFFFFF;

                img {
                    width: ${dp(16)};
                }

                > span {
                    display: block;
                    margin-top: ${dp(2)};
                    font-size: ${dp(12)};
                    line-height: ${dp(15)};
                }
            }

            .ant-badge-count {
                background: #FF3358;
                top: ${dp(5)};
                padding: 0;
            }
            .ant-scroll-number-only-unit {
                color: #FFFFFF;
            }
        }

        .lists_wrap {
            box-sizing: border-box;
            padding: 0 ${dp(8)};

            .swiper-wrapper {
                display: flex;
            }

            .swiper-slide {
                width: ${dp(100)};
                margin-right: ${dp(8)};

                &:last-child {
                    margin-right: 0;
                }
            }

            img {
                width: ${dp(100)};
                height: ${dp(100)};
            }

            .ant-btn {
                position: relative;
                width: ${dp(54)};
                height: ${dp(54)};
                margin: ${dp(23)};
                overflow: hidden;
                border-radius: 50%;
                padding: 0;
                background-color: #F5F5F5;
                border: none;

                > span {
                    color: #000000;
                    line-height: ${dp(17)};
                    display: block;
                    font-size: ${dp(12)};
                }
            }
        }
    }
`;

export default MarketListStyled;
