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
} from 'semantic-ui-react'
import MenuTabularOnLeft from "../pages/MainMenu";

class ListPatientForm extends  React.Component {
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
                        <List selection verticalAlign='middle'>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
                                <List.Content>
                                    <List.Header>Test 1</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                                <List.Content>
                                    <List.Header>Test 2</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                                <List.Content>
                                    <List.Header>Test 3</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                                <List.Content>
                                    <List.Header>Test 4</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                                <List.Content>
                                    <List.Header>Test 5</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                                <List.Content>
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