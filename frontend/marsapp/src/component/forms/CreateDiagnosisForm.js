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

class CreateDiagnosisForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.location.state.data,
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        console.log(this.state);
    }

    onChange = e => this.setState({
        data: {
            ...this.state.data,
            [e.target.name]: e.target.value
        }
    });

    onSubmit = (event) => {
        // TODO: Add a success message or toast when user is created

        const config = {
            headers: {
                "Accept" : "application/json"
            }
        };

        event.preventDefault();
        const errors = this.validate(this.state);
        this.setState({errors}); //if there are errors returned, display them

        if(Object.keys(errors).length === 0){ //if no errors
            console.log(this.state.data);
            // api.reading.updateAReading(this.state.data)
            //     .catch(error => {
            //         console.log("createDiagnosis error ", error.message);
            //     });
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
            </div>
        );
    }
}

export default withRouter(CreateDiagnosisForm);