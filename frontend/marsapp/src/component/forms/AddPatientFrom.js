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
class AddPatientFrom extends  React.Component {
    // funcitons
//    states
    //submit
    // validate

    render() {
        return (
            <div className="ui-toolbar">
                <Grid>
                    <Grid.Column width={3}>
                        <MenuTabularOnLeft></MenuTabularOnLeft>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <Grid.Column>
                            <Form size={'large'} >
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

                                </Form.Group>
                            </Form>

                        </Grid.Column>
                    </Grid.Column>
                </Grid>
            </div>

        );
    }
}

export default AddPatientFrom;