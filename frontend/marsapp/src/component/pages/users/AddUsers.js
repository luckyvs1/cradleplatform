/**
 * Class: AddUsers
 * Summary:
 *  Base file for showing contents of Add Users page.
 */

import React from "react";
import {connect} from "react-redux";
import AllFollowUpForm from "../../forms/AllFollowUpForm";
import ReferralDetailForm from "../../forms/ReferralDetailForm";
import AddUsersForm from "../../forms/AddUsersForm";

class AddUsers extends React.Component {

    render() {
        return (
            <div className="ui-toolbar">

                <h1>
                    PLEASE HELP
                </h1>
                <AddUsersForm></AddUsersForm>
            </div>
        );
    }
}

export default connect(null,)(AddUsers);