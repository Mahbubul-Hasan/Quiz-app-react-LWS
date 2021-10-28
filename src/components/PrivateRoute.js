import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute() {
    const { currentUser } = useAuth();

    return <div></div>;
}
