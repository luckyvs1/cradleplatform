import React from "react";
import {connect} from "react-redux";
import AllFollowUpForm from "../../forms/AllFollowUpForm";
import ReferralDetailForm from "../../forms/ReferralDetailForm";

class ReferralDetail extends React.Component {

    render() {
        return (
            <div className="ui-toolbar">

                <h1>
                    Referral and Diagnosis Details
                </h1>
                <ReferralDetailForm></ReferralDetailForm>
            </div>
        );
    }
}

export default connect(null,)(ReferralDetail);