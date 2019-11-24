import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import AddMedicationForm from "../../forms/AddMedicationForm";
import ErrorAlert from "../../utils/ErrorAlert";
import ConfirmAlert from "../../utils/ConfirmAlert";
import api from "../../../api";
class AddMedicationDetail extends React.Component {

    state = {
        isShowError: false,
        isShowConfirm: false,
        message: "",
    }

    submit = (data) => {
        let formattedData = {
           patientId: data.patient_id,
           drugName: data.drug_name,
           dosage: data.dosage,
           startDate: data.start_date,
           endDate: data.end_date,
           medicationNotes: data.notes
        };
        if(formattedData.startDate != null)
            formattedData.startDate = this.formatDate(formattedData.startDate);
        if(formattedData.endDate != null)
            formattedData.endDate = this.formatDate(formattedData.endDate);
        api.medication.addAMedication(JSON.stringify(formattedData)).then(res => {
            this.onShowAlert("Successfully added medication", false, true)
        }).catch(error => {this.onShowAlert("Error: failure to add medication. Please contact admin.", true, false)})

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
        });
    }

    formatDate = date =>{
        function pad(num){ return ('00'+num).slice(-2) };
        return  date.getUTCFullYear()        + '-' +
                pad(date.getUTCMonth() + 1)  + '-' +
                pad(date.getUTCDate());
    }

    render() {
        return (
        <div>
            <AddMedicationForm submit = {this.submit}></AddMedicationForm>
            <ErrorAlert show={this.state.isShowError} message={this.state.message}></ErrorAlert>
            <ConfirmAlert show={this.state.isShowConfirm} message={this.state.message}></ConfirmAlert>
        </div>

        );
    }
}

export default connect(null,)(AddMedicationDetail);