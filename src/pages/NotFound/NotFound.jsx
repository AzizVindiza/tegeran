import React from 'react';
import './NotFound.scss'
import Btn from "../../components/Btn/Btn";
import {Link} from "react-router-dom";
import {animateScroll} from "react-scroll";

const NotFound = () => {
    const scrollToTop = ()=>{
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    }
    return (
        <div className="notFound">
            <div className="container">
                <h2 className="notFound__title title">
                    Страница не найдена
                </h2>
                <p className="notFound__p">
                    К сожалению, запращиваемая
                    <br/>
                    Вами страница не существует
                </p>
                <Link onClick={scrollToTop} className="notFound__link" to={"/"}>
                    <Btn text={'На главную'} type={"button"}/>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;