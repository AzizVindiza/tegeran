import React from 'react';
import "./PagePath.scss"
import {Link} from "react-router-dom";

const PagePath = () => {
    return (
        <div className="pagePath ">
            <div className="pagePath__container container">
                <Link className="pagePath__link" to={"/"}>Главная</Link>
                /
                <Link className="pagePath__link" to={"/services"}>Услуги</Link>

            </div>
           </div>
    );
};

export default PagePath;