import Styled from "styled-components";
import dp from './../../components/styled/Dp';

const ReviewSytled = Styled.div`
    @media screen and (max-width: 768px) {
        box-sizing: border-box;
        padding: ${dp([50, 0, 52, 0])};

        .ant-tabs-nav {
            margin :0;
        }

        .ant-tabs-nav-wrap {
            box-sizing: border-box;
            padding: ${dp([0, 8])};
        }

        .ant-tabs-nav-list {
            width: 100%;

            .ant-tabs-ink-bar {
                background: #000000;
                height: ${dp(3)};
            }
        }
        .ant-tabs-tab {
            width: 50%;
            height: ${dp(34)};
            padding: 0;
            margin: 0;

            .ant-tabs-tab-btn {
                width: 100%;
                color: #939393;
                text-align: center;
                font-size: ${dp(13)};
            }
        }

        .ant-tabs-tab-active {
            .ant-tabs-tab-btn {
                color: #000000;
            }
        }
    }
`;

export default ReviewSytled;
