import React from "react";
import {connect} from "react-redux";
import FollowUpDetailForm from "../../forms/FollowUpDetailForm";

class FollowUpDetail extends React.Component {

    render() {
        return (
            <div className="ui-toolbar">

                <h1>
                    PLEASE HELP
                </h1>
                <FollowUpDetailForm></FollowUpDetailForm>
            </div>
        );
    }
}

export default connect(null,)(FollowUpDetail);