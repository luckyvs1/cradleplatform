/**
 * Class: LoginPage
 * Summary:
 *  Base file for showing contents of Login Page.
 */

import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import LoginForm from "../forms/LoginForm";
import {login} from "../../actions/auth";
import TopNavigation from "../navigation/TopNavigation";

class LoginPage extends React.Component {
    submit = (data) =>
        this.props.login(data).then(() => this.props.history.push("/")
        );

    render() {
        return (
            <div>
                <TopNavigation authenticated={false}></TopNavigation>
                <LoginForm submit={this.submit}/>
            </div>
        );
    }
}


LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};

export default connect(null, {login})(LoginPage);