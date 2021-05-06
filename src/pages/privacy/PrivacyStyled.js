import Styled from "styled-components";
import dp from "../../components/styled/Dp";

const PrivacyStyled = Styled.div`

@media screen and (max-width: 767px) {
    width: 100%;
    box-sizing: border-box;
    padding: 0 3vw;
    margin: ${dp(30)} ${dp(0)} ;
    font-size: ${dp(13)};
    padding-top: ${dp(15)};

    > div {
        margin: 0;
    }
   
    div{
        /* line-height: ${dp(20)}; */
    
        >h1 {
            font-weight: bold;
            margin-top: ${dp(20)};
            color: #454545;
        }

        >p {
            margin-top: ${dp(8)};
            font-size: ${dp(14)};
            color: #454545;
        }

        table {
            width:100%;
            border:${dp(1)} solid #d1d1d1;
            text-align:center;
            font-size: ${dp(12)};
            tr {
                border:${dp(1)} solid #d1d1d1;
                >td {
                    border:${dp(1)} solid #d1d1d1;
                }
            }
        }
    }
}
`;

export default PrivacyStyled;
