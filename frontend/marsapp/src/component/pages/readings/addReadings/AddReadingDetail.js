/**
 * Class: AddReadingDetail
 * Summary:
 *  Base file for showing contents of Add Reading page.
 */

import React from "react";
import {connect} from "react-redux";
import AddReadingForm from "../../../forms/readingForm/AddReadingForm";

class AddReadingDetail extends React.Component {
    submit = (data) => {
        console.log(data);
    }


    render() {
        return (
            <AddReadingForm submit = {this.submit}></AddReadingForm>
        );
    }
}

export default connect(null,)(AddReadingDetail);