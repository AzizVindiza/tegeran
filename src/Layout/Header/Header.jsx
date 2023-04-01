import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import logo from './logo.png'
import "./Header.scss"

import HamburgerToggle from "./HamburgerToggle/HamburgerToggle";
import NavBar from "./NavBar/NavBar";
import {animateScroll} from "react-scroll";

const Header = () => {
    const [isActiveHamburger, setActiveHamburger] = useState(false);
    const [isActiveHamburgerMenu, setActiveHamburgerMenu] = useState(false);

    const toggleClass = () => {
        setActiveHamburger(!isActiveHamburger);
        setActiveHamburgerMenu(!isActiveHamburgerMenu);
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };
    const closeHamburgerToTop = ()=>{
        setActiveHamburger(false);
        setActiveHamburgerMenu(false);
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    }

    // const [small, setSmall] = useState(false);
    //
    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         window.addEventListener("scroll", () =>
    //             setSmall(window.pageYOffset > 200)
    //         );
    //     }
    // }, []);
    return (

        // <header className={`header ${
        //     small ? "scrolled" : ""
        // }`}>
        <header className="header">
            <div className="header__container container ">
                <NavLink className="header__logo" to='/' onClick={closeHamburgerToTop}>
                    <img src={logo} alt="Smart International Trading Company"/>
                </NavLink>
                <HamburgerToggle setActiveHamburger={setActiveHamburger} isActiveHamburger={isActiveHamburger}/>
                <nav className={`header__menu ${isActiveHamburger ? "header__menu_active" : null}`}>
                    <NavBar setActiveHamburger={setActiveHamburger} isActiveHamburger={isActiveHamburger} toggleClass={closeHamburgerToTop}/>
                </nav>
            </div>
        </header>

    )
        ;
};

export default Header;