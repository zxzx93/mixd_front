import styled from 'styled-components';
import dp from '../../components/styled/Dp';

const PointStyled = styled.div`
    @media screen and (max-width: 768px) {
        margin: ${dp([50, 0, 53, 0])};

        .point_title {
            width: 100%;
            box-sizing: border-box;
            padding: ${dp([26, 36, 26, 32])};
            height: ${dp(78)};
            line-height: ${dp(20)};
            overflow: hidden;
            border-bottom: ${dp(6)} solid #F5F5F5;

            > div {
                &:first-child {
                    float: left;

                    img {
                        width: ${dp(20)};
                        margin-right: ${dp(12)};
                        float: left;
                    }

                    span {
                        font-weight: bold;
                        color: #000000;
                        font-size: ${dp(14)}
                    }
                }
                &:last-child {
                    float: right;
                    font-size: ${dp(15)};
                    font-weight: bold;
                    color: #000000;
                }
            }
        }

        .point_lists {
            width: 100%;

            .p_lists_wrap {
                height: ${dp(60)};
                box-sizing: border-box;
                padding: ${dp([0, 16])};
                line-height: ${dp(17)};
                font-size: ${dp(14)};
                font-weight: bold;
                
                p {
                    color: #000000;
                    margin: 0;
                    padding: ${dp([23, 16, 20, 16])};
                    border-bottom: ${dp(1)} solid #F5F5F5;
                }
            }

            .point_list {
                box-sizing: border-box;
                padding: ${dp([0, 16, 0, 16])};

                &.non_list {
                    padding: ${dp([156, 0, 156, 0])};
                    text-align: center;
                    color: #D1D1D1;
                    font-size: ${dp(14)};
                    line-height: ${dp(16)};
                    background-color: #F5F5F5;
                }

                > div {
                    overflow: hidden;
                    box-sizing: border-box;
                    border-bottom: ${dp(1)} solid #F5F5F5;
                    padding: ${dp([15, 16, 11, 16])};
                }

                .point {
                    width: ${dp(130)};
                    font-size: ${dp(15)};
                    font-weight: bold;
                    line-height: ${dp(19)};
                    float: left;

                    &.plus {
                        color: #FF3358;
                    }

                    &.minus {
                        color: #000000;
                    }
                }

                .point_info {
                    float: left;

                    p {
                        font-size: ${dp(13)};
                        line-height: ${dp(16)};
                        color: #000000;
                        margin-bottom: ${dp(3)};
                    }
                    time,
                    span {
                        display: block;
                        font-size: ${dp(12)};
                        line-height: ${dp(15)};
                        color: #D1D1D1;
                    }
                }
            }
        }

        .point_alert {
            padding: ${dp([16, 16, 50, 16])};

            div {
                &:nth-child(1) {
                    color: #D1D1D1;
                    font-size: ${dp(13)};
                    line-height: ${dp(16)};
                    margin-bottom: ${dp(4)};
                }
                &:nth-child(2) {
                    box-sizing: border-box;
                    padding-left: ${dp(7)};
                }
            }

            p {
                position: relative;
                color: #D1D1D1;
                margin: 0;
                font-size: ${dp(11)};
                line-height: ${dp(18)};

                &:before {
                    position: absolute;
                    top: 0;
                    left: -${dp(7)};
                    display: inline-block;
                    content: '·';
                    width: ${dp(7)};
                }
            }

            span {
                display: block;
                color: #D1D1D1;
                margin: 0;
                font-size: ${dp(11)};
                line-height: ${dp(18)};
            }
        }
    }
`;

export default PointStyled;
