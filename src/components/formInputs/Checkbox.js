export default function Checkbox({ className, id, text, ...rest }) {
    return (
        <label className={className} htmlFor={id}>
            <input type="checkbox" id={id} {...rest} /> <span>{text}</span>
        </label>
    );
}
