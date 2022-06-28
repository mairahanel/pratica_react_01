import styled from "styled-components";
import imgBanner from '../../assets/imgBanner.jpg';

export const BannerStyled = styled.div `
    background-image: url(${imgBanner});
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        color: #fff;
    }
`
