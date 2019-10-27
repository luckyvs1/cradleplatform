/**
 * Class: Account
 * Summary:
 *  Base file for showing contents of Account page.
 */

import React from "react";
import {connect} from "react-redux";
import AccountForm from "../../forms/AccountForm";
class Account extends React.Component {

    submit = data => {
        // for future use
        console.log(data);
    }


    render() {
        return (
            <AccountForm submit={this.submit}></AccountForm>
        );
    }
}

export default connect(null,)(Account);