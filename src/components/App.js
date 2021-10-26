import "../asset/styles/App.css";
import Layout from "./Layout";
import Login from "./pages/Login";
// import Home from "./pages/Home";
// import Signup from "./pages/Signup";

function App() {
    return (
        <div className="App">
            <Layout>
                {/* <Home /> */}
                {/* <Signup /> */}
                <Login />
            </Layout>
        </div>
    );
}

export default App;
