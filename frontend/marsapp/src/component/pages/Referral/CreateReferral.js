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
            <CreateReferralForm></CreateReferralForm>
        );
    }
}

export default connect(null,)(CreateReferral);