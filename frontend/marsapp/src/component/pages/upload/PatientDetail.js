import React from "react";
import {connect} from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../App.css"
import UploadForm from "../../forms/UploadForm";
import PatientDetailForm from "../../forms/PatientDetailForm";


class PatientDetail extends React.Component {
    render() {
        return (
            <div className="ui-toolbar">

                <h1 className="ui header">Patient Detail</h1>

                <PatientDetailForm/>

            </div>
        )
    }
}

export default connect(null, {})(PatientDetail);