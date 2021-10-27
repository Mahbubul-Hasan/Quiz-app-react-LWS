import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import classes from "../asset/styles/LoginForm.module.css";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./formInputs/TextInput";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const history = useHistory();

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            setLoading(true);
            setError("");
            await login(email, password);
            history.push("/");
        } catch (error) {
            setLoading(false);
            setError("Failed to login!");
        }
    }

    return (
        <Form className={classes.login} onSubmit={handleSubmit}>
            <TextInput type="email" placeholder="Enter email" icon="alternate_email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <TextInput type="password" placeholder="Enter password" icon="lock" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <Button type="submit" disabled={loading}>
                Log in
            </Button>

            {error && <p className="error">{error}</p>}

            <div className="info">
                Don't have an account? <Link to="/signup">Signup</Link> instead.
            </div>
        </Form>
    );
}
