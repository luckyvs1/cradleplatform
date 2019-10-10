/**
 * Class: CreateReferralForm
 * Summary:
 *  Contains the contents and functionality of the Create Referral page.
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

class CreateReferralForm extends React.Component {
    // funcitons
    // states
    // submit
    // validate

    render() {
        const patientOptions = [
            {
                key: '0123',
                text: '0123 - AA',
                value: '0123 - AA',
            },
            {
                key: '4567',
                text: '4567 - BB',
                value: '4567 - BB',
            },
            {
                key: '7899',
                text: '7899 - CC',
                value: '7899 - CC',
            },
        ];

        const readingOptions = [
            {
                key: '0123',
                text: '0123 - 2019/05/02 00:00:00',
                value: '0123  - 2019/05/02 00:00:00',
            },
            {
                key: '4567',
                text: '4567  - 2019/04/02 12:00:00',
                value: '4567  - 2019/04/02 12:00:00',
            },
            {
                key: '7899',
                text: '7899 - 2019/01/02 15:00:00',
                value: '7899 - 2019/01/02 15:00:00',
            },
        ];

        const facilityOptions = [
            {
                key: 'facility1',
                text: 'facility1',
                value: 'facility1',
            },
            {
                key: 'facility2',
                text: 'facility2',
                value: 'facility2',
            },
            {
                key: 'facility3',
                text: 'facility3',
                value: 'facility3',
            },
        ];

        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <h1>Create Referral</h1>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Patient</Form.Label>
                                            <Form.Control as="select">
                                                {patientOptions.map(patient => (
                                                    <option value={patient.value}>{patient.text}</option>
                                                ))}
                                            </Form.Control>
                                            {/* enable this for error handling */}
                                            {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Reading</Form.Label>
                                            <Form.Control as="select">
                                                {readingOptions.map(reading => (
                                                    <option value={reading.value}>{reading.text}</option>
                                                ))}
                                            </Form.Control>
                                            {/* enable his for error handling */}
                                            {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Facility</Form.Label>
                                            <Form.Control as="select">
                                                {facilityOptions.map(facility => (
                                                    <option value={facility.value}>{facility.text}</option>
                                                ))}
                                            </Form.Control>
                                            {/* enable his for error handling */}
                                            {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Example textarea</Form.Label>
                                            <Form.Control 
                                                as="textarea" 
                                                rows="3"
                                                placeholder="Additional comments and actions taken..." />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button variant="success" as={Link} to="referral">
                                            Create
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default CreateReferralForm;