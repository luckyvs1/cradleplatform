/**
 * Class: Help
 * Summary:
 *  Base file for showing contents of Help / Learning Material page.
 */


import React from "react";
import {connect} from "react-redux";
import HelpForm from "../../forms/helpForm/HelpForm";

class Help extends React.Component {

    render() {
        return (
            <HelpForm></HelpForm>
        );
    }
}

export default connect(null,)(Help);