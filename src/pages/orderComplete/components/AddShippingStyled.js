import styled from 'styled-components';
import dp from '../../../components/styled/Dp';

const AddShippingStyled = styled.div`
    @media screen and (max-width: 768px) {
        position: relative;
        
        > p {
            font-size: ${dp(15)};
            line-height: ${dp(22)};
            color: #000000;
            font-weight: bold;
            margin-bottom: ${dp(6)};
        }

        .shipping_info_wrap {
            .non_shipping {
                font-size: ${dp(12)};
                line-height: ${dp(18)};
                color: #D1D1D1;
            }

            > div {
                > p {
                    font-size: ${dp(13)};
                    line-height: ${dp(19)};
                    margin-bottom: ${dp(1)};
                    color: #000000;
                    font-weight: bold;
                }

                > span {
                    display: block;
                    font-size: ${dp(13)};
                    line-height: ${dp(19)};
                    margin-bottom: ${dp(1)};
                    color: #000000;
                }
            }

            .option_select {
                margin-top: ${dp(8)};

                .true__placeholder {
                    font-size: ${dp(12)};
                }

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
                    padding: ${dp([0, 10])};
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
                    padding: ${dp([11, 10])};
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

            .option_add {
                margin-top: ${dp(10)};
                height: ${dp(42)};
                border-radius: ${dp(4)};
            }
        }

        .add_shipping {
            position: absolute;
            top: ${(props) => props.onlist ? 0 : '50%'};
            transform:  ${(props) => props.onlist ? null : 'translateY(-50%)'};
            right: 0;
            width: ${dp(52)};
            height: ${dp(22)};
            background-color: #FFFFFF;
            padding: 0;

            > span {
                display: block;
                font-size: ${dp(12)};
                font-weight: bold;
            }
        }
    }
`;

export default AddShippingStyled;
