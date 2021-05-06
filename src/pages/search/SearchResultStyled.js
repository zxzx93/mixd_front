import Styled from "styled-components";
import dp from './../../components/styled/Dp';

const SearchResultStyled = Styled.div`
    @media screen and (max-width: 768px) {
        padding: ${dp([0, 0, 52, 0])};
   
        .header_fix {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            z-index: 1;
        }
        .gender {
            display: none;
        }
        .title_back {
        display: inline-block;
        position: absolute;
        top: 0;
        left: ${dp(7)};
        width: ${dp(36)};
        height: ${dp(50)};

        > img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: ${dp(8)};
        }
    }
        .ant-tabs-nav {
            margin: 0;
            border-bottom: ${(props) =>
              props.gender
                ? dp(1) + " solid #000000"
                : dp(1) + " solid #F5F5F5"};
            position: fixed;
            left: 0;
            top: 50px;
            width: 100%;
            z-index: 1;  
        }
        
        .ant-tabs-nav-wrap {
            box-sizing: border-box;
            padding: 0 ${dp(8)};
            background-color: ${(props) =>
              props.gender ? "#000000" : "#FFFFFF"};
        }
        .ant-tabs-tab {
            padding: 0;
            margin: 0;
            width: 50%;
        }
        .ant-tabs-nav-list {
            width: 100%;
        }
       .ant-tabs-tab-btn {
            width: 100%;
            font-size: ${dp(13)};
            line-height: ${dp(34)};
            text-align: center;
            color: ${(props) => (props.gender ? "#F5F5F5" : "#939393")};
        }
        .ant-tabs-ink-bar {
            width: 50%;
        }
        .ant-tabs-tab-active {
            .ant-tabs-tab-btn {
                color: ${(props) => (props.gender ? "#FFFFFF" : "#000000")};
            }
        }
        .ant-tabs-ink-bar {
            background-color: ${(props) =>
              props.gender ? "#FFFFFF" : "#000000"};
            height: ${dp(3)} !important;
        }

        .filter_wrap {
            overflow: hidden;
            box-sizing: border-box;
            padding: 0 ${dp(8)};
            margin: ${dp([8, 0, 4, 0])};
            
            .search_cnt {
                float: left;
                line-height: ${dp(28)};
                font-size: ${dp(13)};
                color: #939393;
                margin-top: ${dp(90)};
            }
        }

        .masonry_wrap {
            box-sizing: border-box;
            padding: 0 2vw ${dp(24)} 2vw;
            
            .item_list {
                width: 50%;
                box-sizing: border-box;
                padding: 0 1% ${dp(11)} 1%;

                .image_wrap {
                    position:relative;
                    padding-top: 100%;
                    
                    >img {
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

        .list_none {
            text-align: center;
            padding-top: ${dp(270)};
            font-size: ${dp(14)};
            color: #D1D1D1;
        }

        .marektList_wrap {
            box-sizing: border-box;
            padding: ${dp(8)} 0;
        }
    }
`;

export default SearchResultStyled;
