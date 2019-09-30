/**
 * Class: CreateReferral
 * Summary:
 *  Base file for showing contents of Create Referral page.
 */

import React from "react";
import {connect} from "react-redux";
import CreateReferralForm from "../../forms/CreateReferralForm";

class CreateReferral extends React.Component {

    render() {
        return (
            <div className="ui-toolbar">
                <CreateReferralForm></CreateReferralForm>
            </div>
        );
    }
}

export default connect(null,)(CreateReferral);