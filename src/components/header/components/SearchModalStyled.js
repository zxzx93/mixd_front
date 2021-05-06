import Styled from "styled-components";
import dp from './../../../components/styled/Dp';
import { Modal } from "antd";

const SearchModalStyled = Styled(Modal)`
    @media screen and (max-width: 768px) {
        width: 100% !important;
        height: 100%;
        max-width: 100%;
        top: 0;
        margin: 0;
        
        .ant-modal-content {
            height: 100%;
            box-sizing: border-box;
            padding-bottom: ${dp(53)};
            border-radius: 0;
        }
        
        .ant-modal-body {
            box-sizing: border-box;
            padding: ${dp([15, 16])};

        }

        .hash_list {
            .search_title {
                margin-top: ${dp(25)};
            }
            .search_word {
                border-bottom: none;

                a {
                    font-weight: bold;
                }
            }
        }

        .search_title {
            color: #939393;
            font-size: ${dp(16)};
            line-height: ${dp(19)};

            .ant-btn {
                float: right;
                padding: 0;
                line-height: ${dp(19)};
                height: ${dp(19)}; 
                border: none;
                box-shadow: none;
                
                > span {
                    color: #616161;
                }
            }
        }

        .search_word {
            box-sizing: border-box;
            padding: ${dp([12, 0, 20, 0])};
            border-bottom: ${dp(1)} solid #F5F5F5;

            .ant-tag {
                margin: ${dp([0, 9, 8, 0])};
                background-color: #FFFFFF;
                border-radius: ${dp(20)};

                > a {
                    line-height: ${dp(17)};
                    font-size: ${dp(14)};
                    color: #000000;
                    padding: ${dp([13, 15, 10, 15])};
                }
            }

            .list_none {
                margin-top: ${dp(3)};
                color: #616161;
            }
        }
    }
`;

export default SearchModalStyled;
