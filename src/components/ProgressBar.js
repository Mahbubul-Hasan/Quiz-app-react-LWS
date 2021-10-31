import React from "react";
import classes from "../asset/styles/ProgressBar.module.css";
import Button from "./Button";

export default function ProgressBar({ next, prev, submit, percentage }) {
    return (
        <div className={classes.progressBar}>
            <div className={classes.backButton} onClick={prev}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className={classes.rangeArea}>
                <div className={classes.tooltip}>{percentage}% Complete!</div>
                <div className={classes.rangeBody}>
                    <div className={classes.progress} style={{ width: `${percentage}%` }} />
                </div>
            </div>
            {/* <Link to="/result"> */}
            <Button className={classes.next} onClick={percentage === 100 ? submit : next}>
                {percentage === 100 ? <span>Submit</span> : <span>Next Question</span>}
                <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
            {/* </Link> */}
        </div>
    );
}
