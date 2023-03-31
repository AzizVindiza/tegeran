import React, {useEffect, useState} from 'react';
import "./OneServices.scss"
import PageTitle from "../../components/PageTitle/PageTitle";
import PagePath from "../../components/PagePath/PagePath";
import ky from "ky";
import {useLocation} from "react-router-dom";
const OneServices = () => {
    const [data,setData]= useState({})
    const {pathname} = useLocation()

    useEffect(()=>{
        try {
            ky.get(`https://mtk-smart.herokuapp.com${pathname}`)
                .json()
                .then((res) => {
                    setData(res)

                })
            console.log(data)
        } catch (error) {
            console.log(error.message)
        }
    },[pathname,data])
    return (
        <section className="oneServices">
            <PageTitle text={"Наши услуги"}/>
            <PagePath name={"Услуги"} subname={data.title_one}/>
            <div className="container">
                <h2 className="oneServices__title">{data.title_one}</h2>
                <p className="oneServices__p">
                    {data.description_one}
                </p>
                <h2 className="oneServices__title-two">{data.title_two}</h2>
                <p className="oneServices__p">
                    {data.description_two}
                </p>
            </div>
        </section>
    );
};

export default OneServices;