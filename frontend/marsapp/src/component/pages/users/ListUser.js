import React from "react";
import {connect} from "react-redux";
import {testAPICALL} from "../../../actions/auth";

import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
    List,
    Image,
} from 'semantic-ui-react'
import ListUserForm from "../../forms/ListUserForm";

class ListUser extends React.Component {
    render() {
        return (
            <div className="ui-toolbar">
                <h1>
                    All Users
                </h1>
                <ListUserForm></ListUserForm>
            </div>
        );
    }
}

export default connect(null,{testAPICALL})(ListUser);