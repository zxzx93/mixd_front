import Styled from 'styled-components';
import dp from '../../../components/styled/Dp';


const FindIdNoneStyled = Styled.div`

.none_id{
  width: 100%;
}
  p{
  margin-top: ${dp(95.5)};
  width: 100%;
  text-align: center;
  font-size: ${dp(14)}
  line-height:${dp(57)};
  color:#000000;
  }

.login_return{
  position: absolute;
  width: 100%;
  bottom: ${dp(58)};
  padding: ${dp([0,8])};
  display: flex;
  justify-content: space-around;
  .register-btn,
    .find-btn{
      opacity:1;
      width: ${dp(168)} ;
      height: ${dp(48)};
      background-color: #000000;
      text-align: center;
      font-size:${dp(15)};
      color: #ffffff;
      line-height: ${dp(48)};
      border-radius: ${dp(4)};
    }
    .register-btn{
      background-color: #ff3358;
    }
}
`;

export default FindIdNoneStyled;