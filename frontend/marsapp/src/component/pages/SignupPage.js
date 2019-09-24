import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SignupForm from "../forms/SignupForm";
import { signup } from "../../actions/users";

class SignupPage extends React.Component {
    submit = data =>   console.log("sign up page has been called");

    // this.props.signup(data).then(() =>
        //     console.log("update information")

    // this.props.history.push("/dashboard")
// );

    render() {
        return (
            <div>
                <SignupForm submit={this.submit} />
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

export default connect(null, { signup })(SignupPage);