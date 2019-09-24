
import React from "react";
import {connect} from "react-redux";

class Upload  extends React.Component{

    render() {
        return (
            <div className="ui-toolbar">
                <h1>
                    UPLOAD PAGE
                </h1>
            </div>

        );
    }
}

export default connect(null, )(Upload);