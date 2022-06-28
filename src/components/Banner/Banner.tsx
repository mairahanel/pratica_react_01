import React from "react";
import { BannerStyled } from '../Banner/BannerStyled';

interface BannerProps {
    titulo: string
}

export const Banner: React.FC<BannerProps> = ({titulo}) => {
    return (
        <BannerStyled>
            <h1>{titulo}</h1>
        </BannerStyled>
    )
}