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

const TopMarginStyle = styled.div`
  margin-top: 40px;
`;

class LoginPage extends React.Component {

    submit = data => {
        let accessToken = "nGzv3JORFQXG3x21KW1a"
        this.props.updateLogIn(accessToken);




        console.log("LOG IN" ,data)
        api.user.login(data)
            .then(res => {
                if(res){
                    console.log(res)
                    let accessToken = res.data.access_token;
                    this.props.updateLogIn(accessToken);

                    auth.login(()=>{
                        localStorage.loginToken = res.data.authenticated;
                        localStorage.loginUserId = res.data.id; // should be the id of the logged in user

                        this.props.history.push("/homePage");
                    })
                    console.log("LOG IN" ,res.data)
                }else{
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

const mapStateToProps = (state, ownProps) => {
    return {
        // post:state.posts
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