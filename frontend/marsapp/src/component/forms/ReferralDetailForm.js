/**
 * Class: ReferralDetailForm
 * Summary:
 *  Contains the contents and functionality of the Referral Detail page.
 */

import React from "react";
import TopNavigation from "../navigation/TopNavigation";
import {Button, Col, Container, Form, Row, Tab, Tabs} from 'react-bootstrap';
import InlineError from "../messages/InlineError";
import api from "../../api"
import {Link, withRouter} from "react-router-dom";

class ReferralDetailForm extends React.Component {
    // functions
    // states
    // submit
    // validate
    constructor(props) {
        super(props);
        this.state = {
            referralData: {
                healthFacility: "",
                id: 0,
                notesAction: "",
                notesReason: "",
                patientId: 0,
                readingId: 0,
                referrerId: "",
                timestamp: null
            },
            patientData: {
                id: 0,
                attestationNo: 0,
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
                pregnant: null,
                gestationalStartDate: null,
                gestationAgeUnit: null,
                currentGestationalAge: 0
            },
            readingData: {
                id: 0,
                patientId: 0,
                readerId: "0",
                symptoms: [], // API returns a string listing the symptoms, but it gets parsed into an array
                otherSymptoms: "",
                pulseRate: 0,
                diastolicBloodPressure: 0,
                systolicBloodPressure: 0,
                gestationalAge: 0,
                gestationalAgeTimeUnit: "",
                needFollowUp: false,
                recheckVitalsDate: null,
                region: "",
                notes: "",
                vitalsTrafficLight: {
                    advice: "Patient is likely healthy. Continue normal care.",
                    analysis: "Patient is likely healthy",
                    briefAdvice: "Continue normal care",
                    condition: "BP < 140 systolic and < 90 diastolic and shock index < 0.9"
                },
                diagnosis: "",
                timestamp: null,
            },
            referrerName: "",
            errors: {}
        };
    }

    componentDidMount() {
        let data =  this.props.location.state;
        console.log(data);
        api.referral.getReferralById(data).then(res => {
                const referralData = res.data;
                console.log(res);
                this.setState({referralData});
        }).then(res => {
            const patientId = this.state.referralData.patientId;
            api.patient.getPatientById({id: patientId}).then(res => {
                const patientData = res.data;
                this.setState({patientData});
            });

            const readingId = this.state.referralData.readingId;
            api.reading.getReadingById({id: readingId}).then(res => {
                const readingData = res.data[0];

                const symptoms = readingData.symptoms;
                const symptomsArr = symptoms.split(','); // TODO: Double-check how symptoms are split up
                readingData.symptoms = symptomsArr;

                const timestamp = readingData.timestamp;
                readingData.timestamp = new Date(timestamp).toISOString().substr(0,10);

                this.setState({readingData});

                if (this.state.readingData.diagnosis === "") {
                    this.state.errors.requireDiagnosis = "This referral requires a diagnosis response.";
                }
            });

            const referrerId = this.state.referralData.referrerId;
            api.userInfo.getUserInfoById(referrerId).then(res => {
                const data = res.data;
                const referrerName = data.firstName + " " + data.lastName;
                this.setState({referrerName});
            });
        });
    }

    getSymptomButton(symptom) {
        let returned = false;

        this.state.readingData.symptoms.forEach(function (item) {
            if (item.valueOf() == symptom.valueOf()) {
                returned = true;
            }
        });

        if (returned) {
            return (
                <Button key={symptom} variant="outline-primary" size="sm" active> {symptom} </Button>
            );
        }
        else {
            return (
                <Button key={symptom} variant="outline-primary" size="sm" disabled> {symptom} </Button>
            );
        }
    }

    setSymptomsButtonsForReferralInfo() {
        // TODO: Make the main symptoms into enums rather than strings if possible. Check with mobile app
        const allSymptoms = ["No Symptoms", "Headache", "Bleeding", "Blurred Vision", "Feverish", "Abdominal Pain", "Unwell"];

        return (
            <div>
                <Col>
                    {allSymptoms.map(symptom => (
                        this.getSymptomButton(symptom)
                    ))}
                </Col>
            </div>
        )
    }

    checkDiagnosisExist() {
        // TODO: Fix bug where the require diagnosis does not show up, when it should, when first visiting the details page for the first time
        if (this.state.errors.requireDiagnosis) {
            return (
                <div>

                </div>
            )
        }
    }

