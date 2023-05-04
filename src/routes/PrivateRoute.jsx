import React, { useContext } from 'react';
import { AuthContext } from '../authprovider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div>
            <progress className="progress w-56"></progress>
        </div>
    }
    if(user){
        return children;
    }
    return (<Navigate state={{from : location}} to="/login" replace></Navigate>)
};

export default PrivateRoute;