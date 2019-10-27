/**
 * Class: ReferralForm
 * Summary:
 *  Contains the contents and functionality of the List of Referrals page.
 */

// TODO: Handle assignee filter, status filter, and sort by,

import React from "react";
import { makeStyles } from "@material-ui/core";
import {
    Form,
    Dropdown,
    Table
} from 'semantic-ui-react'
import {
    Link,
    withRouter
} from "react-router-dom";
import TopNavigation from "../navigation/TopNavigation";
import {
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import api from "../../api"

class ReferralForm extends React.Component {
    state = {activeItem: 'bio'};

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            assignedTo: [
                {
                    key: 'none',
                    text: ' ',
                    value: 'none',
                },
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
            ],
            status: [
                {
                    key: 'none',
                    text: ' ',
                    value: 'none',
                },
                {
                    key: 'done',
                    text: 'done',
                    value: 'done',
                },
                {
                    key: 'requires response',
                    text: 'requires response',
                    value: 'requires response',
                }
            ],
            sortBy: [
                {
                    key: 'datecreated',
                    text: 'date created',
                    value: 'datecreated',
                },
                {
                    key: 'patient',
                    text: 'patient initials',
                    value: 'patient',
                }
            ],
            toggled: false
        }
    }

    // TODO: see if there's another method without async, or determine how to handle the wait
    async componentDidMount() {
        console.log("api calling");
        api.referral.getAllReferral(null).then(async res => {
            // fetching all follow up
            const data = res.data;
            console.log("ddd", data);

            let newState = [];

            for (let i = 0; i < data.length; i++) {
                // query patient name
                // TODO: Find a nicer way to use the api, or change the api's requested parameter
                let getDataParam = {
                    id: data[i].patientId
                };
                const thePatient = await api.patient.getPatientById(getDataParam).then(res => {
                    return res.data.initials;
                });

                // query referrer name
                const theReferrer = await api.userInfo.getUserInfoById(data[i].referrerId).then(res => {
                    return res.data.firstName + " " + res.data.lastName;
                });

                // TODO: Handle assignee and status when db schema updates
                const theDate =  new Date(data[i].timestamp).toDateString();

                console.log("dp", thePatient);
                console.log("dr", theReferrer);
                console.log("dd", theDate);

                let row = {
                    rid: data[i].id,
                    pid: data[i].patientId,
                    pname: thePatient,
                    referrer: theReferrer,
                    assignee: "",
                    dateof: theDate,
                    status: "",
                };

                newState.push(row);
            }
            this.setState({data: newState});
            console.log("state:", this.state);
        })
    }

    toggleMenu() {
        this.setState({toggled: !this.state.toggled});
    }

    handleItemClick = (row) => {
        this.props.history.push({
            pathname: '/referralDetail',
            state: {
                rid: row.rid,
                initials: row.pname
            }
        });
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
                                <Form.Group widths={'equal'}>
                                    <Form.Field>
                                        <label>Assign To:</label>
                                        <Dropdown
                                            placeholder='Select Assignee'
                                            fluid
                                            selection
                                            options={this.state.assignedTo}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Status:</label>
                                        <Dropdown
                                            placeholder='Select Status'
                                            fluid
                                            selection
                                            options={this.state.status}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Sort By:</label>
                                        <Dropdown
                                            placeholder='Select Sort By'
                                            fluid
                                            selection
                                            options={this.state.sortBy}
                                        />
                                    </Form.Field>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table bordered hover size="small">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell >Patient ID</Table.HeaderCell>
                                        <Table.HeaderCell >Patient Initials</Table.HeaderCell>
                                        <Table.HeaderCell >Referred By</Table.HeaderCell>
                                        <Table.HeaderCell >Assigned to</Table.HeaderCell>
                                        <Table.HeaderCell >Referral Date</Table.HeaderCell>
                                        <Table.HeaderCell >Status</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {this.state.data.map(row => (
                                        <Table.Row key={row.pid}  class='clickable-row' onClick={() => this.handleItemClick(row)}>
                                            <Table.Cell >{row.pid}</Table.Cell>
                                            <Table.Cell >{row.pname}</Table.Cell>
                                            <Table.Cell >{row.referrer}</Table.Cell>
                                            <Table.Cell >{row.assignee}</Table.Cell>
                                            <Table.Cell >{row.dateof}</Table.Cell>
                                            <Table.Cell >{row.status}</Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

//export default connect(null,)(ReferralForm);
export default withRouter(ReferralForm);