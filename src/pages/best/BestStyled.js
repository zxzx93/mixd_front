import Styled from "styled-components";
import dp from "./../../components/styled/Dp";

const BestStyled = Styled.div`
    @media screen and (max-width: 768px) {
        padding: 0 3vw ${dp(35)};
        margin-top: ${dp(15)};
        
        /* .masonry {
            box-sizing: border-box;
            //padding: 0 2vw ${dp(24)} 2vw;

            .item_list {
                width: 48%;
                box-sizing: border-box;
                padding: 0 1% ${dp(11)} 1%;

                .image_wrap {
                    position:relative;
                    padding-top:100% ;

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
        } */

        .more_add {
            width: 96%;
            height: ${dp(46)};
            line-height: ${dp(46)};
            box-sizing: border-box;
            border: ${dp(1)}solid #D1D1D1;
            border-radius: ${dp(4)};
            text-align: center;
            font-weight: bold;
            color: #000000;
            margin: 0 auto ${dp(70)};
            font-size: ${dp(12)};
        }
    }
`;

export default BestStyled;
