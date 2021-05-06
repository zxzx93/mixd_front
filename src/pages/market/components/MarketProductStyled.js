import styled from "styled-components";
import dp from "../../../components/styled/Dp";

const MarketProductStyled = styled.div`
  @media screen and (max-width: 768px) {
    padding: 0 3vw;
    .filter_wrap {
      overflow: hidden;
      box-sizing: border-box;
      margin: ${dp([8, 0, 4, 0])};
    }
  }
`;

export default MarketProductStyled;
