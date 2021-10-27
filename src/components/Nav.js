import React from "react";
import { Link } from "react-router-dom";
import logo from "../asset/images/logo-bg.png";
import classes from "../asset/styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link to="/" className={classes.brand}>
                        <img src={logo} alt="Learn with Sumit Logo" />
                        <h3>Learn with Sumit</h3>
                    </Link>
                </li>
            </ul>
            <Account />
        </nav>
    );
}
