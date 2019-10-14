/**
 * Class: AddPatient
 * Summary:
 *  Base file for showing contents of Add Patient page.
 */


import React from "react";
import {connect} from "react-redux";
import AddPatientForm from "../../forms/AddPatientForm";

class AddPatient extends React.Component {

    submit = (data) => {
        console.log(data);
    }

    render() {
        return (
            <AddPatientForm submit = {this.submit}></AddPatientForm>
        );
    }
}

export default connect(null,)(AddPatient);