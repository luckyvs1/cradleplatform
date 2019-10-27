/**
 * Class: AllFollowUpForm
 * Summary:
 *  Contains the contents and functionality of the FollowUp page.
 */

import React from "react";
import {makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import TopNavigation from "../navigation/TopNavigation";
import PropTypes from "prop-types";
import {
    Container,
    Row,
    Col,
    Table
} from 'react-bootstrap';
import {connect} from "react-redux";
import FollowUpListTable from "../utils/FollowUpListTable"

class AllFollowUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                diagnosis: "",
                followUpNotes: "",
                frequency: "",
                id: null,
                patientId: "",
                required: null,
                treatment: "",
            }],
        };
    }

    render() {
        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <h1>All Follow-ups</h1>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FollowUpListTable />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default connect(null,)(AllFollowUpForm);