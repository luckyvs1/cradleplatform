/**
 * Class: AddPatientForm
 * Summary:
 *  Contains the contents and functionality of the AddPatient page.
 */

import React from "react";
import { Link } from "react-router-dom";
import TopNavigation from "../navigation/TopNavigation";
import Validator from 'validator';
import {
    Container,
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap';

class AddPatientForm extends React.Component {
    // functions
    state = {
        data:{
           patient_id: "",
           initials: "",
           age: ""
           isPregnant: "",
           gest_age: ""},
        isLoading: false,
        errors: {}
    };
    //save whatever we already have in data and then change the data
    //when an (universal for string type/text field) event happens
    onChange = e => this.setState({data: {...this.state.data, [e.target.name: e.target.value]} });

    pregnantChange = e => this.setState({isPregnant: event.target.value});

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({errors}); //if there are returned errors, display them
    };

    validate = (data) => {
        const errors = {};
        if(!data.age) errors.age = "Can't be blank";
        if(!Validator.isInt(data.age)) errors.age = "Not a valid age";

        if(!data.gest_age) errors.gest_age = "Can't be blank";
        if(!Validator.isInt(data.gest_age)) errors.gest_age = "Not a valid gestational age";

        if(!data.isPregnant) errors.gest_age = "Please choose one of the options";

        if(!data.patient_id) errors.patient_id = "Can't be blank";
        if(!Validator.isInt(data.patient_id) errors.age = "Not a valid ID (ID has to be a number)";

        if(!data.initials) errors.initials = "Can't be blank";
        if(!Validator.isAlpha(data.initials))
            errors.initials = "Not a valid initials (Initials has to contain alphabetical letters only)";
        return errors;
    }

    render() {
        const { data } = this.state;
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
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
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
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="age"
                                        name="age"
                                        placeholder="Age"
                                        value={data.age}
                                        onChange={this.onChange}/>
                                    {/*error handling*/}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Pregnant</Form.Label>
                                    <Form.Control as="select" onChange={this.pregnantChange} value={data.isPregnant}>
                                        <option value={"true"}>Yes</option>
                                        <option value={"false"}>No</option>
                                    </Form.Control>
                                    {/* enable his for error handling */}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Gestational Age</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="age"
                                        name="age"
                                        placeholder="Age"
                                        value={data.gest_age}
                                        onChange={this.onChange}/>
                                    {/* enable his for error handling */}
                                    {/* <Form.Text className="text-muted">
                                        {errors.email && <InlineError text={errors.email} />}
                                    </Form.Text> */}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="success" type="submit">
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

export default AddPatientForm;
