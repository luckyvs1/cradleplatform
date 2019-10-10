/**
 * Class: AllFollowUpForm
 * Summary:
 *  Contains the contents and functionality of the FollowUp page.
 */

import React from "react";
import {makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import TopNavigation from "../../navigation/TopNavigation";
import {
    Container,
    Row,
    Col,
    Table
} from 'react-bootstrap';
import api from "../../api"

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}

const rows = [
    createData('111555666', 'Alex', 'thomas', 'Once a week', 'Ongoing'),
    createData('222555444', 'Bob', 'theo', 'Once a month', 'Ongoing'),
    createData('111222333', 'fanny', 'theresha', 'Once a week', 'Ongoing'),
    createData('111222888', 'hanny', 'Brian', 'Once a week', 'Ended'),
    createData('444555666', 'janny', 'Katy', 'Once a week', 'Ended'),
];


class AllFollowUpForm extends React.Component {

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
            console.log("All follow up", res);
        })
    }


    render() {
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
                                        <th>Patient Name</th>
                                        <th>Location</th>
                                        <th>Status</th>
                                        <th>Frequency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map(row => (
                                        <tr key={row.name} component={Link} to={"/followUpDetail"}>
                                            <th scope="row">
                                                <Link to="followUpDetail">
                                                    {row.name}
                                                </Link>
                                            </th>
                                            <td>{row.calories}</td>
                                            <td>{row.fat}</td>
                                            <td>{row.protein}</td>
                                            <td>{row.carbs}</td>
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