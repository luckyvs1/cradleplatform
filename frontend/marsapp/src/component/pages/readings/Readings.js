import React from "react";
import {connect} from "react-redux";

class Readings extends React.Component {

    render() {
        return (
            <div className="ui-toolbar">

                <h1>
                    READINGS
                </h1>
            </div>
        );
    }
}

export default connect(null,)(Readings);