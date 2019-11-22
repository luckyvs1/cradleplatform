/**
 * Class: AddPatient
 * Summary:
 *  Base file for showing contents of Add Patient page.
 */

import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import AddPatientForm from "../../forms/AddPatientForm";
import api from "../../../api";
import ErrorAlert from "../../utils/ErrorAlert";
import ConfirmAlert from "../../utils/ConfirmAlert";

class AddPatient extends React.Component {

    state = {
            isShowError: false,
            isShowConfirm: false,
            message: "",
    }

    submit = (data) => {
        //The reason that I copy each data field into the formattedData was because I couldn't format the dates (dob and gestationalStartDate)
        //into SQL DATE format directly without crashing the app. Will try to figure this out for the next iteration (refactoring)
        var formattedData = {
           attestationNo : data.attestationNo,
           firstName: data.firstName,
           lastName: data.lastName,
           villageNo : data.villageNo,
           zoneNo : data.zoneNo,
           householdNo : data.householdNo,
           blockNo : data.blockNo,
           tankNo : data.tankNo,
           initials : data.initials,
           sex: data.sex,
           age: data.age,
           dob: data.dob,
           pregnant: data.pregnant,
           gestationalStartDate: data.gestationalStartDate,
           gestationAgeUnit: data.gestationAgeUnit,
           currentGestationalAge: data.currentGestationalAge
        };
        console.log(formattedData);
        if(formattedData.dob != null)
            formattedData.dob = this.formatDate(formattedData.dob);
        if(formattedData.gestationalStartDate != null)
            formattedData.gestationalStartDate = this.formatDate(formattedData.gestationalStartDate);

        api.patient.createPatient(JSON.stringify(formattedData)).then(res =>{
            this.onShowAlert("Successfully added patient. Redirecting back to Patient List...", false, true)

        }).catch(error => {this.onShowAlert("Error: failure to add patient. Please contact admin.", true, false)})
    }

    onShowAlert = (message, error, confirm) => {
        this.setState({
            ...this.state,
            isShowError: error,
            isShowConfirm: confirm,
            message: message
        }, () => {
            window.setTimeout(() => {
                this.setState({
                    ...this.state,
                    isShowError: false,
                    isShowConfirm: false
                })
            }, 2000)
            window.setTimeout(() => {
                this.props.history.push("/listPatient");
            },2000)
        });
    }
    formatDate = date =>{
        function pad(num){ return ('00'+num).slice(-2) };
        return  date.getUTCFullYear()        + '-' +
                pad(date.getUTCMonth() + 1) + '-' +
                pad(date.getUTCDate());
    }
    render() {
        return (
        <div>
            <AddPatientForm submit = {this.submit}></AddPatientForm>
            <ErrorAlert show={this.state.isShowError} message={this.state.message}></ErrorAlert>
            <ConfirmAlert show={this.state.isShowConfirm} message={this.state.message}></ConfirmAlert>
        </div>
        );
    }
}

export default connect(null,)(AddPatient);