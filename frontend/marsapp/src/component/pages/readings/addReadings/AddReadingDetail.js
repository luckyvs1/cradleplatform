import React from "react";
import {connect} from "react-redux";

class AddReadingDetail extends React.Component {

    render() {
        return (
            <div className="ui-toolbar">

                <h1>
                    add READING HERE PAGE
                </h1>
            </div>
        );
    }
}

export default connect(null,)(AddReadingDetail);