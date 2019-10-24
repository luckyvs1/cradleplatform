/**
 * Summary:
 *  The top bar used for navigating to Homepage, logout, and notification
 * TODO: Now have HeaderMenu which does the same thing; consider which to use or if to merge the two files
 */

import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import * as actions from "../../actions/auth";

import {
    Nav,
    Navbar,
    NavDropdown,
    Container
} from 'react-bootstrap';

const bottomMarginStyle = {
    marginBottom: '40px',
    paddingLeft: '250px'
};


class TopNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }


    _menuToggle(e) {
        e.stopPropagation();
        // var name = (this.refs.cpDev1).value;
        let width = document.getElementsByClassName("sidebar-wrapper")[0].clientWidth;
        if (width !== 0) {
            document.getElementsByClassName("sidebar-wrapper")[0].setAttribute("style", `width:0px  !important;`)
        } else if (width === 0) {
            document.getElementsByClassName("sidebar-wrapper")[0].setAttribute("style", `width:${width} px !important;`)
        }
        console.log();

        // console.log(object);
        // document.getElementById("mySidenav").style.width = "250px";
    }

    render() {

        if (this.props.authenticated) {
            return (
                <Navbar bg="dark" variant="dark" style={bottomMarginStyle}>
                    <Container className={"col-sm-5"}>
                        <button className="btn btn-outline-success my-2 my-lg-0" onClick={this._menuToggle}>
                            <i className="fas fa-bars"></i>
                        </button>


                    </Container>
                    <Container className={"col-sm-5"}>
                        <Navbar.Brand href="/homePage">Cradle Platform {this.props.authenticated}</Navbar.Brand>
                    </Container>
                    <Container className={"col-sm-2"}>
                        <Nav className={"my-2 my-sm-0"}>
                            <Nav.Link as={Link} to="/homePage">
                                <i className="fas fa-bell"></i>
                            </Nav.Link>
                            <NavDropdown title={<span><i className="fas fa-cogs"></i></span>}
                                         id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="account">
                                    <i className="fas fa-user-alt"></i> Account
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="listUser">
                                    <i className="fas fa-users-cog"></i> Users
                                </NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item as={Link} to="help">
                                    <i className="fas fa-graduation-cap"></i> Learning Materials
                                </NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item as={Link} to="/">
                                    <i className="fas fa-sign-out-alt"></i> Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Container>
                    <Container>

                        <div id="wrapper">
                            <aside className="sidebar-wrapper">
                                <div className="sidebar-brand" id={"sidebar-brand"}>
                                    <h2>Menu</h2>

                                </div>
                                <div className="sidebar-nav">
                                    <ul>
                                        <Nav.Link as={Link} to="homePage">
                                            <i className="fas fa-tachometer-alt"></i> Dashboard
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="allFollowUp">
                                            <i className="fas fa-search"></i> Follow Ups
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="referral">
                                            <i className="fas fa-redo"></i> Referrals
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="addReadingDetail">
                                            <i className="fas fa-notes-medical"></i> Readings
                                        </Nav.Link>
                                        <NavDropdown title={<span><i className="fas fa-users"></i> Patients</span>}
                                                     id="collasible-nav-dropdown">
                                            <NavDropdown.Item as={Link} to="listPatient">All Patients</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="patientDetail" href="#action/3.2">Find
                                                Patient</NavDropdown.Item>
                                            <NavDropdown.Divider/>
                                            <NavDropdown.Item as={Link} to="addPatient">Add Patient</NavDropdown.Item>
                                        </NavDropdown>
                                    </ul>

                                </div>
                            </aside>
                        </div>
                    </Container>
                </Navbar>

            )
        }
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Cradle Platform</Navbar.Brand>
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

export default connect(mapStateToProps, {logout: actions.logout})(
    TopNavigation
);