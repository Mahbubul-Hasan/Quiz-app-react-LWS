import React from "react";
import logo from "../asset/images/logo-bg.png";
import classes from "../asset/styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <a href="index.html" className={classes.brand}>
                        <img src={logo} alt="Learn with Sumit Logo" />
                        <h3>Learn with Sumit</h3>
                    </a>
                </li>
            </ul>
            <Account />
        </nav>
    );
}
