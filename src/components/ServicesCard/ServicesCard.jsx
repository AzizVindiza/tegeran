import React from 'react';
import "./ServicesCard.scss"
import {Link, useLocation} from "react-router-dom";
import Btn from "../Btn/Btn";

const ServicesCard = ({el,idx}) => {
    const {pathname} = useLocation()
    return (
        <div className="services-card">
            <div className="services-card__row">
                <div className="services-card__img">
                    <img src={el.loga} alt={el.loga}/>
                </div>
                <h2 className="services-card__number">
                    {idx + 1}
                </h2>
            </div>
            <h3 className="services-card__h3">{el.title_one}</h3>
            <p className="services-card__p">{el.description_one}</p>
            {
                pathname !== "/" ?
                <Link className="services-card__link" to={`${el.id}`}>
                <Btn text={'подробнее'} type={"button"}/>
                </Link> : ""
            }
        </div>
    );
};

export default ServicesCard;