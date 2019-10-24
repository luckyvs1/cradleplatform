/**
 * Class: AllFollowUpForm
 * Summary:
 *  Contains the contents and functionality of the FollowUp page.
 */

import React from "react";
import {makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import TopNavigation from "../navigation/TopNavigation";
import PropTypes from "prop-types";
import {
    Container,
    Row,
    Col,
    Table
} from 'react-bootstrap';
import {connect} from "react-redux";
import api from "../../api"


class AllFollowUpForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data: [{
                diagnosis: "",
                followUpNotes: "",
                frequency: "",
                id: null,
                patientId: "",
                required: null,
                treatment: "",
            }],
        };
    }

    componentDidMount() {
        api.followUp.getAllFollowUps(null).then(res => {
            const data = res.data;
            this.setState({data})
        })
    }

    submit = event => {
        if (event) {
            this.props.updatePatientFollowUp(event);
            this.props.submit(event)
        }
    };

    render() {
        const {data} = this.state;
        return (
            <div>
                <TopNavigation authenticated={true}></TopNavigation>
                <Container>
                    <Row>
                        <Col>
                            <h1>All Follow-ups</h1>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table bordered hover size="sm">
                                <thead>
                                <tr>
                                    <th>Patient ID</th>
                                    <th>Diagnosis</th>
                                    <th>Follow Up Notes</th>
                                    <th>Treatment</th>
                                    <th>Frequency</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.data.map(row => (
                                    <tr key={row.id} class='clickable-row'
                                        onClick={() => this.submit(row.id)}>
                                        <td> {row.patientId}</td>
                                        <td>{row.diagnosis}</td>
                                        <td>{row.followUpNotes}</td>
                                        <td>{row.treatment}</td>
                                        <td>{row.frequency}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        updatePatientFollowUp: (data) => {
            dispatch({type: "patientFollowUp", data: data})
        }
    }
};
AllFollowUpForm.propTypes = {
    submit: PropTypes.func.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(AllFollowUpForm);