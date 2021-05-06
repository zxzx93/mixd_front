import Styled from 'styled-components';
import dp from './../styled/Dp';

const FilterStyled = Styled.div`
    @media screen and (max-width: 768px) {
        float: right;
        overflow: hidden;
        box-sizing: border-box;

        .ant-select {
            float: right;

            .ant-select-selector {
                border-color: transparent !important;
                border: ${dp(1)} solid transparent;
                box-shadow: none !important;
                height: ${dp(28)};
            }
        }

        .ant-select-item-option {
            font-size: ${dp(12)};
        }
        
        .ant-select-selector {
            .ant-select-selection-item {
                line-height: ${dp(26)};
                font-size: ${dp(12)};
            }
        }
        .ant-select-arrow {
            color: #000000;
        }
    }
`;

export default FilterStyled;
