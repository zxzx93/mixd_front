import Styled from 'styled-components'
import dp from './../../../components/styled/Dp';

const EventSliderStyled = Styled.div`
    @media screen and (max-width: 768px) {
        .ant-tabs-tab-active {
            .ant-tabs-tab-btn {
                color: #FF3358;
                font-weight: bold;
                width: 65%;
                margin: 0 auto;
            }
        }
        .ant-tabs-ink-bar {
            display: none;
        }
        .ant-tabs-tab {
            width: auto;
            box-sizing: border-box;
            padding: ${dp(6)} 0;
        }
        .ant-tabs-tab-btn {
            font-size: ${dp(12)};
            width: 65%;
            margin: 0 auto;
            color: #939393;
        }
        .ant-tabs-nav {
            position: absolute;
            top: 0;
            right: 2vw;
            width: ${dp(104)};
            padding: 0;
            float: right;

            &:before {
                //border: none;
            }
        }
        .ant-tabs-tab {
            box-sizing: border-box;
            width: ${dp(52)};
            text-align: center;
            border: ${dp(1)} solid #E5E5E5;
            margin: 0 auto;

            &:nth-child(1) {
                border-top-left-radius: ${dp(4)};
                border-bottom-left-radius: ${dp(4)};
            }

            &:nth-child(2) {
                border-top-right-radius: ${dp(4)};
                border-bottom-right-radius: ${dp(4)};
                border-left: none;
            }
        }
        .ant-tabs-content {
            padding-top: ${dp(26)};
        }
    }
`;

export default EventSliderStyled;
