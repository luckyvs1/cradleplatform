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
import AdminRoute from "../../actions/authAdmin"
import {connect} from "react-redux";
import {USER_LOGGED_IN} from "../../types";

const TopMarginStyle = styled.div`
  margin-top: 40px;
`;

class LoginPage extends React.Component {

      submit = data => {
          let accessToken = "nGzv3JORFQXG3x21KW1a"
          this.props.updateLogIn(accessToken);


          auth.login(()=>{
              localStorage.loginToken = accessToken;
              localStorage.loginUserId = 1; // should be the id of the logged in user
              this.props.history.push("/homePage");
          })
          // AdminRoute.login(()=>{
          //     localStorage.loginToken = AdminRoute.authenticated;
          //     this.props.history.push("/homePage");
          // })


          // console.log("LOG IN" ,res.data)
        // api.user.login(data)
        //     .then(res => {
        //         if(res){
        //             let accessToken = "nGzv3JORFQXG3x21KW1a"
        //             this.props.updateLogIn(accessToken);
        //
        //             auth.login(()=>{
        //                 localStorage.loginToken = auth.authenticated;
        //                 this.props.history.push("/homePage");
        //             })
        //             console.log("LOG IN" ,res.data)
        //         }else{
        //             // pop up cannot log in
        //
        //         }
        //     })


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
        updateLogIn: (id) => {dispatch({type:"USER_LOOGED_IN" , id:id})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);