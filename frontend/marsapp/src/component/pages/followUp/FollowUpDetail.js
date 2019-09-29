import React from "react";
import {connect} from "react-redux";
import FollowUpDetailForm from "../../forms/FollowUpDetailForm";

class FollowUpDetail extends React.Component {

    render() {
        return (
            <div className="ui-toolbar">


                <FollowUpDetailForm></FollowUpDetailForm>
            </div>
        );
    }
}

export default connect(null,)(FollowUpDetail);