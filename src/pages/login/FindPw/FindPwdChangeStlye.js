import Styled from 'styled-components';
import dp from '../../../components/styled/Dp';

const FindPwdChangeStlyed = Styled.div`

input{
  outline: none; 
  border: none;
  border-bottom: 1px solid #d1d1d1;
  }

.change_password{
  position: relative;
}
.container{
    width: 100%;
  padding: ${dp([0,16])};
}
p{
  margin-top:${dp(62)} ;
  margin-bottom:${dp(44)};
  text-align: center;
  line-hegiht:  ${dp(37)};
  color: #616161;
  font-size: ${dp(14)};
}


form{
  .change_input_box{
    width: 100%;
    input{
      width: 100%;
      height: ${dp(43)};
      padding-left: ${dp(12)};
      &::placeholder {
        text-align: left ;
        font-size:${dp(14)};
        color: #d1d1d1;

      }
    }
  }
}
}


.change_wrap{
  position: absolute;
  width: 100%;
  bottom: ${dp(58)};
  padding: ${dp([0,8])};
    .change_btn{
      width: 100% ;
      height: ${dp(48)};
      background-color: #f5f5f5;
      text-align: center;
      font-size:${dp(15)};
      color: #d1d1d1;
      line-height: ${dp(48)};
      border-radius: ${dp(4)};
    }
}
`;


export default FindPwdChangeStlyed;