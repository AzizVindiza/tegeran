import React from 'react';
import "./BranchSection.scss"

import tegeran from "./tegeran.png"
import tegeranP from "./tegeranP.svg"
import moscow from "./moscow.png"
import moscowP from "./moscowP.svg"
import krasnodar from "./krasnodar.png"
import krasnodarP from "./krasnodarP.svg"
import astana from "./astana.png"
import astanaP from "./astanaP.svg"
import bishkek from "./bishkek.png"
import bishkekP from "./bishkekP.svg"
import path from "./path.svg"
import path1000 from "./path1000.svg"
import img from "./img.png"
const BranchSection = () => {
    return (
        <section className="branch" id={"branch"}>
            <h2 className="branch__title">
                Наши филиалы
            </h2>
            <div className="container">
                <picture className="branch__bg">
                    <source media="(min-width:1000px)" srcSet={path1000}/>
                    <img src={path} alt="path"/>
                </picture>
                <div className="branch__img">
                    <img src={tegeran} alt="tegeran"/>
                    <img className="branch__point" src={tegeranP} alt="tegeran"/>
                </div>
                <div className="branch__img">
                    <img src={moscow} alt="moscow"/>
                    <img className="branch__point" src={moscowP} alt="moscow"/>
                </div>
                <div className="branch__img">
                    <img src={krasnodar} alt="krasnodar"/>
                    <img className="branch__point" src={krasnodarP} alt="krasnodar"/>
                </div>
                <div className="branch__img">
                    <img src={astana} alt="astana"/>
                    <img className="branch__point" src={astanaP} alt="astana"/>
                </div>
                <div className="branch__img">
                    <img src={bishkek} alt="bishkek"/>
                    <img className="branch__point" src={bishkekP} alt="bishkek"/>
                </div>
            </div>
            <div className="branch__wrapper">
                <img src={img} alt="map"/>
            </div>

        </section>
    );
};

export default BranchSection;