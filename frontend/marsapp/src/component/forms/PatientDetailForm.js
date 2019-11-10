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
import GreenResponse from "../utils/GreenResponse";
import RedResponse from "../utils/RedResponse";
import TriangleResponseReading from "../utils/YellowResponse";

class PatientDetailForm extends React.Component {
    // functions
    // states
    // submit
    // validate
    constructor(props) {
        super(props);
        this.state = {
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
                sexFull: "",
            }],
            readingData: [],
            followUpData: [],
        };
    }

    componentDidMount() {
        const pid = this.props.location.state.pid;

        api.patient.getPatientById({id: pid}).then(res => {
            console.log("get patient id", res);

            const patientData = res.data;

            if (patientData.sex === 'F') {
                patientData.sexFull = 'Female';
            } else if (patientData.sex === 'M') {
                patientData.sexFull = 'Male';
            }

            patientData.dob = new Date (patientData.dob).toLocaleDateString();
            patientData.gestationalStartDate = new Date (patientData.gestationalStartDate).toLocaleDateString();

            this.setState({patientData})
        });

        api.reading.getReadingForPatient({patient_id: pid, latest: false}).then(async res => {
            console.log("get reading id", res);

            const readingData = res.data;
            let newState = [];

            for (let i = 0; i < readingData.length; i++) {
                let row = {
                    id: readingData[i].id,
                    readerId: readingData[i].readerId,
                    patientId: readingData[i].patientId,
                    timestamp: new Date(readingData[i].timestamp).toLocaleDateString(undefined, {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                    }),
                    symptoms: readingData[i].symptoms.replace(/,/g, ', '),
                    otherSymptoms: readingData[i].otherSymptoms,
                    systolicBloodPressure: readingData[i].systolicBloodPressure,
                    diastolicBloodPressure: readingData[i].diastolicBloodPressure,
                    pulseRate: readingData[i].pulseRate,
                    notes: readingData[i].notes,
                    needFollowup: readingData[i].needFollowup,
                    gestationalAgeTimeUnit: readingData[i].gestationalAgeTimeUnit,
                    gestationalAge: readingData[i].gestationalAge,
                    timestampTime: new Date(readingData[i].timestamp).toLocaleTimeString(),
                    vitalsTrafficLight: readingData[i].vitalsTrafficLight,
                }

                newState.push(row);
            }

            this.setState({readingData: newState})
        });

        api.followUp.getFollowUpByPatientId({patient_id: pid, latest: false}).then(async res => {
            console.log("get follow up", res);

            const followUpData = res.data;
            let newState = [];

            for (let i = 0; i < followUpData.length; i++) {
                let row = {
                    id: followUpData[i].id,
                    patientId: followUpData[i].patientId,
                    followUpNotes: followUpData[i].followUpNotes,
                    required: followUpData[i].required,
                    frequency: followUpData[i].frequency,
                    diagnosis: followUpData[i].diagnosis,
                    treatment: followUpData[i].treatment,
                }

                newState.push(row);
            }

            this.setState({followUpData: newState})
        });
    }

    render() {
        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <h1>PATIENT DETAILS</h1>
                            <hr></hr>
                        </Col>
                    </Row>
                    <div id={'pat-detail'}>
                        <Row>
                            <Col>
                                <strong>Attestation Number:</strong>
                                <div>
                                    {this.state.patientData.attestationNo}
                                </div>
                            </Col>

                            <Col>
                                <strong>Village Number:</strong>
                                <div>
                                    {this.state.patientData.villageNo}
                                </div>
                            </Col>
                            <Col>
                                <strong>Pregnant:</strong>
                                <div>
                                    {this.state.patientData.pregnant}
                                </div>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <strong>Initials: </strong>
                                <div>
                                    {this.state.patientData.initials}
                                </div>
                            </Col>

                            <Col>
                                <strong>Zone Number:</strong>
                                <div>
                                    {this.state.patientData.zoneNo}
                                </div>
                            </Col>
                            <Col>
                                <strong>Gestational Start:</strong>
                                <div>
                                    {this.state.patientData.gestationalStartDate}
                                </div>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <strong>Age:</strong>
                                <div>
                                    {this.state.patientData.age}
                                </div>
                            </Col>
                            <Col>
                                <strong>Date of Birth:</strong>
                                <div>
                                    {this.state.patientData.dob}
                                </div>
                            </Col>
                            <Col>
                                <strong>Sex:</strong>
                                <div>
                                    {this.state.patientData.sexFull}
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Tabs class="nav nav-tabs">
                        <Tab eventKey="reading_information" title="Reading Information">
                            <div className="table-wrapper-scroll-y my-custom-scrollbar rtc"
                                            scrollbarStyle={{
                                                background: {backgroundColor: "transparent"},
                                                backgroundFocus: {backgroundColor: "#f0f0f0"},
                                                foreground: {backgroundColor: "#e2e2e2"},
                                                foregroundFocus: {backgroundColor: "#acacac"}
                                            }}>
                                <table className="table table-hover">
                                    <thead>
                                    <tr>
                                        <th scope="col">Date & Time</th>
                                        <th scope="col">Traffic Light</th>
                                        <th scope="col">Systolic</th>
                                        <th scope="col">Diastolic</th>
                                        <th scope="col">Pulse Rate</th>
                                        <th scope="col">Gestational Age</th>
                                        <th scope="col">Symptoms</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.readingData.map(row => (
                                        <tr key={row.id}>
                                            <td>
                                                {row.timestamp}<br/>
                                                {row.timestampTime}
                                            </td>
                                            <td className="text-center" id={'first'}>
                                                {row.vitalsTrafficLight === "Green" ?
                                                    <GreenResponse/> : null
                                                }
                                                {row.vitalsTrafficLight === "Yellow_up" ?
                                                    <TriangleResponseReading isUp={true}/> : null
                                                }
                                                {row.vitalsTrafficLight === "Yellow_down" ?
                                                    <TriangleResponseReading isUp={false}/> : null
                                                }
                                                {row.vitalsTrafficLight === "Red_up" ?
                                                    <RedResponse isUp={true}/> : null
                                                }
                                                {row.vitalsTrafficLight === "Red_down" ?
                                                    <RedResponse isUp={false}/> : null
                                                }
                                            </td>
                                            <td> {row.systolicBloodPressure} </td>
                                            <td> {row.diastolicBloodPressure} </td>
                                            <td> {row.pulseRate} </td>
                                            <td> {row.gestationalAge} {row.gestationalAgeTimeUnit} </td>
                                            <td> {row.symptoms} </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            <Row>
                                <Col/>
                                <Col/>
                                <Col className={"text-right"}>
                                    <Button variant="success" size="sm" as={Link} to="addReadingDetail">New
                                        Reading</Button>&nbsp;
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
                                            placeholder="Medical History Notes go here..."/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className={"text-right"}>
                                    <Button variant="warning" size="sm">
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
                                            placeholder="Drug history notes go here..."/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className={"text-right"}>
                                <Button variant="warning" size="sm">
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
                        </Tab>
                        <Tab eventKey="follow_ups" title="Follow Ups">
                            <div className="table-wrapper-scroll-y my-custom-scrollbar rtc"
                                 scrollbarStyle={{
                                     background: {backgroundColor: "transparent"},
                                     backgroundFocus: {backgroundColor: "#f0f0f0"},
                                     foreground: {backgroundColor: "#e2e2e2"},
                                     foregroundFocus: {backgroundColor: "#acacac"}
                                 }}>
                                <table className="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th scope="col">Required</th>
                                        <th scope="col">Frequency</th>
                                        <th scope="col">Diagnosis</th>
                                        <th scope="col">Treatments</th>
                                        <th scope="col">Notes</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.followUpData.map(row => (
                                        <tr key={row.id}>
                                            <td>  {row.required === "1" ?
                                                    "Follow Up Required" : "Follow Up Not Required"}
                                            </td>
                                            <td> {row.frequency} </td>
                                            <td> {row.diagnosis} </td>
                                            <td> {row.treatment} </td>
                                            <td> {row.followUpNotes} </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
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
