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
import ViewSavingsPlan from './FinancialConsultantComponents/ViewSavingsPlan';
import PlanApplicationApproval from './ClientComponents/PlanApplicationApproval';
import ErrorPage from './Components/ErrorPage';
import PrivateRoute from './Components/PrivateRoute';

const App = ()=>{
    return(
        <Router>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/signup' exact component={Signup}/>
                <PrivateRoute path='/applied-plans' component={AppliedSavingsPlan} />
                <PrivateRoute path='/inquiry-form' component={InquiryForm} />
                <PrivateRoute path='/view-inquiry' component={ViewInquiry} />
                <PrivateRoute path='/Rrply-form' component={ReplyForm} />
                <PrivateRoute path='/view-feedbacks' component={ViewFeedbacks} />
                <PrivateRoute path='/plan-approval' component={PlanApproval} />
                <PrivateRoute path='/plan-application-form' component={PlanApplicationForm} />
                <PrivateRoute path='/inquiry-details' component={InquiryDetails} />
                <PrivateRoute path='/customer-postfeedback' component={CustomerPostFeedback} />
                <PrivateRoute path='/view-all-savings-plan' component={ViewAllSavingsPlan} />
                <PrivateRoute path='/savings-planform' component={SavingsPlanForm} />
                <PrivateRoute path='/view-savings-plan' component={ViewSavingsPlan} />
                <PrivateRoute path='/plan-application-approval' component={PlanApplicationApproval} />
                <Route path='/error' exact component={ErrorPage}/>
                <Route component={ErrorPage}/>
            </Switch>
        </Router>
    )
}
