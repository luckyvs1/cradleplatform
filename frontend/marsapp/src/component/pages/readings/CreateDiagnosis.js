/**
 * Class: CreateDiagnosis
 * Summary:
 *  Base file for showing contents of Create Diagnosis page.
 */

import React from "react";
import {connect} from "react-redux";
import CreateDiagnosisForm from "../../forms/CreateDiagnosisForm";

class CreateDiagnosis extends React.Component {

    render() {
        return (
            <CreateDiagnosisForm></CreateDiagnosisForm>
        );
    }
}

export default connect(null,)(CreateDiagnosis);