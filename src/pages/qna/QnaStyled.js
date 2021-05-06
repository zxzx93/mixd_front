import Styled from "styled-components";
import dp from '../../components/styled/Dp';

const QnaStyled = Styled.div`
@media screen and (max-width: 768px) {
    
    .ant-tabs-nav {
        width: 100%;
        position: fixed;
        left: 0;
        top: ${dp(50)};
        background-color: #fff;
        z-index: 1;
        .ant-tabs-nav-wrap {
            
            >.ant-tabs-nav-list  {
                margin: ${dp(0)} auto;
                width: 96%;

                > .ant-tabs-tab {
                    width: 33.3%;
                    height: ${dp(34)};
                    color:#000;
                    margin: 0 auto;

                    > .ant-tabs-tab-btn {
                        color:#939393; 
                        font-size: ${dp(13)};
                        width: ${dp(50)};
                        margin: 0 auto;
                    }
                }
            
                .ant-tabs-tab-active {
                    > .ant-tabs-tab-btn {
                        color:#000; 
                    }
                }
                > .ant-tabs-ink-bar {
                    height: ${dp(3)} !important; 
                    background: #000;
                }
            }
        }
    }
    .ant-tabs-tabpane {
        padding-bottom: ${dp(55)};
    }
    .null_list {
        text-align: center;
        margin-top: ${dp(220)};
        color: #d1d1d1;
        font-size: ${dp(14)}; 
    }  
`;

export default QnaStyled;
