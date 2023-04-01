import React from 'react';
import "./HamburgerToggle.scss"

const HamburgerToggle = ({setActivHamburger,isActivHamburger}) => {

    const toggleClass = () => {
        setActivHamburger(!isActivHamburger);
    };
    return (
            <div className={`hamburger  ${isActivHamburger ? "hamburger_active" : null}`} onClick={toggleClass}>
                <div className="hamburger__stripe"></div>
                <div className="hamburger__stripe hamburger__stripe_short"></div>
                <div className="hamburger__stripe"></div>
            </div>
    );
};

export default HamburgerToggle;