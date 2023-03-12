import React from 'react';
import FirstSection from "./FirstSection/FirstSection";
import LevelSection from "./LevelSection/LevelSection";
import AboutSection from "./AboutSection/AboutSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import BranchSection from "./BranchSection/BranchSection";
import FormSection from "./FormSection/FormSection";

const Home = () => {
    return (
        <>
            <FirstSection/>
            <LevelSection/>
            <AboutSection/>
            <ServicesSection/>
            <BranchSection/>
            <FormSection/>
        </>
    );
};

export default Home;