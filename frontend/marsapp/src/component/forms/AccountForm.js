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
import PropTypes from "prop-types";
import api from "../../api"
import {popUp} from "../utils/popUp"



class AccountForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {
                id: "1",
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                country: "",
                phoneNumber: "",
                role: "",
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        api.userInfo.getUserInfoById({userId: 1}).then(res => {
            // get user information
            let data  = res.data;
            this.setState({data})
            console.log("user info", this.state);
        })
    }

    handleChange(event) {
        this.setState({
            data: {...this.state.data, [event.target.name]: event.target.value}
        });
    }

    submit = event => {
        console.log("data to be sent", event)
        if (event) {
            this.props.submit(event)
        }
    };


    render() {
        console.log(this.state.data)

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
                                        placeholder="Username"
                                        onChange={this.handleChange}

                                    />
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
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={this.state.data.firstName}
                                        onChange={this.handleChange}
                                    />
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
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={this.state.data.lastName}
                                        onChange={this.handleChange}

                                    />
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
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        placeholder="Phone Number"
                                        value={this.state.data.phoneNumber}
                                        onChange={this.handleChange}

                                    />
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
                                        placeholder="Role"
                                        value={this.state.data.role}
                                        onChange={this.handleChange}

                                    />
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col className={"text-right"}>
                                <popUp></popUp>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        );

    }
}

AccountForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default AccountForm;