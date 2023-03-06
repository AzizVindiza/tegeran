import React from 'react';
import "./Btn.scss"
const Btn = ({text}) => {
    return (
        <button className="btn" type="button">
            {text}
        </button>
    );
};

export default Btn;