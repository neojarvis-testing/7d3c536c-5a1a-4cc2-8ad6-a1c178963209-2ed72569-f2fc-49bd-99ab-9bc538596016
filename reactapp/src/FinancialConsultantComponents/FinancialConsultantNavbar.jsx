import React from "react";
import {Link} from 'react-router-dom';
const FinancialConsultantNavbar = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/view-feedback">View Feedback</Link></li>
                <li><Link to="/plan-application-requested">Plan Application Requested</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    )
}

export default FinancialConsultantNavbar;