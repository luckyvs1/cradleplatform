/**
 * Summary:
 *  Handles the routing for all the pages
 */

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import HomePage from "./component/pages/HomePage";
import LoginPage from "./component/pages/LoginPage";
import DashboardPage from "./component/pages/DashboardPage";
import SignupPage from "./component/pages/SignupPage";
import ConfirmationPage from "./component/pages/ConfirmationPage";
import ForgotPasswordPage from "./component/pages/ForgotPasswordPage";
import ResetPasswordPage from "./component/pages/ResetPasswordPage";
import UserRoute from "./component/routes/UserRoute";
import GuestRoute from "./component/routes/GuestRoute";
import TopNavigation from "./component/navigation/TopNavigation";
import PatientDetail from "./component/pages/patients/PatientDetail";
import './App.css';
import Help from "./component/pages/help/Help";
import ListPatient from "./component/pages/patients/ListPatient";
import Referral from "./component/pages/Referral/Referral";
import ReferralDetail from "./component/pages/Referral/ReferralDetail";
import CreateReferral from "./component/pages/Referral/CreateReferral";
import Readings from "./component/pages/readings/Readings";
import AddReadingDetail from "./component/pages/readings/AddReadingDetail";
import AddPatient from "./component/pages/patients/AddPatient";
import Account from "./component/pages/users/Account";
import AllFollowUp from "./component/pages/followUp/AllFollowUp";
import FollowUpDetail from "./component/pages/followUp/FollowUpDetail";
import ListUser from "./component/pages/users/ListUser"

const App = ({ location, isAuthenticated }) => (

    <div className="ui-toolbar">
        {isAuthenticated && <TopNavigation />}
        <Route location={location} path="/" exact component={LoginPage} />
        <Route
            location={location}
            path="/confirmation/:token"
            exact
            component={ConfirmationPage}
        />
        <GuestRoute location={location} path="/homePage" exact component={HomePage} />
        <GuestRoute
            location={location}
            path="/signup"
            exact
            component={SignupPage}
        />
        <GuestRoute
            location={location}
            path="/addReadingDetail"
            exact
            component={AddReadingDetail}
        />
        <GuestRoute
            location={location}
            path="/readings"
            exact
            component={Readings}
        />
        <GuestRoute
            location={location}
            path="/listPatient"
            exact
            component={ListPatient}
        />
        <GuestRoute
            location={location}
            path="/help"
            exact
            component={Help}
        />
        <GuestRoute
            location={location}
            path="/referral"
            exact
            component={Referral}
        />
        <GuestRoute
            location={location}
            path="/referralDetail"
            exact
            component={ReferralDetail}
        />
        <GuestRoute
            location={location}
            path="/createReferral"
            exact
            component={CreateReferral}
        />
        <GuestRoute
            location={location}
            path="/patientDetail"
            exact
            component={PatientDetail}
        />
        <GuestRoute
            location={location}
            path="/allFollowUp"
            exact
            component={AllFollowUp}
        />
            <GuestRoute
                location={location}
                path="/followUpDetail"
                exact
                component={FollowUpDetail}
            />
        <GuestRoute
            location={location}
            path="/account"
            exact
            component={Account}
        />
        <GuestRoute
            location={location}
            path="/addPatient"
            exact
            component={AddPatient}
        />
        <GuestRoute
            location={location}
            path="/forgot_password"
            exact
            component={ForgotPasswordPage}
        />
        <GuestRoute
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
        <GuestRoute
            location={location}
            path="/listUser"
            exact
            component={ListUser}
        />
    </div>
);

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.email
    };
}

export default connect(mapStateToProps)(App);