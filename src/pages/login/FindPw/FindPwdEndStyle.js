import Styled from 'styled-components';
import dp from './../../../components/styled/Dp';


const FindPwdEndStyled = Styled.div`

.change_result_info{
  margin-top:${dp(190.5)} ;
  margin-bottom:${dp(35.5)};
  text-align: center;
  p{
  line-hegiht:  ${dp(37)};
  color: #000000;
  }
}


.pwd_return_btn{
  position: absolute;
  width: 100%;
  bottom: ${dp(58)};
  padding: ${dp([0, 8])};
    .login_btn{
      width: 100% ;
      height: ${dp(48)};
      background-color: #ff3358;
      text-align: center;
      font-size:${dp(15)};
      color: #ffffff;
      line-height: ${dp(48)};
      border-radius: ${dp(4)};
    }
}



`;


export default FindPwdEndStyled;
