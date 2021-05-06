import Styled from 'styled-components';
import dp from './../styled/Dp';

const IndexDetailStyled = Styled.div`
    .detail_wrap {
        margin: ${dp(42)} auto ${dp(51)};
        padding: ${dp(12)} 0 0 0;

        margin-top: ${dp(50)};

        .masonry {
            box-sizing: border-box;
            padding: 0 2vw ${dp(50)} 2vw;

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
        }
    }
`;

export default IndexDetailStyled;
