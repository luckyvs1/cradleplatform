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
               patient_id: "",
               initials: "",
               age: "",
               isPregnant: "Yes",
               gest_age: ""},
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

        if(!data.gest_age) errors.gest_age = "Can't be blank";
        if(!Validator.isInt(data.gest_age)) errors.gest_age = "Not a valid gestational age";

        if(!data.isPregnant) errors.isPregnant = "Please choose one of the options";

        if(!data.patient_id) errors.patient_id = "Can't be blank";
        if(!Validator.isInt(data.patient_id)) errors.patient_id = "Not a valid ID (ID has to be a number)";

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
                                        id="patient_id"
                                        name="patient_id"
                                        placeholder="Patient ID"
                                        value={data.patient_id}
                                        onChange={this.onChange}/>
                                    {errors.patient_id && <InlineError text={errors.patient_id} />}
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
                                    <Form.Control as="select" name="isPregnant" onChange={this.onChange} value={data.isPregnant}>
                                        <option value={"true"}>Yes</option>
                                        <option value={"false"}>No</option>
                                    </Form.Control>
                                    {errors.isPregnant && <InlineError text={errors.isPregnant} />}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Gestational Age</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="gest_age"
                                        name="gest_age"
                                        placeholder="Age"
                                        value={data.gest_age}
                                        onChange={this.onChange}/>
                                    {errors.gest_age && <InlineError text={errors.gest_age} />}
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
