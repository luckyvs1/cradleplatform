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
// import NewBookPage from "./component/pages/NewBookPage";
import UserRoute from "./component/routes/UserRoute";
import GuestRoute from "./component/routes/GuestRoute";
import TopNavigation from "./component/navigation/TopNavigation";
import Upload from "./component/pages/upload/Upload";
import './App.css';
import Help from "./component/pages/help/Help";
import ListPatient from "./component/pages/patients/ListPatient";
import Readings from "./component/pages/readings/Readings";
import AddReadingDetail from "./component/pages/readings/addReadings/AddReadingDetail";


const App = ({ location, isAuthenticated }) => (
    <div className="ui container">
        {isAuthenticated && <TopNavigation />}
        <Route location={location} path="/" exact component={HomePage} />
        <Route
            location={location}
            path="/confirmation/:token"
            exact
            component={ConfirmationPage}
        />
        <GuestRoute location={location} path="/login" exact component={LoginPage} />
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
            path="/upload"
            exact
            component={Upload}
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
        {/*<UserRoute*/}
        {/*    location={location}*/}
        {/*    path="/books/new"*/}
        {/*    exact*/}
        {/*    component={NewBookPage}*/}
        {/*/>*/}
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