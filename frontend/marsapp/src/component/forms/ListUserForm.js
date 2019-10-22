/**
 * Class: ListUserForm
 * Summary:
 *  Contains the contents and functionality of the List of Users page.
 */

import React from "react";
import { Link } from "react-router-dom";
import TopNavigation from "../navigation/TopNavigation";
import {
    Container,
    Row,
    Col,
    Table,
    Image,
    Button,
    Dropdown,
    ButtonGroup
} from 'react-bootstrap';
import api from "../../api"


class ListUserForm extends React.Component {

    componentDidMount() {
        api.user.getAllUsers(null).then(res => {
            // get user information
            console.log("all user info" , res);
        })
    }
    render() {
        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row className="mb-4">
                        <Col>
                            <Row>
                                <Col>
                                    <h1>All Users</h1>
                                </Col>
                                <Col className="text-right">
                                    <Button variant="primary" size="sm" as={Link} to="account">
                                        Add User
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table hover size="sm">
                                <tbody>
                                    <tr>
                                        <td width="10">
                                            <Image src="https://react.semantic-ui.com/images/avatar/small/christian.jpg" rounded />
                                        </td>
                                        <td>
                                            <Row>
                                                <Col>
                                                    <Link to="patientDetail">
                                                        <strong>James Corden</strong> <br/>
                                                        corndog@gmail.com <br/>
                                                        Admin
                                                    </Link>                                                
                                                </Col>
                                                <Col className="text-right">
                                                        <Button variant="warning" size="sm" >Edit</Button>
                                                </Col>
                                            </Row>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Image src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg" rounded />
                                        </td>
                                        <td>
                                            <Row>
                                                <Col>
                                                    <Link to="patientDetail">
                                                        <strong>James Corden</strong> <br/>
                                                        corndog@gmail.com <br/>
                                                        Admin
                                                    </Link>
                                                </Col>
                                                <Col className="text-right">
                                                    <Button variant="warning" size="sm" >Edit</Button>
                                                </Col>
                                            </Row>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
                {/* <h3>
                    All Users
                </h3>
                <Grid.Row>
                    <Grid.Column floated='left'>
                        <Button icon labelPosition='left'>
                            <Icon name='add circle'/> Add
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
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg'/>
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
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg'/>
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
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg'/>
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
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg'/>
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
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg'/>
                        <List.Content>
                            <List>
                                <List.Header>Trevor Noah</List.Header>
                                <List.Description as='a'>noah_ark@gmail.com</List.Description>
                                <List.Description>HealthWorker</List.Description>
                            </List>
                        </List.Content>
                    </List.Item>
                </List> */}
            </div>

        );
    }
}

export default ListUserForm;