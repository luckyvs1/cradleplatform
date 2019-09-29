import React from "react";

import {
    Button,
    Icon,
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
                        <Grid.Row>
                            <Grid.Column floated='left'>
                                <Button icon labelPosition='left'>
                                    <Icon name='add circle' /> Add
                                </Button>
                            </Grid.Column>
                            <Grid.Column floated='right'>
                                <Input
                                    icon={<Icon name='search'/>}
                                    placeholder='Search user'
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <List selection verticalAlign='middle'>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
                                <List.Content>
                                    <List.Header>James Corden</List.Header>
                                    <List.Description as='a'>james.corndog@gmail.com</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                                <List.Content>
                                    <List.Header>Conan OBrien</List.Header>
                                    <List.Description as='a'>og_conan@gmail.com</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                                <List.Content>
                                    <List.Header>Jimmy Fallon</List.Header>
                                    <List.Description as='a'>sir_laugh_alot@gmail.com</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                                <List.Content>
                                    <List.Header>Jimmy Kimmel</List.Header>
                                    <List.Description as='a'>kimmy_little@gmail.com</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                                <List.Content>
                                    <List.Header>Trevor Noah</List.Header>
                                    <List.Description as='a'>noah_ark@gmail.com</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                                <List.Content>
                                    <List.Header>Stephen Colbert</List.Header>
                                    <List.Description as='a'>steve@gmail.com</List.Description>
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