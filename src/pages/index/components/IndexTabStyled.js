import Styled from "styled-components";
import dp from "./../../../components/styled/Dp";

const IndexTabStyled = Styled.div`
    @media screen and (max-width: 768px) {
        z-index: 1300;
        position: absolute;
        width: 100%;
        top: ${dp(50)};
        height: ${dp(40)};
        line-height: ${dp(40)};
        .ant-tabs-nav {
            margin: 0;
        }
        .ant-tabs-nav-wrap {
            background-color: ${(props) =>
                props.manm ? "#000000" : "#FFFFFF"};
            box-sizing: border-box;
            padding: ${dp([0, 8, 1, 8])};
            border-bottom: 
                ${(props) =>
                    props.manm
                        ? dp(1) + " solid #000000"
                        : dp(1) + " solid #F5F5F5"};
        }

        .ant-tabs-nav-list {
            width: 100%;
        }
        .ant-tabs-tab {
            margin: 0;
            padding: 0;
            width: 25%;
        }
        .ant-tabs-tab-btn {
            width: 100%;
            padding: ${dp([10, 0, 8, 0])};
            //line-height: ${dp(22)};
            font-size: ${dp(13)};
            color: ${(props) => (props.manm ? "#d1d1d1" : "#939393")};
            text-align: center;
        }
        
        .ant-tabs-tab-active {
            > .ant-tabs-tab-btn {
                color: ${(props) => (props.manm ? "#FFFFFF" : "#000000")};
            }
        }
        .ant-tabs-ink-bar {
            background: ${(props) => (props.manm ? "#FFFFFF" : "#000000")};
            height: ${dp(3)} !important;
        }
    }
`;

export default IndexTabStyled;
