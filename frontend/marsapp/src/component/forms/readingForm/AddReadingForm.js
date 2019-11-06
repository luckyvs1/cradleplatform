/**
 * Class: AddReadingForm
 * Summary:
 *  Contains the contents and functionality of the AddReading page.
 */

import React from "react";
import PropTypes from "prop-types";
import TopNavigation from "../../navigation/TopNavigation";
import {Button, Col, Container, Form, Row, InputGroup} from 'react-bootstrap';
import InlineError from "../../messages/InlineError";

class AddReadingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                readerId: 1,
                patientId: 1,
                timestamp: "2019-09-08",
                symptoms: "",
                otherSymptoms: "No other symptoms",
                systolicBloodPressure: 0,
                diastolicBloodPressure: 0,
                pulseRate: 0,
                notes: "No notes",
                needFollowUp: null,
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
                vitalsTrafficLight: "Green",
                diagnosis: "none"
            },
            checkBox: {
                blurred: false,
                feverish: false,
                abdominal: false,
                unwell: false,
                noSymptoms: false,
                headache: false,
                bleeding: false,
            },
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.handleIsItChecked = this.handleIsItChecked.bind(this);

    }

    handleIsItChecked() {

    }

    onChange = e => {

        if(e.target.name == "needFollowUp"){
            this.setState({
                ...this.state,
                data:{
                    needFollowUp:e.target.value
                }
            })
        }
        if (e.target.type == "checkbox") {
            this.setState({
                ...this.state,
                checkBox: {
                    ...this.state.checkBox,
                    [e.target.name]: e.target.value
                }
            })
        } else {
            this.setState({
                ...this.state,
                data: {
                    ...this.state.data,
                    [e.target.name]: e.target.value
                }

            });
        }
        console.log("STATE ", this.state);
    }
    onPickColor(e){
        console.log('[onPickColor]', e.target)
    }
    onOptionChange = e => {
        this.setState({
            value: e.target.value
        });
    }

    submit = event => {
        console.log("Submit clicked : ", event)
        if (event) {
            this.props.submit(this.state.data)
        }
    };

    validate = (data) => {
        const errors = {};
        var emptyFieldsWarning = "Field cannot be blank";
        if (!data.patient_id) {
            errors.patient_id = emptyFieldsWarning;
        } else if (!data.reader_id) {
            errors.reader_id = emptyFieldsWarning;
        }
        return errors;
    }

    render() {
        console.log(this.props.dataFromParent)

        const {data, errors} = this.state;
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
                                    {errors.patientId && <InlineError text={errors.patientId}/>}
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
                                        onChange={this.onChange}/>
                                    {/*error handling*/}
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
                                        inputRef={ el => this.inputEl=el }
                                        value={data.systolicBloodPressure}
                                        onChange={this.onChange}/>
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
                                        onChange={this.onChange}/>
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
                                        onChange={this.onChange}/>
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
                                        onChange={this.onChange}/>
                                    {/* enable his for error handling */}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Gestational Age Unit</Form.Label>
                                    <Form.Control as="select"
                                                  name="gestationalAgeTimeUnit"
                                                  id="gestationalAgeTimeUnit"
                                                  onChange={this.onChange}
                                                  value={data.gestationalAgeTimeUnit}>
                                        <option value={'weeks'}>Weeks</option>
                                        <option value={'months'}>Months</option>
                                        <option value={'none'}>None</option>
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
                                        onChange={this.onChange}/>
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-2">

                                    <Col>
                                        <Form.Label>Symptoms</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control inline size={'sm'} type={"checkbox"} onChange={this.onChange} name={'noSymptoms'}
                                                      aria-label={"No Symptoms"} checked={this.state.checkBox.noSymptoms}/>
                                    </Col>

                                    {/*<input type={"checkbox"}  onChange={this.onChange} name={'headache'} aria-label="Headache" checked={this.state.checkBox.headache}/>*/}
                                    {/*<input type={"checkbox"}  onChange={this.onChange} name={'bleeding'} aria-label="Bleeding" checked={this.state.checkBox.bleeding}/>*/}

                            {/*<Col>*/}
                            {/*    <Form.Group>*/}
                            {/*        <Form.Label></Form.Label>*/}
                            {/*        /!*<input type={"checkbox"}  onChange={this.onChange} name={'blurred'} aria-label="Blurred" checked={this.state.checkBox.blurred}/>*!/*/}
                            {/*        /!*<input type={"checkbox"}  onChange={this.onChange} name={'feverish'} aria-label="Feverish" checked={this.state.checkBox.feverish}/>*!/*/}
                            {/*        /!*<input type={"checkbox"}  onChange={this.onChange} name={'abdominal'} aria-label="Adbdominal" checked={this.state.checkBox.abdominal}/>*!/*/}
                            {/*        /!*<input type={"checkbox"}  onChange={this.onChange} name={'unwell'} aria-label="Unwell" checked={this.state.checkBox.unwell}/>*!/*/}
                            {/*    </Form.Group>*/}
                            {/*</Col>*/}
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
                                        onChange={this.onChange}/>
                                </Form.Group>

                            </Col>
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
                                        onChange={this.onChange}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>

                            {this.props.dataFromParent ?
                                <Col className={"text-right"}>
                                    <Button primary onClick={this.submit}>Process Reading</Button>
                                </Col>
                                : null
                            }

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