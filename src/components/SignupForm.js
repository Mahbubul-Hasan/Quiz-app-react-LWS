import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import classes from "../asset/styles/SignupForm.module.css";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import Checkbox from "./formInputs/Checkbox";
import TextInput from "./formInputs/TextInput";

export default function SignupForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // const [agree, setAgree] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const history = useHistory();

    const { signup } = useAuth();

    async function handleSubmit(event) {
        event.preventDefault();
        if (password !== confirmPassword) {
            return setError("Password doesn't match");
        }

        try {
            setError("");
            setLoading(true);
            await signup(email, password, username);
            history.push("/");
        } catch (exception) {
            setLoading(false);
            setError("Failed to create account");
        }
    }

    return (
        <Form className={classes.signup} onSubmit={handleSubmit}>
            <TextInput type="text" placeholder="Enter name" icon="person" value={username} onChange={(e) => setUsername(e.target.value)} required />

            <TextInput type="email" placeholder="Enter email" icon="alternate_email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <TextInput type="password" placeholder="Enter password" icon="lock" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <TextInput type="password" placeholder="Confirm password" icon="lock_clock" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

            <Checkbox text="I agree to the Terms &amp; Conditions" value={username} onChange={(e) => setUsername(e.target.value)} required />

            <Button type="submit" disabled={loading}>
                Submit now
            </Button>

            {error && <p className="error">{error}</p>}

            <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
            </div>
        </Form>
    );
}
