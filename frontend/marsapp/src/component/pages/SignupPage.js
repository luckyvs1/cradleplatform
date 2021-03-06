/**
 * Class: SignupPage
 * Summary:
 *  Base file for showing contents of Sign up page.
 * Note: May remove this as we will want only admins to create users
 */

import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import SignupForm from "../forms/SignupForm";
import {signup} from "../../actions/users";

class SignupPage extends React.Component {
    submit = data => console.log("sign up page has been called");

    // this.props.signup(data).then(() =>
    //     console.log("update information")

    // this.props.history.push("/dashboard")
// );

    render() {
        return (

            <div className="ui-toolbar">
                <div className={"login"}>

                    <SignupForm submit={this.submit}/>
                </div>
            </div>
        );
    }
}

SignupPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
};

export default connect(null, {signup})(SignupPage);