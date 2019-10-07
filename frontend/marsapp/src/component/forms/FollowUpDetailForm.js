/**
 * Class: FollowUpDetailForm
 * Summary:
 *  Contains the contents and functionality of the Follow Up Detail page.
 */

import React from "react";
import TopNavigation from "../navigation/TopNavigation";
import {
    Row,
    Col,
    Form,
    Button,
    Container
} from 'react-bootstrap';

class FollowUpDetailForm extends React.Component {
    // funcitons
    // states
    // submit
    // validate

    render() {
        const alertOptions = [
            {
                key: 'No Alert',
                text: 'No Alert',
                value: 'No Alert',
            },
            {
                key: 'Once a week',
                text: 'Once a week',
                value: 'Once a week',
            },
            {
                key: 'Once a month',
                text: 'Once a month',
                value: 'Once a month',
            }
        ];

        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <h1>Follow up Details</h1>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Patient</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="patient"
                                    name="patient"
                                    value={'0123456'} />
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
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={'0123456'} />
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
                                <Form.Label>Status</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="status"
                                    name="status"
                                    value={'0123456'} />
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
                                <Form.Label>Frequency</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="frequency"
                                    name="frequency"
                                    value={'0123456'} />
                                {/*error handling*/}
                                {/* <Form.Text className="text-muted">
                                    {errors.email && <InlineError text={errors.email} />}
                                </Form.Text> */}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    id="start_date"
                                    name="start_date"/>
                                {/*error handling*/}
                                {/* <Form.Text className="text-muted">
                                    {errors.email && <InlineError text={errors.email} />}
                                </Form.Text> */}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>End Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    id="end_date"
                                    name="end_date" />
                                {/*error handling*/}
                                {/* <Form.Text className="text-muted">
                                    {errors.email && <InlineError text={errors.email} />}
                                </Form.Text> */}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col>
                            <Form.Group>
                                <Form.Label>Alerts</Form.Label>
                                <Form.Control as="select">
                                    {alertOptions.map(alert => (
                                        <option key={alert.value} value={alert.value}>{alert.text}</option>
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
                            <Button variant="warning">Edit</Button>
                            &nbsp;
                            <Button variant="success">Mark as Done</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default FollowUpDetailForm;