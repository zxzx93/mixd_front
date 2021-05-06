import Styled from 'styled-components';
import dp from './../../../components/styled/Dp';

const ZzimFavoriteStyled = Styled.div`
    @media screen and (max-width: 768px) {
        padding: ${dp(15)} 0;

        .lists_wrap {
            padding: 0;

            .swiper-wrapper {

                div:first-child {
                    margin-left: ${dp(8)};
                }
            }
            .ant-btn {
                margin-left: ${dp(8)};
            }
        }
        .profile_wrap {
            .ant-badge-count {
                right: ${dp(6)};
            }
            /* .ant-btn-text {
                img {
                    width: ${dp(24)};
                }
            } */
            > div {
                &:nth-child(2) {
                    ul {
                        li {
                            font-weight: normal;
                        }
                    }
                }
            }
        }    
    }
`;

export default ZzimFavoriteStyled;
