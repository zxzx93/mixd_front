import Styled from 'styled-components';

const ZzimRecentlyStyled = Styled.div`
    margin: 12px 2vw 0 2vw;

    .image_wrap {
        padding-top: 100%;

        >img {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            object-fit: cover;
            min-height: 100%;
        }
    }
`;

export default ZzimRecentlyStyled;
