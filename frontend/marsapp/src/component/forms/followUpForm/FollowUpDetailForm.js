/**
 * Class: FollowUpDetailForm
 * Summary:
 *  Contains the contents and functionality of the Follow Up Detail page.
 */

import React from "react";
import TopNavigation from "../../navigation/TopNavigation";
import {
    Row,
    Col,
    Form,
    Button,
    Container
} from 'react-bootstrap';
import api from "../../../api"
import {connect} from "react-redux";

class FollowUpDetailForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{
                diagnosis: "",
                followUpNotes: "",
                frequency: "",
                id: null,
                patientId: "",
                required: true,
                treatment: "",
            }],
        };

    }

    componentDidMount() {
        api.followUp.getFollowUpByFollowUpId({followUpId: 22}).then(res => {
            // fetching all follow up
            console.log("by patient id", res);  const data = res.data;
            this.setState({data})

        })
    }


    render() {

        const alertOptions = [
            {
                key: 'No Alert',
                text: 'No Alert',
                value: 'No Alert',
            },
            {
                key: 'Once a week',
                text: 'Once a week',
                value: 'Once a week',
            },
            {
                key: 'Once a month',
                text: 'Once a month',
                value: 'Once a month',
            }
        ];
        console.log("state data", this.state)

        return (

            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <h1>Follow up Details</h1>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Patient Id</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="patient"
                                    name="patientId"
                                    value={this.state.data.patientId}/>
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
                                <Form.Label>Follow Up Note:</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="followUpNotes"
                                    name="followUpNotes"
                                    value={this.state.data.followUpNotes}/>
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
                                <Form.Label>Diagnosis</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="diagnosis"
                                    name="diagnosis"
                                    value={this.state.data.diagnosis}/>
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
                                <Form.Label>Treatment</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="treatment"
                                    name="treatment"
                                    value={this.state.data.treatment}/>
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
                                <Form.Label>Frequency</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="frequency"
                                    name="frequency"
                                    value={this.state.data.frequency}/>
                                {/*error handling*/}
                                {/* <Form.Text className="text-muted">
                                    {errors.email && <InlineError text={errors.email} />}
                                </Form.Text> */}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    id="start_date"
                                    name="start_date"/>
                                {/*error handling*/}
                                {/* <Form.Text className="text-muted">
                                    {errors.email && <InlineError text={errors.email} />}
                                </Form.Text> */}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>End Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    id="end_date"
                                    name="end_date"/>
                                {/*error handling*/}
                                {/* <Form.Text className="text-muted">
                                    {errors.email && <InlineError text={errors.email} />}
                                </Form.Text> */}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col>
                            <Form.Group>
                                <Form.Label>Alerts</Form.Label>
                                <Form.Control as="select">
                                    {alertOptions.map(alert => (
                                        <option key={alert.value} value={alert.value}>{alert.text}</option>
                                    ))}
                                </Form.Control>
                                {/* enable his for error handling */}
                                {/* <Form.Text className="text-muted">
                                    {errors.email && <InlineError text={errors.email} />}
                                </Form.Text> */}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="warning">Edit</Button>
                            &nbsp;
                            <Button variant="success">Mark as Done</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.followUp
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // function name
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowUpDetailForm);