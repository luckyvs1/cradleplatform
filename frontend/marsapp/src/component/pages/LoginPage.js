/**
 * Class: LoginPage
 * Summary:
 *  Base file for showing contents of Login Page.
 */

import React from "react";
import LoginForm from "../forms/LoginForm";
import TopNavigation from "../navigation/TopNavigation";
import styled from 'styled-components';
import auth from "../../actions/auth"
import {connect} from "react-redux";
import api from "../../api"
import ErrorAlert from "../utils/ErrorAlert";

const TopMarginStyle = styled.div`
  margin-top: 40px;
`;

class LoginPage extends React.Component {

    state = {
        isShow: false,
        message: ""
    }

    submit = data => {
        api.user.login(data)
            .then(res => {
                if (res) {
                    let accessToken = res.data.access_token;
                    this.props.updateLogIn(accessToken);
                    auth.login(() => {
                        localStorage.loginToken = res.data.authenticated;
                        localStorage.loginUserId = res.data.id; // should be the id of the logged in user
                        this.props.history.push("/homePage");
                    })
                }
            }).catch(error => {
            switch (error.response.status) {
                    case 401:
                        this.onShowAlert("Username or Password is incorrect...Please try again");
                        break
                }
        })


    };
    onShowAlert = (message) => {
        this.setState({
                isShow: true,
                message: message
            },
            () => {
                window.setTimeout(() => {
                    this.setState({
                        isShow: false,
                        message: message
                    })
                }, 2000)
            });
    }


    render() {
        return (
            <div>
                <TopNavigation authenticated={false}></TopNavigation>
                <TopMarginStyle>
                    <LoginForm submit={this.submit}/>
                    <ErrorAlert message={this.state.message} show={this.state.isShow}></ErrorAlert>
                </TopMarginStyle>
            </div>
        );
    }
}

// needed incase of redux use
const mapStateToProps = (state, ownProps) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // function name
        updateLogIn: (id) => {
            dispatch({type: "USER_LOOGED_IN", id: id})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);