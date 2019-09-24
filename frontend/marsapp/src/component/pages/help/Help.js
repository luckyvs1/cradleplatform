import React from "react";
import {connect} from "react-redux";

class Help extends React.Component {

    render() {
        return (
            <div className="ui-toolbar">

                <h1>
                    PLEASE HELP
                </h1>
            </div>
        );
    }
}

export default connect(null,)(Help);