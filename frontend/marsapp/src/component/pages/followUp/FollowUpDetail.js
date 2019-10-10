/**
 * Class: FollowUpDetail
 * Summary:
 *  Base file for showing contents of FollowUp Detail page.
 */


import React from "react";
import {connect} from "react-redux";
import FollowUpDetailForm from "../../forms/followUpForm/FollowUpDetailForm";

class FollowUpDetail extends React.Component {

    render() {
        return (
            <FollowUpDetailForm></FollowUpDetailForm>
        );
    }
}

export default connect(null,)(FollowUpDetail);