import React from "react";
import {connect} from "react-redux";
import AddReadingForm from "../../../forms/readingForm/AddReadingForm";

class AddReadingDetail extends React.Component {

    render() {
        return (
            <div className="ui-toolbar">

                <h1>
                    Add Reading
                </h1>
                <AddReadingForm></AddReadingForm>
            </div>
        );
    }
}

export default connect(null,)(AddReadingDetail);