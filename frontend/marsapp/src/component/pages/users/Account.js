import React from "react";
import {connect} from "react-redux";
import AccountForm from "../../forms/AccountForm";

class Account extends React.Component {

    render() {
        return (
            <div className="ui-toolbar">

                <AccountForm></AccountForm>
            </div>
        );
    }
}

export default connect(null,)(Account);