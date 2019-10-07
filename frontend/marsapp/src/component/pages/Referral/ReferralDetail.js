/**
 * Class: ReferralDetail
 * Summary:
 *  Base file for showing contents of Referral Detail page.
 */

import React from "react";
import {connect} from "react-redux";
import ReferralDetailForm from "../../forms/ReferralDetailForm";

class ReferralDetail extends React.Component {

    render() {
        return (
            <ReferralDetailForm></ReferralDetailForm>
        );
    }
}

export default connect(null,)(ReferralDetail);