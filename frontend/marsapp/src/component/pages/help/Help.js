import React from "react";
import {connect} from "react-redux";

class Help  extends React.Component{

    render() {
        return (
            <h1>
                PLEASE HELP
            </h1>
        );
    }
}

export default connect(null, )(Help);