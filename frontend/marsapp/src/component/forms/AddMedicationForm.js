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

class AddMedicationForm extends React.Component {
    constructor(props){
            super(props);
            this.state = {
                data:{
                   drug_history_id : 0,
                   drug_name: "",
                   dosage: "",
                   start_date : "",
                   end_date : ""
                },
                dosage_edit:{
                    dose: "",
                    unit: "",
                    times_per_day: ""
                },
                errors: {}
            };
        }
    onChange = e => this.setState({data: {...this.state.data, [e.target.name]: e.target.value} });
    onChangeDose = e => this.setState({dosage_edit: {...this.state.dosage_edit, [e.target.name]: e.target.value} });
    onChangeStart = date =>
        this.setState({
            data: {...this.state.data, start_date: date}
        });
    onChangeEnd = date =>
        this.setState({
            data: {...this.state.data, end_date: date}
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
        if(!data.villageNo) errors.villageNo = emptyWarning;
        if(!data.zoneNo) errors.zoneNo = emptyWarning;
        if(!data.initials) errors.initials = emptyWarning;
        return errors;
    }
    render() {
        const { data, dosage_edit, errors } = this.state;
        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <h1>Add New Medication</h1>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group as={Col}>
                             <Form.Label>Medication Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="drug_name"
                                    name="drug_name"
                                    placeholder="Enter drug name..."
                                    value={data.drug_name}
                                    onChange={this.onChange}/>
                        </Form.Group>
                        <Form.Label>Dosage - ex: <u>2</u> <u>tablets</u> <u>3</u> times per day</Form.Label>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type="number"
                                    id="dose"
                                    name="dose"
                                    placeholder="Enter dose..."
                                    value={dosage_edit.dose}
                                    onChange={this.onChangeDose}/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type="text"
                                    id="unit"
                                    name="unit"
                                    placeholder="Enter unit..."
                                    value={dosage_edit.unit}
                                    onChange={this.onChangeDose}/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type="number"
                                    id="times_per_day"
                                    name="times_per_day"
                                    placeholder="How often?"
                                    value={dosage_edit.times_per_day}
                                    onChange={this.onChangeDose}/>
                            </Form.Group>
                            <Form.Label>times per day</Form.Label>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} style={{display:'flex', justifyContent: 'center'}}>
                                <Form.Label>Start Date  </Form.Label>
                                <DatePicker
                                    value={data.start_date}
                                    selected={data.start_date}
                                    id="start_date"
                                    name="start_date"
                                    showYearDropdown
                                    dropdownMode="select"
                                    dateFormat="yyyy-MM-dd"
                                    onChange={this.onChangeStart}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>End Date  </Form.Label>
                                <DatePicker
                                    value={data.end_date}
                                    selected={data.end_date}
                                    id="end_date"
                                    name="end_date"
                                    showYearDropdown
                                    dropdownMode="select"
                                    dateFormat="yyyy-MM-dd"
                                    onChange={this.onChangeEnd}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row style={{float: 'right'}}>
                            <Button primary type="submit" >Create</Button>
                        </Form.Row>
                    </Form>
                </Container>
            </div>
        );
    }
}
AddMedicationForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default AddMedicationForm;
