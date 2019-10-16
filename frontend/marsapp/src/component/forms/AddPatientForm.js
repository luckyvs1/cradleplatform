/**
 * Class: AddPatientForm
 * Summary:
 *  Contains the contents and functionality of the AddPatient page.
 */

import React from "react";
import { Link } from "react-router-dom";
import TopNavigation from "../navigation/TopNavigation";
import Validator from "validator";
import PropTypes from "prop-types"
import {
    Container,
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap';
import InlineError from "../messages/InlineError";

class AddPatientForm extends React.Component {
    // functions
    constructor(props){
        super(props);
        this.state = {
            data:{
               id: "",
               initials: "",
               age: "",
               pregnant: "Yes",
               gestationAge: ""},
            isLoading: false,
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    //save whatever we already have in data and then change the data
    //when an event happens
    onChange = e => this.setState({data: {...this.state.data, [e.target.name]: e.target.value} });

    onSubmit = (event) => {
        event.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors}); //if there are errors returned, display them
        if(Object.keys(errors).length === 0){ //if not
            this.props.submit(this.state.data);
        }
    };

    validate = (data) => {
        const errors = {};
        if(!data.age) errors.age = "Can't be blank";
        if(!Validator.isInt(data.age)) errors.age = "Not a valid age";

        if(!data.gestationAge) errors.gestationAge = "Can't be blank";
        if(!Validator.isInt(data.gestationAge)) errors.gestationAge = "Not a valid gestational age";

        if(!data.pregnant) errors.pregnant = "Please choose one of the options";

        if(!data.id) errors.id = "Can't be blank";
        if(!Validator.isInt(data.id)) errors.id = "Not a valid ID (ID has to be a number)";

        if(!data.initials) errors.initials = "Can't be blank";
        if(!Validator.isAlpha(data.initials))
            errors.initials = "Not a valid initials (Initials has to contain alphabetical letters only)";
        return errors;
    }

    render() {
        const { data, errors } = this.state;
        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <h1>Add Patient</h1>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Form onSubmit={this.onSubmit}>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Patient ID</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="id"
                                        name="id"
                                        placeholder="Patient ID"
                                        value={data.id}
                                        onChange={this.onChange}/>
                                    {errors.id && <InlineError text={errors.id} />}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Initials</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="initials"
                                        name="initials"
                                        placeholder="Initials"
                                        value={data.initials}
                                        onChange={this.onChange}/>
                                    {errors.initials && <InlineError text={errors.initials} />}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="age"
                                        name="age"
                                        placeholder="Age"
                                        value={data.age}
                                        onChange={this.onChange}/>
                                    {errors.age && <InlineError text={errors.age} />}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Pregnant</Form.Label>
                                    <Form.Control as="select" name="pregnant" onChange={this.onChange} value={data.pregnant}>
                                        <option value={"true"}>Yes</option>
                                        <option value={"false"}>No</option>
                                    </Form.Control>
                                    {errors.pregnant && <InlineError text={errors.pregnant} />}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Gestational Age</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="gestationAge"
                                        name="gestationAge"
                                        placeholder="Age"
                                        value={data.gestationAge}
                                        onChange={this.onChange}/>
                                    {errors.gestationAge && <InlineError text={errors.gestationAge} />}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button primary type="submit">Create</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        );
    }
}

AddPatientForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default AddPatientForm;
