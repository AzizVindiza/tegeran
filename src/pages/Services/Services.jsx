import React, {useEffect, useState} from 'react';
import "./Services.scss"
import PageTitle from "../../components/PageTitle/PageTitle";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import ky from "ky";
import PagePath from "../../components/PagePath/PagePath";
const Services = () => {
    const [data,setData]= useState([])
    useEffect(()=>{
        try {
           ky.get("https://mtk-smart.herokuapp.com/services/")
                .json()
                .then((res) => {
                    setData([...res])
                })

        } catch (error) {
            console.log(error.message)
        }
    },[])
    return (
        <section className="services">
            <PageTitle text={"Наши услуги"}/>
            <PagePath name={"Услуги"}/>
            <div className="container services__container">
                {data.map((el,idx)=>(
                    <ServicesCard key={el.id} el={el} idx={idx}/>
                ))}

            </div>
        </section>
    );
};

export default Services;