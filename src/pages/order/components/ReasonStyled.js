import Styled from "styled-components";
import dp from './../../../components/styled/Dp';

const ReasonStyled = Styled.div`
    @media screen and (max-width: 768px) {
        .reason_select {
            margin-bottom: ${dp(11)};

            .true__control {
                box-shadow: none;
                height: ${dp(42)};
                border: ${dp(1)} solid #E3E3E3;
            }

            .true__control--menu-is-open {
                border-radius: 0;
                border-top-left-radius: ${dp(4)};
                border-top-right-radius: ${dp(4)};
                border-bottom: 1px solid transparent;
            }

            .true__value-container {
                padding: ${dp([0, 12])};
            }

            .true__placeholder {
                font-size: ${dp(13)};
                color: #000000;
                margin: 0;
            }

            .true__menu {
                margin: 0;
                border-radius: 0;
                border: 1px solid #E3E3E3;
                border-top: transparent;
                border-bottom-right-radius: ${dp(4)};
                border-bottom-left-radius: ${dp(4)};
                box-shadow: none;
            }

            .true__option {
                padding: ${dp([11, 12])};
                font-size: ${dp(14)};
            }

            .true__option--is-focused {
                background-color: transparent;
            }
            
            .true__option--is-selected {
                color: #000000;
                font-weight: bold;
                background-color: transparent;
            }

            .true__indicator-separator {
                display: none;
            }
        }

        .ant-input {
            padding: ${dp([15, 12])};
            font-size: ${dp(13)};
        }
    }
`;

export default ReasonStyled;
