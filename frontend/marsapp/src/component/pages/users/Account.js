/**
 * Class: Account
 * Summary:
 *  Base file for showing contents of Account page.
 */

import React from "react";
import {connect} from "react-redux";
import AccountForm from "../../forms/userForm/AccountForm";

class Account extends React.Component {

    render() {
        return (
            <AccountForm></AccountForm>
        );
    }
}

export default connect(null,)(Account);