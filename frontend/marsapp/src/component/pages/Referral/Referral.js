import React from "react";
import {connect} from "react-redux";
import ReferralForm from "../../forms/ReferralForm";


class Referral extends React.Component {



    render() {
        return (

            <div className="ui-toolbar">


                <ReferralForm></ReferralForm>
            </div>
        )
    }

}

export default connect(null,)(Referral);