/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Context/authContext/authContext';

const ProtectedRoute = ({ children }) => {
    const { isAuth } = useAuth();
    const location = useLocation();

    // Redirect to /login if not authenticated
    if (!isAuth) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children; // Render protected content if authenticated
};

const PublicRoute = ({ children }) => {
    const { isAuth } = useAuth();
    const location = useLocation();

    // Safely get the "from" location or default to "/"
    const from = location.state?.from?.pathname || '/';

    // Redirect authenticated users to the previous page or default route
    if (isAuth) {
        return <Navigate to={from} replace />;
    }

    return children; // Render public content if not authenticated
};

export { ProtectedRoute, PublicRoute };
