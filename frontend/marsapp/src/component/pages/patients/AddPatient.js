import React from "react";
import {connect} from "react-redux";
import AddPatientFrom from "../../forms/AddPatientFrom";

class AddPatient extends React.Component {

    render() {
        return (
            <div className="ui-toolbar">

                <h1>
                    Add Patient
                </h1>
                <AddPatientFrom></AddPatientFrom>
            </div>
        );
    }
}

export default connect(null,)(AddPatient);