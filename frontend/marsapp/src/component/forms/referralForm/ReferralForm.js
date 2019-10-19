/**
 * Class: ReferralForm
 * Summary:
 *  Contains the contents and functionality of the List of Referrals page.
 */

import React from "react";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/core";
import {
    Form,
    Dropdown
} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import TopNavigation from "../../navigation/TopNavigation";
import {
    Container,
    Row,
    Col,
    Table,
    Button
} from 'react-bootstrap';
import api from "../../../api"

function createData(pid, pname, referrer, assignee, dateof, status) {
    return {pid, pname, referrer, assignee, dateof, status};
}

const rows = [
    createData('111555666', 'Alex', 'thomas', 'None', new Date().toDateString(), 'Require response'),
    createData('222555444', 'Bob', 'theo', 'None', new Date().toDateString(), 'Require response'),
    createData('111222333', 'fanny', 'theresha', 'Jenny Hess', new Date().toDateString(), 'Require response'),
    createData('111222888', 'hanny', 'Brian', 'None', new Date().toDateString(), 'Require response'),
    createData('444555666', 'janny', 'Katy', 'Elliot Fu', new Date().toDateString(), 'Done'),
];

class ReferralForm extends React.Component {
    state = {activeItem: 'bio'};

    constructor() {
        super();

        this.state = {
            toggled: false
        }
    }

    componentDidMount() {
        console.log("api calling");
        api.referral.getAllReferral(null).then(res => {
            // fetching all follow up
            console.log("All referral", res);
        })
    }

    toggleMenu() {
        this.setState({toggled: !this.state.toggled});
    }

    handleItemClick = (e, {name}) => {
        this.setState({activeItem: name})
    };
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
        const friendOptions = [
            {
                key: 'Jenny Hess',
                text: 'Jenny Hess',
                value: 'Jenny Hess',
            },
            {
                key: 'Elliot Fu',
                text: 'Elliot Fu',
                value: 'Elliot Fu',
            },
            {
                key: 'Stevie Feliciano',
                text: 'Stevie Feliciano',
                value: 'Stevie Feliciano',
            }
        ];


        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <h1>Referrals</h1>
                                </Col>
                                <Col className="text-right">
                                    <Button variant="primary" size="sm" as={Link} to="createReferral">
                                        Create New Referral
                                    </Button>
                                </Col>
                            </Row>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form size={'small'}>
                                <Form.Group grouped width={'equal'}>
                                    <Form.Field>
                                        <label>Assign To:</label>
                                        <Dropdown
                                            placeholder='Select Assignee'
                                            fluid
                                            selection
                                            options={friendOptions}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Status:</label>
                                        <Dropdown
                                            placeholder='Select Status'
                                            fluid
                                            selection
                                            options={friendOptions}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Sort By:</label>
                                        <Dropdown
                                            placeholder='Select Sort By'
                                            fluid
                                            selection
                                            options={friendOptions}
                                        />
                                    </Form.Field>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Patient ID</th>
                                        <th>Patient Name</th>
                                        <th>Referred By</th>
                                        <th>Assigned to</th>
                                        <th>Referral Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map(row => (
                                        <tr key={row.pid}>
                                            <td scope="row">{row.pid}</td>
                                            <td>{row.pname}</td>
                                            <td>{row.referrer}</td>
                                            <td>{row.assignee}</td>
                                            <td>{row.dateof}</td>
                                            <td>{row.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default connect(null,)(ReferralForm);