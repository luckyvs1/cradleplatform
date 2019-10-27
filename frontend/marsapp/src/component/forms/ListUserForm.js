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
import _ from "lodash";


class ListUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: [],
            filteredData: [],
            searchValue: ''
        };

        this.searchInput = React.createRef();
    }

    componentDidMount() {
        this.setState({
            isLoading: false,
            filteredData: this.state.data,
            searchValue: ''
        });

        api.patient.getAllPatients(null).then(async res => {
            // fetching all follow up
            const data = res.data;
            let newState = [];

            for (let i = 0; i < data.length; i++) {
                let row = {
                    pid: data[i].id,
                    initial: data[i].initials
                };
                newState.push(row);
            }
            this.setState({
                data: newState,
                filteredData: newState,
            });
        });

        this.setState({
            isLoading: false,
            searchValue: ''
        });
    }

    handleSearchChange = () => {
        this.setState({
            isLoading: true,
            searchValue: this.searchInput.current.value
        });

        setTimeout(() => {
            console.log(this.state);

            if (this.state.searchValue.length < 1) {
                return this.setState({
                    isLoading: false,
                    searchValue: '',
                    filteredData: this.state.data
                });
            }

            const rows = this.state.data;
            const re = new RegExp(_.escapeRegExp(this.state.searchValue), 'i');
            const matchFirstName = (result) => re.test(result.firstName);
            const matchLastName = (result) => re.test(result.lastName);
            const matchEmail = (result) => re.test(result.email);
            const dataFirstName = _.filter(rows, matchFirstName);
            const dataLastName = _.filter(rows, matchLastName);
            const dataEmail = _.filter(rows, matchEmail);

            this.setState({
                isLoading: false,
                filteredData: _.merge(dataFirstName, dataLastName, dataEmail)
            });
        }, 300);
    };

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
                                                    <Dropdown as={ButtonGroup}>
                                                        <Button variant="warning" size="sm">Edit</Button>

                                                        <Dropdown.Toggle split variant="warning" id="dropdown-split-basic" />

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </Col>
                                            </Row>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Image src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg" rounded />
                                        </td>
                                        <td>
                                            <Link to="patientDetail">
                                                Test 2
                                            </Link>
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