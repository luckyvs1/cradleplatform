/**
 * Class: Account
 * Summary:
 *  Base file for showing contents of Account page.
 */

import React from "react";
import {connect} from "react-redux";
import AccountForm from "../../forms/userForm/AccountForm";
import api from "../../../api";

class Account extends React.Component {

    submit = data => {

        console.log(data)
        // api.userInfo.createUserInformation()

    }


    render() {
        return (
            <AccountForm submit={this.submit}></AccountForm>
        );
    }
}

export default connect(null,)(Account);