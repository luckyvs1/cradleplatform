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

class ListUserForm extends  React.Component {
    // funcitons
//    states
    //submit
    // validate

    render() {
        return (
            <div className="ui-toolbar">
                <Grid>
                    <Grid.Column width={2}>
                        <MenuTabularOnLeft></MenuTabularOnLeft>
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <List selection verticalAlign='middle'>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
                                <List.Content>
                                    <List.Header>James Corden</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                                <List.Content>
                                    <List.Header>Conan OBrien</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                                <List.Content>
                                    <List.Header>Jimmy Fallon</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                                <List.Content>
                                    <List.Header>Jimmy Kimmel</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                                <List.Content>
                                    <List.Header>Trevor Noah</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                                <List.Content>
                                    <List.Header>Stephen Colbert</List.Header>
                                </List.Content>
                            </List.Item>

                        </List>

                    </Grid.Column>
                </Grid>

            </div>

        );
    }
}

export default ListUserForm;