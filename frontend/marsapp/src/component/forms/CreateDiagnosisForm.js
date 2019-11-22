/**
 * Class: CreateDiagnosisForm
 * Summary:
 *  Contains the contents and functionality of the CreateDiagnosis page.
 */

import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import TopNavigation from "../navigation/TopNavigation";
import {
    Container,
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap';
import InlineError from "../messages/InlineError";
import api from "../../api"
import {withRouter} from "react-router-dom";
import ErrorAlert from "../utils/ErrorAlert";
import ConfirmAlert from "../utils/ConfirmAlert";

class CreateDiagnosisForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.location.state.data,
            referralId: this.props.location.state.referralId,
            errors: {},
            isShowError: false,
            isShowConfirm: false,
            message: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = e => this.setState({
        data: {
            ...this.state.data,
            [e.target.name]: e.target.value
        }
    });

    onSubmit = (event) => {
        const config = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept' : 'application/json'
            }
        };

        event.preventDefault();
        const errors = this.validate(this.state);
        this.setState({errors}); //if there are errors returned, display them
        if(Object.keys(errors).length === 0){ //if no errors
            api.reading.uploadDiagnosis({patient_id: this.state.data.patientId, diagnosis: this.state.data.diagnosis}, config)
                .then(res => {
                    this.onShowAlert("Successfully added Diagnosis", false, true);
                    this.props.history.push({
                        pathname:  '/referralDetail',
                        state: {
                            id: this.state.referralId,
                            isShowError: this.state.isShowError,
                            isShowConfirm: this.state.isShowConfirm,
                            message: this.state.message
                        }
                    });
                })

                .catch(error => {
                    this.onShowAlert("Error: failed to add diagnosis.", true, false);
                    console.log("createDiagnosis error ", error.message);
                });
        }
    };

    validate = (state) => {
        const errors = {};

        if(!state.data.diagnosis) {
            errors.diagnosis = "Field cannot be blank";
        }

        if(!state.data.id || (state.data.id == 0)) {
            errors.noReadingId = "Cannot find target reading or referral for the diagnosis";
        }

        return errors;
    };

    onShowAlert = (message, error, confirm) => {
        this.setState({
            ...this.state,
            isShowError: error,
            isShowConfirm: confirm,
            message: message
        }, () => {
            window.setTimeout(() => {
                this.setState({
                    ...this.state,
                    isShowError: false,
                    isShowConfirm: false
                })
            }, 2000)
        });
    };

    render() {
        const { data, errors } = this.state;
        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <h1>Add Diagnosis</h1>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Form onSubmit={this.onSubmit}>
                        <Row>
                            <Col>
                                {errors.noReadingId && <InlineError text={errors.noReadingId}/>}
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Diagnosis</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows="3"
                                            id="diagnosis"
                                            name="diagnosis"
                                            placeholder="Enter diagnosis here..."
                                            value={data.diagnosis}
                                            onChange={this.onChange}/>
                                        {errors.diagnosis && <InlineError text={errors.diagnosis}/>}
                                    </Form.Group>
                                </Form.Row>
                            </Col>
                        </Row>
                        <Row style={{float: 'right'}}>
                            <Button primary type="submit" >Create</Button>
                        </Row>
                    </Form>
                </Container>
                <ErrorAlert show={this.state.isShowError} message={this.state.message} />
                <ConfirmAlert show={this.state.isShowConfirm} message={this.state.message} />
            </div>
        );
    }
}

export default withRouter(CreateDiagnosisForm);