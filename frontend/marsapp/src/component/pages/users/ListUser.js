/**
 * Class: ListUser
 * Summary:
 *  Base file for showing contents of List of User page.
 */

import React from "react";
import {connect} from "react-redux";

import ListUserForm from "../../forms/userForm/ListUserForm";

class ListUser extends React.Component {
    render() {
        return (
            <ListUserForm></ListUserForm>
        );
    }
}

export default connect(null,{})(ListUser);