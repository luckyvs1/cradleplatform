/**
 * Class: AllFollowUpForm
 * Summary:
 *  Contains the contents and functionality of the FollowUp page.
 */

import React, {useState} from "react";
import TopNavigation from "../navigation/TopNavigation";
import {Button, Col, Container, Form, Modal, Row} from 'react-bootstrap';
import {connect} from "react-redux";
import FollowUpListTable from "../utils/FollowUpListTable"
import InlineError from "../messages/InlineError";

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
            showModal: false,


        };
    }

    addFollowUp = () => {
        this.setState({
            ...this.state,
            showModal:true,
        })
    }

    render() {
        const handleClose = () => {
            this.setState({
                ...this.state,
                showModal:false,
            })
        };
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
                            <FollowUpListTable/>
                        </Col>
                    </Row>
                    <Col className="text-right">
                        <Button variant="primary" onClick={this.addFollowUp}>
                            Add Follow Up
                        </Button>
                    </Col>
                </Container>


                <Modal show={this.state.showModal} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Follow Up </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


export default connect(null,)(AllFollowUpForm);