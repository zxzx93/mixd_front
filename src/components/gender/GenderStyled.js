import styled from "styled-components";
import dp from "./../styled/Dp";

const GenderStyled = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 2vw;
    width: ${dp(49)};
    height: ${dp(32)};
    box-sizing: border-box;
    padding: 0;
    float: left;

    > div {
      position: relative;
      width: 100%;
      height: 100%;

      .ant-switch {
        position: absolute;
        top: 50%;
        left: ${dp(13)};
        transform: translateY(-50%);
        height: ${dp(10)};
        line-height: ${dp(10)};
        width: ${dp(22)};
        min-width: ${dp(22)};
        background-color: ${(props) => (props.gender ? "#FFFFFF" : "#000000")};
      }
      .ant-switch-checked {
        background-color: ${(props) => (props.gender ? "#FF3358" : "#000000")};
      }
   
      .ant-switch-handle {
        width: ${dp(26)};
        height: ${dp(26)};
        top: -${dp(8)};
        left: -${dp(13)};

        &:before {
          background-color: transparent;
          border-radius: 50%;
          line-height: ${dp(25)};
          background-image: url("/images/woman.png");
          background-repeat: no-repeat;
          background-size: ${dp(26)};
        }
      }

      .ant-switch-checked .ant-switch-handle {
        left: ${dp(9)};

        &:before {
          background-color: transparent;
          border-radius: 50%;
          line-height: ${dp(25)};
          background-image: url("/images/man.png");
          background-repeat: no-repeat;
          background-size: ${dp(26)};
        }
      }
    }
  }
`;

export default GenderStyled;
