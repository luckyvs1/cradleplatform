/**
 * Class: AddReadingDetail
 * Summary:
 *  Base file for showing contents of Add Reading page.
 */

import React from "react";
import {connect} from "react-redux";
import AddReadingForm from "../../../forms/readingForm/AddReadingForm";

class AddReadingDetail extends React.Component {

    render() {
        return (
            <div className="ui-toolbar">
                <AddReadingForm></AddReadingForm>
            </div>
        );
    }
}

export default connect(null,)(AddReadingDetail);