    render() {
        const {referralData, patientData, readingData, referrerName, errors} = this.state;
        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <h1>Referral Information</h1>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Tabs id="controlled-tab-example">
                        <Tab eventKey="home" title="Patient Information">
                            <br></br>
                            <Row className="mb-4">
                                <Col className="border-right">
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Patient ID</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="patient"
                                                    name="patient"
                                                    value={referralData.patientId} />
                                                {/*error handling*/}
                                                {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Initials</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="initials"
                                                    name="initials"
                                                    value={patientData.initials} />
                                                {/*error handling*/}
                                                {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Age</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    id="age"
                                                    name="age"
                                                    value={patientData.age} />
                                                {/*error handling*/}
                                                {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Sex</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="sex"
                                                    name="sex"
                                                    value={patientData.sex} />
                                                {/*error handling*/}
                                                {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Pregnant</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="pregnant"
                                                    name="pregnant"
                                                    value={patientData.pregnant} />
                                                {/*error handling*/}
                                                {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Age</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="age"
                                                    name="age"
                                                    value={patientData.currentGestationalAge + " " + patientData.gestationAgeUnit} />
                                                {/*error handling*/}
                                                {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Zone</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="zone"
                                                    name="zone"
                                                    value={patientData.zoneNo}/>
                                                {/*error handling*/}
                                                {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Block Number</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="block_number"
                                                    name="block_number"
                                                    value={patientData.blockNo} />
                                                {/*error handling*/}
                                                {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Tank Number</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="tank_number"
                                                    name="tank_number"
                                                    value={patientData.tankNo} />
                                                {/*error handling*/}
                                                {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Village Number</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="village_number"
                                                    name="village_number"
                                                    value={patientData.villageNo} />
                                                {/*error handling*/}
                                                {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Household Number</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="household_number"
                                                    name="household_number"
                                                    value={patientData.householdNo} />
                                                {/*error handling*/}
                                                {/* <Form.Text className="text-muted">
                                                {errors.email && <InlineError text={errors.email} />}
                                            </Form.Text> */}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="profile" title="Referral Information">
                            <br></br>
                            <Row>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            id="date"
                                            name="date"
                                            value={readingData.timestamp}/>
                                        {/*error handling*/}
                                        {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Referrer</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="referrer"
                                            name="referrer"
                                            value={referrerName} />
                                        {/*error handling*/}
                                        {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Blood Pressure</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="blood_pressure"
                                            name="blood_pressure"
                                            value={ readingData.systolicBloodPressure + " / " + readingData.diastolicBloodPressure } />
                                        {/*error handling*/}
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
                                            value={readingData.pulseRate} />
                                        {/*error handling*/}
                                        {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Status</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="status"
                                            name="status"
                                            value={readingData.vitalsTrafficLight.analysis} />
                                        {/*error handling*/}
                                        {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Referred to:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="referred_to"
                                            name="referred_to"
                                            value={referralData.healthFacility} />
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
                                        <Form.Label>Symptoms</Form.Label>
                                        <Row className="mb-2">
                                            { this.setSymptomsButtonsForReferralInfo() }
                                        </Row>
                                        <Form.Control
                                            as="textarea"
                                            rows="3"
                                            placeholder="Additional Symptoms:"
                                            value={"Additional Symptoms:\n" + readingData.otherSymptoms}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Comments</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows="3"
                                            placeholder="Comments"
                                            value={readingData.notes}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="contact" title="Diagnosis Detail">
                            <br></br>
                            <Row>
                                <Col>
                                    <Form.Text className="text-muted">
                                        {errors.requireDiagnosis && <InlineError text={errors.requireDiagnosis}/>}
                                    </Form.Text>
                                </Col>
                                <Col className="text-right">
                                    {
                                        errors.requireDiagnosis &&
                                        <Button variant="primary" size="sm" as={Link} to={ {pathname: '/createDiagnosis', state: {data: this.state.readingData, referrerId: this.state.referralData.id}} }>
                                            Add Diagnosis
                                        </Button>
                                    }
                                </Col>
                            </Row>
                            {/*TODO: Want to be able to let readings be taken when giving diagnosis*/}
                            {/*<Row>*/}
                            {/*    <Col md={4}>*/}
                            {/*        <Form.Group>*/}
                            {/*            <Form.Label>Date</Form.Label>*/}
                            {/*            <Form.Control*/}
                            {/*                type="date"*/}
                            {/*                id="date"*/}
                            {/*                name="date" />*/}
                            {/*            /!*error handling*!/*/}
                            {/*            /!* <Form.Text className="text-muted">*/}
                            {/*            {errors.email && <InlineError text={errors.email} />}*/}
                            {/*        </Form.Text> *!/*/}
                            {/*        </Form.Group>*/}
                            {/*    </Col>*/}
                            {/*    <Col md={4}>*/}
                            {/*        <Form.Group>*/}
                            {/*            <Form.Label>Healthworker</Form.Label>*/}
                            {/*            <Form.Control*/}
                            {/*                type="text"*/}
                            {/*                id="healthworker"*/}
                            {/*                name="healthworker"*/}
                            {/*                value={'Mary Sue'} />*/}
                            {/*            /!*error handling*!/*/}
                            {/*            /!* <Form.Text className="text-muted">*/}
                            {/*            {errors.email && <InlineError text={errors.email} />}*/}
                            {/*        </Form.Text> *!/*/}
                            {/*        </Form.Group>*/}
                            {/*    </Col>*/}
                            {/*    <Col md={4}>*/}
                            {/*        <Form.Group>*/}
                            {/*            <Form.Label>Blood Pressure</Form.Label>*/}
                            {/*            <Form.Control*/}
                            {/*                type="text"*/}
                            {/*                id="blood_pressure"*/}
                            {/*                name="blood_pressure"*/}
                            {/*                value={'120/80'} />*/}
                            {/*            /!*error handling*!/*/}
                            {/*            /!* <Form.Text className="text-muted">*/}
                            {/*            {errors.email && <InlineError text={errors.email} />}*/}
                            {/*        </Form.Text> *!/*/}
                            {/*        </Form.Group>*/}
                            {/*    </Col>*/}
                            {/*    <Col md={4}>*/}
                            {/*        <Form.Group>*/}
                            {/*            <Form.Label>Heart Rate</Form.Label>*/}
                            {/*            <Form.Control*/}
                            {/*                type="number"*/}
                            {/*                id="heart_rate"*/}
                            {/*                name="heart_rate"*/}
                            {/*                value={'60'} />*/}
                            {/*            /!*error handling*!/*/}
                            {/*            /!* <Form.Text className="text-muted">*/}
                            {/*            {errors.email && <InlineError text={errors.email} />}*/}
                            {/*        </Form.Text> *!/*/}
                            {/*        </Form.Group>*/}
                            {/*    </Col>*/}
                            {/*    <Col md={4}>*/}
                            {/*        <Form.Group>*/}
                            {/*            <Form.Label>Status</Form.Label>*/}
                            {/*            <Form.Control*/}
                            {/*                type="text"*/}
                            {/*                id="status"*/}
                            {/*                name="status"*/}
                            {/*                value={'Likely Healthy'} />*/}
                            {/*            /!*error handling*!/*/}
                            {/*            /!* <Form.Text className="text-muted">*/}
                            {/*            {errors.email && <InlineError text={errors.email} />}*/}
                            {/*        </Form.Text> *!/*/}
                            {/*        </Form.Group>*/}
                            {/*    </Col>*/}
                            {/*</Row>*/}
                            {/*<Row>*/}
                            {/*    <Col>*/}
                            {/*        <Form.Group>*/}
                            {/*            <Form.Label>Symptoms</Form.Label>*/}
                            {/*            <Form.Control*/}
                            {/*                as="textarea"*/}
                            {/*                rows="3"*/}
                            {/*                placeholder="Additional Symptoms" />*/}
                            {/*        </Form.Group>*/}
                            {/*    </Col>*/}
                            {/*</Row>*/}
                            {/*<Row className="mb-2">*/}
                            {/*    <Col>*/}
                            {/*        <Button variant="outline-primary" size="sm">No Symptoms</Button>&nbsp;*/}
                            {/*        <Button variant="outline-primary" size="sm">Headache</Button>&nbsp;*/}
                            {/*        <Button variant="outline-primary" size="sm">Bleeding</Button>&nbsp;*/}
                            {/*        <Button variant="outline-primary" size="sm">Blurred Vision</Button>&nbsp;*/}
                            {/*        <Button variant="outline-primary" size="sm">Feverish</Button>&nbsp;*/}
                            {/*        <Button variant="outline-primary" size="sm">Adbdominal pain</Button>&nbsp;*/}
                            {/*        <Button variant="outline-primary" size="sm">Unwell</Button>&nbsp;*/}
                            {/*    </Col>*/}
                            {/*</Row>*/}
                            {/*<Row>*/}
                            {/*    <Col>*/}
                            {/*        <Form.Group>*/}
                            {/*            <Form.Label>Follow-up Care Needed</Form.Label>*/}
                            {/*            <Form.Control*/}
                            {/*                as="textarea"*/}
                            {/*                rows="3"*/}
                            {/*                placeholder="Follow-up care details" />*/}
                            {/*        </Form.Group>*/}
                            {/*    </Col>*/}
                            {/*</Row>*/}
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Diagnosis</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows="3"
                                            placeholder="Diagnosis"
                                            value={readingData.diagnosis}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </Container>
            </div>
        );
    }
}

export default withRouter(ReferralDetailForm);