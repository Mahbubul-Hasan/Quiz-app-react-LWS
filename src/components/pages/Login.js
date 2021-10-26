import classes from "../../asset/styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import TextInput from "../formInputs/TextInput";
import Illustration from "../Illustration";

export default function Login() {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration />
                <Form className={classes.login}>
                    <TextInput type="email" placeholder="Enter email" icon="alternate_email" />

                    <TextInput type="password" placeholder="Enter password" icon="lock" />

                    <Button>Log in</Button>

                    <div className="info">
                        Don't have an account? <a href="signup.html">Signup</a> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}
