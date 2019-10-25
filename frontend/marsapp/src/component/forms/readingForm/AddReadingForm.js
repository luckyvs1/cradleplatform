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
                id: 0,
                reader_id: "",
                patient_id: 0,
                timestamp: "",
                symptoms: "",
                other_symptoms: "",
                systolic_bp: 0,
                diastolic_bp: 0,
                pulse_rate: 0,
                notes: "",
                need_followup: false,
                app_version: "",
                date_last_saved: "",
                date_recheck_vitals_needed: "",
                device_info: "",
                gestational_age_unit: "none",
                gestational_age: 0,
                manually_changes_OCR_results: "",
                path_to_photo: "",
                total_OCR_seconds: 0.0,
                region: "",
                OCR_enabled: false,
                upload_images: false,
                reading_analysis: "Green"},
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
        const errors = {};
        var emptyFieldsWarning = "This field cannot be blank";
        if(!data.patient_id) errors.patient_id = emptyFieldsWarning;
        if(!data.reader_id) errors.reader_id = emptyFieldsWarning;
        return errors;
    }
    render() {
        const{ data, errors } = this.state;
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
                                    <Form.Label>Reader ID</Form.Label>
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
                                    <Form.Label>Needs Follow-up</Form.Label>
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
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Systolic Blood Pressure</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="systolic_bp"
                                        name="systolic_bp"
                                        placeholder="Systolic Blood Pressure" />
                                    {/* enable his for error handling */}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Diastolic Blood Pressure</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="diastolic_bp"
                                        name="distolic_bp"
                                        placeholder="Diastolic Blood Pressure" />
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
                                    <Form.Label>Gestational Age Unit</Form.Label>
                                    <Form.Control as="select">
                                        <option value={'Weeks'}>Weeks</option>
                                        <option value={'Months'}>Months</option>
                                        <option value={'None'}>None</option>
                                    </Form.Control>
                                    {/* enable his for error handling */}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Region</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="region"
                                        name="region"
                                        placeholder="Region" />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col>
                                <Form.Label>Symptoms</Form.Label><br></br>
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
                                <Form.Group>
                                    <Form.Label>Additional Symptoms</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="3"
                                        placeholder="additional_symptoms" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Notes</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="3"
                                        placeholder="Notes" />
                                </Form.Group>
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