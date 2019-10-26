/**
 * Class: AddReadingForm
 * Summary:
 *  Contains the contents and functionality of the Readings page.
 */

import React from "react";
import TopNavigation from "../../navigation/TopNavigation";
import {
    Container
} from 'react-bootstrap';
import {
    Checkbox,
    Form,
    Input
} from 'semantic-ui-react';

class ReadingForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{
                patientId: "",
                initials: "",
                age: "",
                pregnant: "Yes",
                gestationalAge: "",
                bloodPressure: "",
                DP: "",
                heartRate: "",
                otherInformation: "",
            }],
        };
    }
    render() {
        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Form size={'small'}>
                        <Form.Group grouped>
                            <Form.Field
                                control={Input}
                                label='Patient ID'
                                placeholder='Patient ID'
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
                                control={Checkbox}
                                label='Pregnant'
                                placeholder='Pregnant'
                            />
                            <Form.Field
                                control={Input}
                                label='Gestational Age'
                                placeholder='Gestational Age'
                            />
                        </Form.Group>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default ReadingForm;