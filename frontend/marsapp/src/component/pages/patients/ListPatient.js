import React from "react";
import {connect} from "react-redux";

class ListPatient  extends React.Component{

    render() {
        return (
            <h1>
                LISTING PATIENT
            </h1>
        );
    }
}

export default connect(null, )(ListPatient);