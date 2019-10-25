/**
 * Main Class: HomePage
 * Helper Classes: FloatingMenuItem
 * Summary:
 *  Contains the contents and functionality of the Home page.
 */

import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TopNavigation from "../navigation/TopNavigation";
import {
    Container,
    Row,
    Col,
    Table
} from 'react-bootstrap';
import api from "../../api";

class FloatingMenuItem extends React.Component {

    handleClick() {
        this.props.action();
    }

    render() {
        // let buttonStyle = {
        //     backgroundImage: `url(${this.props.icon})`
        // }
        if (this.props.icon === 'add') {
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
    state = { activeItem: 'bio' }

    constructor(props) {
        super(props);

        this.state = {
            toggled: false
        }
    }

    toggleMenu() {
        this.setState({ toggled: !this.state.toggled });

    }

    componentDidMount() {
        api.referral.getAllReferral(null).then(res =>{
            console.log("All referral", res);
        })

        api.followUp.getAllFollowUps(null).then(res => {
            console.log("All follow up", res);
        })
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
            textAlign: 'center',
        }

    }));

    render() {
        let buttons = [];
        let icon = "add";

        if (this.state.toggled) {
            icon = "clear";
            buttons.push(
                <FloatingMenuItem label="Item 1" icon="create" action="" key="i1" />);
            buttons.push(
                <FloatingMenuItem label="Short Cut 2" icon="drafts" action="" key="i2" />);

        }

        buttons.push(<FloatingMenuItem label="" icon={icon} action={this.toggleMenu.bind(this)} key="m" />);


        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>

                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <h2>New Referrals</h2>
                                    <hr></hr>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Table bordered hover size="sm">
                                        <thead>
                                            <tr>
                                                <th>Patient ID</th>
                                                <th>Name</th>
                                                <th>Referred By</th>
                                                <th>Referral Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rows.map(row => (
                                                <tr key={row.name}>
                                                    <th scope="row">
                                                        <Link to="referralDetail">
                                                            {row.name}
                                                        </Link>
                                                    </th>
                                                    <td>{row.calories}</td>
                                                    <td>{row.fat}</td>
                                                    <td>{row.carbs}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <h2>Upcoming Follow-ups</h2>
                                    <hr></hr>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Table bordered hover size="sm">
                                        <thead>
                                            <tr>
                                                <th>Patient ID</th>
                                                <th>Name</th>
                                                <th>Location</th>
                                                <th>Follow-up Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rows.map(row => (
                                                <tr key={row.name}>
                                                    <th scope="row">
                                                        <Link to="referralDetail">
                                                            {row.name}
                                                        </Link>
                                                    </th>
                                                    <td>{row.calories}</td>
                                                    <td>{row.fat}</td>
                                                    <td>{row.carbs}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

        );

    }
}

export default HomePage;
