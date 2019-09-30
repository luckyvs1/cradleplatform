/**
 * Summary:
 *  The top bar used for navigating to Homepage, logout, and notification
 * TODO: Now have HeaderMenu which does the same thing; consider which to use or if to merge the two files
 */

import React from "react";
import PropTypes from "prop-types";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import gravatarUrl from "gravatar-url";
import * as actions from "../../actions/auth";

const TopNavigation = ({ user, logout }) => (
    <Menu secondary pointing>
        <Menu.Item as={Link} to="/dashboard">
            Dashboard
        </Menu.Item>

        <Menu.Menu position="right">
            <Dropdown trigger={<Image avatar src={gravatarUrl(user.email)} />}>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Menu>
    </Menu>
);

TopNavigation.propTypes = {
    user: PropTypes.shape({
        email: PropTypes.string.isRequired
    }).isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps, { logout: actions.logout })(
    TopNavigation
);