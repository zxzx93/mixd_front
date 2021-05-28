import Styled from 'styled-components';
import dp from './../../../components/styled/Dp';

const ZzimNoListStyled = Styled.div`
@media screen and (max-width: 768px) {
    .zzim_box {
        margin: ${dp(180)} auto ${dp(0)};
        text-align: center;
        
        .text_box {
            .main_title{
                font-size: ${dp(14)};
                font-weight: bold;
                color: #000;
                margin-top: ${dp(12)};
            }
            .sub_title{
                font-size: ${dp(12)};
                color: #959595;
                margin-top: ${dp(1)};
            }
        }
        .go_shop {
            width: ${dp(192)};
            height: ${dp(42)};
            line-height: ${dp(42)};
            background-color:#fe1f54;
            border-radius: ${dp(21)};
            margin: ${dp(15)} auto ${dp(0)};
            a {
                >p {
                font-size: ${dp(14)};
                color: #fff;
                }
            }
            
        }
    }
}
`;

export default ZzimNoListStyled;