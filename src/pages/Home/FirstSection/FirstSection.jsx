import React from 'react';
import "./FirstSection.scss"
import bg from './bg.svg'
import {Link} from "react-router-dom";
const FirstSection = () => {
    return (
        <section className="first">

            <div className="container">
                <h2 className="first__h2">
                    Реализация оптового экспорта в страны СНГ
                </h2>
                <h3 className="first__h3">
                    Ваш легкий старт в международном бизнесе
                </h3>
                <Link to={"/services"}>
                    <button className="first__btn">
                        Наши услуги
                    </button>
                </Link>
            </div>
            <div className="first__bg-svg">
                <img src={bg} alt="bg world"/>
            </div>
        </section>
    );
};

export default FirstSection;