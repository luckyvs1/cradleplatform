/**
 * Class: AddMedicationForm
 * Summary:
 *  Contains the contents and functionality of the AddMedicationDetail page.
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
import {withRouter} from "react-router-dom";
import api from "../../api";
import InlineError from "../messages/InlineError";

class AddMedicationForm extends React.Component {
    constructor(props){
            super(props);
            this.state = {
                data:{
                   drug_history_id : 0,
                   drug_name: "",
                   dosage: "",
                   start_date : new Date(),
                   end_date : null
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
        const errors = this.validate(this.state.data, this.state.dosage_edit);
        this.setState({errors});
        var dosageText = this.state.dosage_edit.dose + " " + this.state.dosage_edit.unit + " " + this.state.dosage_edit.times_per_day + " times per day";
        this.state.data.dosage = dosageText;
        if(Object.keys(errors).length === 0){
            //console.log(this.state.data);
            //console.log(this.state.dosage_edit);
            this.props.submit(this.state.data);
        }
    };

    validate = (data, dosage_edit, date_edit) => {
        const errors = {};
        let emptyWarning = "Field cannot be blank";
        if(!data.drug_name) errors.drug_name = emptyWarning;
        if(!dosage_edit.dose) errors.dose = emptyWarning;
        if(!dosage_edit.unit) errors.unit = emptyWarning;
        if(!dosage_edit.times_per_day) errors.times_per_day = emptyWarning;
        if(data.start_date == "") errors.start_date = emptyWarning;
        return errors;
    }
    componentDidMount(){
        //in the case of the user reloading the page, the drug_history_id will be lost and crash
        //the app since it doesn't know where to get the patient_id from. This should resolve it.
        try{
            const pid = this.props.location.medication.pid;
            console.log("Patient pid is " + pid);
            api.drug.getDrugHistoryByPatientId({patient_id: pid}).then(res => {
                console.log("Drug History ID for Patient ID " + pid + " is " + res.data[0].id);
                this.state.data.drug_history_id = res.data[0].id;
                localStorage.setItem('drug_history_id', JSON.stringify(res.data[0].id));
            });
        }
        catch(exception){
            this.state.data.drug_history_id = JSON.parse(localStorage.getItem('drug_history_id'));
            //console.log("Use local storage: " + JSON.parse(localStorage.getItem('drug_history_id')));
            //console.log("Drug history:" + this.state.data.drug_history_id);
        }

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
                        <Form.Group>
                             <Form.Label>Medication Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="drug_name"
                                    name="drug_name"
                                    placeholder="Enter drug name..."
                                    value={data.drug_name}
                                    onChange={this.onChange}/>
                                {errors.drug_name && <InlineError text={errors.drug_name}/>}
                        </Form.Group>
                        <Form.Label>Dosage - ex: <u>2</u> <u>tablets</u> <u>3</u> times per day</Form.Label>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type="number"
                                    min="1"
                                    id="dose"
                                    autofocus="autofocus"
                                    name="dose"
                                    placeholder="Enter dose (positive number only)"
                                    value={dosage_edit.dose}
                                    onChange={this.onChangeDose}/>
                                {errors.dose && <InlineError text={errors.dose}/>}
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type="text"
                                    id="unit"
                                    name="unit"
                                    placeholder="Enter unit"
                                    value={dosage_edit.unit}
                                    onChange={this.onChangeDose}/>
                                {errors.unit && <InlineError text={errors.unit}/>}
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type="number"
                                    min = "1"
                                    autofocus="autofocus"
                                    id="times_per_day"
                                    name="times_per_day"
                                    placeholder="How many times per day? (positive no. only)"
                                    value={dosage_edit.times_per_day}
                                    onChange={this.onChangeDose}/>
                                {errors.times_per_day && <InlineError text={errors.times_per_day}/>}
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} style={{display:'flex', justifyContent: 'center'}}>
                                <Form.Label>Start Date &nbsp; &nbsp;</Form.Label>
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
                                {errors.start_date && <InlineError text={errors.start_date}/>}
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>End Date &nbsp; &nbsp;</Form.Label>
                                <DatePicker
                                    value={data.end_date}
                                    selected={data.end_date}
                                    id="end_date"
                                    name="end_date"
                                    showYearDropdown
                                    dropdownMode="select"
                                    dateFormat="yyyy-MM-dd"
                                    minDate={new Date()}
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

export default withRouter(AddMedicationForm);
