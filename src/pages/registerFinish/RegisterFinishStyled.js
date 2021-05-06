import Styled from "styled-components";

import dp from "../../components/styled/Dp";

const RegisterFinishStyld = Styled.div`
@media screen and (max-width: 768px){
    #container {
            padding : ${dp([135, 24, 0, 24])};

        .congrateImg {
           text-align:center;
           margin-bottom:${dp(37)};

        img{
            width:${dp(100)};
             height:${dp(100)};
        }
        }

        .contents{
           text-align:center;

        > div:nth-child(1){
        line-height:${dp(24)};
        font-size:${dp(20)};
        margin-bottom:${dp(15)};
        }
        > div:nth-child(2){
        line-height:${dp(22)};
        font-size:${dp(15)};
        margin-bottom:${dp(43)};
        }
        > div:nth-child(3){
        line-height:${dp(16)};
        font-size:${dp(13)};
        margin-bottom:${dp(12)};

        span{
            color:red;
        }
        }

        }
        .button {
          a  > button{
                font-size:${dp(15)};
                width:100%;
                height:${dp(48)};
                margin-bottom:${dp(12)};
                border-radius:${dp(4)};
                border: solid 0.5px;
                cursor : pointer;
            }

            .login{
                background:#000;
                color:#FFF;
            } 

            .main{
                background:#ffffff;
            } 
    }
`;

export default RegisterFinishStyld;
