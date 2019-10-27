/**
 * Class: ListPatient
 * Summary:
 *  Base file for showing contents of List of Patient page.
 */

import React from "react";
import {connect} from "react-redux";
import ListPatientForm from "../../forms/ListPatientForm";

class ListPatient extends React.Component {
    render() {
        return (
            <ListPatientForm></ListPatientForm>
        );
    }
}

export default connect(null,{})(ListPatient);