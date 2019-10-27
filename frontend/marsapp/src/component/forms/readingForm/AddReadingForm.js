/**
 * Class: AddReadingForm
 * Summary:
 *  Contains the contents and functionality of the AddReading page.
 */

import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import TopNavigation from "../../navigation/TopNavigation";
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import api from "../../../api";
import InlineError from "../../messages/InlineError";

class AddReadingForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:{
                readerId: 1,
                patientId: 1,
                timestamp: "2019-09-08",
                symptoms: "No symptoms",
                otherSymptoms: "No other symptoms",
                systolicBloodPressure: 0,
                diastolicBloodPressure: 0,
                pulseRate: 0,
                notes: "No notes",
                needFollowUp: false,
                appVersion: "3",
                dateLastSaved: "2019-10-03",
                recheckVitalsDate: "2019-11-10",
                deviceInformation: "Unknown",
                gestationalAgeTimeUnit: "none",
                gestationalAge: 3,
                manuallyChangedOcrResults: "No",
                photoPath: "Unavailable",
                totalOcrSeconds: 0.0,
                region: "Unknown",
                ocrEnabled: false,
                uploadImages: false,
                vitalsTrafficLight: "Green"},
            isLoading: false,
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // onChange = (event) => {
    //     console.log('here');
    //     data: {
    //         ...this.state.data,
    //         [e.target.name]: e.target.value
    //     }
    // };

    onChange = e =>  {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        });
    }

    onOptionChange = e => {
        this.setState({
            value: e.target.value
        });
    }

    onSubmit = (event) => {
        api.reading.addAReading(this.state.data)
            .then(response => {
                console.log(response);
            });
        event.preventDefault();
        const err = this.validate(this.state.data);
        this.setState({ err });
        if (Object.keys(err).length === 0) {
            // this.props.submit(this.state.data);
            console.log('submitted');
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
                    <Form onSubmit={this.onSubmit}>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Patient ID</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="patientID"
                                        name="patientId"
                                        placeholder="Patient ID" 
                                        value={data.patientId} 
                                        onChange={this.onChange}/>
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Reader ID</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="readerId"
                                        name="readerId"
                                        placeholder="Reader Id"
                                        value={data.readerId}
                                        onChange={this.onChange} />
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
                                        <option value={'false'}>No</option>
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
                                    <Form.Control as="select" 
                                        name="needFollowUp" 
                                        id="needFollowUp" 
                                        onChange={this.onChange} 
                                        value={data.needFollowUp}>
                                        <option value={'true'}>Yes</option>
                                        <option value={'false'}>No</option>
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
                                        id="systolicBloodPressure"
                                        name="systolicBloodPressure"
                                        placeholder="Systolic Blood Pressure" 
                                        value={data.systolicBloodPressure}
                                        onChange={this.onChange} />
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
                                        id="diastolicBloodPressure"
                                        name="diastolicBloodPressure"
                                        placeholder="Diastolic Blood Pressure"
                                        value={data.diastolicBloodPressure}
                                        onChange={this.onChange} />
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
                                        id="pulseRate"
                                        name="pulseRate"
                                        placeholder="Heart Rate"
                                        value={data.pulseRate}
                                        onChange={this.onChange} />
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
                                        id="gestationalAge"
                                        name="gestationalAge"
                                        placeholder="Age"
                                        value={data.gestationalAge}
                                        onChange={this.onChange} />
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
                                        placeholder="Region"
                                        value={data.region}
                                        onChange={this.onChange} />
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
                                        id="otherSymptoms"
                                        name="otherSymptoms"
                                        placeholder="additional_symptoms"
                                        value={data.otherSymptoms}
                                        onChange={this.onChange} />
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
                                        id="notes"
                                        name="notes"
                                        placeholder="Notes"
                                        value={data.notes}
                                        onChange={this.onChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="success" type="submit">
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