import React from "react";
import image from "../asset/images/signup.svg";
import classes from "../asset/styles/Illustration.module.css";

export default function Illustration() {
    return (
        <div className={classes.illustration}>
            <img src={image} alt="Signup" />
        </div>
    );
}
