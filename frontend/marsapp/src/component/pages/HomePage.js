/**
 * Main Class: HomePage
 * Helper Classes: FloatingMenuItem
 * Summary:
 *  Contains the contents and functionality of the Home page.
 */

import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../../actions/auth";
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import "../../App.css"
import {Grid, Image, List, Menu, Segment} from 'semantic-ui-react'
import Upload from "./upload/PatientDetail";
import {Route} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MenuTabularOnLeft from "./MainMenu";
import HeaderMenu from "./HeaderMenu";
import TopNavigation from "../navigation/TopNavigation";


class FloatingMenuItem extends React.Component {

    handleClick() {
        this.props.action();
    }

    render() {
        console.log(this.props.icon)
        // let buttonStyle = {
        //     backgroundImage: `url(${this.props.icon})`
        // }
        if (this.props.icon == 'add') {
            let buttonStyle = {}
        }

        let label;

        if (this.props.label) {
            label = <label>{this.props.label}</label>;
        }

        return <div
            onClick={this.handleClick.bind(this)}
            className="floating-menu-item">
            {label}
            <div className="ui circular icon button"><i className="material-icons fas fa-plus-circle"></i></div>
        </div>;
    }
}


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('111555666', 'Alex', 'thomas', new Date().toDateString()),
    createData('222555444', 'Bob', 'theo', new Date().toDateString()),
    createData('111222333', 'fanny', 'theresha', new Date().toDateString()),
    createData('111222888', 'hanny', 'Brian', new Date().toDateString()),
    createData('444555666', 'janny', 'Katy', new Date().toDateString()),
];

class HomePage extends React.Component {
    state = {activeItem: 'bio'}

    constructor() {
        super();

        this.state = {
            toggled: false
        }
    }

    toggleMenu() {
        this.setState({toggled: !this.state.toggled});
    }


     useStyles = makeStyles(theme => ({
        root: {
            width: '100%',
            marginTop: theme.spacing(2),

        },
        table: {
            minWidth: 650,
        },
        tableWrapper: {
            overflowX: 'auto',
        },
         uiHeader: {
            textAlign:'center',
     }

    }));

    render() {
        const {activeItem} = this.state
        const useStyles= this.useStyles
        let buttons = [];
        let className = "floating-menu";
        let icon = "add";

        if (this.state.toggled) {
            className += " open";
            icon = "clear";
            buttons.push(
                <FloatingMenuItem label="Item 1" icon="create" action="" key="i1"/>);
            buttons.push(
                <FloatingMenuItem label="Short Cut 2" icon="drafts" action="" key="i2"/>);

        }

        buttons.push(<FloatingMenuItem label="" icon={icon} action={this.toggleMenu.bind(this)} key="m"/>);


        return (
            <div className="ui-toolbar">
                <div className="ui-toolbar">
                    <TopNavigation authenticated={true}></TopNavigation>

                    {/* Bottom right hand controls don't know what they're used for */}
                    {/* <div className="container">
                        <div className={className}>
                            {buttons}
                        </div>
                    </div> */}

                    <Grid>
                        <Grid.Column width={3}>
                        </Grid.Column>

                        <Grid.Column stretched width={7}>
                            <Paper className={useStyles.root}>
                                <h2 style={useStyles.uiHeader}>New Referrals</h2>

                                <Table className={useStyles.table}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Patient Id</TableCell>
                                            <TableCell align="right">Patient Name</TableCell>
                                            <TableCell align="right">Referred By</TableCell>
                                            <TableCell align="right">Referral Date</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map(row => (
                                            <TableRow key={row.name} component={Link} to={"/referralDetail"}>
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.calories}</TableCell>
                                                <TableCell align="right">{row.fat}</TableCell>
                                                <TableCell align="right">{row.carbs}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Paper>
                        </Grid.Column>
                        <Grid.Column stretched width={6}>
                            <Paper className={useStyles.root}>
                                <h2 as="ui header" className='ui-header'>Upcoming Follow Up</h2>
                                <Table className={useStyles.table}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Patient Id</TableCell>
                                            <TableCell align="right">Patient Name</TableCell>
                                            <TableCell align="right">Location</TableCell>
                                            <TableCell align="right">Follow-up Date</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map(row => (
                                            <TableRow key={row.name}>
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.calories}</TableCell>
                                                <TableCell align="right">{row.fat}</TableCell>
                                                <TableCell align="right">{row.carbs}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Paper>


                        </Grid.Column>
                    </Grid>
                </div>
            </div>

        );

    }
}

export default HomePage;

