/**
 * Class: PatientDetailForm
 * Summary:
 *  Contains the contents and functionality of the Patient Detail page.
 */

import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {Link} from "react-router-dom";
import api from "../../api";
import TopNavigation from "../navigation/TopNavigation";
import {Button, Col, Container, Form, Row, Table} from 'react-bootstrap';
import GraphDialog from "../utils/GraphDialog"

const statusGreen = {
    backgroundColor: "green"
};

const statusYellow = {
    backgroundColor: "yellow"
};

const statusRed = {
    backgroundColor: "red"
};

export default class PatientDetailForm extends React.Component {
    // functions
    // states
    // submit
    // validate
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 0,
                reader_id: "",
                patient_id: "",
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
                reading_analysis: "Green",
            }],
        };
    }

    componentDidMount(){
        //api.followUp.getFollowUpByFollowUpId({followUpId: 22}).then(res => {
        //api.reading.getReadingsById({readingId: 32}).then (res => {
        api.reading.getReadingForPat({followUpId: 32}).then(res => {
            console.log("by reading id", res); const data = res.data;
            this.setState({data})
        })
    }

    render() {
        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <h1>Patient Details</h1>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <strong>Patient ID:</strong>
                        </Col>
                        <Col md={4}>                            
                            0123456
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <strong>Initials:</strong>
                        </Col>
                        <Col md={4}>
                            AS
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <strong>Sex:</strong>
                        </Col>
                        <Col md={4}>
                            Female
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={2}>
                            <strong>Age:</strong>
                        </Col>
                        <Col md={4}>
                            33
                        </Col>
                    </Row>
                    <Tabs id="controlled-tab-example">
                        <Tab eventKey="reading_information" title="Reading Information">
                            <Table bordered hover size="sm">
                                <tbody>
                                    <tr>
                                        <td className="text-center" style={statusGreen}>
                                            <strong>-</strong>
                                        </td>
                                        <td>
                                            {this.state.data.timestamp}
                                        </td>
                                        <td>
                                            <b>BP/DP:</b> {this.state.data.systolic_bp} / {this.state.data.diastolic_bp}<br/>
                                            <b>Heart Rate (bpm):</b> {this.state.data.pulse_rate}
                                        </td>
                                        <td>
                                            <b>Pregnant:</b> Yes<br />
                                            <b>Gestational Age:</b> {this.state.data.gestational_age} {this.state.data.gestational_age_unit}
                                        </td>
                                        <td><b>Symptoms:</b> {this.state.data.symptoms}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center" style={statusYellow}>
                                            <strong>v</strong>
                                        </td>
                                        <td>2019/01/02</td>
                                        <td>
                                            <b>BP/DP:</b> 180/80 <br />
                                            <b>Heart Rate (bpm):</b> 80
                                            </td>
                                        <td>
                                            <b>Pregnant:</b> Yes<br />
                                            <b>Gestational Age:</b> 3 Months
                                            </td>
                                        <td><b>Symptoms:</b> ...</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center" style={statusYellow}>
                                            <strong>v</strong>
                                        </td>
                                        <td>2019/01/02</td>
                                        <td>
                                            <b>BP/DP:</b> 180/80 <br />
                                            <b>Heart Rate (bpm):</b> 80
                                            </td>
                                        <td>
                                            <b>Pregnant:</b> Yes<br />
                                            <b>Gestational Age:</b> 3 Months
                                            </td>
                                        <td><b>Symptoms:</b> ...</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center" style={statusRed}>
                                            <strong>o</strong>
                                        </td>
                                        <td>2019/01/02</td>
                                        <td>
                                            <b>BP/DP:</b> 180/80 <br />
                                            <b>Heart Rate (bpm):</b> 80
                                            </td>
                                        <td>
                                            <b>Pregnant:</b> Yes<br />
                                            <b>Gestational Age:</b> 3 Months
                                            </td>
                                        <td><b>Symptoms:</b> ...</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Row>
                                <Col>
                                    <Button variant="success" size="sm" as={Link} to="addReadingDetail">New Reading</Button>&nbsp;
                                    <Button variant="primary" size="sm">View List</Button>&nbsp;
                                    <GraphDialog></GraphDialog>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="medical_history" title="Medical History">
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Control
                                            as="textarea"
                                            rows="6"
                                            placeholder="Medical History Notes go here..." />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button variant="warning">
                                        Save Changes
                                    </Button>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="drug_history" title="Drug History">
                            <Table bordered hover size="sm">
                                <thead>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Drug</th>
                                    <th>Dosage</th>
                                    <th>Side Effects</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2019/02/02</td>
                                        <td> -</td>
                                        <td>drugname1</td>
                                        <td>1 tablet twice a day</td>
                                        <td>Sleepiness</td>
                                    </tr>
                                    <tr>
                                        <td>2018/12/02</td>
                                        <td>2019/01/22</td>
                                        <td>drugname2</td>
                                        <td>1 tablet twice a day</td>
                                        <td>None</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Control
                                            as="textarea"
                                            rows="3"
                                            placeholder="Drug history notes go here..." />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button variant="warning">
                                        Save Changes
                                    </Button>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="current_medication" title="Current Medication">
                            <Table bordered hover size="sm">
                                <thead>
                                    <th>Start Date</th>
                                    <th>Drug</th>
                                    <th>Dosage</th>
                                    <th>Side Effects</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2019/02/02</td>
                                        <td>drugname1</td>
                                        <td>1 tablet twice a day</td>
                                        <td>Sleepiness</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div style={{float: 'right'}}>
                                <Button variant="primary" size="sm" as={Link} to="addMedication">
                                    Add New Medication
                                </Button>
                            </div>
                        </Tab>
                        <Tab eventKey="follow_ups" title="Follow Ups">
                            <Table bordered hover size="sm">
                                <thead>
                                    <th>VHT</th>
                                    <th>Location</th>
                                    <th>Frequency</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John Smith</td>
                                        <td>Village No. 1</td>
                                        <td>Once every 2 Weeks</td>
                                        <td>2019/09/18</td>
                                        <td>N/A</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                    </Tabs>
                </Container>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userid: state.data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateReadings: (data) => {
            dispatch({type: "readings", data: data})
        }
    }
};



