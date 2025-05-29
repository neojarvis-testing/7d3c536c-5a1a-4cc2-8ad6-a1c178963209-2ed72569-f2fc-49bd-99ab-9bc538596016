import React from "react";
import {Link} from 'react-router-dom';
const ClientNavbar = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/applied-plans">My Applied Plans</Link></li>
                <li><Link to="/inquiry-form">Submit Inquiry</Link></li>
                <li><Link to="/customer-post-feedback">Post Feedback</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    )
}

export default ClientNavbar;