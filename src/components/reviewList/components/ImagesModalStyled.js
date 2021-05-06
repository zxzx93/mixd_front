import styled from 'styled-components';
import { Modal } from 'antd';
import dp from '../../../components/styled/Dp';

const ImagesModalStyled = styled(Modal)`
    @media screen and (max-width: 768px) {
        z-index: 1400;
        margin: 0 auto;
        padding: 0;
        max-width: calc(100vw - 2rem);

        .ant-modal-content {
            overflow: hidden;
            background-color: transparent;
            box-shadow: none;
        }
        .ant-modal-mask {
            z-index: 1400;
        }
        .ant-modal-close-x {
            width: ${dp(36)};
            height: ${dp(36)};
            line-height: ${dp(36)};

            .ant-modal-close-icon {
                > svg {
                    color: #FFFFFF;
                }
            }
        }
        .ant-modal-body {
            padding: ${dp([36, 0, 0, 0])};
        }

        .images_wrap {
            background-color: #E3E3E3;
            border-radius: ${dp(4)};
            overflow: hidden;
        }

        .swiper-slide {
            > img {
                width: 100%;
            }
        }

        .content_wrap {
            margin-top: ${dp(19)};

            > div {
                overflow: hidden;
                margin-bottom: ${dp(9)};

                &:last-child {
                    margin: 0;
                }
                
                > span {
                    font-size: ${dp(14)};
                    font-weight: bold;
                    color: #FFFFFF;
                }

                > p {
                    color: #FFFFFF;
                    margin: 0;
                    max-height: ${dp(68)};
                    overflow: auto;
                    font-size: ${dp(13)};
                    line-height: ${dp(20)};
                }
            }
        }

        .ant-rate {
            float: right;
            height: ${dp(20)};
        }

        .ant-rate-star {
            display: block;
            float: left;
            margin-right: ${dp(4)};

            .ant-rate-star-first,
            .ant-rate-star-second {
                color: #DFDFDF;
            }
        }

        .ant-rate-star-full {
            .ant-rate-star-first,
            .ant-rate-star-second {
                color: #FF3358;
            }
        }

        .anticon-star {
            display: block;
        }
    }
`;

export default ImagesModalStyled;
