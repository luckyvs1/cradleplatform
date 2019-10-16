/**
 * Class: AddPatient
 * Summary:
 *  Base file for showing contents of Add Patient page.
 */


import React from "react";
import {connect} from "react-redux";
import axios from 'axios';
import AddPatientForm from "../../forms/AddPatientForm";
import api from "../../../api"

class AddPatient extends React.Component {

    submit = (data) => {
        console.log(data);
        let test = {
            id:null,
            villageNo:"1",
            initials:"ff",
            sex:"male",
            age:"22",
            pregnant:true,
            gestationAge:"1"
        }



        api.patient.createPatient(JSON.stringify(test)).then(res=>{
            console.log("created patient" , res);

        })
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