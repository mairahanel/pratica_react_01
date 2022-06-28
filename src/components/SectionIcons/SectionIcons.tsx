import React from 'react';
import { IconsWrapper } from '../IconsWrapper/IconsWrapper';
import { BsColumns, BsDisplay, BsCheckCircle } from 'react-icons/bs';
import { SectionIconsStyled } from './SectionIconsStyled';

export const SectionIcons: React.FC = () => {
    return (
        <SectionIconsStyled>
            <IconsWrapper icon={<BsDisplay />} titulo="Somente para Desktop" texto="Vamos aprender como utilizar um framework"/>
            <IconsWrapper icon={<BsColumns />} titulo="Criado com componentes" texto="Utilizamos o Styled Components"/> 
            <IconsWrapper icon={<BsCheckCircle />} titulo="Fácil aproveitamento" texto="Estamos no caminho"/>  
        </SectionIconsStyled>
    )
}