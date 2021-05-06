import Styled from 'styled-components';
import dp from './../../components/styled/Dp';

const ZzimStyled = Styled.div`
    box-sizing: border-box;
    padding: ${dp(43)} 0 ${dp(52)} 0;
   
    .ant-tabs-nav {
        margin: 0;

        .ant-tabs-nav-wrap {
            background-color: ${(props) =>
                props.manm ? "#000000" : "#FFFFFF"};
            position: fixed;
            width: 100%;
            z-index: 2;
        }

        .ant-tabs-nav-list {
            width: 100%;
            box-sizing: border-box;
            padding: 0 2vw;
            border-bottom: 
                ${(props) =>
                    props.manm
                        ? dp(1) + " solid #000000"
                        : dp(1) + " solid #F5F5F5"};

            .ant-tabs-tab {
                margin: 0;
                width: 33.3%;
                text-align: center;

                .ant-tabs-tab-btn {
                    display: block;
                    width: 100%;
                    color: 
                        ${(props) =>
                            props.manm
                                ? "#F5F5F5"
                                : "#000000"};
                }
            }
            .ant-tabs-tab-active {
                .ant-tabs-tab-btn {
                    color: 
                        ${(props) =>
                            props.manm
                                ? "#FFFFFF"
                                : "#000000"};

                }
            }
            .ant-tabs-ink-bar {
                background: 
                    ${(props) =>
                            props.manm
                                ? "#FFFFFF"
                                : "#000000"};
            }
        }
    }
    .ant-tabs-content-holder {
        padding-top: 46px;
    }
`;

export default ZzimStyled;
