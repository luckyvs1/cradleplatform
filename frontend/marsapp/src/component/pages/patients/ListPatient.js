import React from "react";
import {connect} from "react-redux";

class ListPatient extends React.Component {

    render() {
        return (
            <div className="ui-toolbar">

                <h1>
                    LISTING PATIENT
                </h1>
            </div>
        );
    }
}

export default connect(null,)(ListPatient);