import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import AddMedicationForm from "../../forms/AddMedicationForm";
import api from "../../../api";
class AddMedicationDetail extends React.Component {
    submit = (data) => {
        var formattedData = {
           drugHistoryId: data.drug_history_id,
           drugName: data.drug_name,
           dosage: data.dosage,
           startDate: data.start_date,
           endDate: data.end_date
        };
        console.log(formattedData);
        if(formattedData.startDate != null)
            formattedData.startDate = this.formatDate(formattedData.startDate);
        if(formattedData.endDate != null)
            formattedData.endDate = this.formatDate(formattedData.endDate);
        console.log(formattedData);
        api.medication.addAMedication(JSON.stringify(formattedData)).then(res =>
            {console.log("added medication", res)}
        );
    }

    formatDate = date =>{
        function pad(num){ return ('00'+num).slice(-2) };
        return  date.getUTCFullYear()        + '-' +
                pad(date.getUTCMonth() + 1) + '-' +
                pad(date.getUTCDate());
    }
    render() {
        return (
            <AddMedicationForm submit = {this.submit}></AddMedicationForm>
        );
    }
}

export default connect(null,)(AddMedicationDetail);