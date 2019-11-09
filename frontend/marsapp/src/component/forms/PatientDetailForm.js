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
import ReadingTable from "./ReadingTable";


class PatientDetailForm extends React.Component {
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

            this.setState({patientData})
        })

        api.reading.getReadingForPatient({patient_id: pid, latest: false}).then(async res => {
            // console.log("get reading id", res);

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
                    symptoms: readingData[i].symptoms,
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
                    pregnant: readingData[i].pregnant,
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
                    <Tabs id="controlled-tab-example">
                        <Tab eventKey="reading_information" title="Reading Information">
                            <ReadingTable />
                            <Row>
                                <Col className={"text-right"}>
                                    <Button variant="success" size="sm" as={Link} to="addReadingDetail">New
                                        Reading</Button>&nbsp;
                                    <Button variant="primary" size="sm">View List</Button>&nbsp;
                                    <GraphDialog/>
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
                                            placeholder="Enter Medical History Notes"/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className={"text-right"}>
                                    <Button variant="warning" size="sm" className={"text-right"}>
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
                                            placeholder="Enter Drug History Notes"/>
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

