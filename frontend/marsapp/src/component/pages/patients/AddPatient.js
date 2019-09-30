/**
 * Class: AddPatient
 * Summary:
 *  Base file for showing contents of Add Patient page.
 */


import React from "react";
import {connect} from "react-redux";
import AddPatientFrom from "../../forms/AddPatientFrom";

class AddPatient extends React.Component {

    render() {
        return (
            <div className="ui-toolbar">
                <AddPatientFrom></AddPatientFrom>
            </div>
        );
    }
}

export default connect(null,)(AddPatient);