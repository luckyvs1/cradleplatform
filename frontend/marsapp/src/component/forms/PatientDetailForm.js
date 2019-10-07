/**
 * Class: PatientDetailForm
 * Summary:
 *  Contains the contents and functionality of the Patient Detail page.
 */

import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {Link} from "react-router-dom";
import TopNavigation from "../navigation/TopNavigation";
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    Table
} from 'react-bootstrap';

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
                                        <td>2019/03/13</td>
                                        <td>
                                            <b>BP/DP:</b> 120/80 <br/>
                                            <b>Heart Rate (bpm):</b> 60
                                        </td>
                                        <td>
                                            <b>Pregnant:</b> Yes<br />
                                            <b>Gestational Age:</b> 5 Months
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
                                    <Button variant="primary" size="sm">View Graph</Button>&nbsp;
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
