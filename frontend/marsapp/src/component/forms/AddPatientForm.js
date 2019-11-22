/**
 * Class: AddPatientForm
 * Summary:
 *  Contains the contents and functionality of the AddPatient page.
 */

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";
import TopNavigation from "../navigation/TopNavigation";
import {
    Container,
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap';
import InlineError from "../messages/InlineError";

class AddPatientForm extends React.Component {
    constructor(props){
            super(props);
            this.state = {
                data:{
                   attestationNo : "",
                   firstName: "",
                   lastName: "",
                   villageNo : "",
                   zoneNo : "",
                   householdNo : "",
                   blockNo : "",
                   tankNo : "",
                   initials : "",
                   sex: "Other",
                   age: 0,
                   dob: null,
                   pregnant: false,
                   gestationalStartDate: null,
                   gestationAgeUnit: "none",
                   currentGestationalAge: 0},
                isLoading: false,
                errors: {}
            };
            this.onChange = this.onChange.bind(this);
            this.onChangeDateGest = this.onChangeDateGest.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this. isValidAttest = this.isValidAttest.bind(this);
        }
    isValidAttest = str => {
        return /^(?=.*\d)[\d ]+$/.test(str) && str.replace(/[^0-9]/g, "").length == 11;
    }
    onChange = e => this.setState({data: {...this.state.data, [e.target.name]: e.target.value} });
    onChangeDob = date =>
        this.setState({
            data: {...this.state.data, dob: date}
        });
    onChangeDateGest = date =>
        this.setState({
            data: {...this.state.data, gestationalStartDate: date}
        });

    onSubmit = (event) => {
        event.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if(Object.keys(errors).length === 0){
            this.props.submit(this.state.data);
        }
    };
    validate = (data) => {
        const errors = {};
        let emptyWarning = "Field cannot be blank";
        if(!this.isValidAttest(data.attestationNo)) errors.attestationNo = "Not a valid 11-digit number";
        if(data.age < 18) errors.age = "Minimum age must be 18";
        if(!data.villageNo) errors.villageNo = emptyWarning;
        if(!data.zoneNo) errors.zoneNo = emptyWarning;
        if(!data.initials) errors.initials = emptyWarning;
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
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            placeholder="Enter here..."
                                            value={data.firstName}
                                            onChange={this.onChange}/>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            placeholder="Enter here..."
                                            value={data.lastName}
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
                                            {errors.initials && <InlineError text={errors.initials}/>}
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
                                    <Form.Group as={Col}>
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="age"
                                            name="age"
                                            placeholder="Enter here..."
                                            value={data.age}
                                            onChange={this.onChange}/>
                                            {errors.age && <InlineError text={errors.age}/>}
                                    </Form.Group>
                                </Form.Row>
                            </Col>
                            <Col>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Pregnant?</Form.Label>
                                        <Form.Control as="select" id="pregnant" name="pregnant" onChange={this.onChange} value={data.pregnant}>
                                            <option value={"false"}>No</option>
                                            <option value={"true"}>Yes</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Gestational Start Date</Form.Label>
                                        <DatePicker
                                            value={data.gestationalStartDate}
                                            selected={data.gestationalStartDate}
                                            id="gestationalStartDate"
                                            name="gestationalStartDate"
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
                                        <Form.Control as="select" id="gestationAgeUnit" name="gestationAgeUnit" onChange={this.onChange} value={data.gestationAgeUnit}>
                                            <option value={"none"}>None</option>
                                            <option value={"weeks"}>Weeks</option>
                                            <option value={"months"}>Months</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Current Gestational Age</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="currentGestationalAge"
                                            name="currentGestationalAge"
                                            placeholder="Enter here..."
                                            value={data.currentGestationalAge}
                                            onChange={this.onChange}/>
                                            {errors.currentGestationalAge && <InlineError text={errors.currentGestationalAge}/>}
                                    </Form.Group>
                                </Form.Row>
                            </Col>
                        </Row>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Attestation #</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="attestationNo"
                                        name="attestationNo"
                                        placeholder="Enter 11-digit number only"
                                        value={data.attestationNo}
                                        onChange={this.onChange}/>
                                        {errors.attestationNo && <InlineError text={errors.attestationNo}/>}
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Village #</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="villageNo"
                                        name="villageNo"
                                        placeholder="Enter here..."
                                        value={data.villageNo}
                                        onChange={this.onChange}/>
                                        {errors.villageNo && <InlineError text={errors.villageNo}/>}
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Zone #</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="zoneNo"
                                        name="zoneNo"
                                        placeholder="Enter here..."
                                        value={data.zoneNo}
                                        onChange={this.onChange}/>
                                        {errors.zoneNo && <InlineError text={errors.zoneNo}/>}
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Household #</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="householdNo"
                                        name="householdNo"
                                        placeholder="Enter here..."
                                        value={data.householdNo}
                                        onChange={this.onChange}/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Block #</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="blockNo"
                                        name="blockNo"
                                        placeholder="Enter here..."
                                        value={data.blockNo}
                                        onChange={this.onChange}/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Tank #</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="tankNo"
                                        name="tankNo"
                                        placeholder="Enter here..."
                                        value={data.tankNo}
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
AddPatientForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default AddPatientForm;
