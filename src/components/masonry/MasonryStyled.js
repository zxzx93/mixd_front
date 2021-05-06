import Styled from "styled-components";
import Masonry from "react-masonry-component";
import dp from "./../styled/Dp";

const MasonryStyled = Styled(Masonry)`
@media screen and (max-width: 768px) {
    box-sizing: border-box;
    //padding: 0 2vw ${dp(24)} 2vw;
        >.item_list {
            width: 50%;
            box-sizing: border-box;
            padding: 0 1% ${dp(11)} 0;

            &:nth-child(2n) {
               padding: 0 0% ${dp(11)} 1%;
            }

            >.image_wrap {
                position: relative;
                border-radius: ${dp(4)};
                overflow: hidden; 
                padding-top:100% ;

                >img {
                    width: 100%;
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    object-fit: cover;
                    min-height: 100%;
                }                                                                                                                                           
                .like {
                    position: absolute;
                    bottom: ${dp(10)};
                    right: ${dp(11)};
                    width: ${dp(14)};
                    height: ${dp(14)};

                    img {
                        position: absolute;
                        top: 0;
                        width: 100%;
                    }
                }
            }

            .contents_wrap {
                box-sizing: border-box;
                padding: ${dp([6, 3])};

                h1 {
                    font-size: ${dp(12)};
                    line-height: ${dp(15)};
                    margin-bottom: ${dp(1)};
                    font-weight: bold;
                    
                    > a {
                        color: #000000;
                    }
                }

                p {
                    font-size: ${dp(12)};
                    line-height: ${dp(15)};
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-bottom: ${dp(6)};
                }

                ul {
                    line-height: ${dp(17)};
                    margin: 0;
                    overflow: hidden;

                    li {
                        float: left;
                    }
                    
                    .sale {
                        font-size: ${dp(14)};
                        font-weight: bold;
                        color: #FF3358;
                        margin-right: ${dp(4)};
                    }
        
                    .total {
                        font-size: ${dp(14)};
                        font-weight: bold;
                        color: #000000;
                        margin-right: ${dp(4)};
                    }
                    
                    .cost {
                        box-sizing: border-box;
                        padding-top: ${dp(4)};
                        line-height: ${dp(12)};
                        font-size: ${dp(10)};
                        color: #939393;
                        text-decoration: line-through;
                    }
                }
            }
        }
}
`;

export default MasonryStyled;
