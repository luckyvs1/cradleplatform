/**
 * Class: AddPatientFrom
 * Summary:
 *  Contains the contents and functionality of the AddPatient page.
 */

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
    Grid,
} from 'semantic-ui-react'
import HeaderMenu from "../pages/HeaderMenu";
import {PageWrapper} from "../../wrappers/crd-page";

class AddPatientFrom extends React.Component {
    // funcitons
//    states
    //submit
    // validate

    render() {
        return (
            <PageWrapper>
                <h3>
                    Add Patient
                </h3>
                <Grid.Column>
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
                    </Form.Group>
                </Grid.Column>
                <Grid.Column>
                    <Form.Group grouped>
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
                </Grid.Column>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                        </Grid.Column>
                        <Grid.Column widht={6}>
                            <input type="submit" value="Submit"/>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </PageWrapper>


        );
    }
}

export default AddPatientFrom;