import React from "react";
import {ContentTextStyled} from '../ContentText/ContentTextStyled';

interface ContentTextProps {
    titulo: string,
    texto: string
}

export const ContentText: React.FC<ContentTextProps> = ({titulo, texto}) => {
    return (
        <ContentTextStyled>
          <h2>{titulo}</h2>
          <p>{texto}</p>
        </ContentTextStyled>

    )
}