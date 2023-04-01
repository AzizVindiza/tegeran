import React from 'react';
import "./AboutSection.scss"
import map from "./map.svg"
const AboutSection = () => {
    return (
        <section className="about" id={"about"}>
            <h2 className="about__title">
                О компании
            </h2>
            <div className="container">
                <div className="about__map">
                    <img src={map} alt="world map"/>
                </div>

                <div className="about__p">
                    <div className="about__line"></div>
                    <br/>
                    Компания ITC TEHRAN основана с целью реализации оптового экспорта с территории Ирана в страны СНГ. Один из наших офисов находится в Тегеране, филиалы организации в СНГ расположены в Москве, Бишкеке, Алматы и Краснодаре, а также в ближайшее время планируется открытие дополнительных офисов в крупных городах России.
                    <br/>
                    За долгое время работы мы успели наладить стратегии поставок и логистические маршруты, а также честную систему взаимоотношений с государственными органами, что помогает нашим партнёрам и клиентам, следуя законам, наращивать объемы продаж, увеличивать узнаваемость в странах СНГ, повышать доходы и масштабировать бизнес на международном рынке.
                </div>
            </div>
        </section>
    );
};

export default AboutSection;