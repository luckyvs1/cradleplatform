import React from "react";
import {connect} from "react-redux";
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

                <h1>
                    List All Patients
                </h1>
                <ListPatientForm></ListPatientForm>
            </div>
        );
    }
}

export default connect(null,)(ListPatient);