// import React, {useState} from 'react';
import React from 'react';
import "./Contacts.scss"
import PageTitle from "../../components/PageTitle/PageTitle";
import PagePath from "../../components/PagePath/PagePath";
// import coordinates from "../../utils/coordinates";
const Contacts = () => {
    // const [data,setData] = useState(coordinates)
    return (
        <div className="contacts">
            <PageTitle text={"Контакты"}/>
            <PagePath name={"Контакты"}/>
            <div className="contacts__container container">

            </div>
        </div>
    );
};

export default Contacts;