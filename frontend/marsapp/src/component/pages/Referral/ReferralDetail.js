/**
 * Class: ReferralDetail
 * Summary:
 *  Base file for showing contents of Referral Detail page.
 */

import React from "react";
import {connect} from "react-redux";
import AllFollowUpForm from "../../forms/AllFollowUpForm";
import ReferralDetailForm from "../../forms/ReferralDetailForm";

class ReferralDetail extends React.Component {

    render() {
        return (
            <div className="ui-toolbar">
                <ReferralDetailForm></ReferralDetailForm>
            </div>
        );
    }
}

export default connect(null,)(ReferralDetail);