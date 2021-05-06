import styled from 'styled-components';
import dp from '../../components/styled/Dp';

const OrderStyled = styled.div`
    @media screen and (max-width: 768px) {
        padding: ${dp([50, 0, 52, 0])};

        /* .ant-tabs {
            box-sizing: border-box;
            padding: ${dp([11, 16, 10, 16])};
        } */

        .ant-tabs-nav {
            margin: 0;

            &:before {
                border: none;
            }

            .ant-tabs-nav-wrap {
                overflow: unset;
            }
        }
        
        .ant-tabs-nav-list {
            width: 100%;
            box-sizing: border-box;
            padding: ${dp([11, 16, 10, 16])};
        }
        .ant-tabs-tab {
            width: 49%;
            height: ${dp(54)};
            margin: 0 1% 0 0;
            padding: 0;
            border: ${dp(1)} solid #FFFFFF;
            border-radius: ${dp(4)};
            box-shadow: 0 0 ${dp(6)} rgba(0, 0, 0, 0.3);

            &.ant-tabs-tab-active {
                border: ${dp(1)} solid #000000;
                
                .ant-tabs-tab-btn {
                    > span {
                        color: #000000;
                    }
                }
            }

            &:nth-child(2) {
                margin: 0 0 0 1%;
            }
        }
        .ant-tabs-tab-btn {
            width: 100%;
            box-sizing: border-box;
            padding: ${dp([0, 22, 0, 21])};

            > span {
                color: #D1D1D1;
                font-size: ${dp(14)};
                font-weight: bold;

                &:first-child {
                    float: left;
                }
                
                &:last-child {
                    float: right;
                }
            }
        }
        .ant-tabs-ink-bar {
            display: none;
        }
    }
`;

export default OrderStyled;
