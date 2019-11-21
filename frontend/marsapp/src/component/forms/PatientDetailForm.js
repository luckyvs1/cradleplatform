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
import ErrorAlert from "../utils/ErrorAlert";

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
            medicalHistoryData: [],
            isShowError: false,
            message: ""
        };
    }
    handleMedicationSubmit = () => {
        api.drug.getDrugHistoryByPatientId({patient_id: this.state.patientData.id}).then(res => {
            if(res.data == null){
                this.onShowAlert("Patient has no Drug History. Please contact your admin.", true);
            }else{
                this.props.history.push({
                    pathname: '/addMedication',
                    medication:{
                        drug_id: res.data.id
                    }
                });
            }
        });
    };
    onShowAlert = (message, show) => {
        this.setState({
            ...this.state,
            isShowError: show,
            message: message
        }, () => {
            window.setTimeout(() => {
                this.setState({
                    ...this.state,
                    isShowError: false
                })
            }, 2000)
        });
    }
    componentDidMount() {
        const pid = this.props.location.state.pid;

        api.patient.getPatientById({id: pid}).then(res => {
            const patientData = res.data;

            if (patientData.sex === 'F') {
                patientData.sexFull = 'Female';
            } else if (patientData.sex === 'M') {
                patientData.sexFull = 'Male';
            } else if (patientData.sex === 'Other') {
                patientData.sexFull = 'Other';
            }

            if (patientData.dob != null) {
                patientData.dob = this.formatDate(patientData.dob);
            } else {
                patientData.dob = "";
            }

            if (patientData.gestationalStartDate != null) {
                patientData.gestationalStartDate = this.formatDate(patientData.gestationalStartDate)
            } else {
                patientData.gestationalStartDate = "";
            }

            this.setState({patientData})
        });

        api.reading.getReadingForPatient({patient_id: pid, latest: false}).then(async res => {
            const readingData = res.data;
            let newState = [];
            console.log("reading", res);

            for (let i = 0; i < readingData.length; i++) {
                let row = {
                    id: readingData[i].id,
                    readerId: readingData[i].readerId,
                    patientId: readingData[i].patientId,
                    timestamp: this.formatDate(new Date(readingData[i].timestamp)),
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
                    diagnosis: readingData[i].diagnosis,
                }

                newState.push(row);
            }
            this.setState({readingData: newState})
        });

        api.followUp.getFollowUpByPatientId({patient_id: pid, latest: false}).then(async res => {
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

        api.medicalHistory.getLastMedicalHistoryByPatientId({id: pid, latest: false}).then(async res => {
            this.setState({medicalHistoryData: res.data});
        })
    }

    formatDate = date =>{
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
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
                                <strong>Initials:</strong>
                                <div>
                                    {this.state.patientData.initials}
                                </div>
                            </Col>
                            <Col>
                                <strong>Pregnant:</strong>
                                <div>
                                    {this.state.patientData.pregnant === true
                                        ? "Yes" : "No"}
                                </div>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <strong>Village Number:</strong>
                                <div>
                                    {this.state.patientData.villageNo}
                                </div>
                            </Col>
                            <Col>
                                <strong>Age:</strong>
                                <div>
                                    {this.state.patientData.age}
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
                                <strong>Sex:</strong>
                                <div>
                                    {this.state.patientData.sexFull}
                                </div>
                            </Col>
                            <Col>
                                <strong>Zone Number:</strong>
                                <div>
                                    {this.state.patientData.zoneNo}
                                </div>
                            </Col>
                            <Col>
                                <strong>Date of Birth:</strong>
                                <div>
                                    {this.state.patientData.dob}
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Tabs class="nav nav-tabs">
                        <Tab eventKey="reading_information" title="Reading Information">
                            <div className="table-responsive text-nowrap table-wrapper-scroll-y my-custom-scrollbar rtc"
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
                                        <th scope="col">Systolic (mmHg)</th>
                                        <th scope="col">Diastolic (mmHg)</th>
                                        <th scope="col">Pulse Rate (bpm)</th>
                                        <th scope="col">Gestational Age</th>
                                        <th scope="col">Symptoms</th>
                                        <th scope="col">Diagnosis</th>
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
                                            <td> {row.diagnosis} </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            <Row>
                                <Col className={"text-right"}>
                                    <Button variant="success" size="sm" as={Link} to="addReadingDetail">New
                                        Reading</Button>&nbsp;
                                    <Button variant="primary" size="sm">View List</Button>&nbsp;
                                    <GraphDialog></GraphDialog>&nbsp;
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="medical_history" title="Medical History">
                            <div className="table-wrapper-scroll-y my-custom-scrollbar rtc"
                                 scrollbarStyle={{
                                     background: {backgroundColor: "transparent"},
                                     backgroundFocus: {backgroundColor: "#f0f0f0"},
                                     foreground: {backgroundColor: "#e2e2e2"},
                                     foregroundFocus: {backgroundColor: "#acacac"}
                                 }}>
                                <table className="table table-bordered">
                                    {/*TODO: Include date of note creation after the MedicalHistory Table has a timestamp*/}
                                    <thead>
                                        {/*<th scope="col">Date</th>*/}
                                        <th scope="col">Medical Notes</th>
                                    </thead>
                                    <tbody>
                                        {this.state.medicalHistoryData.map(row => (
                                            <tr key={row.id}>
                                                <td>
                                                    {/*{row.timestamp}<br/>*/}
                                                    {/*{row.timestampTime}*/}
                                                </td>
                                                <td> {row.medicalHistoryText} </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Control
                                            as="textarea"
                                            rows="3"
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
                        <Tab eventKey="current_medication" title="Current Medication">
                            <div className="table-wrapper-scroll-y my-custom-scrollbar rtc"
                                 scrollbarStyle={{
                                     background: {backgroundColor: "transparent"},
                                     backgroundFocus: {backgroundColor: "#f0f0f0"},
                                     foreground: {backgroundColor: "#e2e2e2"},
                                     foregroundFocus: {backgroundColor: "#acacac"}
                                 }}>
                                <table className="table table-bordered">
                                    <thead>
                                    <th scope="col">Current Drug</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">Drug</th>
                                    <th scope="col">Dosage</th>
                                    <th scope="col">Side Effects</th>
                                    <th scope="col">Medication Notes</th>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Yes</td>
                                        <td>2019-02-02</td>
                                        <td>Vicodin</td>
                                        <td>1 tablet twice a day</td>
                                        <td>Sleepiness</td>
                                        <td>Sleepiness</td>
                                    </tr>
                                    <tr>
                                        <td>Yes</td>
                                        <td>2018-12-02</td>
                                        <td>Synthroid</td>
                                        <td>1 tablet twice a day</td>
                                        <td>None</td>
                                        <td>Patient may get dizzy</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div style={{float: 'right'}}>
                                <Button variant="primary" size="sm" onClick={this.handleMedicationSubmit}>
                                    Add New Medication
                                </Button>
                            </div>
                        </Tab>
                        <Tab eventKey="drug_history" title="Drug History">
                            <div className="table-wrapper-scroll-y my-custom-scrollbar rtc"
                                 scrollbarStyle={{
                                     background: {backgroundColor: "transparent"},
                                     backgroundFocus: {backgroundColor: "#f0f0f0"},
                                     foreground: {backgroundColor: "#e2e2e2"},
                                     foregroundFocus: {backgroundColor: "#acacac"}
                                 }}>
                                <table className="table table-bordered">
                                    <thead>
                                    <th scope="col">Current Drug</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">End Date</th>
                                    <th scope="col">Drug</th>
                                    <th scope="col">Dosage</th>
                                    <th scope="col">Side Effects</th>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Yes</td>
                                        <td>2019-02-02</td>
                                        <td> - </td>
                                        <td>Vicodin</td>
                                        <td>1 tablet twice a day</td>
                                        <td>Sleepiness</td>
                                    </tr>
                                    <tr>
                                        <td>Yes</td>
                                        <td>2018-12-02</td>
                                        <td>2019-01-22</td>
                                        <td>Synthroid</td>
                                        <td>1 tablet twice a day</td>
                                        <td>None</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
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
                                            <td>  {row.required === true ?
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
                    <ErrorAlert show={this.state.isShowError} message={this.state.message}></ErrorAlert>
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
