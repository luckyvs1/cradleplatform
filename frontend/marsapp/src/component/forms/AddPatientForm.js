/**
 * Class: AddPatientForm
 * Summary:
 *  Contains the contents and functionality of the AddPatient page.
 */

import React from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import TopNavigation from "../navigation/TopNavigation";
import {
    Container,
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap';


class AddPatientForm extends React.Component {
    constructor(props){
            super(props);
            this.state = {
                data:{
                   attestation_no : "",
                   first_name: "",
                   last_name: "",
                   village_no : "",
                   zone_no : "",
                   household_no : "",
                   block_no : "",
                   tank_no : "",
                   initials : "",
                   sex: "Other",
                   age: 0,
                   dob: new Date(),
                   pregnant: "No",
                   gestational_start_date: new Date(),
                   gestational_age_unit: "none",
                   current_gestational_age: 0},
                isLoading: false,
                errors: {}
            };
            this.onChange = this.onChange.bind(this);
            this.onChangeDateGest = this.onChangeDateGest.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        }

    onChange = e => this.setState({data: {...this.state.data, [e.target.name]: e.target.value} });
    onChangeDob = date => {
        this.setState({
            data: {dob: date}
        }, () => console.log(this.state.data.dob));
    };
    onChangeDateGest = date => {
        this.setState({
            data: {gestational_start_date: date}
        }, () => console.log(this.state.data.gestational_start_date));
    };
    onSubmit = (event) => {
    /**
        event.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors}); //if there are errors returned, display them
        if(Object.keys(errors).length === 0){ //if not
            this.props.submit(this.state.data);
        }
        */
    };
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
                    <Form>
                        <Row>
                            <Col>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="first_name"
                                            name="first_name"
                                            placeholder="Enter here..."
                                            value={data.first_name}
                                            onChange={this.onChange}/>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="last_name"
                                            name="last_name"
                                            placeholder="Enter here..."
                                            value={data.last_name}
                                            onChange={this.onChange}/>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Initials</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="initials"
                                            name="initials"
                                            placeholder="Enter here..."
                                            value={data.initials}
                                            onChange={this.onChange}/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Sex</Form.Label>
                                        <Form.Control as="select" id="sex" name="sex" onChange={this.onChange} value={data.sex}>
                                            <option value={"F"}>Female</option>
                                            <option value={"M"}>Male</option>
                                            <option value={"Other"}>Other</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Date of Birth</Form.Label>
                                        <DatePicker
                                            value={data.dob}
                                            selected={data.dob}
                                            showYearDropdown
                                            dropdownMode="select"
                                            id="dob"
                                            name="dob"
                                            dateFormat="yyyy-MM-dd"
                                            onChange={this.onChangeDob}
                                        />
                                    </Form.Group>
                                </Form.Row>
                            </Col>
                            <Col>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Pregnant?</Form.Label>
                                        <Form.Control as="select" id="pregnant" name="pregnant" onChange={this.onChange} value={data.pregnant}>
                                            <option value={"true"}>Yes</option>
                                            <option value={"false"}>No</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Gestational Start Date</Form.Label>
                                        <DatePicker
                                            value={data.gestational_start_date}
                                            selected={data.gestational_start_date}
                                            id="gestational_start_date"
                                            name="gestational_start_date"
                                            showYearDropdown
                                            dropdownMode="select"
                                            dateFormat="yyyy-MM-dd"
                                            onChange={this.onChangeDateGest}
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Gestational Age Unit</Form.Label>
                                        <Form.Control as="select" id="gestational_age_unit" name="gestational_age_unit" onChange={this.onChange} value={data.gestational_age_unit}>
                                            <option value={"none"}>None</option>
                                            <option value={"week"}>Week</option>
                                            <option value={"month"}>Month</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Current Gestational Age</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="current_gestational_age"
                                            name="current_gestational_age"
                                            placeholder="Enter here..."
                                            value={data.current_gestational_age}
                                            onChange={this.onChange}/>
                                    </Form.Group>
                                </Form.Row>
                            </Col>
                        </Row>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Attestation #</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="attestation_no"
                                        name="attestation_no"
                                        placeholder="Enter here..."
                                        value={data.attestation_no}
                                        onChange={this.onChange}/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Village #</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="village_no"
                                        name="village_no"
                                        placeholder="Enter here..."
                                        value={data.village_no}
                                        onChange={this.onChange}/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Zone #</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="zone_no"
                                        name="zone_no"
                                        placeholder="Enter here..."
                                        value={data.zone_no}
                                        onChange={this.onChange}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Household #</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="household_no"
                                        name="household_no"
                                        placeholder="Enter here..."
                                        value={data.household_no}
                                        onChange={this.onChange}/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Block #</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="block_no"
                                        name="block_no"
                                        placeholder="Enter here..."
                                        value={data.block_no}
                                        onChange={this.onChange}/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Tank #</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="tank_no"
                                        name="tank_no"
                                        placeholder="Enter here..."
                                        value={data.tank_no}
                                        onChange={this.onChange}/>
                                </Form.Group>
                            </Form.Row>
                        <Row style={{float: 'right'}}>
                            <Button primary type="submit" >Create</Button>
                        </Row>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default AddPatientForm;
