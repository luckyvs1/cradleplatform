/**
 * Class: AllFollowUp
 * Summary:
 *  Base file for showing contents of List of All Follow up page.
 */

import React from "react";
import {connect} from "react-redux";
import AllFollowUpForm from "../../forms/followUpForm/AllFollowUpForm";

class AllFollowUp extends React.Component {

    render() {
        return (
            <div>
                <AllFollowUpForm></AllFollowUpForm>
            </div>
        );
    }
}

export default connect(null,)(AllFollowUp);