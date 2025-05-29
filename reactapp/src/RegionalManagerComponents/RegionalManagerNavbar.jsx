import React from "react";
import {Link} from 'react-router-dom';
const RegionalManagerNavbar = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/view-feedback">View Feedback</Link></li>
                <li><Link to="/plan-approval">Plan Approval</Link></li>
                <li><Link to="/plan-application-approval">Plan Application Approval</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    )
}

export default RegionalManagerNavbar;