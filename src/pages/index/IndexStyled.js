import Styled from "styled-components";
// import dp from './../../components/styled/Dp';

const IndexStyled = Styled.div`
    @media screen and (max-width: 768px) {
        margin: 0 auto;
        /* z-index: 1300; */
        
        /* 스크롤 테스트 용 */
        /* height: 300vh; */
        
        &.index_header {
            > .ant-tabs {
                > .ant-tabs-nav {
                    background-color: ${(props) =>
                        props.manm ? "#000000" : "#FFFFFF"} ;
                }
            } 
        }
    }
`;

export default IndexStyled;
