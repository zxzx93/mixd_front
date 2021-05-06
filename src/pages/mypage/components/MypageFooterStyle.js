import Styled from 'styled-components';
import dp from '../../../components/styled/Dp';

const MypageFooterStyled = Styled.div`

@media screen and (max-width: 768px) {
      width: 100%;
      box-sizing: border-box;
      padding: ${dp(20)} 6vw ${dp(70)} 6vw;
      overflow: hidden;
      background-color: #f5f5f5;
      margin-top: ${dp(10)};
      
      > div {

        >div {
          line-height: 1.5;

          p {
            display: inline-block;
            font-size: ${dp(13)};
            font-weight: bold; 
            color: #0a0a0a;
          }

          span {
            margin-left: ${dp(16)};
            font-size: ${dp(13)};
            font-weight: normal;
            color: #0a0a0a;
          }
        }
      }
    }
  }
`;

export default MypageFooterStyled;