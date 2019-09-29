import React from "react";
import MenuTabularOnLeft from "../pages/MainMenu";
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
    List,
    Image,
    Dropdown,
    Grid,
} from 'semantic-ui-react'


class CreateReferralForm extends  React.Component {
    // funcitons
//    states
    //submit
    // validate

    render() {
        const patientOptions = [
            {
                key: '0123',
                text: '0123 - AA',
                value: '0123 - AA',
            },
            {
                key: '4567',
                text: '4567 - BB',
                value: '4567 - BB',
            },
            {
                key: '7899',
                text: '7899 - CC',
                value: '7899 - CC',
            },
        ];

        const readingOptions = [
            {
                key: '0123',
                text: '0123 - 2019/05/02 00:00:00',
                value: '0123  - 2019/05/02 00:00:00',
            },
            {
                key: '4567',
                text: '4567  - 2019/04/02 12:00:00',
                value: '4567  - 2019/04/02 12:00:00',
            },
            {
                key: '7899',
                text: '7899 - 2019/01/02 15:00:00',
                value: '7899 - 2019/01/02 15:00:00',
            },
        ];

        const facilityOptions = [
            {
                key: 'facility1',
                text: 'facility1',
                value: 'facility1',
            },
            {
                key: 'facility2',
                text: 'facility2',
                value: 'facility2',
            },
            {
                key: 'facility3',
                text: 'facility3',
                value: 'facility3',
            },
        ];

        return (
            <div className="ui-toolbar">
                <Grid>
                    <Grid.Column width={2}>
                        <MenuTabularOnLeft></MenuTabularOnLeft>
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Grid.Column>
                            <Form size={'small'} >
                                <Form.Group grouped>
                                    <Form.Field>
                                        <label>Patient:</label>
                                        <Dropdown
                                            placeholder='Select Patient'
                                            fluid
                                            selection
                                            options={patientOptions}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Reading:</label>
                                        <Dropdown
                                            placeholder='Select Reading'
                                            fluid
                                            selection
                                            options={readingOptions}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Refer to:</label>
                                        <Dropdown
                                            placeholder='Select Facility'
                                            fluid
                                            selection
                                            options={facilityOptions}
                                        />
                                    </Form.Field>
                                    <Form.Field
                                        control={TextArea}
                                        label='Comments'
                                        placeholder='Additional comments and actions taken...'
                                    />
                                    <input type="submit" value="Submit"/>
                                </Form.Group>
                            </Form>

                        </Grid.Column>
                    </Grid.Column>
                </Grid>
            </div>

        );
    }
}

export default CreateReferralForm;