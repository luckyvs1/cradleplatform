/**
 * Class: DashboardPage
 * Summary:
 *  Base file for showing contents of Dashboard page.
 *  For User Analytics.
 */

import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";

class DashboardPage extends React.Component {
    // componentDidMount = () => this.onInit(this.props);
    //

    render() {
        const {isConfirmed} = this.props;
        return (
            <div className="ui-toolbar">

                {!isConfirmed && <ConfirmEmailMessage/>}

            </div>
        );
    }
}

DashboardPage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
    return {
        isConfirmed: !!state.user.confirmed,
    };
}

export default connect(mapStateToProps, {})(DashboardPage);