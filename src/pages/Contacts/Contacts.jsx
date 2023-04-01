
import React from 'react';
import "./Contacts.scss"
import PageTitle from "../../components/PageTitle/PageTitle";
import PagePath from "../../components/PagePath/PagePath";
import coordinates from "../../utils/coordinates";

const Contacts = () => {

    return (
        <div className="contacts">
            <PageTitle text={"Контакты"}/>
            <PagePath name={"Контакты"}/>
            <div className="contacts__container container">
                <div className="contacts__tabs">
                    {coordinates.map((el) => {
                        return <div className="contacts__tab">

                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Contacts;