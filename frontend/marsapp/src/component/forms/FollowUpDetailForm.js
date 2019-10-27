/**
 * Class: FollowUpDetailForm
 * Summary:
 *  Contains the contents and functionality of the Follow Up Detail page.
 */

import React from "react";
import {withRouter} from "react-router-dom";
import TopNavigation from "../navigation/TopNavigation";
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import api from "../../api"
import {connect} from "react-redux";


class FollowUpDetailForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data: {
                diagnosis: "",
                followUpNotes: "",
                frequency: "",
                id: null,
                patientId: null,
                required: null,
                treatment: "",
            },
        };

    }

    componentDidMount() {
        console.log(this.props.location.state);
        // api.followUp.getFollowUpByFollowUpId({followUpId: this.props.posts.data}).then(res => {
        api.followUp.getFollowUpByFollowUpId({followUpId: this.props.location.state.id}).then(res => {
            const data = res.data;
            this.setState({data})
        });
    }


    render() {
        // TODO link logic of the drop down
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
                                    value={this.state.data.id}/>
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
                        <Col className={"text-right"}>
                            <Button variant="warning">Edit</Button>
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
}
const mapDispatchToProps = (dispatch) => {
    return {
        // function name
    }
}

//export default connect(mapStateToProps, mapDispatchToProps)(FollowUpDetailForm);
export default withRouter(FollowUpDetailForm);