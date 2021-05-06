import Styled from 'styled-components';
import { Tabs } from 'antd';
import dp from '../../components/styled/Dp';


const FindPwdFormStyled = Styled(Tabs)`
width: 100%;
.ant-tabs-tab{
margin: ${dp(67)} auto 0 auto ;
  width: ${dp(180)};
  height: ${dp(60)};
}
.ant-tabs-ink-bar{
  background-color: #000000 
}
.ant-tabs-tab-btn{
  font-size: ${dp(14)};
  color: #939393;
  width: 100%;
  text-align: center;
}
.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
  color: #000000;
  width: 100%;
}
.ant-tabs-nav-wrap{
  justify-content: space-around;
  flex: 0;

  .ant-tabs-nav-list {
    width: 100%;
  }
}

`


export default FindPwdFormStyled;
