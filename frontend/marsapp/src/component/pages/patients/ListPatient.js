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
import ListPatientForm from "../../forms/ListPatientForm";
    
class ListPatient extends React.Component {
    render() {
        return (
            <div className="ui-toolbar">


                <ListPatientForm></ListPatientForm>
            </div>
        );
    }
}

export default connect(null,{testAPICALL})(ListPatient);