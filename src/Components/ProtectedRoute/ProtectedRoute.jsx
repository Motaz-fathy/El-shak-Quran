/* eslint-disable react/prop-types */
import { useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Context/authContext/authContext';


const ProtectedRoute = ({ children }) => {
    const { isAuth } = useAuth()
    const location = useLocation();

    const shouldRedirect = useMemo(() => !isAuth, [isAuth]);

    if (shouldRedirect) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};



const PublicRoute = ({ children }) => {
    const { isAuth } = useAuth()

    const location = useLocation();

    const from = useMemo(() => location.state?.from?.pathname || '/', [location]);

    if (isAuth) {
        return <Navigate to={from} replace />;
    }

    return children;
};


export { ProtectedRoute, PublicRoute };
