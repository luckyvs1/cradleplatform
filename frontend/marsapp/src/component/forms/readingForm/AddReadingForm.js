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
                        </Form>

                    </Grid.Column>
                    <Grid.Column width={4}>
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
                            </Form.Group>
                        </Form>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Form>
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
                                <input type="submit" value="Submit"/>


                            </Form.Group>
                        </Form>

                    </Grid.Column>

                </Grid>
            </div>

        );
    }
}

export default AddReadingForm;