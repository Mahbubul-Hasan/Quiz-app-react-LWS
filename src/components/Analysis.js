import classes from "../asset/styles/Analysis.module.css";
import Question from "./Question";

// eslint-disable-next-line no-unused-vars
export default function Analysis({ answers }) {
    return (
        <div className={classes.analysis}>
            <h1>Question Analysis</h1>
            <Question answers={answers} />
        </div>
    );
}
