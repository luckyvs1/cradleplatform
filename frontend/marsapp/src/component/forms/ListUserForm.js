/**
 * Class: ListUserForm
 * Summary:
 *  Contains the contents and functionality of the List of Users page.
 */

import React from "react";
import {Link} from "react-router-dom";
import TopNavigation from "../navigation/TopNavigation";
import {Button, Col, Container, Row, Table} from 'react-bootstrap';
import api from "../../api"
import DialogEditUser from "../utils/dialogEditUser";


class ListUserForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: "",
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                country: "",
                phoneNumber: "",
                role: "",
            }],
        };

    }


    componentDidMount() {
        api.userInfo.getAllUserInfo(null).then(res => {
            // get user information
            const data = res.data;
            this.setState({data})
        })
    }

    render() {

        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row className="mb-4">
                        <Col>
                            <h1>All Users</h1>
                        </Col>
                        <Col className="text-right">
                            <Button variant="primary" size="sm" as={Link} to="addUser">
                                Add User
                            </Button>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Table hover size="sm">
                                <tbody>
                                {this.state.data.map(row => (
                                    <tr key={row.id} class='clickable-row'
                                    >
                                        <td>
                                            <Row>
                                                <Col>
                                                    <Link>
                                                        <strong>{row.firstName}</strong> <br/>
                                                        {row.phone} <br/>
                                                        {row.role}
                                                    </Link>
                                                </Col>
                                                <Col className="text-right">
                                                    <DialogEditUser value={this.state.data}></DialogEditUser>
                                                </Col>
                                            </Row>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>

            </div>

        );
    }
}

export default ListUserForm;