import Styled from "styled-components";
import dp from "./../../../components/styled/Dp";

const PlanDetailStyled = Styled.div`
    @media screen and (max-width: 768px) {
        margin: ${dp(43)} auto ${dp(52)};
        padding: ${dp(12)} 2vw 0 2vw;

        .plan_image_wrap {
            box-sizing: border-box;
         
            img {
                width: 100%;
            }
        }

        .filter_wrap {
            box-sizing: border-box;
            //padding: 0 2vw;
            overflow: hidden;
            display:flex;
            justify-content: space-between;
            > p {
                margin: ${dp(14)} 0;
                font-size: ${dp(14)};
                line-height: ${dp(28)};
                color: #D1D1D1;
            }

            .ant-select {
                margin: ${dp(14)} 0;
                font-size: ${dp(12)};
                padding-right: ${dp(10)};
                .ant-select-selector {
                    border-color: transparent !important;
                    border: ${dp(1)} solid transparent;
                    box-shadow: none !important;
                    //height: ${dp(28)};
                }
                .ant-select-selection-item {
                    padding-right: 0;
                }
                .ant-select-arrow {
                    right: ${dp(1)};
                    color: #000;
                }
            }
        }

        .plan_wrap {
            width: 100%;
            padding-bottom: 50px;
            .masonry {
                box-sizing: border-box;
       
                .item_list {
                width: 50%;
                box-sizing: border-box;
                padding: 0 1% ${dp(11)} 0;
               
                &:nth-child(2n) {
                padding: 0 0 ${dp(11)} 1%;
                }
                    .image_wrap {
                        position:relative;
                        padding-top:100% ;
                        background-color: #ddd;
                        border-radius: ${dp(4)};
                        > img {
                            width: 100%;
                            position: absolute;
                            left: 0;
                            top: 50%;
                            transform: translateY(-50%);
                            object-fit: cover;
                            min-height: 100%;
                        }
                    }
                }
            }
        }
    }
`;

export default PlanDetailStyled;
