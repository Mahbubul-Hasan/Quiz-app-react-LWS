import classes from "../asset/styles/Button.module.css";

export default function Button({ className, children }) {
    return <div className={`${classes.button} ${classes.className}`}>{children}</div>;
}
