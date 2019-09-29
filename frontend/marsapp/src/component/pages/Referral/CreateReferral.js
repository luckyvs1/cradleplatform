import React from "react";
import {connect} from "react-redux";
import CreateReferralForm from "../../forms/CreateReferralForm";

class CreateReferral extends React.Component {

    render() {
        return (
            <div className="ui-toolbar">

                <h1>
                    Create Referral
                </h1>
                <CreateReferralForm></CreateReferralForm>
            </div>
        );
    }
}

export default connect(null,)(CreateReferral);