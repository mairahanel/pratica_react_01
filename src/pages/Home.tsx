import React from "react";
import { Banner } from '../components/Banner/Banner';
import { SectionContent } from "../components/SectionContent/SectionContent";
import { SectionIcons } from "../components/SectionIcons/SectionIcons";
import { Footer } from '../components/Footer/Footer';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';


const text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, provident impedit dicta expedita ratione aliquid qui laborum dolores doloribus voluptas accusamus tempora id accusantium quos labore est quasi nostrum quod."

export const Home: React.FC = () => {
    return (
        <>
            <Banner titulo="Minha primeira página com React" />
            <SectionIcons />
            <SectionContent titulo="Lorem Ipsum" texto={text} urlImage={img1} />
            <SectionContent titulo="Lorem Ipsum" texto={text} urlImage={img2} reverse />
            <SectionContent titulo="Lorem Ipsum" texto={text} urlImage={img3} />
            <Banner titulo="Contato" />
            <Footer />
        </>
    )
}