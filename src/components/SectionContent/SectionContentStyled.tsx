import styled from "styled-components";

interface SectionProps {
    ordem?: boolean

}

export const SectionContentStyled = styled.section<SectionProps>`
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    flex-direction: ${(props) => props.ordem ? "Row-reverse" : "row"};
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.color};
`

