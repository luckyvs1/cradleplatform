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
                    <Grid.Column width={3}>
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
                                        <List.Item as={Link} to="/readings">
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
                                        <List.Item as={Link} to="/readings">
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
                                        <List.Item as={Link} to="/readings">
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
                                            <List.Content
                                                as={Link} to="/">
                                                <input type="submit" value="View List"/>
                                            </List.Content>
                                            <List.Content
                                                as={Link} to="/">
                                                <input type="submit" value="View Graph"/>
                                            </List.Content>
                                        </List.Item>
                                    </List>
                                </Tab>
                                <Tab eventKey="medical_history" title="Medical History">
                                    <TextArea>
                                        Medical history notes go here...
                                    </TextArea>
                                    <input type="submit" value="Edit"/>
                                </Tab>
                                <Tab eventKey="drug_history" title="Drug History">
                                    <TextArea>
                                        Drug history notes go here...
                                    </TextArea>
                                    <input type="submit" value="Edit"/>
                                    <table style={listPatientReadings}>
                                        <tr style={listPatientReadings}>
                                            <th style={listPatientReadings}>Start Date</th>
                                            <th style={listPatientReadings}>End Date</th>
                                            <th style={listPatientReadings}>Drug</th>
                                            <th style={listPatientReadings}>Dosage</th>
                                            <th style={listPatientReadings}>Side Effects</th>
                                        </tr>
                                        <tr style={listPatientReadings}>
                                            <td style={listPatientReadings}>2019/02/02</td>
                                            <td style={listPatientReadings}> -  </td>
                                            <td style={listPatientReadings}>drugname1</td>
                                            <td style={listPatientReadings}>1 tablet twice a day</td>
                                            <td style={listPatientReadings}>Sleepiness</td>
                                        </tr>
                                        <tr style={listPatientReadings}>
                                            <td style={listPatientReadings}>2018/12/02</td>
                                            <td style={listPatientReadings}>2019/01/22</td>
                                            <td style={listPatientReadings}>drugname2</td>
                                            <td style={listPatientReadings}>1 tablet twice a day</td>
                                            <td style={listPatientReadings}>None</td>
                                        </tr>
                                    </table>
                                </Tab>

                                <Tab eventKey="medication" title="Current Medications">
                                    <table style={listPatientReadings}>
                                        <tr style={listPatientReadings}>
                                            <th style={listPatientReadings}>Start Date</th>
                                            <th style={listPatientReadings}>Drug</th>
                                            <th style={listPatientReadings}>Dosage</th>
                                            <th style={listPatientReadings}>Side Effects</th>
                                        </tr>
                                        <tr style={listPatientReadings}>
                                            <td style={listPatientReadings}>2019/02/02</td>
                                            <td style={listPatientReadings}>drugname1</td>
                                            <td style={listPatientReadings}>1 tablet twice a day</td>
                                            <td style={listPatientReadings}>Sleepiness</td>
                                        </tr>
                                    </table>
                                </Tab>

                                <Tab eventKey="follow_up" title="Follow Ups">
                                    <table style={listPatientReadings}>
                                        <tr style={listPatientReadings}>
                                            <th style={listPatientReadings}>VHT</th>
                                            <th style={listPatientReadings}>Location</th>
                                            <th style={listPatientReadings}>Frequency</th>
                                            <th style={listPatientReadings}>Start Date</th>
                                            <th style={listPatientReadings}>End Date</th>
                                        </tr>
                                        <tr style={listPatientReadings}>
                                            <td style={listPatientReadings}>John Smith</td>
                                            <td style={listPatientReadings}>Village No. 1</td>
                                            <td style={listPatientReadings}>Once every 2 Weeks</td>
                                            <td style={listPatientReadings}>2019/09/18</td>
                                            <td style={listPatientReadings}>N/A</td>
                                        </tr>
                                    </table>
                                </Tab>

                            </Tabs>
                        </div>
                    </Grid.Column>
                </Grid>
            </div>

        );
    }
}
