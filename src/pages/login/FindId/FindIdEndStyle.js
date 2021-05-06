import Styled from "styled-components";
import dp from "../../../components/styled/Dp";

const FindIdEndStlyed = Styled.div`
.success_id_search{
  position: relative;
}
p{
  margin-top:${dp(95.5)} ;
  margin-bottom:${dp(35.5)};
  text-align: center;
  line-hegiht:  ${dp(37)};
  color: #000000;
}
.find_id_wrap{
  width: 100%;
  padding:${dp([0, 25, 0, 25])};
.find_id{
  color: #000000;
  width: ${dp(310)};
  text-align: center;
  font-size: ${dp(18)};
  height: ${dp(74)};
  line-height: ${dp(74)};
  background-color: #f5f5f5;
  border-radius: ${dp(4)};
  margin-bottom: ${dp(8)};
  font-weight: bold;
}
}

.login_return{
  position: absolute;
  width: 100%;
  bottom: ${dp(58)};
  padding: ${dp([0, 8])};
    .find-btn{
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

export default FindIdEndStlyed;
