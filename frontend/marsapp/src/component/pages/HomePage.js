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
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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



const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    table: {
        width: '100%',
    },
}));

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

    handleItemClick = (e, {name}) => {
        this.setState({activeItem: name})
    }

    render() {
        const {activeItem} = this.state
        let buttons = [];
        let className = "floating-menu";
        let icon = "add";

        if (this.state.toggled) {
            className += " open";
            icon = "clear";
            buttons.push(
                <FloatingMenuItem label="Item 1" icon="create" action="" key="i1"/>);
            buttons.push(
                <FloatingMenuItem label="Item 2" icon="drafts" action="" key="i2"/>);
        }

        buttons.push(<FloatingMenuItem label="" icon={icon} action={this.toggleMenu.bind(this)} key="m"/>);


        return (
            <div className="ui-toolbar">
                <div className="container">
                    <div className={className}>
                        {buttons}
                    </div>
                </div>
                <h1 as="ui header">Cradle App</h1>
                <Grid>

                    <Grid.Column width={2}>
                        <Menu fluid vertical tabular>
                            <Menu.Item
                                as={Link} to="/upload"
                                name='Follow Ups'
                                active={activeItem === 'upload'}
                                onClick={this.handleItemClick}

                            />
                            <Menu.Item
                                as={Link} to="/upload"
                                name='Referral'
                                active={activeItem === 'referral'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                as={Link} to="/upload"
                                name='Patients'
                                active={activeItem === 'patient'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                as={Link} to="/upload"
                                name='Account'
                                active={activeItem === 'account'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                as={Link} to="/upload"
                                name='Users'
                                active={activeItem === 'users'}
                                onClick={this.handleItemClick}
                            />
                        </Menu>
                    </Grid.Column>

                    <Grid.Column stretched width={6}>
                        <Paper className="ui-wrapper">
                            <Table className="ui-toolbar">
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
                    <Grid.Column stretched width={6}>
                        <Paper className="ui-wrapper">
                            <Table className="ui-toolbar">
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

        );

    }
}

export default HomePage;


// const HomePage = ({isAuthenticated, logout}) => (
//     <div>
//         <div className="ui-toolbar">
//             <h1>Home Page</h1>
//         </div>
//         {isAuthenticated ? (
//             <button onClick={() => logout()}>Logout</button>
//         ) : (
//
//                     <div className="ui-wrapper">
//                         <Link className="ui-topsites" to="/upload">
//                             <a href="#" className="ui-topsites-item">
//                                 <i className="fas fa-upload ui-topsite-icon"></i>
//                                 <span>upload </span>
//                                 <span className="ui-topsites-item-edit">
//                                     <i className="fas fa-ellipsis-v"></i>
//                                 </span>
//                             </a></Link>
//                         <Link className="ui-topsites" to="/readings">
//                             <a href="#" className="ui-topsites-item">
//                                 <i className="fas fa-book-open ui-topsite-icon"></i>
//                                 <span>readings </span>
//                                 <span className="ui-topsites-item-edit">
//                                     <i className="fas fa-ellipsis-v"></i>
//                                 </span>
//                             </a></Link>
//                         <Link className="ui-topsites" to="/addReadingDetail">
//                             <a href="#" className="ui-topsites-item">
//                                 <i className="fas fa-plus-circle ui-topsite-icon"></i>
//                                 <span>add readings</span>
//                                 <span className="ui-topsites-item-edit">
//                                     <i className="fas fa-ellipsis-v"></i>
//                                 </span>
//                             </a></Link>
//                         <Link className="ui-topsites" to="/listPatient">
//                             <a href="#" className="ui-topsites-item">
//                                 <i className="fas fa-list ui-topsite-icon"></i>
//                                 <span>List Reading</span>
//                                 <span className="ui-topsites-item-edit">
//                                     <i className="fas fa-ellipsis-v"></i>
//                                 </span>
//                             </a>
//                         </Link>
//                         <Link className="ui-topsites" to="/help">
//                             <a href="#" className="ui-topsites-item">
//                                 <i className="fas fa-question ui-topsite-icon"></i>
//                                 <span>Help</span>
//                                 <span className="ui-topsites-item-edit">
//                                     <i className="fas fa-ellipsis-v"></i>
//                                 </span>
//                             </a>
//                         </Link>
//                         <Link className="ui-topsites" to="/referral">
//                             <a href="#" className="ui-topsites-item">
//                                 <i className="fas fa-retweet ui-topsite-icon"></i>
//                                 <span>Referral</span>
//                                 <span className="ui-topsites-item-edit">
//                                     <i className="fas fa-ellipsis-v"></i>
//                                 </span>
//                             </a>
//                         </Link>
//                     </div>
//
//
//         )}
//
//     </div>
//
//
// );
//
// HomePage.propTypes = {
//     isAuthenticated: PropTypes.bool.isRequired,
//     logout: PropTypes.func.isRequired
// };
//
// function mapStateToProps(state) {
//     return {
//         isAuthenticated: !!state.user.token
//     };
// }
//
// export default connect(mapStateToProps, {logout: actions.logout})(HomePage);