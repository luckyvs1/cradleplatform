import React from "react";
import {connect} from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../App.css"
import PatientDetailForm from "../../forms/PatientDetailForm";


class PatientDetail extends React.Component {
    render() {
        return (
            <div className="ui-toolbar">
                <PatientDetailForm/>
            </div>
        )
    }
}

export default connect(null, {})(PatientDetail);