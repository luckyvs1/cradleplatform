/**
 * Class: AddReadingForm
 * Summary:
 *  Contains the contents and functionality of the AddReading page.
 */

import React from "react";
import MenuTabularOnLeft from "../../pages/MainMenu";
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
    Grid,
} from 'semantic-ui-react'
import HeaderMenu from "../../pages/HeaderMenu";
import {Grow} from "@material-ui/core";

class AddReadingForm extends React.Component {
    // funcitons
//    states
    //submit
    // validate

    render() {
        return (
            <div className="ui-toolbar">
                <HeaderMenu></HeaderMenu>

                <Grid>

                    <Grid.Column width={3}>
                    </Grid.Column>
                    <Grid.Column width={4}>
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
                                control={TextArea}
                                label='Other Symptoms'
                                placeholder='Tell us more about you... that is breaking'
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
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Form.Group grouped title={"fsadfa"}>
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
                        </Form.Group>
                    </Grid.Column>
                    <Grid.Column width={2}>

                        <Form.Group grouped>
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
                        </Form.Group>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Form.Group grouped>
                            <Form.Field
                                control={Input}
                                label='BP'
                                placeholder='BP'
                            />
                            <Form.Field
                                control={Input}
                                label='DP'
                                placeholder='DP'
                            />
                            <Form.Field
                                control={Input}
                                label='Heart Rate'
                                placeholder='Heart Rate'
                            />
                        </Form.Group>
                    </Grid.Column>
                </Grid>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={13}>
                        </Grid.Column>
                        <Grid.Column>
                            <input type="submit" value="Submit"/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

        );
    }
}

export default AddReadingForm;