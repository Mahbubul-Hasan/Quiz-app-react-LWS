import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../asset/styles/App.css";
import { AuthProvider } from "../contexts/AuthContext";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function App() {
    return (
        <Router>
            <AuthProvider>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />

                        <PrivateRoute path="/quiz/:videoID" component={Quiz} />
                        <PrivateRoute path="/result/:videoID" component={Result} />

                        <PublicRoute path="/signup" component={Signup} />
                        <PublicRoute path="/login" component={Login} />
                    </Switch>
                </Layout>
            </AuthProvider>
        </Router>
    );
}

export default App;
