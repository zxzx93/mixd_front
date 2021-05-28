import Styled from "styled-components";
import dp from './../../../components/styled/Dp';
import { Drawer } from 'antd';

const DreateReviewDrawerStyled = Styled(Drawer)`
@media screen and (max-width: 768px) {
    .ant-drawer-mask {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 0;
            background-color: rgba(0, 0, 0, 0.45);
            opacity: 1;
        }

        .ant-drawer-content-wrapper {
            box-shadow: ${dp(-3)} ${dp(8)} ${dp(10)} ${dp(0.16)} !important;

            > .ant-drawer-content {
                border-radius: ${dp(8)};
                text-align: center;
                > .ant-drawer-wrapper-body {
                    > .ant-drawer-header {
                        border-bottom: ${dp(1)} solid #f5f5f5;
                        padding: ${dp(5)} ${dp(10)} ;
                        border: none;
                        
                        > .ant-drawer-title {
                            font-size: ${dp(14)};
                            font-weight: bold;
                            margin-top: ${dp(10)};
                            border-bottom: ${dp(1)} solid #f5f5f5;
                            padding:  ${dp(0)} ${dp(10)} ${dp(15)} ${dp(10)};
                        }
                    }
                    
                    .ant-drawer-body {
                        padding: ${dp(5)} ${dp(10)} ${dp(10)} ${dp(10)};    
                    }
                }
            }
        }

        .delete {
            color:red;
            border-bottom: ${dp(1)} solid #f5f5f5;
            padding-bottom: ${dp(14)};
        }

     

        .success {
            color:#939393;
        }
        p {
            font-size: ${dp(14)};
        }
        
      
    }

`;

export default DreateReviewDrawerStyled;