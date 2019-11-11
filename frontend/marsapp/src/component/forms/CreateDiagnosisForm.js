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
            data: {
                readingId: this.props.location.state.readingId,
                diagnosis: ""
            },
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
            // api.user.createUser(this.state.userData, config)
            //     .catch(error => {
            //         console.log("createDiagnosis error ", error.message);
            //     });
        }
    };

    validate = (state) => {
        const errors = {};
        const emptyWarning = "Field cannot be blank";

        if(!state.data.diagnosis) {
            errors.diagnosis = emptyWarning;
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