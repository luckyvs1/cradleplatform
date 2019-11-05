/**
 * Summary:
 *  Handles the routing for all the pages
 */

import React from "react";
import PropTypes from "prop-types";
import {Route} from "react-router-dom";
import HomePage from "./component/pages/HomePage";
import LoginPage from "./component/pages/LoginPage";
import DashboardPage from "./component/pages/DashboardPage";
import SignupPage from "./component/pages/SignupPage";
import ForgotPasswordPage from "./component/pages/ForgotPasswordPage";
import ResetPasswordPage from "./component/pages/ResetPasswordPage";
import {UserRoute} from "./component/routes/UserRoute";
import {AdminRoute} from "./component/routes/AdminRoute";
import TopNavigation from "./component/navigation/TopNavigation";
import PatientDetail from "./component/pages/patients/PatientDetail";
import './App.css';
import Help from "./component/pages/help/Help";
import ListPatient from "./component/pages/patients/ListPatient";
import AddMedicationDetail from "./component/pages/patients/AddMedicationDetail";
import Referral from "./component/pages/Referral/Referral";
import ReferralDetail from "./component/pages/Referral/ReferralDetail";
import CreateReferral from "./component/pages/Referral/CreateReferral";
import AddReadingDetail from "./component/pages/readings/AddReadingDetail";
import AddPatient from "./component/pages/patients/AddPatient";
import Account from "./component/pages/users/Account";
import AllFollowUp from "./component/pages/followUp/AllFollowUp";
import FollowUpDetail from "./component/pages/followUp/FollowUpDetail";
import ListUser from "./component/pages/users/ListUser"
import AddUsers from "./component/pages/users/AddUsers"
const App = ({location, isAuthenticated}) => (

    <div className="ui-toolbar">
        {isAuthenticated && <TopNavigation/>}
        <Route location={location} path="/" exact component={LoginPage}/>
        <UserRoute
            location={location} path="/homePage" exact component={HomePage}/>
        <UserRoute
            location={location}
            path="/signup"
            exact
            component={SignupPage}
        />
        <UserRoute
            location={location}
            path="/addReadingDetail"
            exact
            component={AddReadingDetail}
        />
        <UserRoute
            location={location}
            path="/listPatient"
            exact
            component={ListPatient}
        />
        <UserRoute
            location={location}
            path="/help"
            exact
            component={Help}
        />
        <UserRoute
            location={location}
            path="/referral"
            exact
            component={Referral}
        />
        <UserRoute
            location={location}
            path="/referralDetail"
            exact
            component={ReferralDetail}
        />
        <UserRoute
            location={location}
            path="/createReferral"
            exact
            component={CreateReferral}
        />
        <UserRoute
            location={location}
            path="/patientDetail"
            exact
            component={PatientDetail}
        />
        <UserRoute
            location={location}
            path="/allFollowUp"
            exact
            component={AllFollowUp}
        />
        <UserRoute
            location={location}
            path="/followUpDetail"
            exact
            component={FollowUpDetail}
        />
        <UserRoute
            location={location}
            path="/account"
            exact
            component={Account}
        />
        <UserRoute
            location={location}
            path="/addPatient"
            exact
            component={AddPatient}
        />
        <UserRoute
            location={location}
            path="/forgot_password"
            exact
            component={ForgotPasswordPage}
        />
        <UserRoute
            location={location}
            path="/reset_password/:token"
            exact
            component={ResetPasswordPage}
        />
        <UserRoute
            location={location}
            path="/dashboard"
            exact
            component={DashboardPage}
        />
        <UserRoute
            location={location}
            path="/listUser"
            exact
            component={ListUser}
        />
        <UserRoute
            location={location}
            path="/addUser"
            exact
            component={AddUsers}
        />
        <UserRoute
            location={location}
            path="/addMedication"
            exact
            component={AddMedicationDetail}
        />
    </div>
);

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};


export default (App);