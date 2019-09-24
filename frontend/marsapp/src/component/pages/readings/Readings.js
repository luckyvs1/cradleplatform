import React from "react";
import {connect} from "react-redux";

class Readings  extends React.Component{

    render() {
        return (
            <h1>
                READINGS
            </h1>
        );
    }
}

export default connect(null, )(Readings);