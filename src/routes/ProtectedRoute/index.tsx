import { Navigate, Outlet } from "react-router-dom";

interface Props {
    isAuth: boolean;
}

const ProtectedRoute: React.FC<Props> = ({ isAuth }) => {
    if (isAuth) {
        return <Outlet />;
    }
    return <Navigate to="/login" />;
};

export default ProtectedRoute;