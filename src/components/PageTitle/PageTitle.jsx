import React from 'react';
import "./PageTitle.scss"
const PageTitle = ({text}) => {
    return (
        <div className="pageTitle">
            <div className="container">
                <h2 className={"pageTitle__h2"}>{text}</h2>
            </div>

        </div>
    );
};

export default PageTitle;