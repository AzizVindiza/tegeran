import React from 'react';
import "./FirstSection.scss"
import bg from './bg.svg'
import img from './img.png'
import {Link} from "react-router-dom";
import Btn from "../../../components/Btn/Btn";
const FirstSection = () => {
    return (
        <section className="first">
            <div className="first__row">

                <div className="first__bg-svg">
                    <img src={bg} alt="bg world"/>
                    <div className="first__top">
                        <h2 className="first__h2">
                            Реализация оптового
                            <br/>
                            экспорта в страны СНГ
                        </h2>
                        <h3 className="first__h3">
                            Ваш легкий старт в международном бизнесе
                        </h3>
                        <Link to={"/services"}>
                            <Btn text={"Наши услуги"} type={"button"}/>
                        </Link>
                    </div>
                </div>
                <div className="first__img">
                    <img src={img} alt="tegeran"/>
                </div>
            </div>


            <div className="first__bottom">
                <div className="container">
                    <h3 className="first__bottom-title">Откройте для себя мир новых возможностей с ITC Smart!</h3>
                </div>
            </div>
        </section>
    );
};

export default FirstSection;