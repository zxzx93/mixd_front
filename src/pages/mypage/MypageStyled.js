import Styled from "styled-components";
import dp from '../../components/styled/Dp';

const MypageStyle = Styled.div`
@media screen and (max-width: 768px) {
	position: relative;
	width: 100%;
	margin: ${dp([50, 0, -40, 0])};

    P{
      margin-bottom: ${dp(0)};
    }
  }
} 
`;

export default MypageStyle;