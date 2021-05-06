import Styled from 'styled-components';
import dp from '../../../components/styled/Dp';


const FindIdFromStlyed = Styled.div`
input{
  outline: none; 
  border: none;
  border-bottom: 1px solid #d1d1d1;
  }
.id_search{
  position: relative;
}
.id_search_tab{
  width: 100%;
  padding: ${dp([0,16])};
  margin-top: ${dp(56)} ;
  .id_phone{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: ${dp(12)} ;
    input{
      width: 64%;
      height: ${dp(43)};
      padding-left: ${dp(12)};
     
      font-size: ${dp(14)};
      &::placeholder {
      line-height: ${dp(17)};
      color: #d1d1d1;
      }
    }
    .send_btn{
      text-align: center;
      ${props => props.checkCertificationCode === undefined ? {color: "#d1d1d1" }: {color: "#ffffff"}};
      width: ${dp(123.5)};
      height: ${dp(43)};
      line-height: ${dp(43)};
      ${props => props.checkCertificationCode === undefined ? {background: "#f5f5f5"} : {background: "#ff3358"}};
      /* background-color:  */
      /* background: #f5f5f5; */
      border-radius: ${dp(4)} ;
      margin-left: ${dp(13)}
    }
  }
  .send_number{
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
.explanation{
  width: 100%;
  p{
    font-size: ${dp(12)};
    padding:${dp([18,108,0,28])};
    color:#9b9b9b;
  }
}
.find-wrap{
  position: absolute;
  width: 100%;
  bottom: ${dp(58)};
  padding: ${dp([0,8])};
    .find-btn{
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


export default FindIdFromStlyed;