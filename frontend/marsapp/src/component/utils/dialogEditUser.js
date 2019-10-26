import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import api from "../../api";
import React, {useState} from "react";


export default function DialogEditUser () {


    const [show, setShow] = useState(false);
    let data = {
        id: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        country: "",
        phoneNumber: "",
        email: "",
        role: "",
    }

    const handleClose = () => {
        setShow(false)
    }
    const handleShow = () => {


        setShow(true);
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={data.firstName}
                                    />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        // value={this.data.lastName}
                                    />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="role"
                                        name="role"
                                        // value={this.data.role}

                                    />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="country"
                                        name="country"
                                        // value={this.data.country}
                                    />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="email"
                                        name="email"
                                        // value={this.data.email}

                                    />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        // value={this.data.phoneNumber}
                                    />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


