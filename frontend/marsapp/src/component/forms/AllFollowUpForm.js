/**
 * Class: AllFollowUpForm
 * Summary:
 *  Contains the contents and functionality of the FollowUp page.
 */

import React from "react";
import {makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import TopNavigation from "../navigation/TopNavigation";
import {
    Container,
    Row,
    Col,
    Table
} from 'react-bootstrap';
import api from "../../api"

function createData(patientId, diagnosis, followUpNotes, treatment, frequency) {
    return {patientId, diagnosis, followUpNotes, treatment, frequency};
}





class AllFollowUpForm extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            data:{
                diagnosis: "",
                followUpNotes: "",
                frequency: "",
                id: null,
                patientId: "",
                required: true,
                treatment: "",
            },
        };
    }


    useStyles = makeStyles(theme => ({
        root: {
            width: '100%',
            marginTop: theme.spacing(2),

        },
        table: {
            minWidth: 650,
        },
        tableWrapper: {
            overflowX: 'auto',
        },
        uiHeader: {
            textAlign: 'center',
        }

    }));



    componentDidMount() {
        console.log("api calling")
              api.followUp.getAllFollowUps(null).then(res => {
            // fetching all follow up
                  const data = res.data[0];
                  this.setState({data})
            console.log("All follow up", this.state.data);
        })
    }


    render() {
        const { data } = this.state;
        const  rows = [
            createData(data.patientId, data.diagnosis, data.followUpNotes, data.treatment, data.frequency),
        ];

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
                                    {rows.map(row => (
                                        <tr key={row.patientId} component={Link} to={"/followUpDetail"}>
                                            <th scope="row">
                                                <Link to="followUpDetail">
                                                    {row.patientId}
                                                </Link>
                                            </th>
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

export default AllFollowUpForm;