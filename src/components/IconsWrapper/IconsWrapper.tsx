import React from "react";
import { IconsWrapperStyled } from './IconsWrapperStyled';

interface WrapperProps{
    titulo: string,
    texto: string,
    icon: React.ReactNode
}

export const IconsWrapper: React.FC<WrapperProps> = ({ titulo, texto, icon }) => {
    return (
        <div>
            <IconsWrapperStyled>
                <span>{icon}</span>
                <h1>{titulo}</h1>
                <p>{texto}</p>
            </IconsWrapperStyled>
        </div>
    )
}