import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {Checkbox, Form, Input, Select, Grid, TextArea} from "semantic-ui-react";
import MenuTabularOnLeft from "../pages/MainMenu";


const options = [
    {key: 'w', text: 'Weeks', value: 'weeks'},
    {key: 'm', text: 'Month', value: 'month'},
    {key: 'np', text: 'Not Pregnant', value: 'notPregnant'},
]
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
                        <Grid.Column width={4}>
                            <Form size={'large'}>
                                <Form.Group grouped>
                                    <Form.Field
                                        control={Input}
                                        label='Search For Patient'
                                        placeholder='First name'
                                    />
                                </Form.Group>
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <div>
                                <Tabs className="">
                                    <Tab eventKey="patientInfo" title="Reading History">
                                        <Form size={'large'}>
                                            <Form.Group grouped>
                                                <Form.Field
                                                    control={Input}
                                                    label='First name'
                                                    placeholder='First name'
                                                />
                                                <Form.Field
                                                    control={Input}
                                                    label='Initials'
                                                    placeholder='Initials'
                                                />
                                                <Form.Field
                                                    control={Input}
                                                    label='Age'
                                                    placeholder='Age'
                                                />
                                                <Form.Field
                                                    control={Input}
                                                    label='Gestational Age'
                                                    placeholder='Gestational Age'
                                                />
                                                <Form.Field
                                                    control={Select}
                                                    label='Weeks'
                                                    options={options}
                                                    placeholder='Weeks'
                                                />
                                            </Form.Group>
                                        </Form>

                                    </Tab>
                                    <Tab eventKey="symptoms" title="Medical History">
                                        <Form>
                                            <Form.Group grouped>
                                                <Form.Field
                                                    control={Checkbox}
                                                    label='No Symptoms (patient Healthy)'
                                                />
                                                <Form.Field
                                                    control={Checkbox}
                                                    label='Headache'
                                                />
                                                <Form.Field
                                                    control={Checkbox}
                                                    label='Blurred vision'
                                                />
                                                <Form.Field
                                                    control={Checkbox}
                                                    label='Abdominal pain'
                                                />
                                                <Form.Field
                                                    control={Checkbox}
                                                    label='Bleeding'
                                                />
                                                <Form.Field
                                                    control={Checkbox}
                                                    label='Feverish'
                                                />
                                                <Form.Field
                                                    control={Checkbox}
                                                    label='Unwell'
                                                />
                                                <Form.Field
                                                    control={TextArea}
                                                    label='Other Symptoms'
                                                    placeholder='Tell us more about you... that is breaking'
                                                />
                                            </Form.Group>
                                        </Form>
                                    </Tab>
                                    <Tab eventKey="vitals" title="Drug History">
                                        <Form size={'big'}>
                                            <Form.Group grouped>
                                                <Form.Field
                                                    control={Input}
                                                    label='Systolic'
                                                    placeholder='Systolic'
                                                />
                                                <Form.Field
                                                    control={Input}
                                                    label='Diastolic'
                                                    placeholder='Diastolic'
                                                />
                                                <Form.Field
                                                    control={Input}
                                                    label='Heart Rate'
                                                    placeholder='Heart Rate'
                                                />
                                            </Form.Group>
                                        </Form>
                                    </Tab>

                                    <Tab eventKey="summary" title="Medications">

                                    </Tab>

                                    <Tab eventKey="summary" title="Follow Ups">

                                    </Tab>

                                </Tabs>
                            </div>
                        </Grid.Column>
                </Grid>
            </div>

        );
    }
}
