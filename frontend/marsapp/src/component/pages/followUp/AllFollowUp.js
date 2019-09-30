/**
 * Class: AllFollowUp
 * Summary:
 *  Base file for showing contents of List of All Follow up page.
 */

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