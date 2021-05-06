import Styled from 'styled-components';
import dp from '../../components/styled/Dp';

const ServiceStyled = Styled.div`

@media screen and (max-width: 768px) {
    width: 100%;
    box-sizing: border-box;
    padding: 0 3vw;
    margin: ${dp(30)} ${dp(0)} ;
    font-size: ${dp(13)};
    padding-top: ${dp(30)};
    

    .lists{
        padding: ${dp(5)} 0;
        line-height: ${dp(20)};
        
        >h1 {
            font-weight: bold;
            color: #454545;
        }
        > p {
            margin-top: ${dp(8)};
            font-size: ${dp(14)};
            margin-bottom: ${dp(5)};
            color: #454545;
        }

    }
   
}
`;

export default ServiceStyled;