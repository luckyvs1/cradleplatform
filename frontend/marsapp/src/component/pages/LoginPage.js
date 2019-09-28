import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import LoginForm from "../forms/LoginForm";
import {login} from "../../actions/auth";

class LoginPage extends React.Component {
    submit = (data) => console.log("update information")

    // this.props.login(data).then(() =>
    //         this.props.history.push("/dashboard")
    //     );

    render() {
        return (
            <div className="ui-toolbar">

                <h1 class="ui header">Login page</h1>

                <LoginForm submit={this.submit}/>

                <Link to="/forgot_password">Forgot Password?</Link>
                <Link to="/signup">Sign Up?</Link>
                <Link className="ui-topsites" to="/homePage">GO TO HOME</Link>
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