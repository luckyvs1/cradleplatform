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
    Dropdown
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
import ReferralListTable from "../utils/ReferralListTable";

class ReferralForm extends React.Component {
    state = {activeItem: 'bio'};

    constructor(props) {
        super(props);
        this.state = {
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
                            <ReferralListTable/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

//export default connect(null,)(ReferralForm);
export default withRouter(ReferralForm);