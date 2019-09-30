/**
 * Class: Help
 * Summary:
 *  Base file for showing contents of Help / Learning Material page.
 */


import React from "react";
import {connect} from "react-redux";
import HelpForm from "../../forms/HelpForm";

class Help extends React.Component {

    render() {
        return (
            <div className="ui-toolbar">


                <HelpForm></HelpForm>
            </div>
        );
    }
}

export default connect(null,)(Help);