/**
 * Summary:
 *  The top bar used for navigating to Homepage, logout, and notification
 * TODO: Now have HeaderMenu which does the same thing; consider which to use or if to merge the two files
 */

import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {Container, Nav, Navbar, NavDropdown, Row, Col} from 'react-bootstrap';

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
        console.log("WIDTH = " ,width)
        if (width === 50) {
            document.getElementsByClassName("sidebar-wrapper")[0].setAttribute("style", `width:240px  !important;`)
        } else if (width != 50) {

            document.getElementsByClassName("sidebar-wrapper")[0].setAttribute("style", `width:${width} px !important;`)
        }
    }
    handleClick(e){
        localStorage.removeItem("loginToken");
    }

    render() {

        if (this.props.authenticated) {
            return (
                <Navbar bg="dark" variant="dark" style={bottomMarginStyle}>
                    <Container className={"col-sm-5"} id="menuHeader">
                        <button className="btn btn-outline-success my-2 my-lg-0" onClick={this._menuToggle}>
                            <h2>Menu</h2>
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
                                <NavDropdown.Item as={Link} to="help">
                                    <i className="fas fa-graduation-cap"></i> Learning Materials
                                </NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item as={Link} to="/" onClick={this.handleClick}>
                                    <i className="fas fa-sign-out-alt"></i> Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Container>
                    <Container>
                        <div id="wrapper">
                            <aside className="sidebar-wrapper">
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
                                        <Nav.Link as={Link} to="listPatient">
                                            <i className="fas fa-users"></i> Patients
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="addReadingDetail">
                                            <i className="fas fa-users"></i> Readings
                                        </Nav.Link>
                                        {/*TODO: Only show Users tab to Admins*/}
                                        <Nav.Link as={Link} to="listUser">
                                            <i className="fas fa-users-cog"></i> Users
                                        </Nav.Link>
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

export default connect(mapStateToProps, {})(
    TopNavigation
);