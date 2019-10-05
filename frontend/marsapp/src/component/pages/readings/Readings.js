/**
 * Class: Readings
 * Summary:
 *  Base file for showing contents of Readings page.
 */

import React from "react";
import {connect} from "react-redux";
import ReadingForm from "../../forms/readingForm/ReadingForm";

class Readings extends React.Component {

    render() {
        return (
            <div className="ui-toolbar">
                <ReadingForm></ReadingForm>
            </div>
        );
    }
}

export default connect(null,)(Readings);