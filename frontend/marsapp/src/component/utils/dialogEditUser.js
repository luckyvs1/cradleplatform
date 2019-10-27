/*
    Edit Dialog for Users
    This will edit the UserInfo of the user
 */

import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import api from "../../api";
import React, {useState} from "react";
import InlineError from "../messages/InlineError";


export default function DialogEditUser (origData, {handleClick}) {
    const [show, setShow] = useState(false);
    const [data, setData] = useState(origData.value);
    const [errors, setErrors] = useState({});

    const handleClose = () => {
        setShow(false)
    };

    const handleShow = () => {
        setShow(true);
    };

    const handleSave = () => {
        // TODO: Getting 403 error. Need to resolve on backend

        const config = {
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            }
        };

        validate();
        console.log(errors);
        if(Object.keys(errors).length === 0) {
            console.log(data);
            api.userInfo.updateUserInfo(data, config);
        }
    };

    let validate = () => {
        const newErrors = {}
        if(data.role !== "VHT" && data.role !== "Healthworker" && data.role !== "Admin") {
            errors.role = "Role needs to be one of: VHT, Healthworker, or Admin";
        }
        setErrors(newErrors);
    };

    let onChange = e => setData({
        ...data,
        [e.target.name]: e.target.value
    });

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>

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
                                        onChange={onChange}
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
                                        value={data.lastName}
                                        onChange={onChange}
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
                                        value={data.role}
                                        onChange={onChange}
                                    />
                                    <Form.Text className="text-muted">
                                        {errors.role && <InlineError text={errors.role} />}
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="country"
                                        name="country"
                                        value={data.country}
                                        onChange={onChange}
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
                                        value={data.email}
                                        onChange={onChange}
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
                                        value={data.phoneNumber}
                                        onChange={onChange}
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
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


