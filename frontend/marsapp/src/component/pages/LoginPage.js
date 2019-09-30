/**
 * Class: LoginPage
 * Summary:
 *  Base file for showing contents of Login Page.
 */

import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import LoginForm from "../forms/LoginForm";
import {login} from "../../actions/auth";
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
    List,
    Image,
    Grid,
} from 'semantic-ui-react'

class LoginPage extends React.Component {
    submit = (data) =>
        this.props.login(data).then(() => this.props.history.push("/")
        );

    render() {
        return (
            <div className="ui-toolbar ">
                <div className={"login"}>
                    <h1 class="ui header">Login page</h1>


                    <LoginForm submit={this.submit}/>



                </div>
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