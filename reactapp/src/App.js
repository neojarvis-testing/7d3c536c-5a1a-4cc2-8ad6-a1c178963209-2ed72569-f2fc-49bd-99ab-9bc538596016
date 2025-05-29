import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ErrorPage from './Components/ErrorPage';
import PrivateRoute from './Components/PrivateRoute';

import AppliedSavingsPlan from './ClientComponents/AppliedSavingsPlan';
import InquiryForm from './ClientComponents/InquiryForm';
import ViewInquiry from './FinancialConsultantComponents/ViewInquiry';
import ReplyForm from './FinancialConsultantComponents/ReplyForm';
import ViewFeedbacks from './RegionalManagerComponents/ViewFeedbacks';
import PlanApproval from './RegionalManagerComponents/PlanApproval';
import PlanApplicationForm from './ClientComponents/PlanApplicationForm';
import InquiryDetails from './ClientComponents/InquiryDetails';
import CustomerPostFeedback from './ClientComponents/CustomerPostFeedback';
import ViewAllSavingsPlan from './ClientComponents/ViewAllSavingsPlan';
import SavingsPlanForm from './FinancialConsultantComponents/ViewSavingsPlan';
