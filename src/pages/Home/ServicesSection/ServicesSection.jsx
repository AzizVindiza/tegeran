import React from 'react';
import "./ServicesSection.scss"
import ServicesCard from "./ServicesCard/ServicesCard";
const ServicesSection = () => {
    return (
        <section className="services">
            <h2 className="services__title">
                Наши услуги
            </h2>
            <div className="container">
                {/*{data.map((el,id)=>(*/}
                    <ServicesCard icon={"dsadsa"} title={"sdasd"} text={"dsadas"} number={+1} />
                    {/*// ))}*/}
            </div>
        </section>
    );
};

export default ServicesSection;