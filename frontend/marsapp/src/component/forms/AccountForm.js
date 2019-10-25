/**
 * Class: AccountForm
 * Summary:
 *  Contains the contents and functionality of the Account page.
 */

import React from "react";
import TopNavigation from "../navigation/TopNavigation";
import {
    Container,
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap';
import api from "../../api"

class AccountForm extends React.Component {
    componentDidMount() {
        api.userInfo.getUserInfoById({userId:1}).then(res => {
            console.log("user info" , res);
        })
    }

    render() {

        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <h1>Account</h1>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Username" />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="last_name"
                                        name="last_name"
                                        placeholder="First Name" />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="last_name"
                                        name="last_name"
                                        placeholder="Last Name" />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email Addresss" />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone Number" />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="role"
                                        name="role"
                                        placeholder="Role" />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>At a station number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="at_station_number"
                                        name="at_station_number"
                                        placeholder="At a station number" />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="success">
                                    Create
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default AccountForm;