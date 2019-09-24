import React from "react";
import {connect} from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../App.css"
import UploadForm from "../../forms/UploadForm";


class Upload extends React.Component {
    render() {
        return (
            <div className="ui-toolbar">

                <h1 className="ui header">Upload page</h1>

                <UploadForm submit={this.submit}/>

            </div>
        )
    }
}

export default connect(null, {})(Upload);