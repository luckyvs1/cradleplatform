import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {Checkbox, Form, Input, Select, Grid, List, TextArea} from "semantic-ui-react";
import MenuTabularOnLeft from "../pages/MainMenu";
import {Link} from "react-router-dom";

/**
 * This class handles how the Patient Detail page will be displayed.
 * Used for UI Mockup.
 */

const options = [
    {key: 'w', text: 'Weeks', value: 'weeks'},
    {key: 'm', text: 'Month', value: 'month'},
    {key: 'np', text: 'Not Pregnant', value: 'notPregnant'},
];

const listPatientReadings = {
    verticalAlign: 'top',
    padding: '10px'
};

const statusGreen = {
    backgroundColor: "green"
};

const statusYellow = {
    backgroundColor: "yellow"
};

export default class PatientDetailForm extends React.Component {
    // funcitons
//    states
    //submit
    // validate

    render() {
        return (
            <div className="ui-toolbar">
                <Grid>
                    <Grid.Column width={2}>
                        <MenuTabularOnLeft/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <div>
                            <p><b>Patient ID:</b> 0123456</p>
                            <p><b>Initials:</b> AS</p>
                            <p><b>Sex:</b> F</p>
                            <p><b>Age:</b> 33</p>
                            <p></p>
                        </div>
                        <div>
                            <Tabs className="">
                                <Tab eventKey="reading_history" title="Reading History">
                                    <List selection>
                                        <List.Item>
                                            <table style={listPatientReadings}>
                                                <tr style={listPatientReadings}>
                                                    <td style={listPatientReadings}><span style={statusGreen}>_</span></td>
                                                    <td style={listPatientReadings}>2019/03/13</td>
                                                    <td style={listPatientReadings}>
                                                        <b>BP/DP:</b> 120/80 <br />
                                                        <b>Heart Rate (bpm):</b> 60
                                                    </td>
                                                    <td style={listPatientReadings}>
                                                        <b>Pregnant:</b> Yes<br />
                                                        <b>Gestational Age:</b> 5 Months
                                                    </td>
                                                    <td style={listPatientReadings}><b>Symptoms:</b> ...</td>

                                                </tr>
                                            </table>
                                        </List.Item>
                                        <List.Item>
                                            <table style={listPatientReadings}>
                                                <tr style={listPatientReadings}>
                                                    <td style={listPatientReadings}><span style={statusYellow}>^</span></td>
                                                    <td style={listPatientReadings}>2019/02/02</td>
                                                    <td style={listPatientReadings}>
                                                        <b>BP/DP:</b> 140/80 <br />
                                                        <b>Heart Rate (bpm):</b> 60
                                                    </td>
                                                    <td style={listPatientReadings}>
                                                        <b>Pregnant:</b> Yes<br />
                                                        <b>Gestational Age:</b> 4 Months
                                                    </td>
                                                    <td style={listPatientReadings}><b>Symptoms:</b> ...</td>
                                                </tr>
                                            </table>
                                        </List.Item>
                                        <List.Item>
                                            <table style={listPatientReadings}>
                                                <tr style={listPatientReadings}>
                                                    <td style={listPatientReadings}><span style={statusYellow}>v</span></td>
                                                    <td style={listPatientReadings}>2019/01/02</td>
                                                    <td style={listPatientReadings}>
                                                        <b>BP/DP:</b> 180/80 <br />
                                                        <b>Heart Rate (bpm):</b> 80
                                                    </td>
                                                    <td style={listPatientReadings}>
                                                        <b>Pregnant:</b> Yes<br />
                                                        <b>Gestational Age:</b> 3 Months
                                                    </td>
                                                    <td style={listPatientReadings}><b>Symptoms:</b> ...</td>

                                                </tr>
                                            </table>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content
                                                as={Link} to="/AddReadingDetail">
                                                <input type="submit" value="New Reading"/>
                                            </List.Content>
                                        </List.Item>
                                    </List>
                                </Tab>
                                <Tab eventKey="medical_history" title="Medical History">
                                </Tab>
                                <Tab eventKey="drug_history" title="Drug History">
                                </Tab>

                                <Tab eventKey="medication" title="Current Medications">
                                </Tab>

                                <Tab eventKey="follow_up" title="Follow Ups">
                                </Tab>

                            </Tabs>
                        </div>
                    </Grid.Column>
                </Grid>
            </div>

        );
    }
}
