import React, {useEffect, useState} from 'react';
import "./ServicesSection.scss"
import ServicesCard from "../../../components/ServicesCard/ServicesCard";
import ky from "ky";
import Btn from "../../../components/Btn/Btn";
import {Link} from "react-router-dom";
import {animateScroll} from "react-scroll";

const ServicesSection = () => {

    const [data,setData]= useState([])
   useEffect(()=>{
       try {ky.get("https://mtk-smart.herokuapp.com/services/")
               .json()
               .then((res) => setData([...res]))

       } catch (error) {
           console.log(error.message)
       }
   },[])
    const scrollToTop = ()=>{
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    }

    return (
        <section className="servicesSection">
            <h2 className="servicesSection__title">
                Наши услуги
            </h2>
            <div className="services__container container">
                {data.filter((item,idx) => idx < 5).map((el,idx)=>(
                    <ServicesCard key={el.id} el={el} idx={idx}/>
                    ))}

            </div>
            <Link onClick={scrollToTop} className="servicesSection__link" to={`services`}>
                <Btn text={'Все услуги'} type={"button"}/>
            </Link>
        </section>
    );
};

export default ServicesSection;