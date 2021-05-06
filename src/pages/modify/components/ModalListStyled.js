import styled from "styled-components";
import dp from "../../../components/styled/Dp";

const ModalListStyled = styled.div`
  @media screen and (max-width: 768px) {
    .ant-radio-group {
        .ant-radio-button-wrapper{
            width: 100%;
            height: ${dp(60)};
            line-height: ${dp(60)};
            background-color: #f5f5f5;
            border: none;

            &.ant-radio-button-wrapper-checked {
                background-color: #d1d1d1;
                border: none;
                box-shadow: none;
            }
        }
    }
  }
`;

export default ModalListStyled;
