/**
 * Summary:
 *  The top bar used for navigating to Homepage, logout, and notification
 * TODO: Now have HeaderMenu which does the same thing; consider which to use or if to merge the two files
 */

import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import gravatarUrl from "gravatar-url";
import * as actions from "../../actions/auth";
import {
    Nav,
    Navbar,
    Container
} from 'react-bootstrap';

class TopNavigation extends Component {

    render() {
        if (this.props.authenticated) {
            return (
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Cradle Platform {this.props.authenticated}</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            )
        }
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Cradle Platform</Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}

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