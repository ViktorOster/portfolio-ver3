import React, { Component } from 'react';
import './navbar.css';
import logo from "../../assets/svg/logo personal.svg";
import iconMenu from "../../assets/svg/icons8-menu.svg";
import iconClose from "../../assets/svg/icons8-delete.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            isMenuMobileShowing: false
        }
        this.handleOpenMobileMenu = this.handleOpenMobileMenu.bind(this);
    }
    handleOpenMobileMenu() {
        this.state.isMenuMobileShowing === true ? this.setState({ "isMenuMobileShowing": false })
            : this.setState({ "isMenuMobileShowing": true });

    }

    render() {
        let showingClass = this.state.isMenuMobileShowing === true ? " is-showing"
            : "";
        let menuMobileIcon = this.state.isMenuMobileShowing === true ? iconClose
            : iconMenu;

        return (

            <header className="header">
                <nav className="navbar container">
                    <img className="navbar__logo" src={logo} alt="" />
                    <ul>
                        <li className="navbar__link"><AnchorLink href='#about'>About</AnchorLink></li>
                        <li className="navbar__link"><AnchorLink href='#projects'>Projects</AnchorLink></li>
                        <li className="navbar__link"><AnchorLink href='#education'>Education</AnchorLink></li>
                        <li className="navbar__link"><AnchorLink href='#contact'>Contact</AnchorLink></li>
                    </ul>
                    <button className="navbar__hamburger" onClick={this.handleOpenMobileMenu}><img src={menuMobileIcon} alt="" /></button>
                </nav>
                <div className={"navbar__menu-mobile" + showingClass}>
                    <ul className="container">
                        <li className="navbar__link"><AnchorLink href='#about'>About</AnchorLink></li>
                        <li className="navbar__link"><AnchorLink href='#projects'>Projects</AnchorLink></li>
                        <li className="navbar__link"><AnchorLink href='#education'>Education</AnchorLink></li>
                        <li className="navbar__link"><AnchorLink href='#contact'>Contact</AnchorLink></li>
                    </ul>
                </div>

            </header>
        );
    }

}

export default Navbar;


