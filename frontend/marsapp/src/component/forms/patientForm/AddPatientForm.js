/**
 * Class: AddPatientForm
 * Summary:
 *  Contains the contents and functionality of the AddPatient page.
 */

import React from "react";
import { Link } from "react-router-dom";
import TopNavigation from "../../navigation/TopNavigation";
import {
    Container,
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap';

class AddPatientForm extends React.Component {
    // funcitons
    // states
    // submit
    // validate

    render() {
        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <h1>Add Patient</h1>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Patient ID</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="patient_id"
                                        name="patient_id"
                                        placeholder="Patient ID" />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Initials</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="initials"
                                        name="initials"
                                        placeholder="Initials" />
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
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="age"
                                        name="age"
                                        placeholder="Age" />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Pregnant</Form.Label>
                                    <Form.Control as="select">
                                        <option value={'true'}>Yes</option>
                                        <option value={'False'}>No</option>
                                    </Form.Control>
                                    {/* enable his for error handling */}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Gestational Age</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="age"
                                        name="age"
                                        placeholder="Age" />
                                    {/* enable his for error handling */}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="success" as={Link} to="listPatient">
                                    Create
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default AddPatientForm;
