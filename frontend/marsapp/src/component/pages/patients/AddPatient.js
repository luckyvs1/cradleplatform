/**
 * Class: AddPatient
 * Summary:
 *  Base file for showing contents of Add Patient page.
 */


import React from "react";
import {connect} from "react-redux";
import axios from 'axios';
import AddPatientForm from "../../forms/AddPatientForm";

class AddPatient extends React.Component {

    submit = (data) => {
        console.log(data);
        axios.post('http://localhost:8080/api/patients', data)
            .then(function (response){
                console.log(response);
            })
            .catch(function (error){
                console.log(error);
            });
    }

    render() {
        return (
            <AddPatientForm submit = {this.submit}></AddPatientForm>
            //the purpose of the form is just for data collection and validation then give this
            //class the data
        );
    }
}

export default connect(null,)(AddPatient);