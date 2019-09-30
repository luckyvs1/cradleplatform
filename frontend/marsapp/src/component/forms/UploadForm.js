/**
 * Class: UploadForm
 * Summary:
 *  Contains the contents and functionality of the UploadForm page.
 *  Handles uploaded referral data
 * TODO: Also have CreateReferral; consider if we still need this page
 */

import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
} from 'semantic-ui-react'


const options = [
    {key: 'w', text: 'Weeks', value: 'weeks'},
    {key: 'm', text: 'Month', value: 'month'},
    {key: 'np', text: 'Not Pregnant', value: 'notPregnant'},
]

class UploadForm extends  React.Component {
   // funcitons
//    states
    //submit
    // validate

    render() {
        return (
            <div className="ui-toolbar">
                <Tabs className="">
                    <Tab eventKey="patientInfo" title="Patient">
                        <Form size={'massive'} >
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
                    <Tab eventKey="symptoms" title="Symptoms">
                        <Form>
                            <Form.Group grouped >
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
                    <Tab eventKey="vitals" title="Vitals">
                        <Form size={'massive'} >
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
                    <Tab eventKey="summary" title="Summary">

                    </Tab>

                </Tabs>
            </div>

        );
    }
}

export default UploadForm;