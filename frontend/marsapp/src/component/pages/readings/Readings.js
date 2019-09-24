import React from "react";
import {connect} from "react-redux";
import ReadingForm from "../../forms/readingForm/readingForm";

class Readings extends React.Component {

    render() {
        return (
            <div className="ui-toolbar">

                <h1>
                    READINGS
                </h1>
                <ReadingForm></ReadingForm>
            </div>
        );
    }
}

export default connect(null,)(Readings);