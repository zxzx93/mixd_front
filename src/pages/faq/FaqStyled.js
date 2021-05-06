import Styled from 'styled-components';
import dp from './../../components/styled/Dp';

export const Anticon = Styled.div`
    margin: 43px auto 52px;

    .ant-tabs-content-holder {
        padding-bottom: 52px;  
    }

    .ant-tabs-nav {
        margin: 0;
    }
    .ant-tabs-nav-list {
        width: 100%;
        box-sizing: border-box;
        padding: 0 2vw;
    }
    .ant-tabs-tab {
        margin: 0;
        width: 25%;
        text-align: center;
    }
    .ant-tabs-tab-btn {
        display: block;
        width: 100%;
        color: #939393;
    }
    .ant-tabs-tab-active {
        .ant-tabs-tab-btn {
            color: #000000;

        }
    }
    .ant-tabs-ink-bar {
        background: #000000;
    }

    .ant-collapse {
        .ant-collapse-item {
            background: #ffffff;
            border-bottom: 1px solid #f5f5f5;

            .ant-collapse-content{
                .ant-collapse-content-box {
                    
                    >div {
                        color: #616161;
                        font-size: ${dp(13)};
                        line-height: 1.7;
                    }
                }
            } 

           .ant-collapse-header {
                padding: ${dp(16)};
                padding-left:${dp(28)};

                ::before {

                display: inline-block;
                content: "•";
                position: absolute;
                left: ${dp(16)};

                }
                
                .ant-collapse-arrow {
                    left: auto;
                    right: ${dp(16)};
                    color: #939393;
                    top: ${dp(10)};
                    
                }
           }
        }
        .ant-collapse-item-active {
            .ant-collapse-header {
                padding-bottom: 0;
            }
        }
    }
    .swiper-wrapper {
        display: flex;
    }

    a {
        margin: ${dp([6, 4])};
        display: inline-block;
        padding: ${dp([5, 14])};
        background-color: #F5F5F5;
        border-radius: ${dp(16)};
        text-align: center;
    } 
`;

