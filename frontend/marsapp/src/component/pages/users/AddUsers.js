/**
 * Class: AddUsers
 * Summary:
 *  Base file for showing contents of Add Users page.
 */

import React from "react";
import {connect} from "react-redux";
import AddUsersForm from "../../forms/AddUsersForm";

class AddUsers extends React.Component {

    render() {
        return (
            <AddUsersForm></AddUsersForm>
        );
    }
}

export default connect(null,)(AddUsers);