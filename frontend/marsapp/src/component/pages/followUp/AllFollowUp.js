import React from "react";
import {connect} from "react-redux";
import AllFollowUpForm from "../../forms/AllFollowUpForm";

class AllFollowUp extends React.Component {

    render() {
        return (
            <div className="ui-toolbar">

                <h1>
                    All Follow Ups
                </h1>

                <AllFollowUpForm></AllFollowUpForm>
            </div>
        );
    }
}

export default connect(null,)(AllFollowUp);