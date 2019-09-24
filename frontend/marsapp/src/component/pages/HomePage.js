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

const TodoComponent = {
    width: "100%",
    // backgroundColor: "rgba(103,83,102,0.66)",
    heigh   : "100%",
}

const styles = {
    TodoComponent: TodoComponent,
}


const HomePage = ({isAuthenticated, logout}) => (
    <div style={styles.TodoComponent}>
            <h1>Home Page</h1>
            {isAuthenticated ? (
                <button onClick={() => logout()}>Logout</button>
            ) : (
                <ul>
                    {/*link to login*/}
                    <Link to="/login">Login</Link><br></br>
                    <Link to="/signup">Sign Up </Link><br></br>
                    <Link to="/upload">upload </Link><br></br>
                    <Link to="/readings">readings </Link><br></br>
                    <Link to="/addReadingDetail">add readings</Link><br></br>
                    <Link to="/listPatient">list patient</Link><br></br>
                    <Link to="/help">help</Link><br></br>

                </ul>

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