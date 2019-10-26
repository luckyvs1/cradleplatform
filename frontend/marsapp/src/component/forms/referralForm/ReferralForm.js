/**
 * Class: ReferralForm
 * Summary:
 *  Contains the contents and functionality of the List of Referrals page.
 */

import React from "react";
import {connect} from "react-redux";
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
import TopNavigation from "../../navigation/TopNavigation";
import {
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import api from "../../../api"

function createData(rid, pid, pname, referrer, assignee, dateof, status) {
    return {rid, pid, pname, referrer, assignee, dateof, status};
}

const rows = [
    createData('111555666', '111555666', 'AS', 'thomas', 'None', new Date().toDateString(), 'Require response'),
    createData('111555666', '222555444', 'QW', 'theo', 'None', new Date().toDateString(), 'Require response'),
    createData('111555666', '111222333', 'DW', 'theresha', 'Jenny Hess', new Date().toDateString(), 'Require response'),
    createData('111555666', '111222888', 'GF', 'Brian', 'None', new Date().toDateString(), 'Require response'),
    createData('111555666', '444555666', 'VV', 'Katy', 'Elliot Fu', new Date().toDateString(), 'Done'),
];

class ReferralForm extends React.Component {
    state = {activeItem: 'bio'};

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            toggled: false
        }
    }

    componentDidMount() {
        console.log("api calling");
        api.referral.getAllReferral(null).then(res => {
            // fetching all follow up
            console.log("All referral: ", res.data);

            const data = res.data;

            /*
            Sample return value
            healthFacility: "healthfacility1"
            id: 1
            notesAction: "notes2"
            notesReason: "notes"
            patientId: 1
            readingId: 1
            referrerId: "1"
            timestamp: "2019-01-01T00:00:00.000+0000"

            Need
            rid, pid, pname, referrer, assignee, dateof, status
             */

            //declare newState array size?
            let newState = [];

            for (let i = 0; i < data.length; i++) {
                // query patient name
                // query referrer name
                // query assignee?
                // query status?

                const theDate =  new Date(data[i].timestamp).toDateString();
                let row = {
                    rid: data[i].id,
                    pid: data[i].patientId,
                    pname: "",
                    referrer: "",
                    assignee: "",
                    dateof: theDate,
                    status: "",
                };

                newState.push(row);
            }
            this.setState({data: newState});
            console.log(this.state);
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
                                <Form.Group widths={'equal'}>
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