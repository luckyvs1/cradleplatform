import React from "react";

import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
    List,
    Grid,
    Image,
    Icon,
} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import MenuTabularOnLeft from "../pages/MainMenu";
import HeaderMenu from "../pages/HeaderMenu";

class ListPatientForm extends  React.Component {
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
                        <MenuTabularOnLeft></MenuTabularOnLeft>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <h3>
                            All Patients
                        </h3>
                        <Grid.Row>
                            <Grid.Column floated='left'>
                                <Button icon labelPosition='left'as={Link} to="/addPatient" >
                                    <Icon name='add circle' /> New Patient
                                </Button>
                            </Grid.Column>
                            <Grid.Column floated='right'>
                                <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                            </Grid.Column>
                        </Grid.Row>
                        <List selection verticalAlign='middle'>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
                                <List.Content
                                    as={Link} to="/patientDetail">
                                    <List.Header>Test 1</List.Header>
                                </List.Content>

                            </List.Item>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                                <List.Content
                                    as={Link} to="/patientDetail">
                                    <List.Header>Test 2</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                                <List.Content
                                    as={Link} to="/patientDetail">
                                    <List.Header>Test 3</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                                <List.Content
                                    as={Link} to="/patientDetail">
                                    <List.Header>Test 4</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                                <List.Content
                                    as={Link} to="/patientDetail">
                                    <List.Header>Test 5</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                                <List.Content
                                    as={Link} to="/patientDetail">
                                    <List.Header>Test 6</List.Header>
                                </List.Content>
                            </List.Item>
                        </List>

                    </Grid.Column>
                </Grid>

            </div>

        );
    }
}

export default ListPatientForm;
