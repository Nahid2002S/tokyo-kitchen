import React, { useContext } from 'react';
import { AuthContext } from '../authprovider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(user){
        return children;
    }
    if(loading){
        <progress className="progress-primary w-56"></progress>
    }
    return (<Navigate state={{from : location}} to="/login" replace></Navigate>)
};

export default PrivateRoute;