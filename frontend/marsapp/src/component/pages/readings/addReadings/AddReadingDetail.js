import React from "react";
import {connect} from "react-redux";
import AddReadingForm from "../../../forms/readingForm/addReadingForm";

class AddReadingDetail extends React.Component {

    render() {
        return (
            <div className="ui-toolbar">

                <h1>
                    add READING HERE PAGE
                </h1>
                <AddReadingForm></AddReadingForm>
            </div>
        );
    }
}

export default connect(null,)(AddReadingDetail);