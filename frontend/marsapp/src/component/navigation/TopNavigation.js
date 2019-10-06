/**
 * Summary:
 *  The top bar used for navigating to Homepage, logout, and notification
 * TODO: Now have HeaderMenu which does the same thing; consider which to use or if to merge the two files
 */

import React, {Component} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import gravatarUrl from "gravatar-url";
import * as actions from "../../actions/auth";

import {
    Nav,
    Navbar,
    NavDropdown,
    Container
} from 'react-bootstrap';

const bottomMarginStyle = {
    marginBottom: '40px'
};

class TopNavigation extends Component {

    render() {
        if (this.props.authenticated) {
            return (
                <Navbar bg="dark" variant="dark" style={bottomMarginStyle}>
                    <Container>
                        <Navbar.Brand href="#home">Cradle Platform {this.props.authenticated}</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="homePage">
                                <i className="fas fa-tachometer-alt"></i> Dashboard
                            </Nav.Link>
                            <Nav.Link as={Link} to="allFollowUp">
                                <i className="fas fa-search"></i> Follow Ups
                            </Nav.Link>
                            <Nav.Link as={Link} to="referral">
                                <i className="fas fa-redo"></i> Referrals
                            </Nav.Link>
                            <NavDropdown title={<span><i className="fas fa-users"></i> Patients</span>} id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="listPatient">All Patients</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="patientDetail" href="#action/3.2">Find Patient</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="addPatient">Add Patient</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/homePage">
                                <i className="fas fa-bell"></i>
                            </Nav.Link>
                            <NavDropdown title={<span><i className="fas fa-cogs"></i></span>} id="collasible-nav-dropdown">                                
                                <NavDropdown.Item href="#action/3.2">
                                    <i className="fas fa-user-alt"></i> Account
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    <i className="fas fa-users-cog"></i> Users
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">
                                    <i className="fas fa-graduation-cap"></i> Learning Materials
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/">
                                    <i className="fas fa-sign-out-alt"></i> Logout
                                </NavDropdown.Item>
                            </NavDropdown>
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
    // user: PropTypes.shape({
    //     email: PropTypes.string.isRequired
    // }).isRequired,
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