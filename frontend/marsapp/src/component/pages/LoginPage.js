/**
 * Class: LoginPage
 * Summary:
 *  Base file for showing contents of Login Page.
 */

import React from "react";
import PropTypes from "prop-types";
import LoginForm from "../forms/LoginForm";
import TopNavigation from "../navigation/TopNavigation";
import styled from 'styled-components';
import api from "../../api";
import auth from "../../actions/auth"
import {connect} from "react-redux";
import {USER_LOGGED_IN} from "../../types";

const TopMarginStyle = styled.div`
  margin-top: 40px;
`;

class LoginPage extends React.Component {

      submit = data => {
        api.user.login(data)
            .then(res => {
                if(res.data.id == "22"){
                    this.props.updateLogIn(res.data.id );

                    auth.login(()=>{
                        localStorage.loginToken = auth.authenticated;
                        this.props.history.push("/homePage");
                    });
                    console.log(res.data)
                }else{
                    // pop up cannot log in

                }
            })
    };

    render() {
        return (
            <div>
                <TopNavigation authenticated={false}></TopNavigation>
                <TopMarginStyle>
                    <LoginForm submit={this.submit}/>
                </TopMarginStyle>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {
        // post:state.posts
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        // function name
        updateLogIn: (id) => {dispatch({type:USER_LOGGED_IN , id:id})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);