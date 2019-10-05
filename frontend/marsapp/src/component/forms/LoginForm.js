/**
 * Class: LoginForm
 * Summary:
 *  Contains the contents and functionality of the Login page.
 */

import React from "react";
import PropTypes from "prop-types";
import Validator from "validator";
import InlineError from "../messages/InlineError";
import {
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap';
import "../../App.css"

class LoginForm extends React.Component {
    //state updates as user types
    state = {
        data: {
            email: '',
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
                .catch(err =>
                    this.setState({errors: err.response.data.errors, loading: false})
                );
        }
    };


    validate = data => {
        const errors = {};
        if (!Validator.isEmail(data.email)) {
            errors.email = "Invalid email";
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
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            placeholder="example@example.com" 
                                            onChange={this.onChange} 
                                            value={data.email}/>
                                        <Form.Text className="text-muted">
                                            {/*error handling*/}
                                            {errors.email && <InlineError text={errors.email} />}
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
                                            {errors.password && <InlineError text={errors.password} />}
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
                                    <a href="/signup">Sign up?</a>
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