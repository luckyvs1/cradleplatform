/**
 * Class: LoginForm
 * Summary:
 *  Contains the contents and functionality of the Login page.
 */

import React from "react";
import PropTypes from "prop-types";
import InlineError from "../messages/InlineError";
import {Button, Col, Form, Row} from 'react-bootstrap';
import "../../App.css"

class LoginForm extends React.Component {
    //state updates as user types
    state = {
        data: {
            username: '',
            password: ''
        },
        loading: false,
        errors: {}
    };


    // recieves event and update data

    onChange = e =>
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value}
        });

    /*
    * 1 - validate
    * 2 - submit data of login and catch errors
    * */
    onSubmit = event => {
        event.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});

        if (Object.keys(errors).length === 0) {
            this.setState({loading: true});
            this.props
                .submit(this.state.data)
        }
    };


    validate = data => {
        const errors = {};
        if (!data.username) {
            errors.username = "Invalid username";
        }
        if (!data.password) {
            errors.password = "Can't be blank";
        }
        return errors;
    };

    render() {
        const {data, errors, loading} = this.state;

        return (
            <div>
                <Row className="mb-4">
                    <Col md={4}></Col>
                    <Col md={4}>
                        <h1>Login</h1>
                    </Col>
                    <Col md={4}></Col>
                </Row>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <Form onSubmit={this.onSubmit} loading={loading}>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            id="email"
                                            name="username"
                                            placeholder="test"
                                            onChange={this.onChange}
                                            value={data.username}/>
                                        <Form.Text className="text-muted">
                                            {/*error handling*/}
                                            {errors.username && <InlineError text={errors.username}/>}
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            id="password"
                                            name="password"
                                            placeholder="Make it secure"
                                            onChange={this.onChange}
                                            value={data.password}/>
                                        <Form.Text className="text-muted">
                                            {/*error handling*/}
                                            {errors.password && <InlineError text={errors.password}/>}
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col>
                                    <Button variant="primary" type="submit">
                                        Login
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <a href="/homePage">Go Home</a>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </div>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;