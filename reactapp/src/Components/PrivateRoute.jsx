import React, { Component } from "react";
import {Route, Navigate} from 'react-router-dom';
import {useSelector } from 'react-redux';
const PrivateRoute = ({component: component, ...rest}) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    //const  isAuthenticated = !!
    return(
        <Route
        {...rest}
        render = {props =>
            isAuthenticated ? (
                <Component {...props}/>
            ):(
                <Navigate to="/login" />
            )
        }
        
        />
    )
}

export default PrivateRoute;