import Styled from "styled-components";
import dp from "./../../../components/styled/Dp";

const PlayStyled = Styled.div`
    @media screen and (max-width: 768px) {
        margin: 0 auto ${dp(52)};

        .plan_list {
            position: relative;
            margin: 0 0 ${dp(10)} 0;
           
            &:last-child {
                margin: 0;
            }
            >a {
                > img {
                width: 100%;
                border-radius: ${dp(4)};
                }
            }
           
            > div {
                position: absolute;
                display: table;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;

                > div {
                    display: table-cell;
                    vertical-align: middle;
                    box-sizing: border-box;
                    padding: 0 ${dp(25)} 0 ${dp(140)};

                    .plan_title {
                        font-size: ${dp(12)};
                        font-weight: bold;
                        color: #000000;
                        margin: 0;
                        line-height: ${dp(20)};
                    }
    
                    .plan_content {
                        font-size: ${dp(13)};
                        color: #000000;
                        line-height: 1.2;
                        white-space: normal;
                        overflow: hidden;
                        //max-height: 2.4em;
                        word-wrap: break-word;
                        display: -webkit-box;
                        -webkit-line-clamp: 2; 
                        -webkit-box-orient: vertical;
                        margin-bottom: ${dp(5)};
                    }
    
                    .ant-btn {
                        width: ${dp(80)};
                        height: ${dp(28)};
                        line-height: ${dp(24)};
                        padding: 0;
                        border-radius: ${dp(14)};
                        border: ${dp(1)} solid #FF3358;
                        
                        > span {
                            font-size: ${dp(12)};
                            font-weight: bold;
                            color: #FF3358;
                        }
                    }
                }

            }
        }
    }
`;

export default PlayStyled;
