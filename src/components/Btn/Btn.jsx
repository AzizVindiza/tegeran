import React from 'react';
import "./Btn.scss"
const Btn = ({text,type}) => {
    return (
        <button className="btn" type={type}>
            {text}
        </button>
    );
};

export default Btn;