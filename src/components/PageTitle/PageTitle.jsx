import React from 'react';
import "./PageTitle.scss"
const PageTitle = ({text}) => {
    return (
        <div className="pageTitle">
            <h2 className={"pageTitle__h2"}>{text}</h2>
        </div>
    );
};

export default PageTitle;