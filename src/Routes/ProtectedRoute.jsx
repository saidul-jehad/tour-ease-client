import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { PropTypes } from 'prop-types';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        // console.log(loading);
        return <div className="w-full flex justify-center">
            <span className="loading loading-infinity w-24"></span>
        </div>

    }
    if (user) {
        return children
    }
    else {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
};

ProtectedRoute.propTypes = {
    children: PropTypes.node
}

export default ProtectedRoute;