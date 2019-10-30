/**
 * Class: Account
 * Summary:
 *  Base file for showing contents of Account page.
 */

import React from "react";
import {connect} from "react-redux";
import AccountForm from "../../forms/AccountForm";
import api from "../../../api"

class Account extends React.Component {

    submit = data => {
        // for future use
        console.log(data);
        //waiting for updating user info end point

    }


    render() {
        return (
            <AccountForm submit={this.submit}></AccountForm>
        );
    }
}

export default connect(null,)(Account);