import styled from "styled-components";

export const SectionIconsStyled = styled.section`
    width: 100vw;
    height: 50vh;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.color};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`