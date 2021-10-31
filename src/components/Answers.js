import classes from "../asset/styles/Answers.module.css";
import Checkbox from "./formInputs/Checkbox";

export default function Answers({ options = [], handleChange }) {
    return (
        <div className={classes.answers}>
            {options.map((option, index) => (
                <Checkbox
                    className={classes.answer}
                    text={option.title}
                    value={index}
                    checked={option.checked}
                    onChange={(e) => handleChange(e, index)}
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                />
            ))}
        </div>
    );
}
