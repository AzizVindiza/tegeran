import React from 'react';
import "./PagePath.scss"
import {Link} from "react-router-dom";

const PagePath = ({name , subname}) => {
    return (
        <div className="pagePath ">
            <div className="pagePath__container container">
                <Link className="pagePath__link" to={"/"}>Главная</Link>
                /
                <Link className="pagePath__link" to={`/services`}>{name}</Link>
                {subname ? <>  / <Link className="pagePath__link" to={`/services`}>{subname}</Link> </> : ""}

            </div>
           </div>
    );
};

export default PagePath;