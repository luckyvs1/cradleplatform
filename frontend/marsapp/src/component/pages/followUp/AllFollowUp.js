import React from "react";
import {connect} from "react-redux";
import AllFollowUpForm from "../../forms/AllFollowUpForm";
import HeaderMenu from "../HeaderMenu";

class AllFollowUp extends React.Component {

    render() {
        return (
            <div className="ui-toolbar">
                <AllFollowUpForm></AllFollowUpForm>
            </div>
        );
    }
}

export default connect(null,)(AllFollowUp);