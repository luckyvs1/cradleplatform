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
import HCW from "../../actions/authHCW"
import VHT from "../../actions/authVHT"

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

                    console.log(res)
                    this.processRole(res.data.id);
                }
            }).catch(error => {
            switch (error.response.status) {
                case 401:
                    this.onShowAlert("Username or password is incorrect. Please try again.");
                    break
            }
        })
    };

    processRole(id){
        api.userInfo.getUserInfoById(id).then(res=>{
            console.log(res.data.role)
            console.log("VHT" , VHT.isAuthenticated())
            console.log("Admin" , auth.isAuthenticated())
            console.log("Healthworker" , HCW.isAuthenticated())



            switch (res.data.role) {
                case "Healthworker":
                    HCW.login(() => {
                        localStorage.setItem('loginToken', res.data.access_token);
                        localStorage.setItem('loginUserId', res.data.id);
                        this.props.history.push("/homePage");
                    })
                    break;
                case "Admin":
                    auth.login(() => {
                        localStorage.setItem('loginToken', res.data.access_token);
                        localStorage.setItem('loginUserId', res.data.id);
                        this.props.history.push("/homePage");
                    })
                    break;
                case "VHT":
                    VHT.login(() => {
                        localStorage.setItem('loginToken', res.data.access_token);
                        localStorage.setItem('loginUserId', res.data.id);
                        this.props.history.push("/homePage");
                    })
                    break;
            }
        })
    }

    componentDidMount() {
        // if (localStorage.getItem('loginToken') && localStorage.getItem('loginUserId')) {
        //     this.processRole(localStorage.getItem('loginUserId'))
        // }
    }


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
    return {}
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