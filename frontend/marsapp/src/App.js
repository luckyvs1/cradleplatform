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
import TransferVHT from "./component/pages/TransferVHT";
import AddMedicationDetail from "./component/pages/patients/AddMedicationDetail";
import {HCWRoute} from "./component/routes/HCWRoute";

const App = ({location, isAuthenticated}) => (

    <div className="ui-toolbar">
        {isAuthenticated && <TopNavigation/>}
        <Route location={location} path="/" exact component={LoginPage}/>
        <HCWRoute
            location={location} path="/homePage" exact component={HomePage}/>
        <HCWRoute
            location={location}
            path="/signup"
            exact
            component={SignupPage}
        />
        <HCWRoute
            location={location}
            path="/addReadingDetail"
            exact
            component={AddReadingDetail}
        />
        <HCWRoute
            location={location}
            path="/listPatient"
            exact
            component={ListPatient}
        />
        <HCWRoute
            location={location}
            path="/help"
            exact
            component={Help}
        />
        <HCWRoute
            location={location}
            path="/referral"
            exact
            component={Referral}
        />
        <HCWRoute
            location={location}
            path="/referralDetail"
            exact
            component={ReferralDetail}
        />
        <HCWRoute
            location={location}
            path="/createReferral"
            exact
            component={CreateReferral}
        />
        <HCWRoute
            location={location}
            path="/patientDetail"
            exact
            component={PatientDetail}
        />
        <HCWRoute
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
        <HCWRoute
            location={location}
            path="/transferVHT"
            exact
            component={TransferVHT}
        ></HCWRoute>
        <HCWRoute
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