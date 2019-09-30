/**
 * Class: ListUserForm
 * Summary:
 *  Contains the contents and functionality of the List of Users page.
 */

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
import HeaderMenu from "../pages/HeaderMenu";

class ListUserForm extends  React.Component {
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
                            All Users
                        </h3>
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
                                <List.Content floated='right'>
                                    <Button color="red">Delete</Button>
                                    <Button color="blue">Edit</Button>
                                </List.Content>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
                                <List.Content>
                                    <List>
                                        <List.Header>James Corden</List.Header>
                                        <List.Description as='a'>corndog@gmail.com</List.Description>
                                        <List.Description>Admin</List.Description>
                                    </List>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content floated='right'>
                                    <Button color="red">Delete</Button>
                                    <Button color="blue">Edit</Button>
                                </List.Content>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                                <List.Content>
                                     <List>
                                         <List.Header>Eric Andre</List.Header>
                                         <List.Description as='a'>heyyyyy@gmail.com</List.Description>
                                         <List.Description>VHT</List.Description>
                                     </List>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content floated='right'>
                                     <Button color="red">Delete</Button>
                                     <Button color="blue">Edit</Button>
                                </List.Content>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                                <List.Content>
                                     <List>
                                          <List.Header>Jimmy Fallon</List.Header>
                                          <List.Description as='a'>sir_laugh_alot@gmail.com</List.Description>
                                          <List.Description>VHT</List.Description>
                                     </List>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content floated='right'>
                                     <Button color="red">Delete</Button>
                                     <Button color="blue">Edit</Button>
                                </List.Content>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                                <List.Content>
                                    <List>
                                        <List.Header>Conan OBrien</List.Header>
                                        <List.Description as='a'>og_conan@gmail.com</List.Description>
                                        <List.Description>HealthWorker</List.Description>
                                    </List>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content floated='right'>
                                     <Button color="red">Delete</Button>
                                     <Button color="blue">Edit</Button>
                                </List.Content>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
                                <List.Content>
                                    <List>
                                        <List.Header>Trevor Noah</List.Header>
                                        <List.Description as='a'>noah_ark@gmail.com</List.Description>
                                        <List.Description>HealthWorker</List.Description>
                                    </List>
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