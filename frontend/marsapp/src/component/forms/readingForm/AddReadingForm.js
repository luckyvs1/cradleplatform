/**
 * Class: AddReadingForm
 * Summary:
 *  Contains the contents and functionality of the AddReading page.
 */

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TopNavigation from "../../navigation/TopNavigation";
import {
    Container,
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap';

class AddReadingForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:{
                id: "",
                initials: "",
                age: "",
                pregnant: "No",
                gestational_age: "none",
                systolic_bp: "",
                diastolic_bp: "",
                pulse_rate: "",
                notes: ""},
            isLoading: false,
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange = event => this.setState({data: {...this.state.data, [event.target.name]: event.target.value}});
    onSubmit = (event) => {
        event.preventDefault();
        const err = this.validate(this.state.data);
        this.setState({err});
        if(Object.keys(err).length === 0){
            this.props.submit(this.state.data);
        }
    };
    validate = (data) => {
        const err = {};
        var emptyFieldsWarning = "This field cannot be blank";
        if(!data.id) err.id = emptyFieldsWarning;
        return err;
    }
    render() {
        const{data, err} = this.state;
        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <h1>Add Reading</h1>
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
                            <Col md={4}>
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
                            <Col md={4}>
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
                            <Col md={4}>
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
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Blood Pressure</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="blood_pressure"
                                        name="blood_pressure"
                                        placeholder="Blood Pressure" />
                                    {/* enable his for error handling */}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>DP</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="dp"
                                        name="dp"
                                        placeholder="DP" />
                                    {/* enable his for error handling */}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Heart Rate</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="heart_rate"
                                        name="heart_rate"
                                        placeholder="Heart Rate" />
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
                                    <Form.Label>Other Symptoms</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="3"
                                        placeholder="Additional Symptoms" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col>
                                <Button variant="outline-primary" size="sm">No Symptoms</Button>&nbsp;
                                    <Button variant="outline-primary" size="sm">Headache</Button>&nbsp;
                                    <Button variant="outline-primary" size="sm">Bleeding</Button>&nbsp;
                                    <Button variant="outline-primary" size="sm">Blurred Vision</Button>&nbsp;
                                    <Button variant="outline-primary" size="sm">Feverish</Button>&nbsp;
                                    <Button variant="outline-primary" size="sm">Adbdominal pain</Button>&nbsp;
                                    <Button variant="outline-primary" size="sm">Unwell</Button>&nbsp;
                                </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="success" as={Link} to="patientDetail">
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

AddReadingForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default AddReadingForm;