/**
 * Class: AllFollowUpForm
 * Summary:
 *  Contains the contents and functionality of the FollowUp page.
 */

import React from "react";
import TopNavigation from "../navigation/TopNavigation";
import {Col, Container, Row, Button, Modal, Form} from 'react-bootstrap';
import {connect} from "react-redux";
import FollowUpListTable from "../utils/FollowUpListTable"
import api from "../../api"
import ConfirmAlert from "../utils/ConfirmAlert";
import ErrorAlert from "../utils/ErrorAlert";

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
            addData: {
                diagnosis: "",
                followUpNotes: "",
                frequency: "",
                id: null,
                patientId: "",
                required: false,
                treatment: "",
            },
            showModal: false,
            isShowConfirm: false,
            isShowError: false,
            message: ""
        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        console.log(event.target)
        this.setState({
            ...this.state,
            addData: {...this.state.addData, [event.target.name]: event.target.value}
        });
    }


    addFollowUp = () => {
        this.setState({
            ...this.state,
            showModal: true,
        })
    }

    handleSubmit = (e) => {
        api.followUp.addFollowUp(this.state.addData).then(res => {
            if (res) {
                this.setState({
                    ...this.state,
                    showModal: false,
                })
                this.onShowAlert("New Follow Up Added", true);
            }
        }).catch(error => {
            this.setState({
                ...this.state,
                showModal: false,
            })
            this.onShowAlert("Failed To Add New Follow Up", false);
        })
    }
    onShowAlert = (message, isConfirm) => {
        if (isConfirm) {
            this.setState({
                    isShowConfirm: true,
                    message: message
                },
                () => {
                    window.setTimeout(() => {
                        this.setState({
                            isShowConfirm: false,
                            message: message
                        })
                        window.location.reload();
                    }, 2000)
                });
        } else {
            this.setState({
                    isShowError: true,
                    message: message
                },
                () => {
                    window.setTimeout(() => {
                        this.setState({
                            isShowError: false,
                            message: message
                        })
                    }, 2000)
                });
        }
    }


    render() {
        const handleClose = () => {
            this.setState({
                ...this.state,
                showModal: false,
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
                        <FollowUpListTable/>
                    </Row>
                    <Col className="text-right">
                        <Button variant="primary" onClick={this.addFollowUp}>
                            Add Follow Up
                        </Button>
                    </Col>
                    <ConfirmAlert show={this.state.isShowConfirm} message={this.state.message}></ConfirmAlert>
                    <ErrorAlert show={this.state.isShowError} message={this.state.message}></ErrorAlert>
                </Container>


                <Modal show={this.state.showModal} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Follow Up </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Patient Id</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="patient"
                                            name="patientId"
                                            onChange={this.handleChange}
                                            value={this.state.addData.patientId}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Follow Up Note:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="followUpNotes"
                                            name="followUpNotes"
                                            onChange={this.handleChange}
                                            value={this.state.addData.followUpNotes}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Diagnosis</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="diagnosis"
                                            name="diagnosis"
                                            onChange={this.handleChange}
                                            value={this.state.addData.diagnosis}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Treatment</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="treatment"
                                            name="treatment"
                                            onChange={this.handleChange}
                                            value={this.state.addData.treatment}/>
                                    </Form.Group>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Frequency</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="frequency"
                                            name="frequency"
                                            onChange={this.handleChange}
                                            value={this.state.addData.frequency}/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Label>Required</Form.Label>
                                    <Form.Control as="select"
                                                  name="required"
                                                  id="required"
                                                  onChange={this.handleChange}
                                                  value={this.state.addData.required}>
                                        <option value={'true'}>Yes</option>
                                        <option value={'false'}>No</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleSubmit}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


export default connect(null,)(AllFollowUpForm);