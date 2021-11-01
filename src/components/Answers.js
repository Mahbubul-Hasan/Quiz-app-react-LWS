import { Fragment } from "react";
import classes from "../asset/styles/Answers.module.css";
import Checkbox from "./formInputs/Checkbox";

export default function Answers({ input, options = [], handleChange }) {
    return (
        <div className={classes.answers}>
            {options.map((option, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Fragment key={index}>
                    {input ? (
                        <Checkbox
                            className={classes.answer}
                            text={option.title}
                            value={index}
                            checked={option.checked}
                            onChange={(e) => handleChange(e, index)}
                        />
                    ) : (
                        <Checkbox
                            className={`${classes.answer} ${
                                option.correct
                                    ? classes.correct
                                    : option.checked
                                    ? classes.wrong
                                    : null
                            }`}
                            text={option.title}
                            defaultChecked={option.checked}
                            disabled
                        />
                    )}
                </Fragment>
            ))}
        </div>
    );
}
