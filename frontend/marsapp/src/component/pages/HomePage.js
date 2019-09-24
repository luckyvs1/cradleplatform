import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../../actions/auth";
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {makeStyles} from '@material-ui/core/styles';
import "../../App.css"


const HomePage = ({isAuthenticated, logout}) => (
    <div>
        <div className="ui-toolbar">
            <h1>Home Page</h1>
        </div>
        {isAuthenticated ? (
            <button onClick={() => logout()}>Logout</button>
        ) : (

                    <div className="ui-wrapper">
                        <Link className="ui-topsites" to="/login">
                            <a href="#" className="ui-topsites-item">
                                <i className="fas fa-globe ui-topsite-icon"></i>
                                <span>Login</span>
                                <span className="ui-topsites-item-edit">
                                    <i className="fas fa-ellipsis-v"></i>
                                </span>
                            </a></Link>
                        <Link className="ui-topsites" to="/signup">
                            <a href="#" className="ui-topsites-item">
                                <i className="fas fa-globe ui-topsite-icon"></i>
                                <span>Sign Up </span>
                                <span className="ui-topsites-item-edit">
                                    <i className="fas fa-ellipsis-v"></i>
                                </span>
                            </a></Link>
                        <Link className="ui-topsites" to="/upload">
                            <a href="#" className="ui-topsites-item">
                                <i className="fas fa-globe ui-topsite-icon"></i>
                                <span>upload </span>
                                <span className="ui-topsites-item-edit">
                                    <i className="fas fa-ellipsis-v"></i>
                                </span>
                            </a></Link>
                        <Link className="ui-topsites" to="/readings">
                            <a href="#" className="ui-topsites-item">
                                <i className="fas fa-globe ui-topsite-icon"></i>
                                <span>readings </span>
                                <span className="ui-topsites-item-edit">
                                    <i className="fas fa-ellipsis-v"></i>
                                </span>
                            </a></Link>
                        <Link className="ui-topsites" to="/addReadingDetail">
                            <a href="#" className="ui-topsites-item">
                                <i className="fas fa-globe ui-topsite-icon"></i>
                                <span>add readings</span>
                                <span className="ui-topsites-item-edit">
                                    <i className="fas fa-ellipsis-v"></i>
                                </span>
                            </a></Link>
                        <Link className="ui-topsites" to="/listPatient">
                            <a href="#" className="ui-topsites-item">
                                <i className="fas fa-globe ui-topsite-icon"></i>
                                <span>List Reading</span>
                                <span className="ui-topsites-item-edit">
                                    <i className="fas fa-ellipsis-v"></i>
                                </span>
                            </a>
                        </Link>
                        <Link className="ui-topsites" to="/help">
                            <a href="#" className="ui-topsites-item">
                                <i className="fas fa-globe ui-topsite-icon"></i>
                                <span>Help</span>
                                <span className="ui-topsites-item-edit">
                                    <i className="fas fa-ellipsis-v"></i>
                                </span>
                            </a>
                        </Link>
                    </div>


        )}

    </div>


);

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    };
}

export default connect(mapStateToProps, {logout: actions.logout})(HomePage);