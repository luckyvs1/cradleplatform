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
import ReactTableContainer from "react-table-container";
import { FaPencilAlt } from 'react-icons/fa';


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
            readingData: [],
            drugHistoryData: [],
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
            if (patientData.sex === 'F') {
                patientData.sexFull = 'Female';
            } else if (patientData.sex === 'M') {
                patientData.sexFull = 'Male';
            }

            this.setState({patientData})
        })

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
                        day:'2-digit',
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
                    sexFull: "",
                }

                newState.push(row);
            }

            this.setState({readingData: newState})
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
                    <Tabs id="controlled-tab-example">
                        <Tab eventKey="patient_details" title="Patient Information">
                            <Row>
                                <Col >
                                    <strong>Attestation Number:</strong>
                                </Col>
                                <Col >
                                    {this.state.patientData.attestationNo}
                                </Col>
                                <Col >
                                    <strong>Village Number:</strong>
                                </Col>
                                <Col >
                                    {this.state.patientData.villageNo}
                                </Col>
                                <Col >
                                    <strong>Pregnant:</strong>
                                </Col>
                                <Col >
                                    {this.state.patientData.pregnant}
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    <strong>Initials:</strong>
                                </Col>
                                <Col >
                                    {this.state.patientData.initials}
                                </Col>
                                <Col >
                                    <strong>Zone Number:</strong>
                                </Col>
                                <Col >
                                    {this.state.patientData.zoneNo}
                                </Col>
                                <Col >
                                    <strong>Gestational Start:</strong>
                                </Col>
                                <Col >
                                    {this.state.patientData.gestationalStartDate}
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={2}>
                                    <strong>Age:</strong>
                                </Col>
                                <Col sm={2}>
                                    {this.state.patientData.age}
                                </Col>
                                <Col sm={2}>
                                    <strong>Date of Birth:</strong>
                                </Col>
                                <Col sm={2}>
                                    {this.state.patientData.dob}
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="reading_information" title="Reading Information">
                            <ReactTableContainer className="rtc"
                                                 width="auto"
                                                 height="350px"
                                                 scrollbarStyle={{
                                                     background: { backgroundColor: "transparent" },
                                                     backgroundFocus: { backgroundColor: "#f0f0f0" },
                                                     foreground: { backgroundColor: "#e2e2e2" },
                                                     foregroundFocus: { backgroundColor: "#acacac" }
                                                 }}
                            >
                                <table className="html-table">
                                    <thead>
                                    </thead>
                                    <tbody>
                                        {this.state.readingData.map(row => (
                                            <tr key={row.id}>
                                                <td className="text-center" style={statusGreen} >
                                                    <strong>-</strong>
                                                </td>
                                                <td>
                                                    <strong>{row.timestamp}</strong><br/>
                                                    <strong>{row.timestampTime}</strong>
                                                </td>
                                                <td>
                                                    <b>SYS:</b> {row.systolicBloodPressure}<br/>
                                                    <b>DIA:</b> {row.diastolicBloodPressure}<br/>
                                                    <b>Pulse (bpm):</b> {row.pulseRate}
                                                </td>
                                                <td>
                                                    <b>Pregnant:</b> Yes <br/>
                                                    <b>Gestational Age:</b> {row.gestationalAge} {row.gestationalAgeTimeUnit}
                                                </td>
                                                <td><b>Symptoms:</b> {row.symptoms}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </ReactTableContainer>
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


