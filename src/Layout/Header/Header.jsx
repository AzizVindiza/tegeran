import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import logo from './logo.png'
import "./Header.scss"

import HamburgerToggle from "./HamburgerToggle/HamburgerToggle";
import NavBar from "./NavBar/NavBar";
import {animateScroll} from "react-scroll";

const Header = () => {
    const [isActivHamburger, setActivHamburger] = useState(false);
    const [isActivHamburgerMenu, setActivHamburgerMenu] = useState(false);

    const toggleClass = () => {
        setActivHamburger(!isActivHamburger);
        setActivHamburgerMenu(!isActivHamburgerMenu);
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };
    const closeHamburgerToTop = ()=>{
        setActivHamburger(false);
        setActivHamburgerMenu(false);
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
                <HamburgerToggle setActivHamburger={setActivHamburger} isActivHamburger={isActivHamburger}/>
                <nav className={`header__menu ${isActivHamburger ? "header__menu_active" : null}`}>
                    <NavBar setActiveHamburger={setActivHamburger} isActivHamburger={isActivHamburger} toggleClass={closeHamburgerToTop}/>
                </nav>
            </div>
        </header>

    )
        ;
};

export default Header;