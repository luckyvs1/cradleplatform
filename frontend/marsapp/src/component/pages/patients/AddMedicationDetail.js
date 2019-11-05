import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import AddMedicationForm from "../../forms/AddMedicationForm";
import api from "../../../api";
class AddMedicationDetail extends React.Component {
    submit = (data) => {
        //The reason that I copy each data field into the formattedData was because I couldn't format the dates (dob and gestationalStartDate)
        //into SQL DATE format directly without crashing the app. Will try to figure this out for the next iteration (refactoring)
//        var formattedData = {
//           attestationNo : data.attestationNo,
//           firstName: data.firstName,
//           lastName: data.lastName,
//           villageNo : data.villageNo,
//           zoneNo : data.zoneNo,
//           householdNo : data.householdNo,
//           blockNo : data.blockNo,
//           tankNo : data.tankNo,
//           initials : data.initials,
//           sex: data.sex,
//           age: data.age,
//           dob: data.dob,
//           pregnant: data.pregnant,
//           gestationalStartDate: data.gestationalStartDate,
//           gestationAgeUnit: data.gestationAgeUnit,
//           currentGestationalAge: data.currentGestationalAge
//        };
//        console.log(formattedData);
//        if(formattedData.dob != null)
//            formattedData.dob = this.formatDate(formattedData.dob);
//        if(formattedData.gestationalStartDate != null)
//            formattedData.gestationalStartDate = this.formatDate(formattedData.gestationalStartDate);

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