import classes from "../asset/styles/Button.module.css";

export default function Button({ className, children, ...rest }) {
    return (
        <button className={`${classes.button} ${classes.className}`} {...rest}>
            {children}
        </button>
    );
}
