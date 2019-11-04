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
import {withRouter} from "react-router-dom";

const statusGreen = {
    backgroundColor: "green"
};

const statusYellow = {
    backgroundColor: "yellow"
};

const statusRed = {
    backgroundColor: "red"
};

class PatientDetailForm extends React.Component {
    // functions
    // states
    // submit
    // validate
    constructor(props) {
        super(props);
        this.state = {
            readingData: [{
                id: 0,
                readerId: "",
                patientId: "",
                timestamp: "",
                symptoms: "",
                otherSymptoms: "",
                systolicBloodPressure: 0,
                diastolicBloodPressure: 0,
                pulseRate: 0,
                notes: "",
                needFollowup: false,
                appVersion: "",
                dateLastSaved: "",
                recheckVitalsDate: "",
                deviceInformation: "",
                gestationalAgeTimeUnit: "none",
                gestationalAge: 0,
                manuallyChangedOcrResults: "",
                photoPath: "",
                totalOcrSeconds: 0.0,
                region: "",
                ocrEnabled: false,
                uploadImages: false,
                vitalsTrafficLight: "Green",
                timestampTime: "",
                sexFull: "",
            }],
            patientData: [{
                id: 0,
                attestationNo: "",
                firstName: "",
                lastName: "",
                villageNo: "",
                zoneNo: "",
                householdNo: "",
                blockNo: "",
                tankNo: "",
                initials: "",
                sex: null,
                age: 0,
                dob: null,
                pregnant: "",
                gestationalStartDate: null,
                gestationAgeUnit: null,
                currentGestationalAge: 0,
            }],
        };
    }
    handleMedicationSubmit = () => {
        this.props.history.push({
            pathname: '/addMedication',
            medication:{
                pid: this.state.data.patient_id
            }
        });
    };
    componentDidMount(){
        const pid = this.props.location.state.pid;

        api.patient.getPatientById({id: pid}).then(res => {
            console.log("get patient id", res);

            const patientData = res.data;
            if (patientData.sex == 'F') {
                patientData.sexFull = 'Female';
            } else if (patientData.sex == 'M') {
                patientData.sexFull = 'Male';
            }

            this.setState({patientData})
        })

        api.reading.getReadingForPat({patient_id: pid}).then(res => {
            console.log("get reading id", res);

            const readingData = res.data[0];
            readingData.timestampTime = new Date(readingData.timestamp).toLocaleTimeString();
            readingData.timestamp = new Date().toLocaleDateString(undefined, {
                day:'2-digit',
                month: '2-digit',
                year: 'numeric',
            });

            this.setState({readingData})
        });
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
                            <strong>Attestation Number:</strong>
                        </Col>
                        <Col md={4}>                            
                            {this.state.patientData.attestationNo}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <strong>Initials:</strong>
                        </Col>
                        <Col md={4}>
                            {this.state.patientData.initials}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <strong>Sex:</strong>
                        </Col>
                        <Col md={4}>
                            {this.state.patientData.sexFull}
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={2}>
                            <strong>Age:</strong>
                        </Col>
                        <Col md={4}>
                            {this.state.patientData.age}
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
                                            {this.state.readingData.timestamp} <br/>
                                            {this.state.readingData.timestampTime}
                                        </td>
                                        <td>
                                            <b>SYS:</b> {this.state.readingData.systolicBloodPressure}<br/>
                                            <b>DIA:</b> {this.state.readingData.diastolicBloodPressure}<br/>
                                            <b>Pulse (bpm):</b> {this.state.readingData.pulseRate}
                                        </td>
                                        <td>
                                            <b>Pregnant:</b> Yes <br/>
                                            <b>Gestational Age:</b> {this.state.readingData.gestationalAge} {this.state.readingData.gestationalAgeTimeUnit}
                                        </td>
                                        <td><b>Symptoms:</b> {this.state.readingData.symptoms}</td>
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
                                <Button variant="primary" size="sm" onClick={() => this.handleMedicationSubmit()}>
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

export default withRouter(PatientDetailForm)


