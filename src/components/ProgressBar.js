import React, { useRef, useState } from "react";
import classes from "../asset/styles/ProgressBar.module.css";
import Button from "./Button";

export default function ProgressBar({ next, prev, submit, percentage }) {
    const [tooltip, setTooltip] = useState(false);
    const tooltipRef = useRef();

    function toggleTooltip() {
        if (tooltip) {
            setTooltip(false);
            tooltipRef.current.style.display = "none";
        } else {
            setTooltip(true);
            tooltipRef.current.style.display = "block";
            tooltipRef.current.style.left = `calc(${percentage}% - 65px)`;
        }
    }

    return (
        <div className={classes.progressBar}>
            <div className={classes.backButton} onClick={prev}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className={classes.rangeArea}>
                <div className={classes.tooltip} ref={tooltipRef}>
                    {percentage}% Complete!
                </div>
                <div className={classes.rangeBody}>
                    <div
                        onMouseOver={toggleTooltip}
                        onMouseOut={toggleTooltip}
                        className={classes.progress}
                        style={{ width: `${percentage}%` }}
                    />
                </div>
            </div>

            <Button className={classes.next} onClick={percentage === 100 ? submit : next}>
                <span>{percentage === 100 ? "Submit Quiz" : "Next Question"}</span>
                <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
        </div>
    );
}
