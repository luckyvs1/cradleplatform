import React from "react";
import MenuTabularOnLeft from "../../pages/MainMenu";
import {Checkbox, Form, Input, Select, Grid, List, TextArea} from "semantic-ui-react";


class ReadingForm extends  React.Component {
    // funcitons
//    states
    //submit
    // validate

    render() {
        return (
            <div className="ui-toolbar">
                JUST FOR TESTING FOMR
                <Grid>
                    <Grid.Column width={3}>
                        <MenuTabularOnLeft></MenuTabularOnLeft>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <Grid.Column>
                            <Form size={'small'} >
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
                        </Grid.Column>
                    </Grid.Column>
                </Grid>
            </div>


        );
    }
}

export default ReadingForm;