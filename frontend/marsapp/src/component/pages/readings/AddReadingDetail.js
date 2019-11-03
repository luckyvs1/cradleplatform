/**
 * Class: AddReadingDetail
 * Summary:
 *  Base file for showing contents of Add Reading page.
 */

import React from "react";
import {connect} from "react-redux";
import AddReadingForm from "../../forms/readingForm/AddReadingForm";
import api from "../../../api";
import GreenResponseReading from "../../utils/GreenResponseReading";
import {Col} from "react-bootstrap";
import StopSignResponseReading from "../../utils/StopSignResponseReading";
import TriangleResponseReading from "../../utils/TriangleResponseReading";

class AddReadingDetail extends React.Component {
    state = {
        isShow: true,
        message: ""
    }
    submit = data => {
        // api.reading.addAReading(this.state.data)
        //     .then(response => {
        //         console.log(response);
        //     });
    }
    // needed later
    onShowAlert = (message) => {
        this.setState({
                isShow: true,
                message: message
            });
    }
    render() {
        return (
            <di>
                <AddReadingForm submit={this.submit}></AddReadingForm>
            </di>
        );
    }
}

export default connect(null,)(AddReadingDetail);