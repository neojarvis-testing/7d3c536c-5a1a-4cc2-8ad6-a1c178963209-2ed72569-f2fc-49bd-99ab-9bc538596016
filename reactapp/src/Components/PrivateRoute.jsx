import React from "react";
import {Route, Redirect} from 'react-router-dom';
import {useSelector } from 'react-redux';
const PrivateRoute = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    return(
        <Route
        
        />
    )
}

export default PrivateRoute;