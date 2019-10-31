/**
 * Class: FollowUpDetail
 * Summary:
 *  Base file for showing contents of FollowUp Detail page.
 */


import React from "react";
import {connect} from "react-redux";
import FollowUpDetailForm from "../../forms/FollowUpDetailForm";
import api from "../../../api";

class FollowUpDetail extends React.Component {

    submit = data => {
        console.log("data",data)
        // api.followUp.addFollowUp()
    }
    render() {
        return (
            <FollowUpDetailForm submit={this.submit}></FollowUpDetailForm>
        );
    }
}

export default connect(null,)(FollowUpDetail);