
import React from "react";
import {connect} from "react-redux";

class Upload  extends React.Component{

    render() {
        return (
            <h1>
                UPLOAD PAGE
            </h1>
        );
    }
}

export default connect(null, )(Upload);